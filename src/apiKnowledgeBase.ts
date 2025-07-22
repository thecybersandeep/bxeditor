import * as vscode from 'vscode';

export interface ApiMethod {
    name: string;
    returnType: string;
    parameters: ApiParameter[];
    description: string;
    example?: string;
    since?: string;
    deprecated?: boolean;
    professionalOnly?: boolean;
}

export interface ApiParameter {
    name: string;
    type: string;
    description: string;
    optional?: boolean;
}

export interface ApiClass {
    name: string;
    fullName: string;
    description: string;
    methods: ApiMethod[];
    interfaces?: string[];
    since?: string;
    deprecated?: boolean;
    professionalOnly?: boolean;
}

export class BurpApiKnowledgeBase {
    private static instance: BurpApiKnowledgeBase;
    private apiClasses: Map<string, ApiClass> = new Map();
    private apiMethods: Map<string, ApiMethod[]> = new Map();

    private constructor() {
        this.initializeApiKnowledge();
    }

    public static getInstance(): BurpApiKnowledgeBase {
        if (!BurpApiKnowledgeBase.instance) {
            BurpApiKnowledgeBase.instance = new BurpApiKnowledgeBase();
        }
        return BurpApiKnowledgeBase.instance;
    }

    private initializeApiKnowledge() {
        // Core API Classes
        this.addApiClass({
            name: 'MontoyaApi',
            fullName: 'burp.api.montoya.MontoyaApi',
            description: 'Main API interface providing access to Burp Suite functionality',
            methods: [
                {
                    name: 'ai',
                    returnType: 'Ai',
                    parameters: [],
                    description: 'Access AI related functionality (Professional only)',
                    professionalOnly: true
                },
                {
                    name: 'bambda',
                    returnType: 'Bambda',
                    parameters: [],
                    description: 'Access functionality related to Bambdas'
                },
                {
                    name: 'burpSuite',
                    returnType: 'BurpSuite',
                    parameters: [],
                    description: 'Access functionality related to the Burp Suite application'
                },
                {
                    name: 'collaborator',
                    returnType: 'Collaborator',
                    parameters: [],
                    description: 'Access the functionality of the Collaborator (Professional only)',
                    professionalOnly: true
                },
                {
                    name: 'comparer',
                    returnType: 'Comparer',
                    parameters: [],
                    description: 'Access the functionality of the Comparer'
                },
                {
                    name: 'decoder',
                    returnType: 'Decoder',
                    parameters: [],
                    description: 'Access the functionality of the Decoder'
                },
                {
                    name: 'extension',
                    returnType: 'Extension',
                    parameters: [],
                    description: 'Access functionality related to your extension'
                },
                {
                    name: 'http',
                    returnType: 'Http',
                    parameters: [],
                    description: 'Access the functionality related to HTTP requests and responses'
                },
                {
                    name: 'intruder',
                    returnType: 'Intruder',
                    parameters: [],
                    description: 'Access the functionality of the Intruder'
                },
                {
                    name: 'logging',
                    returnType: 'Logging',
                    parameters: [],
                    description: 'Access the functionality related to logging and events'
                },
                {
                    name: 'organizer',
                    returnType: 'Organizer',
                    parameters: [],
                    description: 'Access the functionality of the Organizer'
                },
                {
                    name: 'persistence',
                    returnType: 'Persistence',
                    parameters: [],
                    description: 'Access the functionality related to persistence'
                },
                {
                    name: 'project',
                    returnType: 'Project',
                    parameters: [],
                    description: 'Access functionality related to the project'
                },
                {
                    name: 'proxy',
                    returnType: 'Proxy',
                    parameters: [],
                    description: 'Access the functionality of the Proxy'
                },
                {
                    name: 'repeater',
                    returnType: 'Repeater',
                    parameters: [],
                    description: 'Access the functionality of the Repeater'
                },
                {
                    name: 'scanner',
                    returnType: 'Scanner',
                    parameters: [],
                    description: 'Access the functionality of the Scanner (Professional only)',
                    professionalOnly: true
                },
                {
                    name: 'scope',
                    returnType: 'Scope',
                    parameters: [],
                    description: 'Access the functionality related to Burp\'s suite-wide target scope'
                },
                {
                    name: 'siteMap',
                    returnType: 'SiteMap',
                    parameters: [],
                    description: 'Access the functionality of the Site Map'
                },
                {
                    name: 'userInterface',
                    returnType: 'UserInterface',
                    parameters: [],
                    description: 'Access the functionality related to the user interface'
                },
                {
                    name: 'utilities',
                    returnType: 'Utilities',
                    parameters: [],
                    description: 'Access additional utilities'
                },
                {
                    name: 'websockets',
                    returnType: 'WebSockets',
                    parameters: [],
                    description: 'Access the functionality related to WebSockets and messages'
                }
            ]
        });

        // Extension API
        this.addApiClass({
            name: 'Extension',
            fullName: 'burp.api.montoya.extension.Extension',
            description: 'Access functionality related to your extension',
            methods: [
                {
                    name: 'setName',
                    returnType: 'void',
                    parameters: [
                        { name: 'name', type: 'String', description: 'The name of the extension' }
                    ],
                    description: 'Set the name of the extension',
                    example: 'api.extension().setName("My Extension");'
                },
                {
                    name: 'filename',
                    returnType: 'String',
                    parameters: [],
                    description: 'Get the filename of the extension'
                },
                {
                    name: 'isLoaded',
                    returnType: 'boolean',
                    parameters: [],
                    description: 'Check if the extension is loaded'
                },
                {
                    name: 'registerUnloadingHandler',
                    returnType: 'void',
                    parameters: [
                        { name: 'handler', type: 'ExtensionUnloadingHandler', description: 'Handler to be called when extension is unloaded' }
                    ],
                    description: 'Register a handler to be called when the extension is unloaded'
                }
            ]
        });

        // HTTP API
        this.addApiClass({
            name: 'Http',
            fullName: 'burp.api.montoya.http.Http',
            description: 'Access the functionality related to HTTP requests and responses',
            methods: [
                {
                    name: 'registerHttpHandler',
                    returnType: 'Registration',
                    parameters: [
                        { name: 'handler', type: 'HttpHandler', description: 'The HTTP handler to register' }
                    ],
                    description: 'Register an HTTP handler',
                    example: 'api.http().registerHttpHandler(new MyHttpHandler());'
                },
                {
                    name: 'createRequest',
                    returnType: 'HttpRequest',
                    parameters: [
                        { name: 'url', type: 'String', description: 'The URL for the request' }
                    ],
                    description: 'Create an HTTP request',
                    example: 'HttpRequest request = api.http().createRequest("https://example.com");'
                },
                {
                    name: 'sendRequest',
                    returnType: 'HttpRequestResponse',
                    parameters: [
                        { name: 'request', type: 'HttpRequest', description: 'The HTTP request to send' }
                    ],
                    description: 'Send an HTTP request',
                    example: 'HttpRequestResponse response = api.http().sendRequest(request);'
                },
                {
                    name: 'sendRequest',
                    returnType: 'HttpRequestResponse',
                    parameters: [
                        { name: 'request', type: 'HttpRequest', description: 'The HTTP request to send' },
                        { name: 'options', type: 'RequestOptions', description: 'Options for the request' }
                    ],
                    description: 'Send an HTTP request with options'
                }
            ]
        });

        // Logging API
        this.addApiClass({
            name: 'Logging',
            fullName: 'burp.api.montoya.logging.Logging',
            description: 'Access the functionality related to logging and events',
            methods: [
                {
                    name: 'logToOutput',
                    returnType: 'void',
                    parameters: [
                        { name: 'message', type: 'String', description: 'The message to log' }
                    ],
                    description: 'Log a message to the output stream',
                    example: 'api.logging().logToOutput("Extension loaded");'
                },
                {
                    name: 'logToError',
                    returnType: 'void',
                    parameters: [
                        { name: 'message', type: 'String', description: 'The message to log' }
                    ],
                    description: 'Log a message to the error stream',
                    example: 'api.logging().logToError("Error occurred");'
                },
                {
                    name: 'logToError',
                    returnType: 'void',
                    parameters: [
                        { name: 'message', type: 'String', description: 'The message to log' },
                        { name: 'throwable', type: 'Throwable', description: 'The exception to log' }
                    ],
                    description: 'Log a message and exception to the error stream'
                },
                {
                    name: 'raiseInfoEvent',
                    returnType: 'void',
                    parameters: [
                        { name: 'message', type: 'String', description: 'The info message' }
                    ],
                    description: 'Raise an info event',
                    example: 'api.logging().raiseInfoEvent("Operation completed");'
                },
                {
                    name: 'raiseDebugEvent',
                    returnType: 'void',
                    parameters: [
                        { name: 'message', type: 'String', description: 'The debug message' }
                    ],
                    description: 'Raise a debug event'
                },
                {
                    name: 'raiseErrorEvent',
                    returnType: 'void',
                    parameters: [
                        { name: 'message', type: 'String', description: 'The error message' }
                    ],
                    description: 'Raise an error event'
                },
                {
                    name: 'raiseCriticalEvent',
                    returnType: 'void',
                    parameters: [
                        { name: 'message', type: 'String', description: 'The critical message' }
                    ],
                    description: 'Raise a critical event'
                }
            ]
        });

        // Proxy API
        this.addApiClass({
            name: 'Proxy',
            fullName: 'burp.api.montoya.proxy.Proxy',
            description: 'Access the functionality of the Proxy',
            methods: [
                {
                    name: 'registerRequestHandler',
                    returnType: 'Registration',
                    parameters: [
                        { name: 'handler', type: 'ProxyRequestHandler', description: 'The proxy request handler to register' }
                    ],
                    description: 'Register a proxy request handler',
                    example: 'api.proxy().registerRequestHandler(new MyProxyHandler());'
                },
                {
                    name: 'registerResponseHandler',
                    returnType: 'Registration',
                    parameters: [
                        { name: 'handler', type: 'ProxyResponseHandler', description: 'The proxy response handler to register' }
                    ],
                    description: 'Register a proxy response handler'
                },
                {
                    name: 'history',
                    returnType: 'List<ProxyHttpRequestResponse>',
                    parameters: [],
                    description: 'Get the proxy history'
                },
                {
                    name: 'history',
                    returnType: 'List<ProxyHttpRequestResponse>',
                    parameters: [
                        { name: 'filter', type: 'ProxyHistoryFilter', description: 'Filter for the history' }
                    ],
                    description: 'Get the proxy history with filter'
                },
                {
                    name: 'enableIntercept',
                    returnType: 'void',
                    parameters: [],
                    description: 'Enable proxy intercept'
                },
                {
                    name: 'disableIntercept',
                    returnType: 'void',
                    parameters: [],
                    description: 'Disable proxy intercept'
                }
            ]
        });

        // Scanner API
        this.addApiClass({
            name: 'Scanner',
            fullName: 'burp.api.montoya.scanner.Scanner',
            description: 'Access the functionality of the Scanner (Professional only)',
            professionalOnly: true,
            methods: [
                {
                    name: 'registerScanCheck',
                    returnType: 'Registration',
                    parameters: [
                        { name: 'scanCheck', type: 'ScanCheck', description: 'The scan check to register' }
                    ],
                    description: 'Register a custom scan check',
                    example: 'api.scanner().registerScanCheck(new MyScanCheck());'
                },
                {
                    name: 'startCrawlAndAudit',
                    returnType: 'CrawlAndAudit',
                    parameters: [
                        { name: 'crawlConfiguration', type: 'CrawlConfiguration', description: 'Configuration for the crawl' }
                    ],
                    description: 'Start a crawl and audit'
                },
                {
                    name: 'startAudit',
                    returnType: 'AuditResult',
                    parameters: [
                        { name: 'auditConfiguration', type: 'AuditConfiguration', description: 'Configuration for the audit' }
                    ],
                    description: 'Start an audit'
                }
            ]
        });

        // UserInterface API
        this.addApiClass({
            name: 'UserInterface',
            fullName: 'burp.api.montoya.ui.UserInterface',
            description: 'Access the functionality related to the user interface',
            methods: [
                {
                    name: 'registerSuiteTab',
                    returnType: 'Registration',
                    parameters: [
                        { name: 'caption', type: 'String', description: 'The caption for the tab' },
                        { name: 'component', type: 'Component', description: 'The component to display in the tab' }
                    ],
                    description: 'Register a custom suite tab',
                    example: 'api.userInterface().registerSuiteTab("My Tab", myPanel);'
                },
                {
                    name: 'registerContextMenuItemsProvider',
                    returnType: 'Registration',
                    parameters: [
                        { name: 'provider', type: 'ContextMenuItemsProvider', description: 'The context menu items provider' }
                    ],
                    description: 'Register a context menu items provider'
                },
                {
                    name: 'createHttpRequestEditor',
                    returnType: 'HttpRequestEditor',
                    parameters: [
                        { name: 'options', type: 'EditorOptions', description: 'Options for the editor' }
                    ],
                    description: 'Create an HTTP request editor'
                },
                {
                    name: 'createHttpResponseEditor',
                    returnType: 'HttpResponseEditor',
                    parameters: [
                        { name: 'options', type: 'EditorOptions', description: 'Options for the editor' }
                    ],
                    description: 'Create an HTTP response editor'
                },
                {
                    name: 'currentTheme',
                    returnType: 'Theme',
                    parameters: [],
                    description: 'Get the current UI theme'
                }
            ]
        });

        // Utilities API
        this.addApiClass({
            name: 'Utilities',
            fullName: 'burp.api.montoya.utilities.Utilities',
            description: 'Access additional utilities',
            methods: [
                {
                    name: 'base64Utils',
                    returnType: 'Base64Utils',
                    parameters: [],
                    description: 'Access Base64 encoding/decoding utilities'
                },
                {
                    name: 'urlUtils',
                    returnType: 'URLUtils',
                    parameters: [],
                    description: 'Access URL manipulation utilities'
                },
                {
                    name: 'byteUtils',
                    returnType: 'ByteUtils',
                    parameters: [],
                    description: 'Access byte manipulation utilities'
                },
                {
                    name: 'htmlUtils',
                    returnType: 'HtmlUtils',
                    parameters: [],
                    description: 'Access HTML encoding/decoding utilities'
                },
                {
                    name: 'compressionUtils',
                    returnType: 'CompressionUtils',
                    parameters: [],
                    description: 'Access compression utilities'
                },
                {
                    name: 'cryptoUtils',
                    returnType: 'CryptoUtils',
                    parameters: [],
                    description: 'Access cryptographic utilities'
                },
                {
                    name: 'numberUtils',
                    returnType: 'NumberUtils',
                    parameters: [],
                    description: 'Access number utilities'
                },
                {
                    name: 'randomUtils',
                    returnType: 'RandomUtils',
                    parameters: [],
                    description: 'Access random number utilities'
                },
                {
                    name: 'stringUtils',
                    returnType: 'StringUtils',
                    parameters: [],
                    description: 'Access string utilities'
                }
            ]
        });

        // Add interface definitions
        this.addInterfaceDefinitions();
    }

