import * as vscode from 'vscode';
import { BURP_API_KNOWLEDGE } from './realApiKnowledgeBase';
import { findApiClass, findApiMethod, getAllApiClasses, searchApiMethods } from './apiUtils';

export class BurpHoverProvider implements vscode.HoverProvider {
    private context: vscode.ExtensionContext;
    private apiDocumentation: Map<string, string> = new Map();

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.initializeApiDocumentation();
    }

    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        
        if (!this.isBurpExtensionFile(document)) {
            return null;
        }

        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return null;
        }

        const word = document.getText(wordRange);
        const line = document.lineAt(position).text;
        const linePrefix = line.substring(0, position.character);

        // Check knowledge base first
        const apiClass = findApiClass(word) || findApiClass(`burp.api.montoya.${word}`);
        if (apiClass) {
            const markdown = new vscode.MarkdownString();
            markdown.appendCodeblock(`${apiClass.fullName}`, 'java');
            markdown.appendMarkdown(`\n${apiClass.description}`);
            
            if (apiClass.isProfessionalOnly) {
                markdown.appendMarkdown('\n\n**Professional Edition Only**');
            }
            
            if (apiClass.methods.length > 0) {
                markdown.appendMarkdown('\n\n**Methods:**\n');
                apiClass.methods.slice(0, 5).forEach(method => {
                    markdown.appendMarkdown(`- \`${method.name}()\` - ${method.description}\n`);
                });
                if (apiClass.methods.length > 5) {
                    markdown.appendMarkdown(`- ... and ${apiClass.methods.length - 5} more methods\n`);
                }
            }
            
            return new vscode.Hover(markdown);
        }
        
        // Check for method in knowledge base
        const methods = searchApiMethods(word);
        if (methods.length > 0) {
            const method = methods[0];
            const markdown = new vscode.MarkdownString();
            
            const params = method.parameters.map((p: any) => `${p.type} ${p.name}`).join(', ');
            markdown.appendCodeblock(`${method.returnType} ${method.name}(${params})`, 'java');
            markdown.appendMarkdown(`\n${method.description}`);
            
            if (method.isProfessionalOnly) {
                markdown.appendMarkdown('\n\n**Professional Edition Only**');
            }
            
            if (method.examples && method.examples.length > 0) {
                markdown.appendMarkdown('\n\n**Example:**\n');
                markdown.appendCodeblock(method.examples[0], 'java');
            }
            
            return new vscode.Hover(markdown);
        }

        // Check for API method calls
        const apiMethodMatch = this.getApiMethodContext(linePrefix, word);
        if (apiMethodMatch) {
            const documentation = this.apiDocumentation.get(apiMethodMatch);
            if (documentation) {
                return new vscode.Hover(new vscode.MarkdownString(documentation));
            }
        }

        // Check for interface names
        const interfaceDoc = this.getInterfaceDocumentation(word);
        if (interfaceDoc) {
            return new vscode.Hover(new vscode.MarkdownString(interfaceDoc));
        }

        // Check for class names
        const classDoc = this.getClassDocumentation(word);
        if (classDoc) {
            return new vscode.Hover(new vscode.MarkdownString(classDoc));
        }

        // Check for enum values
        const enumDoc = this.getEnumDocumentation(word, line);
        if (enumDoc) {
            return new vscode.Hover(new vscode.MarkdownString(enumDoc));
        }

        return null;
    }

    private initializeApiDocumentation() {
        // Generate documentation from real API data
        const allClasses = getAllApiClasses();
        
        // Add documentation for all API classes and methods
        for (const apiClass of allClasses) {
            const className = apiClass.name;
            const isPro = apiClass.isProfessionalOnly;
            const proLabel = isPro ? ' (Professional only)' : '';
            
            let documentation = `**${className}${proLabel}**\n\n${apiClass.description}\n\n`;
            
            if (apiClass.methods.length > 0) {
                documentation += '**Methods:**\n';
                for (const method of apiClass.methods.slice(0, 10)) { // Limit to first 10 methods
                    const methodPro = method.isProfessionalOnly ? ' (Pro)' : '';
                    const params = method.parameters.map(p => `${p.type} ${p.name}`).join(', ');
                    documentation += `- \`${method.returnType} ${method.name}(${params})\`${methodPro} - ${method.description}\n`;
                }
                if (apiClass.methods.length > 10) {
                    documentation += `- ... and ${apiClass.methods.length - 10} more methods\n`;
                }
            }
            
            if (apiClass.fields.length > 0) {
                documentation += '\n**Fields:**\n';
                for (const field of apiClass.fields.slice(0, 5)) { // Limit to first 5 fields
                    documentation += `- \`${field.name}\` - ${field.description}\n`;
                }
            }
            
            this.apiDocumentation.set(className, documentation);
            
            // Add method-specific documentation
            for (const method of apiClass.methods) {
                const methodKey = `${className}.${method.name}`;
                const methodPro = method.isProfessionalOnly ? ' (Professional only)' : '';
                const params = method.parameters.map(p => `${p.type} ${p.name}`).join(', ');
                
                let methodDoc = `**${method.name}${methodPro}**\n\n`;
                methodDoc += `\`${method.returnType} ${method.name}(${params})\`\n\n`;
                methodDoc += `${method.description}\n\n`;
                
                if (method.parameters.length > 0) {
                    methodDoc += '**Parameters:**\n';
                    for (const param of method.parameters) {
                        methodDoc += `- \`${param.name}\` (${param.type}) - ${param.description || 'Parameter description'}\n`;
                    }
                }
                
                this.apiDocumentation.set(methodKey, methodDoc);
            }
        }

        this.apiDocumentation.set('api.http()', `
**HTTP API**

Access functionality related to HTTP requests and responses.

**Methods:**
- \`registerHttpHandler(HttpHandler handler)\` - Register an HTTP handler
- \`createRequest(String url)\` - Create an HTTP request
- \`sendRequest(HttpRequest request)\` - Send an HTTP request

**Example:**
\`\`\`java
api.http().registerHttpHandler(new MyHttpHandler());
\`\`\`
        `);

        this.apiDocumentation.set('api.proxy()', `
**Proxy API**

Access the functionality of the Proxy.

**Methods:**
- \`registerRequestHandler(ProxyRequestHandler handler)\` - Register a proxy request handler
- \`registerResponseHandler(ProxyResponseHandler handler)\` - Register a proxy response handler
- \`history()\` - Get proxy history
- \`enableIntercept()\` - Enable proxy intercept

**Example:**
\`\`\`java
api.proxy().registerRequestHandler(new MyProxyHandler());
\`\`\`
        `);

        this.apiDocumentation.set('api.scanner()', `
**Scanner API** *(Professional only)*

Access the functionality of the Scanner.

**Methods:**
- \`registerScanCheck(ScanCheck scanCheck)\` - Register a custom scan check
- \`startCrawlAndAudit(CrawlConfiguration config)\` - Start crawl and audit
- \`startAudit(AuditConfiguration config)\` - Start audit only

**Example:**
\`\`\`java
api.scanner().registerScanCheck(new MyScanCheck());
\`\`\`
        `);

        this.apiDocumentation.set('api.userInterface()', `
**User Interface API**

Access functionality related to the user interface.

**Methods:**
- \`registerSuiteTab(String caption, Component component)\` - Register a custom suite tab
- \`registerContextMenuItemsProvider(ContextMenuItemsProvider provider)\` - Register context menu provider
- \`createHttpRequestEditor(EditorOptions options)\` - Create HTTP request editor
- \`createHttpResponseEditor(EditorOptions options)\` - Create HTTP response editor

**Example:**
\`\`\`java
api.userInterface().registerSuiteTab("My Tab", myPanel);
\`\`\`
        `);

        this.apiDocumentation.set('api.logging()', `
**Logging API**

Access functionality related to logging and events.

**Methods:**
- \`logToOutput(String message)\` - Log message to output stream
- \`logToError(String message)\` - Log message to error stream
- \`raiseInfoEvent(String message)\` - Raise an info event
- \`raiseErrorEvent(String message)\` - Raise an error event
- \`raiseDebugEvent(String message)\` - Raise a debug event
- \`raiseCriticalEvent(String message)\` - Raise a critical event

**Example:**
\`\`\`java
api.logging().logToOutput("Extension loaded");
\`\`\`
        `);

        this.apiDocumentation.set('api.utilities()', `
**Utilities API**

Access additional utility functions.

**Methods:**
- \`base64Utils()\` - Base64 encoding/decoding utilities
- \`urlUtils()\` - URL manipulation utilities
- \`byteUtils()\` - Byte manipulation utilities
- \`htmlUtils()\` - HTML encoding/decoding utilities
- \`compressionUtils()\` - Compression utilities

**Example:**
\`\`\`java
String encoded = api.utilities().base64Utils().encode("data");
\`\`\`
        `);

        this.apiDocumentation.set('api.persistence()', `
**Persistence API**

Access functionality related to data persistence.

**Methods:**
- \`preferences()\` - Access extension preferences
- \`extensionData()\` - Access extension-specific data storage

**Example:**
\`\`\`java
api.persistence().preferences().setString("key", "value");
\`\`\`
        `);

        this.apiDocumentation.set('api.scope()', `
**Scope API**

Access functionality related to Burp's suite-wide target scope.

**Methods:**
- \`isInScope(String url)\` - Check if URL is in scope
- \`includeInScope(String url)\` - Include URL in scope
- \`excludeFromScope(String url)\` - Exclude URL from scope

**Example:**
\`\`\`java
if (api.scope().isInScope("https://example.com")) {
    // Process URL
}
\`\`\`
        `);

        this.apiDocumentation.set('api.siteMap()', `
**Site Map API**

Access functionality of the Site Map.

**Methods:**
- \`add(HttpRequestResponse requestResponse)\` - Add item to site map
- \`requestResponses()\` - Get all request/response pairs
- \`requestResponses(String urlPrefix)\` - Get filtered request/response pairs

**Example:**
\`\`\`java
List<HttpRequestResponse> items = api.siteMap().requestResponses();
\`\`\`
        `);

        this.apiDocumentation.set('api.collaborator()', `
**Collaborator API** *(Professional only)*

Access the functionality of the Collaborator.

**Methods:**
- \`createPayload()\` - Create a collaborator payload
- \`fetchAllInteractions()\` - Fetch all interactions
- \`fetchInteractionsFor(CollaboratorPayload payload)\` - Fetch interactions for specific payload

**Example:**
\`\`\`java
CollaboratorPayload payload = api.collaborator().createPayload();
\`\`\`
        `);

        // Method-specific documentation
        this.apiDocumentation.set('initialize', `
**initialize(MontoyaApi api)**

Called when the extension is loaded. Any registered handlers will only be enabled once this method has completed.

**Parameters:**
- \`api\` - The API implementation to access Burp Suite functionality

**Example:**
\`\`\`java
@Override
public void initialize(MontoyaApi api) {
    api.extension().setName("My Extension");
    api.logging().logToOutput("Extension loaded");
}
\`\`\`
        `);

        this.apiDocumentation.set('handleHttpRequestToBeSent', `
**handleHttpRequestToBeSent(HttpRequestToBeSent requestToBeSent)**

Handle HTTP requests that are about to be sent.

**Parameters:**
- \`requestToBeSent\` - The HTTP request about to be sent

**Returns:**
- \`RequestToBeSentAction\` - Action to take with the request

**Example:**
\`\`\`java
@Override
public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent requestToBeSent) {
    // Modify or analyze the request
    return RequestToBeSentAction.continueWith(requestToBeSent);
}
\`\`\`
        `);

        this.apiDocumentation.set('handleHttpResponseReceived', `
**handleHttpResponseReceived(HttpResponseReceived responseReceived)**

Handle HTTP responses that have been received.

**Parameters:**
- \`responseReceived\` - The HTTP response that was received

**Returns:**
- \`ResponseReceivedAction\` - Action to take with the response

**Example:**
\`\`\`java
@Override
public ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived responseReceived) {
    // Analyze the response
    return ResponseReceivedAction.continueWith(responseReceived);
}
\`\`\`
        `);
    }

    private getApiMethodContext(linePrefix: string, word: string): string | null {
        // Check for API method calls
        const apiPatterns = [
            /api\.(\w+)\(\)/g,
            /api\.(\w+)\(\)\.(\w+)\(\)/g
        ];

        for (const pattern of apiPatterns) {
            const matches = Array.from(linePrefix.matchAll(pattern));
            for (const match of matches) {
                if (match.index !== undefined && match.index <= linePrefix.length - word.length) {
                    return match[0];
                }
            }
        }

        // Check for method names in context
        if (linePrefix.includes('api.')) {
            const methodPatterns = [
                'api.extension()',
                'api.http()',
                'api.proxy()',
                'api.scanner()',
                'api.userInterface()',
                'api.logging()',
                'api.utilities()',
                'api.persistence()',
                'api.scope()',
                'api.siteMap()',
                'api.collaborator()'
            ];

            for (const pattern of methodPatterns) {
                if (linePrefix.includes(pattern.replace('()', '')) && word === pattern.split('.')[1].replace('()', '')) {
                    return pattern;
                }
            }
        }

        return null;
    }

    private getInterfaceDocumentation(word: string): string | null {
        const interfaces: { [key: string]: string } = {
            'BurpExtension': `
**BurpExtension Interface**

All extensions must implement this interface.

**Methods:**
- \`initialize(MontoyaApi api)\` - Called when the extension is loaded
- \`enhancedCapabilities()\` - Return required enhanced capabilities (optional)

**Example:**
\`\`\`java
public class MyExtension implements BurpExtension {
    @Override
    public void initialize(MontoyaApi api) {
        // Extension initialization
    }
}
\`\`\`
            `,
            'HttpHandler': `
**HttpHandler Interface**

Interface for handling HTTP requests and responses.

**Methods:**
- \`handleHttpRequestToBeSent(HttpRequestToBeSent)\` - Handle outgoing requests
- \`handleHttpResponseReceived(HttpResponseReceived)\` - Handle incoming responses

**Example:**
\`\`\`java
public class MyHttpHandler implements HttpHandler {
    // Implement required methods
}
\`\`\`
            `,
            'ProxyRequestHandler': `
**ProxyRequestHandler Interface**

Interface for handling proxy requests.

**Methods:**
- \`handleRequestReceived(InterceptedRequest)\` - Handle intercepted requests
- \`handleRequestToBeSent(InterceptedRequest)\` - Handle requests about to be sent

**Example:**
\`\`\`java
public class MyProxyHandler implements ProxyRequestHandler {
    // Implement required methods
}
\`\`\`
            `,
            'ScanCheck': `
**ScanCheck Interface**

Interface for implementing custom scan checks.

**Methods:**
- \`audit(HttpRequestResponse, AuditInsertionPoint)\` - Perform audit check

**Example:**
\`\`\`java
public class MyScanCheck implements ScanCheck {
    @Override
    public List<AuditIssue> audit(HttpRequestResponse baseRequestResponse, AuditInsertionPoint auditInsertionPoint) {
        // Implement scan logic
        return new ArrayList<>();
    }
}
\`\`\`
            `
        };

        return interfaces[word] || null;
    }

    private getClassDocumentation(word: string): string | null {
        const classes: { [key: string]: string } = {
            'MontoyaApi': `
**MontoyaApi Interface**

Main API interface providing access to Burp Suite functionality.

This interface is passed to extensions in the \`initialize\` method and provides access to all Burp Suite APIs.

**Key Methods:**
- \`extension()\` - Extension-related functionality
- \`http()\` - HTTP-related functionality  
- \`proxy()\` - Proxy functionality
- \`scanner()\` - Scanner functionality
- \`userInterface()\` - UI functionality
- \`logging()\` - Logging functionality
            `,
            'HttpRequestResponse': `
**HttpRequestResponse Class**

Represents an HTTP request/response pair.

**Methods:**
- \`request()\` - Get the HTTP request
- \`response()\` - Get the HTTP response
- \`annotations()\` - Get annotations
- \`url()\` - Get the request URL
            `,
            'HttpRequest': `
**HttpRequest Class**

Represents an HTTP request.

**Methods:**
- \`url()\` - Get the request URL
- \`method()\` - Get the HTTP method
- \`headers()\` - Get request headers
- \`body()\` - Get request body
- \`parameters()\` - Get request parameters
            `,
            'HttpResponse': `
**HttpResponse Class**

Represents an HTTP response.

**Methods:**
- \`statusCode()\` - Get the status code
- \`headers()\` - Get response headers
- \`body()\` - Get response body
- \`mimeType()\` - Get MIME type
- \`inferredMimeType()\` - Get inferred MIME type
            `
        };

        return classes[word] || null;
    }

    private getEnumDocumentation(word: string, line: string): string | null {
        const enums: { [key: string]: string } = {
            'RequestToBeSentAction': `
**RequestToBeSentAction Enum**

Actions that can be taken with HTTP requests about to be sent.

**Values:**
- \`continueWith(HttpRequest)\` - Continue with the request (possibly modified)
- \`drop()\` - Drop the request
            `,
            'ResponseReceivedAction': `
**ResponseReceivedAction Enum**

Actions that can be taken with HTTP responses that have been received.

**Values:**
- \`continueWith(HttpResponse)\` - Continue with the response (possibly modified)
- \`drop()\` - Drop the response
            `,
            'ProxyRequestReceivedAction': `
**ProxyRequestReceivedAction Enum**

Actions that can be taken with intercepted proxy requests.

**Values:**
- \`continueWith(InterceptedRequest)\` - Continue with the request
- \`drop()\` - Drop the request
- \`intercept(InterceptedRequest)\` - Intercept the request
            `,
            'EditorOptions': `
**EditorOptions Enum**

Options for creating editors.

**Values:**
- \`READ_ONLY\` - Create a read-only editor
- \`EDITABLE\` - Create an editable editor
            `
        };

        return enums[word] || null;
    }

    private isBurpExtensionFile(document: vscode.TextDocument): boolean {
        const content = document.getText();
        return content.includes('burp.api.montoya') || 
               content.includes('BurpExtension') ||
               content.includes('MontoyaApi');
    }
}