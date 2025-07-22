import * as vscode from 'vscode';
import { BurpApiKnowledgeBase, ApiMethod } from './apiKnowledgeBase';

export class BurpSignatureHelpProvider implements vscode.SignatureHelpProvider {
    private context: vscode.ExtensionContext;
    private apiKnowledgeBase: BurpApiKnowledgeBase;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.apiKnowledgeBase = BurpApiKnowledgeBase.getInstance();
    }

    provideSignatureHelp(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.SignatureHelpContext
    ): vscode.ProviderResult<vscode.SignatureHelp> {
        
        if (!this.isBurpExtensionFile(document)) {
            return null;
        }

        const line = document.lineAt(position).text;
        const linePrefix = line.substring(0, position.character);
        
        // Find the method call context
        const methodCall = this.extractMethodCall(linePrefix);
        if (!methodCall) {
            return null;
        }

        // Search for the method in API knowledge base
        const methods = this.findApiMethods(methodCall.methodName, methodCall.className);
        if (methods.length === 0) {
            return null;
        }

        const signatureHelp = new vscode.SignatureHelp();
        signatureHelp.signatures = methods.map(method => this.createSignatureInformation(method));
        
        // Determine active parameter
        const activeParameter = this.getActiveParameter(linePrefix, methodCall.openParenIndex);
        signatureHelp.activeParameter = activeParameter;
        signatureHelp.activeSignature = 0;

        return signatureHelp;
    }

    private extractMethodCall(linePrefix: string): { methodName: string; className?: string; openParenIndex: number } | null {
        // Look for method call pattern: methodName( or className.methodName(
        const methodCallMatch = linePrefix.match(/(?:(\w+)\.)?(\w+)\s*\(([^)]*)$/);
        if (!methodCallMatch) {
            return null;
        }

        const className = methodCallMatch[1];
        const methodName = methodCallMatch[2];
        const openParenIndex = linePrefix.lastIndexOf('(');

        return {
            methodName,
            className,
            openParenIndex
        };
    }

    private findApiMethods(methodName: string, className?: string): ApiMethod[] {
        const methods: ApiMethod[] = [];

        // Search in specific class if provided
        if (className) {
            const apiClass = this.apiKnowledgeBase.getApiClass(className);
            if (apiClass) {
                const classMethods = apiClass.methods.filter(m => m.name === methodName);
                methods.push(...classMethods);
            }
        }

        // Search in all classes if no specific class or no methods found
        if (methods.length === 0) {
            const allClasses = this.apiKnowledgeBase.getAllApiClasses();
            for (const apiClass of allClasses) {
                const classMethods = apiClass.methods.filter(m => m.name === methodName);
                methods.push(...classMethods);
            }
        }

        // Also search for common method patterns
        if (methods.length === 0) {
            methods.push(...this.getCommonMethodSignatures(methodName));
        }

        return methods;
    }

    private getCommonMethodSignatures(methodName: string): ApiMethod[] {
        const commonMethods: { [key: string]: ApiMethod } = {
            'setName': {
                name: 'setName',
                returnType: 'void',
                parameters: [
                    { name: 'name', type: 'String', description: 'The name of the extension' }
                ],
                description: 'Set the name of the extension'
            },
            'logToOutput': {
                name: 'logToOutput',
                returnType: 'void',
                parameters: [
                    { name: 'message', type: 'String', description: 'The message to log to output' }
                ],
                description: 'Log a message to the output stream'
            },
            'logToError': {
                name: 'logToError',
                returnType: 'void',
                parameters: [
                    { name: 'message', type: 'String', description: 'The message to log to error stream' },
                    { name: 'throwable', type: 'Throwable', description: 'The exception to log', optional: true }
                ],
                description: 'Log a message to the error stream'
            },
            'sendRequest': {
                name: 'sendRequest',
                returnType: 'HttpRequestResponse',
                parameters: [
                    { name: 'request', type: 'HttpRequest', description: 'The HTTP request to send' },
                    { name: 'options', type: 'RequestOptions', description: 'Options for the request', optional: true }
                ],
                description: 'Send an HTTP request'
            },
            'createRequest': {
                name: 'createRequest',
                returnType: 'HttpRequest',
                parameters: [
                    { name: 'url', type: 'String', description: 'The URL for the request' }
                ],
                description: 'Create an HTTP request'
            },
            'registerHttpHandler': {
                name: 'registerHttpHandler',
                returnType: 'Registration',
                parameters: [
                    { name: 'handler', type: 'HttpHandler', description: 'The HTTP handler to register' }
                ],
                description: 'Register an HTTP handler'
            },
            'registerScanCheck': {
                name: 'registerScanCheck',
                returnType: 'Registration',
                parameters: [
                    { name: 'scanCheck', type: 'ScanCheck', description: 'The scan check to register' }
                ],
                description: 'Register a custom scan check',
                professionalOnly: true
            },
            'continueWith': {
                name: 'continueWith',
                returnType: 'RequestToBeSentAction',
                parameters: [
                    { name: 'request', type: 'HttpRequest', description: 'The modified request' }
                ],
                description: 'Continue with the modified request'
            },
            'drop': {
                name: 'drop',
                returnType: 'RequestToBeSentAction',
                parameters: [],
                description: 'Drop the request'
            }
        };

        const method = commonMethods[methodName];
        return method ? [method] : [];
    }

    private createSignatureInformation(method: ApiMethod): vscode.SignatureInformation {
        const parameters = method.parameters.map(p => 
            p.optional ? `${p.type} ${p.name}?` : `${p.type} ${p.name}`
        ).join(', ');
        
        const signature = `${method.returnType} ${method.name}(${parameters})`;
        
        const signatureInfo = new vscode.SignatureInformation(signature);
        signatureInfo.documentation = new vscode.MarkdownString(method.description);
        
        if (method.professionalOnly) {
            signatureInfo.documentation.appendMarkdown('\n\n**Professional Edition Only**');
        }
        
        if (method.example) {
            signatureInfo.documentation.appendMarkdown('\n\n**Example:**\n');
            signatureInfo.documentation.appendCodeblock(method.example, 'java');
        }

        // Add parameter information
        signatureInfo.parameters = method.parameters.map(param => {
            const paramInfo = new vscode.ParameterInformation(
                param.name,
                new vscode.MarkdownString(`**${param.type}** ${param.name}${param.optional ? ' (optional)' : ''}\n\n${param.description}`)
            );
            return paramInfo;
        });

        return signatureInfo;
    }

    private getActiveParameter(linePrefix: string, openParenIndex: number): number {
        if (openParenIndex === -1) {
            return 0;
        }

        const parameterText = linePrefix.substring(openParenIndex + 1);
        let commaCount = 0;
        let parenDepth = 0;
        let inString = false;
        let escapeNext = false;

        for (const char of parameterText) {
            if (escapeNext) {
                escapeNext = false;
                continue;
            }

            if (char === '\\') {
                escapeNext = true;
                continue;
            }

            if (char === '"' && !inString) {
                inString = true;
                continue;
            }

            if (char === '"' && inString) {
                inString = false;
                continue;
            }

            if (inString) {
                continue;
            }

            if (char === '(') {
                parenDepth++;
            } else if (char === ')') {
                parenDepth--;
            } else if (char === ',' && parenDepth === 0) {
                commaCount++;
            }
        }

        return commaCount;
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