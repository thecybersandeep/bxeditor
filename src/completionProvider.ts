import * as vscode from 'vscode';
import { BURP_API_KNOWLEDGE, ApiClass } from './realApiKnowledgeBase';
import { findApiClass, getAllApiClasses, searchApiMethods } from './apiUtils';

export class BurpCompletionProvider implements vscode.CompletionItemProvider {
    private context: vscode.ExtensionContext;
    private montoyaApiCompletions: vscode.CompletionItem[] = [];

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.initializeMontoyaApiCompletions();
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        
        const lineText = document.lineAt(position).text;
        const linePrefix = lineText.substring(0, position.character);

        // Check if we're in a Burp extension context
        if (!this.isBurpExtensionFile(document)) {
            return [];
        }

        const completions: vscode.CompletionItem[] = [];

        // API method completions
        if (linePrefix.includes('api.')) {
            completions.push(...this.getApiMethodCompletions(linePrefix));
            completions.push(...this.getMethodChainCompletions(linePrefix));
        }

        // Import completions
        if (linePrefix.includes('import ') && linePrefix.includes('burp.api.montoya')) {
            completions.push(...this.getImportCompletions());
        }

        // Interface implementations
        if (linePrefix.includes('implements ')) {
            completions.push(...this.getInterfaceCompletions());
        }

        // Method overrides
        if (linePrefix.includes('@Override') || this.isInClassBody(document, position)) {
            completions.push(...this.getMethodOverrideCompletions(document, position));
        }

