import * as vscode from 'vscode';
import { BurpApiKnowledgeBase } from './apiKnowledgeBase';

export class BurpDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    private context: vscode.ExtensionContext;
    private apiKnowledgeBase: BurpApiKnowledgeBase;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.apiKnowledgeBase = BurpApiKnowledgeBase.getInstance();
    }

    provideDocumentSymbols(
        document: vscode.TextDocument,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.DocumentSymbol[]> {
        
        if (!this.isBurpExtensionFile(document)) {
            return [];
        }

        const symbols: vscode.DocumentSymbol[] = [];
        const content = document.getText();
        const lines = content.split('\n');

        let currentClass: vscode.DocumentSymbol | null = null;
        let braceStack: number[] = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();

            // Skip empty lines and comments
            if (!trimmedLine || trimmedLine.startsWith('//') || trimmedLine.startsWith('/*')) {
                continue;
            }

            // Class declarations
            const classMatch = line.match(/(?:public\s+)?(?:abstract\s+)?class\s+(\w+)(?:\s+extends\s+\w+)?(?:\s+implements\s+[\w\s,]+)?/);
            if (classMatch) {
                const className = classMatch[1];
                const range = new vscode.Range(i, 0, i, line.length);
                const selectionRange = new vscode.Range(i, line.indexOf(className), i, line.indexOf(className) + className.length);
                
                currentClass = new vscode.DocumentSymbol(
                    className,
                    this.getClassDetail(line),
                    vscode.SymbolKind.Class,
                    range,
                    selectionRange
                );
                
                symbols.push(currentClass);
                continue;
            }

            // Interface declarations
            const interfaceMatch = line.match(/(?:public\s+)?interface\s+(\w+)/);
            if (interfaceMatch) {
                const interfaceName = interfaceMatch[1];
                const range = new vscode.Range(i, 0, i, line.length);
                const selectionRange = new vscode.Range(i, line.indexOf(interfaceName), i, line.indexOf(interfaceName) + interfaceName.length);
                
                const interfaceSymbol = new vscode.DocumentSymbol(
                    interfaceName,
                    'interface',
                    vscode.SymbolKind.Interface,
                    range,
                    selectionRange
                );
                
                symbols.push(interfaceSymbol);
                continue;
            }

            // Method declarations
            const methodMatch = line.match(/(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(\w+(?:<[^>]+>)?)\s+(\w+)\s*\([^)]*\)/);
            if (methodMatch && !line.includes('class ') && !line.includes('interface ')) {
                const returnType = methodMatch[1];
                const methodName = methodMatch[2];
                
                // Skip if it's a constructor (return type matches class name)
                if (currentClass && returnType === currentClass.name) {
                    continue;
                }

                const range = new vscode.Range(i, 0, this.findMethodEnd(lines, i), 0);
                const selectionRange = new vscode.Range(i, line.indexOf(methodName), i, line.indexOf(methodName) + methodName.length);
                
                const methodSymbol = new vscode.DocumentSymbol(
                    methodName,
                    this.getMethodDetail(line, returnType),
                    this.getMethodSymbolKind(line, methodName),
                    range,
                    selectionRange
                );

                if (currentClass) {
                    currentClass.children.push(methodSymbol);
                } else {
                    symbols.push(methodSymbol);
                }
                continue;
            }

            // Constructor declarations
            const constructorMatch = line.match(/(?:public|private|protected)?\s*(\w+)\s*\([^)]*\)/);
            if (constructorMatch && currentClass && constructorMatch[1] === currentClass.name) {
                const constructorName = constructorMatch[1];
                const range = new vscode.Range(i, 0, this.findMethodEnd(lines, i), 0);
                const selectionRange = new vscode.Range(i, line.indexOf(constructorName), i, line.indexOf(constructorName) + constructorName.length);
                
                const constructorSymbol = new vscode.DocumentSymbol(
                    constructorName,
                    'constructor',
                    vscode.SymbolKind.Constructor,
                    range,
                    selectionRange
                );

                currentClass.children.push(constructorSymbol);
                continue;
            }

            // Field declarations
            const fieldMatch = line.match(/(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(\w+(?:<[^>]+>)?)\s+(\w+)(?:\s*=.*)?;/);
            if (fieldMatch && !line.includes('(')) {
                const fieldType = fieldMatch[1];
                const fieldName = fieldMatch[2];
                
                const range = new vscode.Range(i, 0, i, line.length);
                const selectionRange = new vscode.Range(i, line.indexOf(fieldName), i, line.indexOf(fieldName) + fieldName.length);
                
                const fieldSymbol = new vscode.DocumentSymbol(
                    fieldName,
                    fieldType,
                    this.getFieldSymbolKind(line),
                    range,
                    selectionRange
                );

                if (currentClass) {
                    currentClass.children.push(fieldSymbol);
                } else {
                    symbols.push(fieldSymbol);
                }
                continue;
            }

            // Enum declarations
            const enumMatch = line.match(/(?:public\s+)?enum\s+(\w+)/);
            if (enumMatch) {
                const enumName = enumMatch[1];
                const range = new vscode.Range(i, 0, i, line.length);
                const selectionRange = new vscode.Range(i, line.indexOf(enumName), i, line.indexOf(enumName) + enumName.length);
                
                const enumSymbol = new vscode.DocumentSymbol(
                    enumName,
                    'enum',
                    vscode.SymbolKind.Enum,
                    range,
                    selectionRange
                );
                
                symbols.push(enumSymbol);
                continue;
            }
        }

        return symbols;
    }

    private getClassDetail(line: string): string {
        const details: string[] = [];
        
        if (line.includes('implements BurpExtension')) {
            details.push('BurpExtension');
        }
        if (line.includes('implements HttpHandler')) {
            details.push('HttpHandler');
        }
        if (line.includes('implements ScanCheck')) {
            details.push('ScanCheck');
        }
        if (line.includes('implements ProxyRequestHandler')) {
            details.push('ProxyRequestHandler');
        }
        if (line.includes('implements ProxyResponseHandler')) {
            details.push('ProxyResponseHandler');
        }
        
        return details.length > 0 ? details.join(', ') : 'class';
    }

    private getMethodDetail(line: string, returnType: string): string {
        const details: string[] = [];
        
        if (line.includes('@Override')) {
            details.push('override');
        }
        if (line.includes('public')) {
            details.push('public');
        } else if (line.includes('private')) {
            details.push('private');
        } else if (line.includes('protected')) {
            details.push('protected');
        }
        if (line.includes('static')) {
            details.push('static');
        }
        
        details.push(returnType);
        
        return details.join(' ');
    }

    private getMethodSymbolKind(line: string, methodName: string): vscode.SymbolKind {
        // Check for Burp API method implementations
        const burpMethods = [
            'initialize', 'handleHttpRequestToBeSent', 'handleHttpResponseReceived',
            'audit', 'consolidateIssues', 'handleProxyRequest', 'handleProxyResponse'
        ];
        
        if (burpMethods.includes(methodName)) {
            return vscode.SymbolKind.Event;
        }
        
        if (line.includes('public')) {
            return vscode.SymbolKind.Method;
        } else if (line.includes('private')) {
            return vscode.SymbolKind.Function;
        }
        
        return vscode.SymbolKind.Method;
    }

    private getFieldSymbolKind(line: string): vscode.SymbolKind {
        if (line.includes('static final') || line.includes('final static')) {
            return vscode.SymbolKind.Constant;
        }
        if (line.includes('static')) {
            return vscode.SymbolKind.Variable;
        }
        return vscode.SymbolKind.Field;
    }

    private findMethodEnd(lines: string[], startLine: number): number {
        let braceCount = 0;
        let foundOpenBrace = false;

        for (let i = startLine; i < lines.length; i++) {
            const line = lines[i];
            for (const char of line) {
                if (char === '{') {
                    braceCount++;
                    foundOpenBrace = true;
                } else if (char === '}') {
                    braceCount--;
                    if (foundOpenBrace && braceCount === 0) {
                        return i;
                    }
                }
            }
        }

        return lines.length - 1;
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

export class BurpWorkspaceSymbolProvider implements vscode.WorkspaceSymbolProvider {
    private context: vscode.ExtensionContext;
    private apiKnowledgeBase: BurpApiKnowledgeBase;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.apiKnowledgeBase = BurpApiKnowledgeBase.getInstance();
    }

    async provideWorkspaceSymbols(
        query: string,
        token: vscode.CancellationToken
    ): Promise<vscode.SymbolInformation[]> {
        
        const symbols: vscode.SymbolInformation[] = [];
        
        // Search in API knowledge base
        if (query.length > 2) {
            const apiClasses = this.apiKnowledgeBase.getAllApiClasses();
            for (const apiClass of apiClasses) {
                if (apiClass.name.toLowerCase().includes(query.toLowerCase())) {
                    const symbol = new vscode.SymbolInformation(
                        apiClass.name,
                        vscode.SymbolKind.Class,
                        apiClass.description,
                        new vscode.Location(
                            vscode.Uri.parse('burp-api://montoya/' + apiClass.name),
                            new vscode.Position(0, 0)
                        )
                    );
                    symbols.push(symbol);
                }
                
                // Search methods
                for (const method of apiClass.methods) {
                    if (method.name.toLowerCase().includes(query.toLowerCase())) {
                        const symbol = new vscode.SymbolInformation(
                            method.name,
                            vscode.SymbolKind.Method,
                            `${apiClass.name}.${method.name}`,
                            new vscode.Location(
                                vscode.Uri.parse('burp-api://montoya/' + apiClass.name + '#' + method.name),
                                new vscode.Position(0, 0)
                            )
                        );
                        symbols.push(symbol);
                    }
                }
            }
        }
        
        // Search in workspace files
        const workspaceSymbols = await this.searchWorkspaceFiles(query);
        symbols.push(...workspaceSymbols);
        
        return symbols;
    }

    private async searchWorkspaceFiles(query: string): Promise<vscode.SymbolInformation[]> {
        const symbols: vscode.SymbolInformation[] = [];
        
        if (!vscode.workspace.workspaceFolders) {
            return symbols;
        }

        for (const folder of vscode.workspace.workspaceFolders) {
            const javaFiles = await vscode.workspace.findFiles(
                new vscode.RelativePattern(folder, '**/*.java'),
                '**/build/**'
            );

            for (const file of javaFiles) {
                try {
                    const document = await vscode.workspace.openTextDocument(file);
                    const documentSymbols = await this.getDocumentSymbols(document, query);
                    symbols.push(...documentSymbols);
                } catch (error) {
                    // Ignore files that can't be opened
                }
            }
        }

        return symbols;
    }

    private async getDocumentSymbols(document: vscode.TextDocument, query: string): Promise<vscode.SymbolInformation[]> {
        const symbols: vscode.SymbolInformation[] = [];
        const content = document.getText();
        const lines = content.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Class symbols
            const classMatch = line.match(/(?:public\s+)?(?:abstract\s+)?class\s+(\w+)/);
            if (classMatch && classMatch[1].toLowerCase().includes(query.toLowerCase())) {
                const className = classMatch[1];
                const symbol = new vscode.SymbolInformation(
                    className,
                    vscode.SymbolKind.Class,
                    '',
                    new vscode.Location(document.uri, new vscode.Position(i, line.indexOf(className)))
                );
                symbols.push(symbol);
            }

            // Method symbols
            const methodMatch = line.match(/(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(\w+)\s+(\w+)\s*\([^)]*\)/);
            if (methodMatch && methodMatch[2].toLowerCase().includes(query.toLowerCase())) {
                const methodName = methodMatch[2];
                const symbol = new vscode.SymbolInformation(
                    methodName,
                    vscode.SymbolKind.Method,
                    methodMatch[1],
                    new vscode.Location(document.uri, new vscode.Position(i, line.indexOf(methodName)))
                );
                symbols.push(symbol);
            }
        }

        return symbols;
    }
}