import * as vscode from 'vscode';
import * as path from 'path';

export class BurpDefinitionProvider implements vscode.DefinitionProvider {
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    async provideDefinition(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): Promise<vscode.Definition | vscode.LocationLink[]> {
        
        if (!this.isBurpExtensionFile(document)) {
            return [];
        }

        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return [];
        }

        const word = document.getText(wordRange);
        const line = document.lineAt(position).text;

        // Try to find definition in workspace
        const workspaceDefinition = await this.findWorkspaceDefinition(word);
        if (workspaceDefinition) {
            return workspaceDefinition;
        }

        // Try to find Montoya API definition
        const apiDefinition = await this.findMontoyaApiDefinition(word, line);
        if (apiDefinition) {
            return apiDefinition;
        }

        return [];
    }

    private async findWorkspaceDefinition(word: string): Promise<vscode.Location[]> {
        const locations: vscode.Location[] = [];

        // Search for class definitions
        const classPattern = new RegExp(`class\\s+${word}\\s*(?:implements|extends|\\{)`, 'g');
        const interfacePattern = new RegExp(`interface\\s+${word}\\s*(?:extends|\\{)`, 'g');
        const methodPattern = new RegExp(`(?:public|private|protected)?\\s*(?:static)?\\s*\\w+\\s+${word}\\s*\\(`, 'g');

        const workspaceFiles = await vscode.workspace.findFiles('**/*.java', '**/node_modules/**');
        
        for (const file of workspaceFiles) {
            try {
                const document = await vscode.workspace.openTextDocument(file);
                const content = document.getText();

                // Check for class definitions
                let match;
                while ((match = classPattern.exec(content)) !== null) {
                    const position = document.positionAt(match.index);
                    locations.push(new vscode.Location(file, position));
                }

                // Check for interface definitions
                while ((match = interfacePattern.exec(content)) !== null) {
                    const position = document.positionAt(match.index);
                    locations.push(new vscode.Location(file, position));
                }

                // Check for method definitions
                while ((match = methodPattern.exec(content)) !== null) {
                    const position = document.positionAt(match.index);
                    locations.push(new vscode.Location(file, position));
                }
            } catch (error) {
                // Skip files that can't be read
                continue;
            }
        }

        return locations;
    }

    private async findMontoyaApiDefinition(word: string, line: string): Promise<vscode.LocationLink[]> {
        const links: vscode.LocationLink[] = [];

        // Map of API classes/interfaces to their documentation
        const apiDefinitions: { [key: string]: { description: string; methods?: string[] } } = {
            'BurpExtension': {
                description: 'Main extension interface that all extensions must implement',
                methods: ['initialize', 'enhancedCapabilities']
            },
            'MontoyaApi': {
                description: 'Main API interface providing access to Burp Suite functionality',
                methods: ['extension', 'http', 'proxy', 'scanner', 'userInterface', 'logging']
            },
            'HttpHandler': {
                description: 'Interface for handling HTTP requests and responses',
                methods: ['handleHttpRequestToBeSent', 'handleHttpResponseReceived']
            },
            'ProxyRequestHandler': {
                description: 'Interface for handling proxy requests',
                methods: ['handleRequestReceived', 'handleRequestToBeSent']
            },
            'ProxyResponseHandler': {
                description: 'Interface for handling proxy responses',
                methods: ['handleResponseReceived', 'handleResponseToBeSent']
            },
            'ScanCheck': {
                description: 'Interface for implementing custom scan checks',
                methods: ['audit']
            },
            'ContextMenuItemsProvider': {
                description: 'Interface for providing context menu items',
                methods: ['provideMenuItems']
            }
        };

        // Check if the word is a known API class/interface
        if (apiDefinitions[word]) {
            // Create a virtual location that shows documentation
            const link: vscode.LocationLink = {
                targetUri: vscode.Uri.parse(`burp-api://montoya/${word}`),
                targetRange: new vscode.Range(0, 0, 0, 0),
                targetSelectionRange: new vscode.Range(0, 0, 0, 0),
                originSelectionRange: new vscode.Range(0, 0, 0, word.length)
            };
            links.push(link);
        }

        // Check for API method calls
        const apiMethodMatch = this.extractApiMethodCall(line);
        if (apiMethodMatch && apiMethodMatch.includes(word)) {
            const link: vscode.LocationLink = {
                targetUri: vscode.Uri.parse(`burp-api://montoya/method/${word}`),
                targetRange: new vscode.Range(0, 0, 0, 0),
                targetSelectionRange: new vscode.Range(0, 0, 0, 0),
                originSelectionRange: new vscode.Range(0, 0, 0, word.length)
            };
            links.push(link);
        }

        return links;
    }

    private extractApiMethodCall(line: string): string | null {
        // Extract API method calls like api.extension().setName()
        const apiCallPattern = /api\.(\w+)\(\)(?:\.(\w+)\(\))?/;
        const match = line.match(apiCallPattern);
        
        if (match) {
            return match[0];
        }

        return null;
    }

    private isBurpExtensionFile(document: vscode.TextDocument): boolean {
        const content = document.getText();
        return content.includes('burp.api.montoya') || 
               content.includes('BurpExtension') ||
               content.includes('MontoyaApi');
    }
}