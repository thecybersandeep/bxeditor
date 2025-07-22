import * as vscode from 'vscode';
import { BurpApiKnowledgeBase } from './apiKnowledgeBase';

export class BurpReferenceProvider implements vscode.ReferenceProvider {
    private context: vscode.ExtensionContext;
    private apiKnowledgeBase: BurpApiKnowledgeBase;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.apiKnowledgeBase = BurpApiKnowledgeBase.getInstance();
    }

    async provideReferences(
        document: vscode.TextDocument,
        position: vscode.Position,
        context: vscode.ReferenceContext,
        token: vscode.CancellationToken
    ): Promise<vscode.Location[]> {
        
        if (!this.isBurpExtensionFile(document)) {
            return [];
        }

        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return [];
        }

        const word = document.getText(wordRange);
        const references: vscode.Location[] = [];

        // Include the declaration if requested
        if (context.includeDeclaration) {
            references.push(new vscode.Location(document.uri, wordRange));
        }

        // Search for references in the current document
        const currentDocReferences = this.findReferencesInDocument(document, word);
        references.push(...currentDocReferences);

        // Search for references in workspace
        const workspaceReferences = await this.findReferencesInWorkspace(word, document.uri);
        references.push(...workspaceReferences);

        return references;
    }

    private findReferencesInDocument(document: vscode.TextDocument, word: string): vscode.Location[] {
        const references: vscode.Location[] = [];
        const content = document.getText();
        const lines = content.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            let index = 0;

            while ((index = line.indexOf(word, index)) !== -1) {
                // Check if it's a whole word match
                const beforeChar = index > 0 ? line[index - 1] : ' ';
                const afterChar = index + word.length < line.length ? line[index + word.length] : ' ';
                
                if (this.isWordBoundary(beforeChar) && this.isWordBoundary(afterChar)) {
                    const range = new vscode.Range(i, index, i, index + word.length);
                    references.push(new vscode.Location(document.uri, range));
                }
                
                index += word.length;
            }
        }

        return references;
    }

    private async findReferencesInWorkspace(word: string, excludeUri: vscode.Uri): Promise<vscode.Location[]> {
        const references: vscode.Location[] = [];

        if (!vscode.workspace.workspaceFolders) {
            return references;
        }

        for (const folder of vscode.workspace.workspaceFolders) {
            const javaFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(folder, '**/*.java'),
                '**/build/**'
            );

            for (const file of javaFiles) {
                if (file.toString() === excludeUri.toString()) {
                    continue; // Skip the current file
                }

                try {
                    const document = await vscode.workspace.openTextDocument(file);
                    if (this.isBurpExtensionFile(document)) {
                        const fileReferences = this.findReferencesInDocument(document, word);
                        references.push(...fileReferences);
                    }
                } catch (error) {
                    // Ignore files that can't be opened
                }
            }
        }

        return references;
    }

    private isWordBoundary(char: string): boolean {
        return /\W/.test(char);
    }

    private isBurpExtensionFile(document: vscode.TextDocument): boolean {
        if (document.languageId !== 'java') {
            return false;
        }

        const content = document.getText();
        return content.includes('burp.api.montoya') || 
               content.includes('BurpExtension') ||
               content.includes('MontoyaApi');
    }
}

export class BurpImplementationProvider implements vscode.ImplementationProvider {
    private context: vscode.ExtensionContext;
    private apiKnowledgeBase: BurpApiKnowledgeBase;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.apiKnowledgeBase = BurpApiKnowledgeBase.getInstance();
    }

    async provideImplementation(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): Promise<vscode.Definition> {
        
        if (!this.isBurpExtensionFile(document)) {
            return [];
        }

        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return [];
        }

        const word = document.getText(wordRange);
        const line = document.lineAt(position).text;
        
        // Check if it's a Burp API interface
        const apiClass = this.apiKnowledgeBase.getApiClass(word);
        if (apiClass && apiClass.interfaces) {
            return this.findImplementationsInWorkspace(word);
        }

        // Check if it's an interface method
        const interfaceMethods = ['initialize', 'handleHttpRequestToBeSent', 'handleHttpResponseReceived', 'audit'];
        if (interfaceMethods.includes(word)) {
            return this.findMethodImplementationsInWorkspace(word);
        }

        return [];
    }

    private async findImplementationsInWorkspace(interfaceName: string): Promise<vscode.Location[]> {
        const implementations: vscode.Location[] = [];

        if (!vscode.workspace.workspaceFolders) {
            return implementations;
        }

        for (const folder of vscode.workspace.workspaceFolders) {
            const javaFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(folder, '**/*.java'),
                '**/build/**'
            );

            for (const file of javaFiles) {
                try {
                    const document = await vscode.workspace.openTextDocument(file);
                    const content = document.getText();
                    const lines = content.split('\n');

                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i];
                        if (line.includes(`implements ${interfaceName}`) || 
                            line.includes(`implements`) && line.includes(interfaceName)) {
                            
                            const classMatch = line.match(/class\s+(\w+)/);
                            if (classMatch) {
                                const className = classMatch[1];
                                const range = new vscode.Range(i, line.indexOf(className), i, line.indexOf(className) + className.length);
                                implementations.push(new vscode.Location(file, range));
                            }
                        }
                    }
                } catch (error) {
                    // Ignore files that can't be opened
                }
            }
        }

        return implementations;
    }

    private async findMethodImplementationsInWorkspace(methodName: string): Promise<vscode.Location[]> {
        const implementations: vscode.Location[] = [];

        if (!vscode.workspace.workspaceFolders) {
            return implementations;
        }

        for (const folder of vscode.workspace.workspaceFolders) {
            const javaFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(folder, '**/*.java'),
                '**/build/**'
            );

            for (const file of javaFiles) {
                try {
                    const document = await vscode.workspace.openTextDocument(file);
                    const content = document.getText();
                    const lines = content.split('\n');

                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i];
                        
                        // Look for method implementations with @Override
                        if (line.includes('@Override') && i + 1 < lines.length) {
                            const nextLine = lines[i + 1];
                            const methodMatch = nextLine.match(new RegExp(`\\b${methodName}\\s*\\(`));
                            if (methodMatch) {
                                const range = new vscode.Range(i + 1, nextLine.indexOf(methodName), i + 1, nextLine.indexOf(methodName) + methodName.length);
                                implementations.push(new vscode.Location(file, range));
                            }
                        }
                        
                        // Also look for direct method implementations
                        const directMethodMatch = line.match(new RegExp(`public\\s+\\w+\\s+${methodName}\\s*\\(`));
                        if (directMethodMatch) {
                            const range = new vscode.Range(i, line.indexOf(methodName), i, line.indexOf(methodName) + methodName.length);
                            implementations.push(new vscode.Location(file, range));
                        }
                    }
                } catch (error) {
                    // Ignore files that can't be opened
                }
            }
        }

        return implementations;
    }

    private isBurpExtensionFile(document: vscode.TextDocument): boolean {
        if (document.languageId !== 'java') {
            return false;
        }

        const content = document.getText();
        return content.includes('burp.api.montoya') || 
               content.includes('BurpExtension') ||
               content.includes('MontoyaApi');
    }
}