        return completions.concat(this.montoyaApiCompletions);
    }

    private getMethodChainCompletions(linePrefix: string): vscode.CompletionItem[] {
        const completions: vscode.CompletionItem[] = [];
        
        // Extract method chain patterns from real API data
        const allClasses = getAllApiClasses();
        
        for (const apiClass of allClasses) {
            for (const method of apiClass.methods) {
                if (linePrefix.includes(`api.${method.name}()`)) {
                    // Add chained method completions
                    const returnTypeClass = findApiClass(method.returnType);
                    if (returnTypeClass) {
                        for (const chainedMethod of returnTypeClass.methods.slice(0, 5)) {
                            completions.push(
                                this.createCompletionItem(
                                    `${chainedMethod.name}()`,
                                    `${chainedMethod.name}`,
                                    vscode.CompletionItemKind.Method,
                                    chainedMethod.description,
                                    `${chainedMethod.name}()`
                                )
                            );
                        }
                    }
                }
            }
        }
        
        return completions;
    }

    private initializeMontoyaApiCompletions() {
        // Generate completions from real API data
        const allClasses = getAllApiClasses();
        
        // Add MontoyaApi methods
        const montoyaApi = findApiClass('burp.api.montoya.MontoyaApi');
        if (montoyaApi) {
            for (const method of montoyaApi.methods) {
                const isPro = method.isProfessionalOnly;
                const description = isPro ? `${method.description} (Professional only)` : method.description;
                
                this.montoyaApiCompletions.push(
                    this.createCompletionItem(
                        `api.${method.name}()`,
                        `${method.name} API`,
                        vscode.CompletionItemKind.Method,
                        description,
                        `api.${method.name}()`
                    )
                );
            }
        }
        
        // Add interface completions
        for (const apiClass of allClasses) {
            if (apiClass.type === 'interface' && apiClass.name !== 'MontoyaApi') {
                const isPro = apiClass.isProfessionalOnly;
                const description = isPro ? `${apiClass.description} (Professional only)` : apiClass.description;
                
                this.montoyaApiCompletions.push(
                    this.createCompletionItem(
                        apiClass.name,
                        `${apiClass.name} Interface`,
                        vscode.CompletionItemKind.Interface,
                        description,
                        apiClass.name
                    )
                );
            }
        }

        // Common method chains
        this.montoyaApiCompletions.push(
            this.createCompletionItem('api.extension().setName()', 'Set Extension Name', vscode.CompletionItemKind.Method,
                'Set the name of the extension', 'api.extension().setName("${1:Extension Name}")'),
            this.createCompletionItem('api.logging().logToOutput()', 'Log to Output', vscode.CompletionItemKind.Method,
                'Log message to output stream', 'api.logging().logToOutput("${1:message}")'),
            this.createCompletionItem('api.logging().logToError()', 'Log to Error', vscode.CompletionItemKind.Method,
                'Log message to error stream', 'api.logging().logToError("${1:message}")'),
            this.createCompletionItem('api.logging().raiseInfoEvent()', 'Raise Info Event', vscode.CompletionItemKind.Method,
                'Raise an info event', 'api.logging().raiseInfoEvent("${1:message}")'),
            this.createCompletionItem('api.logging().raiseErrorEvent()', 'Raise Error Event', vscode.CompletionItemKind.Method,
                'Raise an error event', 'api.logging().raiseErrorEvent("${1:message}")'),
            this.createCompletionItem('api.http().registerHttpHandler()', 'Register HTTP Handler', vscode.CompletionItemKind.Method,
                'Register an HTTP handler', 'api.http().registerHttpHandler(${1:handler})'),
            this.createCompletionItem('api.proxy().registerRequestHandler()', 'Register Proxy Request Handler', vscode.CompletionItemKind.Method,
                'Register a proxy request handler', 'api.proxy().registerRequestHandler(${1:handler})'),
            this.createCompletionItem('api.proxy().registerResponseHandler()', 'Register Proxy Response Handler', vscode.CompletionItemKind.Method,
                'Register a proxy response handler', 'api.proxy().registerResponseHandler(${1:handler})'),
            this.createCompletionItem('api.scanner().registerScanCheck()', 'Register Scan Check', vscode.CompletionItemKind.Method,
                'Register a custom scan check', 'api.scanner().registerScanCheck(${1:scanCheck})'),
            this.createCompletionItem('api.userInterface().registerSuiteTab()', 'Register Suite Tab', vscode.CompletionItemKind.Method,
                'Register a custom suite tab', 'api.userInterface().registerSuiteTab("${1:Tab Name}", ${2:component})'),
            this.createCompletionItem('api.userInterface().registerContextMenuItemsProvider()', 'Register Context Menu Provider', vscode.CompletionItemKind.Method,
                'Register a context menu items provider', 'api.userInterface().registerContextMenuItemsProvider(${1:provider})')
        );
    }

    private getApiMethodCompletions(linePrefix: string): vscode.CompletionItem[] {
        const completions: vscode.CompletionItem[] = [];

        if (linePrefix.includes('api.http().')) {
            completions.push(
                this.createCompletionItem('registerHttpHandler()', 'Register HTTP Handler', vscode.CompletionItemKind.Method,
                    'Register an HTTP handler', 'registerHttpHandler(${1:handler})'),
                this.createCompletionItem('createRequest()', 'Create HTTP Request', vscode.CompletionItemKind.Method,
                    'Create an HTTP request', 'createRequest("${1:url}")'),
                this.createCompletionItem('sendRequest()', 'Send HTTP Request', vscode.CompletionItemKind.Method,
                    'Send an HTTP request', 'sendRequest(${1:request})')
            );
        }

        if (linePrefix.includes('api.proxy().')) {
            completions.push(
                this.createCompletionItem('registerRequestHandler()', 'Register Request Handler', vscode.CompletionItemKind.Method,
                    'Register a proxy request handler', 'registerRequestHandler(${1:handler})'),
                this.createCompletionItem('registerResponseHandler()', 'Register Response Handler', vscode.CompletionItemKind.Method,
                    'Register a proxy response handler', 'registerResponseHandler(${1:handler})'),
                this.createCompletionItem('history()', 'Get Proxy History', vscode.CompletionItemKind.Method,
                    'Get proxy history', 'history()')
            );
        }

        if (linePrefix.includes('api.scanner().')) {
            completions.push(
                this.createCompletionItem('registerScanCheck()', 'Register Scan Check', vscode.CompletionItemKind.Method,
                    'Register a custom scan check', 'registerScanCheck(${1:scanCheck})'),
                this.createCompletionItem('startCrawlAndAudit()', 'Start Crawl and Audit', vscode.CompletionItemKind.Method,
                    'Start crawl and audit', 'startCrawlAndAudit(${1:crawlConfiguration})'),
                this.createCompletionItem('startAudit()', 'Start Audit', vscode.CompletionItemKind.Method,
                    'Start audit', 'startAudit(${1:auditConfiguration})')
            );
        }

        if (linePrefix.includes('api.userInterface().')) {
            completions.push(
                this.createCompletionItem('registerSuiteTab()', 'Register Suite Tab', vscode.CompletionItemKind.Method,
                    'Register a custom suite tab', 'registerSuiteTab("${1:Tab Name}", ${2:component})'),
                this.createCompletionItem('registerContextMenuItemsProvider()', 'Register Context Menu Provider', vscode.CompletionItemKind.Method,
                    'Register a context menu items provider', 'registerContextMenuItemsProvider(${1:provider})'),
                this.createCompletionItem('createHttpRequestEditor()', 'Create HTTP Request Editor', vscode.CompletionItemKind.Method,
                    'Create an HTTP request editor', 'createHttpRequestEditor(${1:options})'),
                this.createCompletionItem('createHttpResponseEditor()', 'Create HTTP Response Editor', vscode.CompletionItemKind.Method,
                    'Create an HTTP response editor', 'createHttpResponseEditor(${1:options})')
            );
        }

        return completions;
    }

    private getImportCompletions(): vscode.CompletionItem[] {
        return [
            this.createCompletionItem('burp.api.montoya.BurpExtension', 'BurpExtension Interface', vscode.CompletionItemKind.Class,
                'Main extension interface', 'burp.api.montoya.BurpExtension'),
            this.createCompletionItem('burp.api.montoya.MontoyaApi', 'MontoyaApi Interface', vscode.CompletionItemKind.Interface,
                'Main API interface', 'burp.api.montoya.MontoyaApi'),
            this.createCompletionItem('burp.api.montoya.http.handler.HttpHandler', 'HttpHandler Interface', vscode.CompletionItemKind.Interface,
                'HTTP handler interface', 'burp.api.montoya.http.handler.HttpHandler'),
            this.createCompletionItem('burp.api.montoya.proxy.http.ProxyRequestHandler', 'ProxyRequestHandler Interface', vscode.CompletionItemKind.Interface,
                'Proxy request handler interface', 'burp.api.montoya.proxy.http.ProxyRequestHandler'),
            this.createCompletionItem('burp.api.montoya.proxy.http.ProxyResponseHandler', 'ProxyResponseHandler Interface', vscode.CompletionItemKind.Interface,
                'Proxy response handler interface', 'burp.api.montoya.proxy.http.ProxyResponseHandler'),
            this.createCompletionItem('burp.api.montoya.scanner.ScanCheck', 'ScanCheck Interface', vscode.CompletionItemKind.Interface,
                'Scan check interface', 'burp.api.montoya.scanner.ScanCheck'),
            this.createCompletionItem('burp.api.montoya.ui.contextmenu.ContextMenuItemsProvider', 'ContextMenuItemsProvider Interface', vscode.CompletionItemKind.Interface,
                'Context menu items provider interface', 'burp.api.montoya.ui.contextmenu.ContextMenuItemsProvider')
        ];
    }

    private getInterfaceCompletions(): vscode.CompletionItem[] {
        return [
            this.createCompletionItem('BurpExtension', 'BurpExtension Interface', vscode.CompletionItemKind.Interface,
                'Main extension interface', 'BurpExtension'),
            this.createCompletionItem('HttpHandler', 'HttpHandler Interface', vscode.CompletionItemKind.Interface,
                'HTTP handler interface', 'HttpHandler'),
            this.createCompletionItem('ProxyRequestHandler', 'ProxyRequestHandler Interface', vscode.CompletionItemKind.Interface,
                'Proxy request handler interface', 'ProxyRequestHandler'),
            this.createCompletionItem('ProxyResponseHandler', 'ProxyResponseHandler Interface', vscode.CompletionItemKind.Interface,
                'Proxy response handler interface', 'ProxyResponseHandler'),
            this.createCompletionItem('ScanCheck', 'ScanCheck Interface', vscode.CompletionItemKind.Interface,
                'Scan check interface', 'ScanCheck'),
            this.createCompletionItem('ContextMenuItemsProvider', 'ContextMenuItemsProvider Interface', vscode.CompletionItemKind.Interface,
                'Context menu items provider interface', 'ContextMenuItemsProvider')
        ];
    }

    private getMethodOverrideCompletions(document: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] {
        const completions: vscode.CompletionItem[] = [];
        const documentText = document.getText();

        // Check which interfaces are implemented
        if (documentText.includes('implements BurpExtension')) {
            completions.push(
                this.createMethodOverrideCompletion('initialize', 'Initialize Method', 
                    'public void initialize(MontoyaApi api) {\n\t${1:// Implementation}\n}')
            );
        }

        if (documentText.includes('implements HttpHandler')) {
            completions.push(
                this.createMethodOverrideCompletion('handleHttpRequestToBeSent', 'Handle HTTP Request To Be Sent',
                    'public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent requestToBeSent) {\n\t${1:// Implementation}\n\treturn RequestToBeSentAction.continueWith(requestToBeSent);\n}'),
                this.createMethodOverrideCompletion('handleHttpResponseReceived', 'Handle HTTP Response Received',
                    'public ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived responseReceived) {\n\t${1:// Implementation}\n\treturn ResponseReceivedAction.continueWith(responseReceived);\n}')
            );
        }

        if (documentText.includes('implements ProxyRequestHandler')) {
            completions.push(
                this.createMethodOverrideCompletion('handleRequestReceived', 'Handle Request Received',
                    'public ProxyRequestReceivedAction handleRequestReceived(InterceptedRequest interceptedRequest) {\n\t${1:// Implementation}\n\treturn ProxyRequestReceivedAction.continueWith(interceptedRequest);\n}'),
                this.createMethodOverrideCompletion('handleRequestToBeSent', 'Handle Request To Be Sent',
                    'public ProxyRequestToBeSentAction handleRequestToBeSent(InterceptedRequest interceptedRequest) {\n\t${1:// Implementation}\n\treturn ProxyRequestToBeSentAction.continueWith(interceptedRequest);\n}')
            );
        }

        if (documentText.includes('implements ScanCheck')) {
            completions.push(
                this.createMethodOverrideCompletion('audit', 'Audit Method',
                    'public List<AuditIssue> audit(HttpRequestResponse baseRequestResponse, AuditInsertionPoint auditInsertionPoint) {\n\t${1:// Implementation}\n\treturn new ArrayList<>();\n}')
            );
        }

        return completions;
    }

    private createCompletionItem(
        label: string, 
        detail: string, 
        kind: vscode.CompletionItemKind, 
        documentation: string, 
        insertText: string
    ): vscode.CompletionItem {
        const item = new vscode.CompletionItem(label, kind);
        item.detail = detail;
        item.documentation = new vscode.MarkdownString(documentation);
        item.insertText = new vscode.SnippetString(insertText);
        return item;
    }

    private createMethodOverrideCompletion(label: string, detail: string, insertText: string): vscode.CompletionItem {
        const item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Method);
        item.detail = detail;
        item.insertText = new vscode.SnippetString(insertText);
        item.documentation = new vscode.MarkdownString(`Override method: ${label}`);
        return item;
    }

    private isBurpExtensionFile(document: vscode.TextDocument): boolean {
        const content = document.getText();
        return content.includes('burp.api.montoya') || 
               content.includes('BurpExtension') ||
               content.includes('MontoyaApi');
    }

    private isInClassBody(document: vscode.TextDocument, position: vscode.Position): boolean {
        const textBeforePosition = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
        const classMatches = textBeforePosition.match(/class\s+\w+/g);
        const braceMatches = textBeforePosition.match(/[{}]/g);
        
        if (!classMatches || !braceMatches) {
            return false;
        }

        let braceCount = 0;
        for (const brace of braceMatches) {
            if (brace === '{') {
                braceCount++;
            } else {
                braceCount--;
            }
        }

        return braceCount > 0;
    }
}