import * as vscode from 'vscode';
import { BurpApiKnowledgeBase } from './apiKnowledgeBase';

export class BurpDiagnosticProvider {
    private context: vscode.ExtensionContext;
    private apiKnowledgeBase: BurpApiKnowledgeBase;
    private diagnosticCollection: vscode.DiagnosticCollection;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.apiKnowledgeBase = BurpApiKnowledgeBase.getInstance();
        this.diagnosticCollection = vscode.languages.createDiagnosticCollection('bxeditor');
        
        // Register document change listener
        vscode.workspace.onDidChangeTextDocument(this.onDocumentChange, this, context.subscriptions);
        vscode.workspace.onDidOpenTextDocument(this.validateDocument, this, context.subscriptions);
        vscode.workspace.onDidCloseTextDocument(this.clearDiagnostics, this, context.subscriptions);
        
        // Validate all open documents
        vscode.workspace.textDocuments.forEach(this.validateDocument, this);
    }

    private onDocumentChange(event: vscode.TextDocumentChangeEvent) {
        if (this.isBurpExtensionFile(event.document)) {
            // Debounce validation
            setTimeout(() => {
                this.validateDocument(event.document);
            }, 500);
        }
    }

    private validateDocument(document: vscode.TextDocument) {
        if (!this.isBurpExtensionFile(document)) {
            return;
        }

        const diagnostics: vscode.Diagnostic[] = [];
        const content = document.getText();
        const lines = content.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const lineNumber = i;

            // Check for common Burp extension issues
            diagnostics.push(...this.checkBurpExtensionImplementation(line, lineNumber, document));
            diagnostics.push(...this.checkApiUsage(line, lineNumber, document));
            diagnostics.push(...this.checkImports(line, lineNumber, document));
            diagnostics.push(...this.checkMethodImplementation(line, lineNumber, document));
        }

        this.diagnosticCollection.set(document.uri, diagnostics);
    }

    private clearDiagnostics(document: vscode.TextDocument) {
        this.diagnosticCollection.delete(document.uri);
    }

    private checkBurpExtensionImplementation(line: string, lineNumber: number, document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];

        // Check if class implements BurpExtension but missing initialize method
        if (line.includes('implements BurpExtension')) {
            const content = document.getText();
            if (!content.includes('public void initialize(MontoyaApi')) {
                const range = new vscode.Range(lineNumber, 0, lineNumber, line.length);
                const diagnostic = new vscode.Diagnostic(
                    range,
                    'BurpExtension implementation must include initialize(MontoyaApi api) method',
                    vscode.DiagnosticSeverity.Error
                );
                diagnostic.code = 'missing-initialize-method';
                diagnostic.source = 'BXEditor';
                diagnostics.push(diagnostic);
            }
        }

        // Check for missing extension name
        if (line.includes('public void initialize(MontoyaApi')) {
            const content = document.getText();
            if (!content.includes('setName(')) {
                const range = new vscode.Range(lineNumber, 0, lineNumber, line.length);
                const diagnostic = new vscode.Diagnostic(
                    range,
                    'Consider setting extension name using api.extension().setName("Extension Name")',
                    vscode.DiagnosticSeverity.Information
                );
                diagnostic.code = 'missing-extension-name';
                diagnostic.source = 'BXEditor';
                diagnostics.push(diagnostic);
            }
        }

        return diagnostics;
    }

    private checkApiUsage(line: string, lineNumber: number, document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];

        // Check for Professional-only API usage
        const professionalOnlyMethods = ['scanner()', 'collaborator()', 'ai()'];
        for (const method of professionalOnlyMethods) {
            if (line.includes(`api.${method}`)) {
                const startIndex = line.indexOf(`api.${method}`);
                const range = new vscode.Range(
                    lineNumber, 
                    startIndex, 
                    lineNumber, 
                    startIndex + `api.${method}`.length
                );
                const diagnostic = new vscode.Diagnostic(
                    range,
                    `${method} is only available in Burp Suite Professional`,
                    vscode.DiagnosticSeverity.Warning
                );
                diagnostic.code = 'professional-only-api';
                diagnostic.source = 'BXEditor';
                diagnostics.push(diagnostic);
            }
        }

        // Check for deprecated API usage
        const deprecatedMethods: string[] = [
            // Add deprecated methods here when they exist
        ];
        for (const method of deprecatedMethods) {
            if (line.includes(method)) {
                const startIndex = line.indexOf(method);
                const range = new vscode.Range(
                    lineNumber, 
                    startIndex, 
                    lineNumber, 
                    startIndex + method.length
                );
                const diagnostic = new vscode.Diagnostic(
                    range,
                    `${method} is deprecated`,
                    vscode.DiagnosticSeverity.Warning
                );
                diagnostic.code = 'deprecated-api';
                diagnostic.source = 'BXEditor';
                diagnostics.push(diagnostic);
            }
        }

        // Check for common API misuse
        if (line.includes('api.http().sendRequest(') && !line.includes('HttpRequestResponse')) {
            const startIndex = line.indexOf('api.http().sendRequest(');
            const range = new vscode.Range(
                lineNumber, 
                startIndex, 
                lineNumber, 
                startIndex + 'api.http().sendRequest('.length
            );
            const diagnostic = new vscode.Diagnostic(
                range,
                'sendRequest() returns HttpRequestResponse - consider storing the result',
                vscode.DiagnosticSeverity.Information
            );
            diagnostic.code = 'unused-return-value';
            diagnostic.source = 'BXEditor';
            diagnostics.push(diagnostic);
        }

        return diagnostics;
    }

    private checkImports(line: string, lineNumber: number, document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];

        // Check for missing imports
        const content = document.getText();
        
        // Common missing imports
        const importChecks = [
            {
                usage: 'BurpExtension',
                import: 'import burp.api.montoya.BurpExtension;'
            },
            {
                usage: 'MontoyaApi',
                import: 'import burp.api.montoya.MontoyaApi;'
            },
            {
                usage: 'HttpHandler',
                import: 'import burp.api.montoya.http.handler.HttpHandler;'
            },
            {
                usage: 'ProxyRequestHandler',
                import: 'import burp.api.montoya.proxy.http.ProxyRequestHandler;'
            },
            {
                usage: 'ScanCheck',
                import: 'import burp.api.montoya.scanner.ScanCheck;'
            }
        ];

        for (const check of importChecks) {
            if (line.includes(check.usage) && !content.includes(check.import)) {
                const startIndex = line.indexOf(check.usage);
                if (startIndex !== -1) {
                    const range = new vscode.Range(
                        lineNumber, 
                        startIndex, 
                        lineNumber, 
                        startIndex + check.usage.length
                    );
                    const diagnostic = new vscode.Diagnostic(
                        range,
                        `Missing import: ${check.import}`,
                        vscode.DiagnosticSeverity.Error
                    );
                    diagnostic.code = 'missing-import';
                    diagnostic.source = 'BXEditor';
                    diagnostics.push(diagnostic);
                }
            }
        }

        return diagnostics;
    }

    private checkMethodImplementation(line: string, lineNumber: number, document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];

        // Check for incomplete method implementations
        if (line.includes('@Override') || line.includes('public ')) {
            const nextLineIndex = lineNumber + 1;
            const lines = document.getText().split('\n');
            
            if (nextLineIndex < lines.length) {
                const nextLine = lines[nextLineIndex];
                
                // Check for empty method bodies
                if (nextLine.trim() === '{' && 
                    nextLineIndex + 1 < lines.length && 
                    lines[nextLineIndex + 1].trim() === '}') {
                    
                    const range = new vscode.Range(lineNumber, 0, nextLineIndex + 1, lines[nextLineIndex + 1].length);
                    const diagnostic = new vscode.Diagnostic(
                        range,
                        'Method implementation is empty - consider adding implementation or TODO comment',
                        vscode.DiagnosticSeverity.Information
                    );
                    diagnostic.code = 'empty-method-body';
                    diagnostic.source = 'BXEditor';
                    diagnostics.push(diagnostic);
                }
            }
        }

        // Check for missing return statements
        if (line.includes('public ') && !line.includes('void ') && line.includes('{')) {
            const content = document.getText();
            const methodMatch = line.match(/public\s+(\w+)\s+(\w+)\s*\(/);
            if (methodMatch && methodMatch[1] !== 'void') {
                const returnType = methodMatch[1];
                const methodName = methodMatch[2];
                
                // Simple check for return statement (not perfect but helpful)
                const methodEndIndex = this.findMethodEnd(content, lineNumber);
                const methodBody = content.split('\n').slice(lineNumber, methodEndIndex + 1).join('\n');
                
                if (!methodBody.includes('return ') && returnType !== 'void') {
                    const range = new vscode.Range(lineNumber, 0, lineNumber, line.length);
                    const diagnostic = new vscode.Diagnostic(
                        range,
                        `Method ${methodName} should return ${returnType}`,
                        vscode.DiagnosticSeverity.Warning
                    );
                    diagnostic.code = 'missing-return-statement';
                    diagnostic.source = 'BXEditor';
                    diagnostics.push(diagnostic);
                }
            }
        }

        return diagnostics;
    }

    private findMethodEnd(content: string, startLine: number): number {
        const lines = content.split('\n');
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

    public dispose() {
        this.diagnosticCollection.dispose();
    }
}