    private addInterfaceDefinitions() {
        // BurpExtension interface
        this.addApiClass({
            name: 'BurpExtension',
            fullName: 'burp.api.montoya.BurpExtension',
            description: 'All extensions must implement this interface',
            methods: [
                {
                    name: 'initialize',
                    returnType: 'void',
                    parameters: [
                        { name: 'api', type: 'MontoyaApi', description: 'The API implementation to access Burp Suite functionality' }
                    ],
                    description: 'Called when the extension is loaded',
                    example: '@Override\npublic void initialize(MontoyaApi api) {\n    api.extension().setName("My Extension");\n}'
                },
                {
                    name: 'enhancedCapabilities',
                    returnType: 'List<EnhancedCapability>',
                    parameters: [],
                    description: 'Return required enhanced capabilities (optional)',
                    example: '@Override\npublic List<EnhancedCapability> enhancedCapabilities() {\n    return List.of(EnhancedCapability.AI);\n}'
                }
            ]
        });

        // HttpHandler interface
        this.addApiClass({
            name: 'HttpHandler',
            fullName: 'burp.api.montoya.http.handler.HttpHandler',
            description: 'Interface for handling HTTP requests and responses',
            methods: [
                {
                    name: 'handleHttpRequestToBeSent',
                    returnType: 'RequestToBeSentAction',
                    parameters: [
                        { name: 'requestToBeSent', type: 'HttpRequestToBeSent', description: 'The HTTP request about to be sent' }
                    ],
                    description: 'Handle HTTP requests that are about to be sent'
                },
                {
                    name: 'handleHttpResponseReceived',
                    returnType: 'ResponseReceivedAction',
                    parameters: [
                        { name: 'responseReceived', type: 'HttpResponseReceived', description: 'The HTTP response that was received' }
                    ],
                    description: 'Handle HTTP responses that have been received'
                }
            ]
        });

        // ScanCheck interface
        this.addApiClass({
            name: 'ScanCheck',
            fullName: 'burp.api.montoya.scanner.ScanCheck',
            description: 'Interface for implementing custom scan checks',
            professionalOnly: true,
            methods: [
                {
                    name: 'audit',
                    returnType: 'List<AuditIssue>',
                    parameters: [
                        { name: 'baseRequestResponse', type: 'HttpRequestResponse', description: 'The base request/response pair' },
                        { name: 'auditInsertionPoint', type: 'AuditInsertionPoint', description: 'The insertion point for the audit' }
                    ],
                    description: 'Perform audit check and return any issues found'
                }
            ]
        });
    }

    private addApiClass(apiClass: ApiClass) {
        this.apiClasses.set(apiClass.name, apiClass);
        this.apiMethods.set(apiClass.name, apiClass.methods);
    }

    public getApiClass(className: string): ApiClass | undefined {
        return this.apiClasses.get(className);
    }

    public getApiMethods(className: string): ApiMethod[] {
        return this.apiMethods.get(className) || [];
    }

    public getAllApiClasses(): ApiClass[] {
        return Array.from(this.apiClasses.values());
    }

    public searchApiMethods(query: string): ApiMethod[] {
        const results: ApiMethod[] = [];
        for (const methods of this.apiMethods.values()) {
            for (const method of methods) {
                if (method.name.toLowerCase().includes(query.toLowerCase()) ||
                    method.description.toLowerCase().includes(query.toLowerCase())) {
                    results.push(method);
                }
            }
        }
        return results;
    }

    public getMethodChainCompletions(chain: string): vscode.CompletionItem[] {
        const completions: vscode.CompletionItem[] = [];
        
        // Parse the method chain (e.g., "api.http().sendRequest")
        const parts = chain.split('.');
        if (parts.length < 2) {
            return completions;
        }

        // Start with MontoyaApi if chain starts with "api"
        if (parts[0] === 'api' && parts.length === 2) {
            const montoyaApi = this.getApiClass('MontoyaApi');
            if (montoyaApi) {
                for (const method of montoyaApi.methods) {
                    const item = new vscode.CompletionItem(method.name + '()', vscode.CompletionItemKind.Method);
                    item.detail = method.returnType;
                    item.documentation = new vscode.MarkdownString(method.description);
                    if (method.professionalOnly) {
                        item.documentation.appendMarkdown('\n\n**Professional only**');
                    }
                    item.insertText = new vscode.SnippetString(method.name + '()');
                    completions.push(item);
                }
            }
        }

        return completions;
    }
}