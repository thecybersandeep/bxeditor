// Auto-generated Burp Montoya API Knowledge Base
// Generated from actual API source files and examples

export interface ApiMethod {
    name: string;
    returnType: string;
    parameters: Array<{
        name: string;
        type: string;
        description?: string;
    }>;
    description: string;
    isProfessionalOnly: boolean;
    examples?: string[];
}

export interface ApiClass {
    name: string;
    fullName: string;
    type: 'interface' | 'class' | 'enum';
    description: string;
    methods: ApiMethod[];
    fields: Array<{
        name: string;
        type: string;
        description: string;
    }>;
    isProfessionalOnly: boolean;
    documentation: string;
}

export interface ApiExample {
    name: string;
    description: string;
    sourceFiles: Array<{
        name: string;
        path: string;
        content: string;
    }>;
    readme: string;
}

export const BURP_API_KNOWLEDGE: {
    interfaces: Record<string, ApiClass>;
    classes: Record<string, ApiClass>;
    enums: Record<string, ApiClass>;
    examples: Record<string, ApiExample>;
} = {
  "interfaces": {
    "burp.api.montoya.BurpExtension": {
      "name": "BurpExtension",
      "fullName": "burp.api.montoya.BurpExtension",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "default",
          "returnType": "a",
          "parameters": [],
          "description": "All extensions must implement this interface.\n<p>\nImplementations must be declared public, and must provide a default (public, no-argument) constructor.",
          "isProfessionalOnly": false
        },
        {
          "name": "initialize",
          "returnType": "void",
          "parameters": [
            {
              "type": "MontoyaApi",
              "name": "api"
            }
          ],
          "description": "Invoked when the extension is loaded. Any registered handlers will only be enabled once this method has completed.\n\n@param api The API implementation to access the functionality of Burp Suite.",
          "isProfessionalOnly": false
        },
        {
          "name": "emptySet",
          "returnType": "return",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.MontoyaApi": {
      "name": "MontoyaApi",
      "fullName": "burp.api.montoya.MontoyaApi",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "ai",
          "returnType": "Ai",
          "parameters": [],
          "description": "@return An implementation of the BurpSuite interface which exposes AI related functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "bambda",
          "returnType": "Bambda",
          "parameters": [],
          "description": "Access functionality related to Bambdas.\n\n@return An implementation of the {@link Bambda} interface which exposes Bambda functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "burpSuite",
          "returnType": "BurpSuite",
          "parameters": [],
          "description": "Access functionality related to the Burp Suite application.\n\n@return An implementation of the BurpSuite interface which exposes application-level functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "collaborator",
          "returnType": "Collaborator",
          "parameters": [],
          "description": "[Professional only] Access the functionality of the Collaborator.\n\n@return An implementation of the Collaborator interface which exposes Collaborator functionality.",
          "isProfessionalOnly": true
        },
        {
          "name": "comparer",
          "returnType": "Comparer",
          "parameters": [],
          "description": "Access the functionality of the Comparer.\n\n@return An implementation of the Comparer interface which exposes Comparer functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "decoder",
          "returnType": "Decoder",
          "parameters": [],
          "description": "Access the functionality of the Decoder.\n\n@return An implementation of the Decoder interface which exposes Decoder functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "extension",
          "returnType": "Extension",
          "parameters": [],
          "description": "Access functionality related to your extension.\n\n@return An implementation of the Extension interface which exposes extension functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "http",
          "returnType": "Http",
          "parameters": [],
          "description": "Access the functionality related to HTTP requests and responses.\n\n@return An implementation of the Http interface which exposes http functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "intruder",
          "returnType": "Intruder",
          "parameters": [],
          "description": "Access the functionality of the Intruder.\n\n@return An implementation of the Comparer interface which exposes Comparer functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "logging",
          "returnType": "Logging",
          "parameters": [],
          "description": "Access the functionality related to logging and events.\n\n@return An implementation of the Logging interface which exposes logging functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "organizer",
          "returnType": "Organizer",
          "parameters": [],
          "description": "Access the functionality of the Organizer.\n\n@return An implementation of the Organizer interface which exposes Organizer functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "persistence",
          "returnType": "Persistence",
          "parameters": [],
          "description": "Access the functionality related to persistence.\n\n@return An implementation of the Persistence interface which exposes persistence functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "project",
          "returnType": "Project",
          "parameters": [],
          "description": "Access functionality related to the project.\n\n@return An implementation of the Project interface which exposes project functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "proxy",
          "returnType": "Proxy",
          "parameters": [],
          "description": "Access the functionality of the Proxy.\n\n@return An implementation of the Proxy interface which exposes Proxy functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "repeater",
          "returnType": "Repeater",
          "parameters": [],
          "description": "Access the functionality of the Repeater.\n\n@return An implementation of the Repeater interface which exposes Repeater functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "scanner",
          "returnType": "Scanner",
          "parameters": [],
          "description": "[Professional only] Access the functionality of the Scanner.\n\n@return An implementation of the Scanner interface which exposes Scanner functionality.",
          "isProfessionalOnly": true
        },
        {
          "name": "scope",
          "returnType": "Scope",
          "parameters": [],
          "description": "Access the functionality related to Burp's suite-wide target scope.\n\n@return An implementation of the Scope interface which exposes scope functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "siteMap",
          "returnType": "SiteMap",
          "parameters": [],
          "description": "Access the functionality of the Site Map.\n\n@return An implementation of the SiteMap interface which exposes sitemap functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "userInterface",
          "returnType": "UserInterface",
          "parameters": [],
          "description": "Access the functionality related to the user interface.\n\n@return An implementation of the UserInterface interface which exposes user interface functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "utilities",
          "returnType": "Utilities",
          "parameters": [],
          "description": "Access additional utilities.\n\n@return An implementation of the Utilities interface which exposes additional utilities.",
          "isProfessionalOnly": false
        },
        {
          "name": "websockets",
          "returnType": "WebSockets",
          "parameters": [],
          "description": "Access the functionality related to WebSockets and messages.\n\n@return An implementation of the WebSockets interface which exposes WebSocket functionality.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": true,
      "documentation": ""
    },
    "burp.api.montoya.ai.Ai": {
      "name": "Ai",
      "fullName": "burp.api.montoya.ai.Ai",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "isEnabled",
          "returnType": "boolean",
          "parameters": [],
          "description": "Allows an extension to determine if it has access to AI functionality.\n\n@return true if extension has access to AI functionality.",
          "isProfessionalOnly": false
        },
        {
          "name": "prompt",
          "returnType": "Prompt",
          "parameters": [],
          "description": "Access functionality related to AI chat prompts.\n\n@return An implementation of the Prompt interface which exposes chat prompt functionality.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ai.chat.Message": {
      "name": "Message",
      "fullName": "burp.api.montoya.ai.chat.Message",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "systemMessage",
          "returnType": "Message",
          "parameters": [
            {
              "type": "String",
              "name": "content"
            }
          ],
          "description": "Creates a system message.\n\n@param content message content\n\n@return the message",
          "isProfessionalOnly": false
        },
        {
          "name": "userMessage",
          "returnType": "Message",
          "parameters": [
            {
              "type": "String",
              "name": "content"
            }
          ],
          "description": "Creates a user message.\n\n@param content message content\n\n@return the message",
          "isProfessionalOnly": false
        },
        {
          "name": "assistantMessage",
          "returnType": "Message",
          "parameters": [
            {
              "type": "String",
              "name": "content"
            }
          ],
          "description": "Creates an assistant message.\n\n@param content message content\n\n@return the message",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ai.chat.Prompt": {
      "name": "Prompt",
      "fullName": "burp.api.montoya.ai.chat.Prompt",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "execute",
          "returnType": "PromptResponse",
          "parameters": [
            {
              "type": "String...",
              "name": "messages"
            }
          ],
          "description": "Evaluates a series of messages using the AI chat prompt.\n\n@param messages messages to evaluate\n\n@return A {@link PromptResponse} object with the response from the chat prompt.\n@throws PromptException if there is a problem executing the prompt.",
          "isProfessionalOnly": false
        },
        {
          "name": "execute",
          "returnType": "PromptResponse",
          "parameters": [
            {
              "type": "PromptOptions",
              "name": "options"
            },
            {
              "type": "String...",
              "name": "messages"
            }
          ],
          "description": "Evaluates a series of messages using the AI chat prompt using the provided prompt options.\n\n@param options prompt options\n@param messages messages to evaluate\n\n@return A {@link PromptResponse} object with the response from the chat prompt.\n@throws PromptException if there is a problem executing the prompt.",
          "isProfessionalOnly": false
        },
        {
          "name": "execute",
          "returnType": "PromptResponse",
          "parameters": [
            {
              "type": "Message...",
              "name": "messages"
            }
          ],
          "description": "Evaluates a series of messages using the AI chat prompt.\n\n@param messages messages to evaluate\n\n@return A {@link PromptResponse} object with the response from the chat prompt.\n@throws PromptException if there is a problem executing the prompt.",
          "isProfessionalOnly": false
        },
        {
          "name": "execute",
          "returnType": "PromptResponse",
          "parameters": [
            {
              "type": "PromptOptions",
              "name": "options"
            },
            {
              "type": "Message...",
              "name": "messages"
            }
          ],
          "description": "Evaluates a series of messages using the AI chat prompt using the provided prompt options.\n\n@param options prompt options\n@param messages messages to evaluate\n\n@return A {@link PromptResponse} object with the response from the chat prompt.\n@throws PromptException if there is a problem executing the prompt.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ai.chat.PromptOptions": {
      "name": "PromptOptions",
      "fullName": "burp.api.montoya.ai.chat.PromptOptions",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "withTemperature",
          "returnType": "PromptOptions",
          "parameters": [
            {
              "type": "double",
              "name": "temperature"
            }
          ],
          "description": "Specifies the prompt temperature to be used.\n\n@param temperature the temperature\n\n@return prompt options",
          "isProfessionalOnly": false
        },
        {
          "name": "promptOptions",
          "returnType": "PromptOptions",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ai.chat.PromptResponse": {
      "name": "PromptResponse",
      "fullName": "burp.api.montoya.ai.chat.PromptResponse",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "content",
          "returnType": "String",
          "parameters": [],
          "description": "Retrieves the content of the response from the prompt.\n\n@return prompt content",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.bambda.Bambda": {
      "name": "Bambda",
      "fullName": "burp.api.montoya.bambda.Bambda",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "importBambda",
          "returnType": "BambdaImportResult",
          "parameters": [
            {
              "type": "String",
              "name": "script"
            }
          ],
          "description": "This method can be used to import a Bambda.\nIf a script with the same ID already exists in the library, it will be replaced.\n\n@param script the Bambda script to import\n\n@return The {@link BambdaImportResult} containing the result of importing the Bambda.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.bambda.BambdaImportResult": {
      "name": "BambdaImportResult",
      "fullName": "burp.api.montoya.bambda.BambdaImportResult",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "status",
          "returnType": "Status",
          "parameters": [],
          "description": "The status of the Bambda after import\n\n@return the status",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.burpsuite.BurpSuite": {
      "name": "BurpSuite",
      "fullName": "burp.api.montoya.burpsuite.BurpSuite",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "version",
          "returnType": "Version",
          "parameters": [],
          "description": "Retrieve information about the version of Burp in which the\nextension is running. It can be used by extensions to dynamically adjust\ntheir behavior depending on the functionality and APIs supported by the\ncurrent version.\n\n@return The Burp {@link Version}.",
          "isProfessionalOnly": false
        },
        {
          "name": "exportProjectOptionsAsJson",
          "returnType": "String",
          "parameters": [
            {
              "type": "String...",
              "name": "paths"
            }
          ],
          "description": "Export current project-level configuration in JSON format.\nThis is the same format that can be saved and loaded via\nthe Burp user interface. To include only certain sections of the\nconfiguration, you can optionally supply the path to each section that\nshould be included, for example: \"project_options.connections\". If no\npaths are provided, then the entire configuration will be saved.\n\n@param paths A list of Strings representing the path to each\n             configuration section that should be included.\n\n@return A String representing the current configuration in JSON format.",
          "isProfessionalOnly": false
        },
        {
          "name": "importProjectOptionsFromJson",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "json"
            }
          ],
          "description": "Import a new project-level configuration from the JSON String provided.\nThis is the same format that can be saved and\nloaded via the Burp user interface. Partial configurations are\nacceptable, and any settings not specified will be left unmodified.\n<p>\nAny user-level configuration options contained in the input will be\nignored.\n\n@param json A JSON String containing the new configuration.",
          "isProfessionalOnly": false
        },
        {
          "name": "exportUserOptionsAsJson",
          "returnType": "String",
          "parameters": [
            {
              "type": "String...",
              "name": "paths"
            }
          ],
          "description": "Export current user-level configuration in JSON format.\nThis is the same format that can be saved and loaded via\nthe Burp user interface. To include only certain sections of the\nconfiguration, you can optionally supply the path to each section that\nshould be included, for example: \"user_options.connections\". If no\npaths are provided, then the entire configuration will be saved.\n\n@param paths A list of Strings representing the path to each\n             configuration section that should be included.\n\n@return A String representing the current configuration in JSON format.",
          "isProfessionalOnly": false
        },
        {
          "name": "importUserOptionsFromJson",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "json"
            }
          ],
          "description": "Import a new user-level configuration from the JSON String provided.\nThis is the same format that can be saved and\nloaded via the Burp user interface. Partial configurations are\nacceptable, and any settings not specified will be left unmodified.\n<p>\nAny project-level configuration options contained in the input will be\nignored.\n\n@param json A JSON String containing the new configuration.",
          "isProfessionalOnly": false
        },
        {
          "name": "shutdown",
          "returnType": "void",
          "parameters": [
            {
              "type": "ShutdownOptions...",
              "name": "options"
            }
          ],
          "description": "Shut down Burp programmatically.\n\n@param options The shutdown options for shutting down Burp\n               programmatically. For example {@link ShutdownOptions#PROMPT_USER} will\n               display a dialog to the user allowing them to confirm or cancel the\n               shutdown.",
          "isProfessionalOnly": false
        },
        {
          "name": "taskExecutionEngine",
          "returnType": "TaskExecutionEngine",
          "parameters": [],
          "description": "Access the functionality of the task execution engine.\n\n@return An implementation of the TaskExecutionEngine interface which exposes task execution engine functionality.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.burpsuite.TaskExecutionEngine": {
      "name": "TaskExecutionEngine",
      "fullName": "burp.api.montoya.burpsuite.TaskExecutionEngine",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getState",
          "returnType": "TaskExecutionEngineState",
          "parameters": [],
          "description": "Retrieves the current state of the task execution engine.\n\n@return current state",
          "isProfessionalOnly": false
        },
        {
          "name": "setState",
          "returnType": "void",
          "parameters": [
            {
              "type": "TaskExecutionEngineState",
              "name": "state"
            }
          ],
          "description": "Sets the task execution engine state\n\n@param state new state",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.Collaborator": {
      "name": "Collaborator",
      "fullName": "burp.api.montoya.collaborator.Collaborator",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "createClient",
          "returnType": "CollaboratorClient",
          "parameters": [],
          "description": "Create a new Burp Collaborator client\nthat can be used to generate Burp Collaborator payloads and poll the\nCollaborator server for any network interactions that result from using\nthose payloads.\n\n@return A new instance of {@link CollaboratorClient} that can be used to\ngenerate Collaborator payloads and retrieve interactions.",
          "isProfessionalOnly": false
        },
        {
          "name": "restoreClient",
          "returnType": "CollaboratorClient",
          "parameters": [
            {
              "type": "SecretKey",
              "name": "secretKey"
            }
          ],
          "description": "Restore a {@link CollaboratorClient} from a previous\nsession. This allows you to retrieve the interactions that were identified\nfrom a specific payloads.\n\n@param secretKey The key to restore the {@link CollaboratorClient} from the previous session.\n\n@return A new instance of {@link CollaboratorClient} that can be used to\ngenerate Collaborator payloads and retrieve interactions.",
          "isProfessionalOnly": false
        },
        {
          "name": "defaultPayloadGenerator",
          "returnType": "CollaboratorPayloadGenerator",
          "parameters": [],
          "description": "Obtain Burp's default Collaborator payload generator.\nThis enables you to generate Collaborator payloads that are linked to the Collaborator tab.\nAny interactions are shown in the Collaborator results tab that was open when the payload was generated.\n\n@return The current instance of Burp's default {@link CollaboratorPayloadGenerator}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": true,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.CollaboratorClient": {
      "name": "CollaboratorClient",
      "fullName": "burp.api.montoya.collaborator.CollaboratorClient",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "generatePayload",
          "returnType": "CollaboratorPayload",
          "parameters": [
            {
              "type": "PayloadOption...",
              "name": "options"
            }
          ],
          "description": "Generate new Burp Collaborator payloads. Options\ncan be specified to alter the way the payloads are generated. If no\noptions are specified, generated payloads will include the server\nlocation.\n\n@param options The optional payload options to apply\n\n@return The generated payload.\n\n@throws IllegalStateException if Burp Collaborator is disabled",
          "isProfessionalOnly": false
        },
        {
          "name": "generatePayload",
          "returnType": "CollaboratorPayload",
          "parameters": [
            {
              "type": "String",
              "name": "customData"
            },
            {
              "type": "PayloadOption...",
              "name": "options"
            }
          ],
          "description": "Generate new Burp Collaborator payloads with custom data.\nThe custom data can be retrieved from any {@link Interaction} triggered.\nOptions can be specified to alter the way the payloads are generated. If no\noptions are specified, generated payloads will include the server location.\n\n@param customData The custom data to add to the payload. Maximum size is 16 characters. Must be alphanumeric.\n@param options    The optional payload options to apply\n\n@return The generated payload.\n\n@throws IllegalStateException if Burp Collaborator is disabled",
          "isProfessionalOnly": false
        },
        {
          "name": "server",
          "returnType": "CollaboratorServer",
          "parameters": [],
          "description": "Retrieve the details of the Collaborator server\nassociated with this client.\n\n@return The Collaborator server details.\n\n@throws IllegalStateException if Burp Collaborator is disabled",
          "isProfessionalOnly": false
        },
        {
          "name": "getSecretKey",
          "returnType": "SecretKey",
          "parameters": [],
          "description": "Secret key that is associated with this client context.\nThe key can be used to re-create this client again with the interaction data if required.\n\n@return The {@link SecretKey} that is associated with this Collaborator client.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.CollaboratorPayload": {
      "name": "CollaboratorPayload",
      "fullName": "burp.api.montoya.collaborator.CollaboratorPayload",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "id",
          "returnType": "InteractionId",
          "parameters": [],
          "description": "Payload's interaction id.\n\n@return The interaction id of the payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "The payload.\n\n@return The payload string.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.CollaboratorPayloadGenerator": {
      "name": "CollaboratorPayloadGenerator",
      "fullName": "burp.api.montoya.collaborator.CollaboratorPayloadGenerator",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "generatePayload",
          "returnType": "CollaboratorPayload",
          "parameters": [
            {
              "type": "PayloadOption...",
              "name": "options"
            }
          ],
          "description": "Generate new Burp Collaborator payloads. Options\ncan be specified to alter the way the payloads are generated. If no\noptions are specified, generated payloads will include the server\nlocation.\n\n@param options The optional payload options to apply\n\n@return The generated payload.\n\n@throws IllegalStateException if Burp Collaborator is disabled",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.CollaboratorServer": {
      "name": "CollaboratorServer",
      "fullName": "burp.api.montoya.collaborator.CollaboratorServer",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "address",
          "returnType": "String",
          "parameters": [],
          "description": "Address of the Collaborator server.\n\n@return The hostname or IP address of the Collaborator server.",
          "isProfessionalOnly": false
        },
        {
          "name": "isLiteralAddress",
          "returnType": "boolean",
          "parameters": [],
          "description": "Indicates whether the server address is an IP address.\n\n@return {@code true} if the address is an IP address; {@code false}\notherwise.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.DnsDetails": {
      "name": "DnsDetails",
      "fullName": "burp.api.montoya.collaborator.DnsDetails",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "queryType",
          "returnType": "DnsQueryType",
          "parameters": [],
          "description": "DNS query type.\n\n@return The type of DNS query performed by the interaction.",
          "isProfessionalOnly": false
        },
        {
          "name": "query",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Raw DNS query.\n\n@return The raw DNS query sent to the Collaborator server.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.HttpDetails": {
      "name": "HttpDetails",
      "fullName": "burp.api.montoya.collaborator.HttpDetails",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "protocol",
          "returnType": "HttpProtocol",
          "parameters": [],
          "description": "HTTP protocol.\n\n@return The HTTP protocol used by the interaction.",
          "isProfessionalOnly": false
        },
        {
          "name": "requestResponse",
          "returnType": "HttpRequestResponse",
          "parameters": [],
          "description": "HTTP request and response.\n\n@return The HTTP request sent to the Collaborator server and the\nserver's response.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.Interaction": {
      "name": "Interaction",
      "fullName": "burp.api.montoya.collaborator.Interaction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "id",
          "returnType": "InteractionId",
          "parameters": [],
          "description": "Interaction id.\n\n@return The interaction id.",
          "isProfessionalOnly": false
        },
        {
          "name": "type",
          "returnType": "InteractionType",
          "parameters": [],
          "description": "Interaction Type.\n\n@return The type of interaction.",
          "isProfessionalOnly": false
        },
        {
          "name": "timeStamp",
          "returnType": "ZonedDateTime",
          "parameters": [],
          "description": "Timestamp of the interaction.\n\n@return The timestamp of the interaction.",
          "isProfessionalOnly": false
        },
        {
          "name": "clientIp",
          "returnType": "InetAddress",
          "parameters": [],
          "description": "Client IP address of the interaction.\n\n@return The IP address of the client performing the interaction.",
          "isProfessionalOnly": false
        },
        {
          "name": "clientPort",
          "returnType": "int",
          "parameters": [],
          "description": "Client port of the interaction.\n\n@return The port of the client initiating the interaction.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.InteractionFilter": {
      "name": "InteractionFilter",
      "fullName": "burp.api.montoya.collaborator.InteractionFilter",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "matches",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "CollaboratorServer",
              "name": "server"
            },
            {
              "type": "Interaction",
              "name": "interaction"
            }
          ],
          "description": "This method is invoked for each interaction retrieved from the\nCollaborator server and determines whether the interaction should be\nincluded in the list of interactions returned.\n\n@param server      The collaborator server that received the interaction.\n@param interaction The interaction details.\n\n@return {@code true} if the interaction should be included,\n{@code false} if not.",
          "isProfessionalOnly": false
        },
        {
          "name": "interactionIdFilter",
          "returnType": "InteractionFilter",
          "parameters": [
            {
              "type": "String",
              "name": "id"
            }
          ],
          "description": "Construct a InteractionFilter that matches any\ninteraction with the specified interaction id.\n\n@param id The interaction id.\n\n@return {@code true} if the interaction has the specified id,\n{@code false} if not.",
          "isProfessionalOnly": false
        },
        {
          "name": "interactionPayloadFilter",
          "returnType": "InteractionFilter",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "Construct an InteractionFilter that matches any\ninteraction with the specified payload.\n\n@param payload The payload.\n\n@return {@code true} if the interaction has the specified payload,\n{@code false} if not.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.InteractionId": {
      "name": "InteractionId",
      "fullName": "burp.api.montoya.collaborator.InteractionId",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Interaction id.\n\n@return The interaction id string.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.SecretKey": {
      "name": "SecretKey",
      "fullName": "burp.api.montoya.collaborator.SecretKey",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Secret key in string form.\n\n@return The base64 encoded secret key.",
          "isProfessionalOnly": false
        },
        {
          "name": "secretKey",
          "returnType": "SecretKey",
          "parameters": [
            {
              "type": "String",
              "name": "encodedKey"
            }
          ],
          "description": "@param encodedKey The base64 encoded raw secret key.\n\n@return An instance of {@link SecretKey} wrapping the provided secret key.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.collaborator.SmtpDetails": {
      "name": "SmtpDetails",
      "fullName": "burp.api.montoya.collaborator.SmtpDetails",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "protocol",
          "returnType": "SmtpProtocol",
          "parameters": [],
          "description": "SMTP protocol.\n\n@return The protocol used by the interaction.",
          "isProfessionalOnly": false
        },
        {
          "name": "conversation",
          "returnType": "String",
          "parameters": [],
          "description": "SMTP conversation.\n\n@return The SMTP conversation between the client and the Collaborator\nserver.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.comparer.Comparer": {
      "name": "Comparer",
      "fullName": "burp.api.montoya.comparer.Comparer",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "sendToComparer",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray...",
              "name": "data"
            }
          ],
          "description": "Send data to the Comparer tool.\n\n@param data The data to be sent to Comparer.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.Annotations": {
      "name": "Annotations",
      "fullName": "burp.api.montoya.core.Annotations",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "notes",
          "returnType": "String",
          "parameters": [],
          "description": "@return the notes",
          "isProfessionalOnly": false
        },
        {
          "name": "hasNotes",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if there are any notes for this HTTP request and response.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHighlightColor",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if there is a highlight color for this HTTP request and response.",
          "isProfessionalOnly": false
        },
        {
          "name": "setNotes",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "notes"
            }
          ],
          "description": "@param notes the notes to set on the current annotations",
          "isProfessionalOnly": false
        },
        {
          "name": "highlightColor",
          "returnType": "HighlightColor",
          "parameters": [],
          "description": "@return the highlight color;",
          "isProfessionalOnly": false
        },
        {
          "name": "setHighlightColor",
          "returnType": "void",
          "parameters": [
            {
              "type": "HighlightColor",
              "name": "highlightColor"
            }
          ],
          "description": "@param highlightColor the highlight color to set on the current annotations",
          "isProfessionalOnly": false
        },
        {
          "name": "withNotes",
          "returnType": "Annotations",
          "parameters": [
            {
              "type": "String",
              "name": "notes"
            }
          ],
          "description": "Create a copy of the annotations with new notes.\n\n@param notes The new notes.\n\n@return The new annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHighlightColor",
          "returnType": "Annotations",
          "parameters": [
            {
              "type": "HighlightColor",
              "name": "highlightColor"
            }
          ],
          "description": "Create a copy of the annotations with a new highlight color.\n\n@param highlightColor The new highlight color.\n\n@return The new annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "Create a new empty annotations.\n\n@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [
            {
              "type": "String",
              "name": "notes"
            }
          ],
          "description": "Create a new annotations with notes.\n\n@param notes The notes of the annotations\n\n@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [
            {
              "type": "HighlightColor",
              "name": "highlightColor"
            }
          ],
          "description": "Create a new annotations with a highlight color.\n\n@param highlightColor The highlight color of the annotations\n\n@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [
            {
              "type": "String",
              "name": "notes"
            },
            {
              "type": "HighlightColor",
              "name": "highlightColor"
            }
          ],
          "description": "Create a new annotations with notes and a highlight color.\n\n@param notes        The notes of the annotations\n@param highlightColor The highlight color of the annotations\n\n@return The annotations.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.ByteArray": {
      "name": "ByteArray",
      "fullName": "burp.api.montoya.core.ByteArray",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getByte",
          "returnType": "byte",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "Access the byte stored at the provided index.\n\n@param index Index of the byte to be retrieved.\n\n@return The byte at the index.",
          "isProfessionalOnly": false
        },
        {
          "name": "setByte",
          "returnType": "void",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            },
            {
              "type": "byte",
              "name": "value"
            }
          ],
          "description": "Sets the byte at the provided index to the provided byte.\n\n@param index Index of the byte to be set.\n@param value The byte to be set.",
          "isProfessionalOnly": false
        },
        {
          "name": "setByte",
          "returnType": "void",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            },
            {
              "type": "int",
              "name": "value"
            }
          ],
          "description": "Sets the byte at the provided index to the provided narrowed integer value.\n\n@param index Index of the byte to be set.\n@param value The integer value to be set after a narrowing primitive conversion to a byte.",
          "isProfessionalOnly": false
        },
        {
          "name": "setBytes",
          "returnType": "void",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            },
            {
              "type": "byte...",
              "name": "data"
            }
          ],
          "description": "Sets bytes starting at the specified index to the provided bytes.\n\n@param index The index of the first byte to set.\n@param data  The byte[] or sequence of bytes to be set.",
          "isProfessionalOnly": false
        },
        {
          "name": "setBytes",
          "returnType": "void",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            },
            {
              "type": "int...",
              "name": "data"
            }
          ],
          "description": "Sets bytes starting at the specified index to the provided integers after narrowing primitive conversion to bytes.\n\n@param index The index of the first byte to set.\n@param data  The int[] or the sequence of integers to be set after a narrowing primitive conversion to bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "setBytes",
          "returnType": "void",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            },
            {
              "type": "ByteArray",
              "name": "byteArray"
            }
          ],
          "description": "Sets bytes starting at the specified index to the provided bytes.\n\n@param index     The index of the first byte to set.\n@param byteArray The {@code ByteArray} object holding the provided bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "length",
          "returnType": "int",
          "parameters": [],
          "description": "Number of bytes stored in the {@code ByteArray}.\n\n@return Length of the {@code ByteArray}.",
          "isProfessionalOnly": false
        },
        {
          "name": "index",
          "returnType": "start",
          "parameters": [],
          "description": "New ByteArray with all bytes between the start index (inclusive) and the end index (exclusive).",
          "isProfessionalOnly": false
        },
        {
          "name": "subArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "@param startIndexInclusive The inclusive start index of retrieved range.\n@param endIndexExclusive   The exclusive end index of retrieved range.\n\n@return ByteArray containing all bytes in the specified range.",
          "isProfessionalOnly": false
        },
        {
          "name": "subArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "Range",
              "name": "range"
            }
          ],
          "description": "New ByteArray with all bytes in the specified range.\n\n@param range The {@link Range} of bytes to be returned.\n\n@return ByteArray containing all bytes in the specified range.",
          "isProfessionalOnly": false
        },
        {
          "name": "copy",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Create a copy of the {@code ByteArray}\n\n@return New {@code ByteArray} with a copy of the wrapped bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "copyToTempFile",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Create a copy of the {@code ByteArray} in temporary file.<br>\nThis method is used to save the {@code ByteArray} object to a temporary file,\nso that it is no longer held in memory. Extensions can use this method to convert\n{@code ByteArray} objects into a form suitable for long-term usage.\n\n@return A new {@code ByteArray} instance stored in temporary file.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "searchTerm"
            }
          ],
          "description": "@param searchTerm The value to be searched for.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            }
          ],
          "description": "@param searchTerm The value to be searched for.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "@param searchTerm          The value to be searched for.\n@param caseSensitive       Flags whether the search is case-sensitive.\n@param startIndexInclusive The inclusive start index for the search.\n@param endIndexExclusive   The exclusive end index for the search.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "@param searchTerm          The value to be searched for.\n@param caseSensitive       Flags whether the search is case-sensitive.\n@param startIndexInclusive The inclusive start index for the search.\n@param endIndexExclusive   The exclusive end index for the search.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the ByteArray for the first occurrence of a specified pattern.\n\n@param pattern The pattern to be matched.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "Searches the data in the ByteArray for the first occurrence of a specified pattern.\n\n@param pattern             The pattern to be matched.\n@param startIndexInclusive The inclusive start index for the search.\n@param endIndexExclusive   The exclusive end index for the search.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "searchTerm"
            }
          ],
          "description": "Searches the data in the ByteArray and counts all matches for a specified term.\n\n@param searchTerm The value to be searched for.\n\n@return The count of all matches of the pattern.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            }
          ],
          "description": "Searches the data in the ByteArray and counts all matches for a specified term.\n\n@param searchTerm The value to be searched for.\n\n@return The count of all matches of the pattern.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the ByteArray and counts all matches for a specified term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return The count of all matches of the pattern.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the ByteArray and counts all matches for a specified term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return The count of all matches of the pattern.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "Searches the data in the ByteArray and counts all matches for a specified term.\n\n@param searchTerm          The value to be searched for.\n@param caseSensitive       Flags whether the search is case-sensitive.\n@param startIndexInclusive The inclusive start index for the search.\n@param endIndexExclusive   The exclusive end index for the search.\n\n@return The count of all matches of the pattern within the specified bounds.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "Searches the data in the ByteArray and counts all matches for a specified term.\n\n@param searchTerm          The value to be searched for.\n@param caseSensitive       Flags whether the search is case-sensitive.\n@param startIndexInclusive The inclusive start index for the search.\n@param endIndexExclusive   The exclusive end index for the search.\n\n@return The count of all matches of the pattern within the specified bounds.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the ByteArray and counts all matches for a specified pattern.\n\n@param pattern The pattern to be matched.\n\n@return The count of all matches of the pattern within the specified bounds.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "Searches the data in the ByteArray and counts all matches for a specified pattern.\n\n@param pattern             The pattern to be matched.\n@param startIndexInclusive The inclusive start index for the search.\n@param endIndexExclusive   The exclusive end index for the search.\n\n@return The count of all matches of the pattern within the specified bounds.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Convert the bytes of the ByteArray into String form using the encoding specified by Burp Suite.\n\n@return The converted data in String form.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAppended",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "byte...",
              "name": "data"
            }
          ],
          "description": "Create a copy of the {@code ByteArray} appended with the provided bytes.\n\n@param data The byte[] or sequence of bytes to append.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAppended",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "int...",
              "name": "data"
            }
          ],
          "description": "Create a copy of the {@code ByteArray} appended with the provided integers after narrowing primitive conversion to bytes.\n\n@param data The int[] or sequence of integers to append after narrowing primitive conversion to bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAppended",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "String",
              "name": "text"
            }
          ],
          "description": "Create a copy of the {@code ByteArray} appended with the provided text as bytes.\n\n@param text The string to append.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAppended",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "byteArray"
            }
          ],
          "description": "Create a copy of the {@code ByteArray} appended with the provided ByteArray.\n\n@param byteArray The ByteArray to append.",
          "isProfessionalOnly": false
        },
        {
          "name": "byteArrayOfLength",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "int",
              "name": "length"
            }
          ],
          "description": "Create a new {@code ByteArray} with the provided length.<br>\n\n@param length array length.\n\n@return New {@code ByteArray} with the provided length.",
          "isProfessionalOnly": false
        },
        {
          "name": "byteArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "byte...",
              "name": "data"
            }
          ],
          "description": "Create a new {@code ByteArray} with the provided byte data.<br>\n\n@param data byte[] to wrap, or sequence of bytes to wrap.\n\n@return New {@code ByteArray} wrapping the provided byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "byteArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "int...",
              "name": "data"
            }
          ],
          "description": "Create a new {@code ByteArray} with the provided integers after a narrowing primitive conversion to bytes.<br>\n\n@param data int[] to wrap or sequence of integers to wrap.\n\n@return New {@code ByteArray} wrapping the provided data after a narrowing primitive conversion to bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "byteArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "String",
              "name": "text"
            }
          ],
          "description": "Create a new {@code ByteArray} from the provided text using the encoding specified by Burp Suite.<br>\n\n@param text the text for the byte array.\n\n@return New {@code ByteArray} holding a copy of the text as bytes.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.Marker": {
      "name": "Marker",
      "fullName": "burp.api.montoya.core.Marker",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "range",
          "returnType": "Range",
          "parameters": [],
          "description": "@return The range of the marker.",
          "isProfessionalOnly": false
        },
        {
          "name": "marker",
          "returnType": "Marker",
          "parameters": [
            {
              "type": "Range",
              "name": "range"
            }
          ],
          "description": "Create a marker object with a range.\n\n@param range The range of the marker.\n\n@return The marker with the range.",
          "isProfessionalOnly": false
        },
        {
          "name": "marker",
          "returnType": "Marker",
          "parameters": [
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "Create a marker object from two indices representing a range.\n\n@param startIndexInclusive The start index of the range inclusive of this value.\n@param endIndexExclusive   The end index of the range exclusive of this value.\n\n@return The marker with the range.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.Range": {
      "name": "Range",
      "fullName": "burp.api.montoya.core.Range",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "startIndexInclusive",
          "returnType": "int",
          "parameters": [],
          "description": "@return the inclusive start index",
          "isProfessionalOnly": false
        },
        {
          "name": "endIndexExclusive",
          "returnType": "int",
          "parameters": [],
          "description": "@return the exclusive end index",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "@param index The index to test.\n\n@return True if the index is in the range.",
          "isProfessionalOnly": false
        },
        {
          "name": "range",
          "returnType": "Range",
          "parameters": [
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "Create a range object from two indices.\n\n@param startIndexInclusive The start index of the range inclusive of this value.\n@param endIndexExclusive   The end index of the range exclusive of this value.\n\n@return The range.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.Registration": {
      "name": "Registration",
      "fullName": "burp.api.montoya.core.Registration",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "isRegistered",
          "returnType": "boolean",
          "parameters": [],
          "description": "Determines whether the object registered by the extension is currently registered.\n\n@return Returns {@code true} if the object is registered.",
          "isProfessionalOnly": false
        },
        {
          "name": "deregister",
          "returnType": "void",
          "parameters": [],
          "description": "Remove the object registered by the extension.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.Task": {
      "name": "Task",
      "fullName": "burp.api.montoya.core.Task",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "delete",
          "returnType": "void",
          "parameters": [],
          "description": "Delete the task.",
          "isProfessionalOnly": false
        },
        {
          "name": "statusMessage",
          "returnType": "String",
          "parameters": [],
          "description": "@return the current status message of the task",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.ToolSource": {
      "name": "ToolSource",
      "fullName": "burp.api.montoya.core.ToolSource",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "toolType",
          "returnType": "ToolType",
          "parameters": [],
          "description": "@return the tool type.",
          "isProfessionalOnly": false
        },
        {
          "name": "isFromTool",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "ToolType...",
              "name": "toolType"
            }
          ],
          "description": "Determine whether this tool source is from a specified tool.\n\n@param toolType The tool types to check.\n\n@return Returns {@code true} if this tool source is from any of the\nspecified tool types.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.Version": {
      "name": "Version",
      "fullName": "burp.api.montoya.core.Version",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "name",
          "returnType": "product",
          "parameters": [
            {
              "type": "e.g.",
              "name": "Burp"
            }
          ],
          "description": "The product name (e.g. Burp Suite Professional).",
          "isProfessionalOnly": false
        },
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "@return The product name.",
          "isProfessionalOnly": false
        },
        {
          "name": "version",
          "returnType": "major",
          "parameters": [
            {
              "type": "e.g.",
              "name": "2022.8"
            }
          ],
          "description": "The major version (e.g. 2022.8).",
          "isProfessionalOnly": false
        },
        {
          "name": "major",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "version",
          "returnType": "minor",
          "parameters": [
            {
              "type": "e.g.",
              "name": "1"
            }
          ],
          "description": "The minor version (e.g. 1).",
          "isProfessionalOnly": false
        },
        {
          "name": "minor",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "number",
          "returnType": "build",
          "parameters": [
            {
              "type": "e.g.",
              "name": "9320"
            }
          ],
          "description": "The build number (e.g. 9320).",
          "isProfessionalOnly": false
        },
        {
          "name": "build",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "buildNumber",
          "returnType": "long",
          "parameters": [],
          "description": "Build number for Burp Suite. You can use this to determine compatibility with different versions of Burp Suite. Do not parse this information, because the format of the number may change.\n\n@return The build number.",
          "isProfessionalOnly": false
        },
        {
          "name": "edition",
          "returnType": "BurpSuiteEdition",
          "parameters": [],
          "description": "The edition of Burp Suite\n\n@return The edition of Burp Suite",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "@return The human-readable version string.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.decoder.Decoder": {
      "name": "Decoder",
      "fullName": "burp.api.montoya.decoder.Decoder",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "sendToDecoder",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "data"
            }
          ],
          "description": "Send data to the Decoder tool.\n\n@param data The data to be sent to Decoder.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.extension.Extension": {
      "name": "Extension",
      "fullName": "burp.api.montoya.extension.Extension",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "setName",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "extensionName"
            }
          ],
          "description": "Set the display name for the current extension.<br/>\nThis will be displayed within the user interface for the Extensions tool and\nwill be used to identify persisted data.\n\n@param extensionName the name of the extension",
          "isProfessionalOnly": false
        },
        {
          "name": "filename",
          "returnType": "String",
          "parameters": [],
          "description": "Absolute path name of the file from which the current extension was loaded.\n\n@return The absolute path name of the file from which the current\nextension was loaded.",
          "isProfessionalOnly": false
        },
        {
          "name": "isBapp",
          "returnType": "boolean",
          "parameters": [],
          "description": "Determines whether the current extension was loaded as a BApp.\n\n@return Returns {@code true} if the current extension was loaded as\na BApp.",
          "isProfessionalOnly": false
        },
        {
          "name": "unload",
          "returnType": "void",
          "parameters": [],
          "description": "Unload the extension from Burp Suite.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerUnloadingHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ExtensionUnloadingHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will be notified of changes to the extension's state.<br>\n<b>Note:</b> Any extensions that start\nbackground threads or open system resources (such as files or database\nconnections) should register a listener and terminate threads / close\nresources when the extension is unloaded.\n\n@param handler An object created by the extension that implements the\n               {@link ExtensionUnloadingHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.extension.ExtensionUnloadingHandler": {
      "name": "ExtensionUnloadingHandler",
      "fullName": "burp.api.montoya.extension.ExtensionUnloadingHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "resources",
          "returnType": "system",
          "parameters": [
            {
              "type": "such",
              "name": "as"
            }
          ],
          "description": "register an extension unload handler. The handler will be notified when an\nextension is unloaded.<br>\n<b>Note:</b> Any extensions that start background\nthreads or open system resources (such as files or database connections)",
          "isProfessionalOnly": false
        },
        {
          "name": "extensionUnloaded",
          "returnType": "void",
          "parameters": [],
          "description": "This method is invoked when the extension is unloaded.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.Http": {
      "name": "Http",
      "fullName": "burp.api.montoya.http.Http",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "registerHttpHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "HttpHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will perform an action when a request is about to be sent\nor a response was received by any Burp tool.\n\n@param handler An object created by the extension that implements {@link HttpHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerSessionHandlingAction",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "SessionHandlingAction",
              "name": "sessionHandlingAction"
            }
          ],
          "description": "Register a custom session handler. Each registered handler will be available\nwithin the session handling rule UI for the user to select as a rule action. Users can choose to invoke a\nhandler directly in its own right, or following execution of a macro.\n\n@param sessionHandlingAction An object created by the extension that implements {@link SessionHandlingAction} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendRequest",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "Send HTTP requests and retrieve their responses.\n\n@param request The full HTTP request.\n\n@return An object that implements the {@link HttpRequestResponse} interface, and which the extension can query to obtain the details of the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendRequest",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "HttpMode",
              "name": "httpMode"
            }
          ],
          "description": "Send HTTP requests and retrieve their responses.\n\n@param request  The full HTTP request.\n@param httpMode An {@link HttpMode} enum value which indicates how a request should be sent.\n\n@return An object that implements the {@link HttpRequestResponse} interface, and which the extension can query to obtain the details of the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendRequest",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "HttpMode",
              "name": "httpMode"
            },
            {
              "type": "String",
              "name": "connectionId"
            }
          ],
          "description": "Send HTTP requests and retrieve their responses.\n\n@param request      The full HTTP request.\n@param httpMode     An {@link HttpMode} enum value which indicates how a request should be sent.\n@param connectionId The identifier for the connection you want to use.\n\n@return An object that implements the {@link HttpRequestResponse} interface, and which the extension can query to obtain the details of the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendRequest",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "RequestOptions",
              "name": "requestOptions"
            }
          ],
          "description": "Send HTTP request with specific request options and retrieve its response.\n\n@param request        The full HTTP request.\n@param requestOptions A {@link RequestOptions} value which indicates how a request should be sent.\n\n@return An object that implements the {@link HttpRequestResponse} interface, and which the extension can query to obtain the details of the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "createResponseKeywordsAnalyzer",
          "returnType": "ResponseKeywordsAnalyzer",
          "parameters": [
            {
              "type": "List<String>",
              "name": "keywords"
            }
          ],
          "description": "Create a new response keyword analyzer.\n\n@param keywords A list of keywords the analyzer will look for.\n\n@return A new {@link ResponseKeywordsAnalyzer} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "createResponseVariationsAnalyzer",
          "returnType": "ResponseVariationsAnalyzer",
          "parameters": [],
          "description": "Create a new response variations analyzer.\n\n@return A new {@link ResponseKeywordsAnalyzer} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookieJar",
          "returnType": "CookieJar",
          "parameters": [],
          "description": "Access the Cookie Jar.\n\n@return The {@link CookieJar} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.HttpService": {
      "name": "HttpService",
      "fullName": "burp.api.montoya.http.HttpService",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "host",
          "returnType": "String",
          "parameters": [],
          "description": "@return The hostname or IP address for the service.",
          "isProfessionalOnly": false
        },
        {
          "name": "port",
          "returnType": "int",
          "parameters": [],
          "description": "@return The port number for the service.",
          "isProfessionalOnly": false
        },
        {
          "name": "secure",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if a secure protocol is used for the connection, false otherwise.",
          "isProfessionalOnly": false
        },
        {
          "name": "ipAddress",
          "returnType": "String",
          "parameters": [],
          "description": "Dynamically resolve the host to an IP address.\n\n@return The IP address of the host.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "@return The {@code String} representation of the service.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [
            {
              "type": "String",
              "name": "baseUrl"
            }
          ],
          "description": "Create a new instance of {@code HttpService}.\n\n@param baseUrl The URL for the service.\n\n@return A new {@code HttpService} instance.\n\n@throws IllegalArgumentException If the provided URL is invalid.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [
            {
              "type": "String",
              "name": "host"
            },
            {
              "type": "boolean",
              "name": "secure"
            }
          ],
          "description": "Create a new instance of {@code HttpService}.\n\n@param host   The hostname or IP address for the service.\n@param secure True if a secure connection is to be used.\n\n@return A new {@code HttpService} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [
            {
              "type": "String",
              "name": "host"
            },
            {
              "type": "int",
              "name": "port"
            },
            {
              "type": "boolean",
              "name": "secure"
            }
          ],
          "description": "Create a new instance of {@code HttpService}.\n\n@param host   The hostname or IP address for the service.\n@param port   The port number for the service.\n@param secure True if a secure connection is to be used.\n\n@return A new {@code HttpService} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.RequestOptions": {
      "name": "RequestOptions",
      "fullName": "burp.api.montoya.http.RequestOptions",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "withHttpMode",
          "returnType": "RequestOptions",
          "parameters": [
            {
              "type": "HttpMode",
              "name": "httpMode"
            }
          ],
          "description": "Specify HTTP mode to be used when request sent.\n\n@param httpMode An {@link HttpMode} enum value which indicates how a request should be sent.\n\n@return request options",
          "isProfessionalOnly": false
        },
        {
          "name": "withConnectionId",
          "returnType": "RequestOptions",
          "parameters": [
            {
              "type": "String",
              "name": "connectionId"
            }
          ],
          "description": "Specify connectionId when sending request over specific connection.\n\n@param connectionId The connection identifier to use.\n\n@return request options",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpstreamTLSVerification",
          "returnType": "RequestOptions",
          "parameters": [],
          "description": "Enforce upstream TLS verification when request sent.\n\n@return request options",
          "isProfessionalOnly": false
        },
        {
          "name": "withRedirectionMode",
          "returnType": "RequestOptions",
          "parameters": [
            {
              "type": "RedirectionMode",
              "name": "redirectionMode"
            }
          ],
          "description": "Specify redirection mode to be used when request sent.\n\n@param redirectionMode A {@link RedirectionMode} enum value which indicates how redirects should be handled.\n\n@return request options",
          "isProfessionalOnly": false
        },
        {
          "name": "indicator",
          "returnType": "name",
          "parameters": [],
          "description": "Specify the server name indicator (SNI) to be used when request sent.",
          "isProfessionalOnly": false
        },
        {
          "name": "withServerNameIndicator",
          "returnType": "RequestOptions",
          "parameters": [
            {
              "type": "String",
              "name": "serverNameIndicator"
            }
          ],
          "description": "@param serverNameIndicator The server name indicator to use.\n\n@return request options",
          "isProfessionalOnly": false
        },
        {
          "name": "withResponseTimeout",
          "returnType": "RequestOptions",
          "parameters": [
            {
              "type": "long",
              "name": "timeoutMs"
            }
          ],
          "description": "Specify the timeout to be used while reading the response.\n\n@param timeoutMs timeout in ms. Zero indicates no timeout.\n\n@return request options",
          "isProfessionalOnly": false
        },
        {
          "name": "requestOptions",
          "returnType": "RequestOptions",
          "parameters": [],
          "description": "Use to obtain a new RequestOptions instance\n\n@return request options",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.RequestResponseSelection": {
      "name": "RequestResponseSelection",
      "fullName": "burp.api.montoya.http.RequestResponseSelection",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "requestSelection",
          "returnType": "Selection",
          "parameters": [],
          "description": "Provides access to user-selected content and its start and end points from the HTTP request.\n@return The selection for the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "responseSelection",
          "returnType": "Selection",
          "parameters": [],
          "description": "Provides access to user-selected content and its start and end points from the HTTP response.\n@return The selection for the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasRequestSelection",
          "returnType": "boolean",
          "parameters": [],
          "description": "Indicates whether user-selected content from the HTTP request is available.\n@return True if there is user-selected content from the HTTP request.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasResponseSelection",
          "returnType": "boolean",
          "parameters": [],
          "description": "Indicates whether user-selected content from the HTTP response is available.\n@return True if there is user-selected content from the HTTP response.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.handler.HttpHandler": {
      "name": "HttpHandler",
      "fullName": "burp.api.montoya.http.handler.HttpHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handleHttpRequestToBeSent",
          "returnType": "RequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequestToBeSent",
              "name": "requestToBeSent"
            }
          ],
          "description": "Invoked by Burp when an HTTP request is about to be sent.\n\n@param requestToBeSent information about the HTTP request that is going to be sent.\n\n@return An instance of {@link RequestToBeSentAction}.",
          "isProfessionalOnly": false
        },
        {
          "name": "handleHttpResponseReceived",
          "returnType": "ResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponseReceived",
              "name": "responseReceived"
            }
          ],
          "description": "Invoked by Burp when an HTTP response has been received.\n\n@param responseReceived information about HTTP response that was received.\n\n@return An instance of {@link ResponseReceivedAction}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.handler.HttpRequestToBeSent": {
      "name": "HttpRequestToBeSent",
      "fullName": "burp.api.montoya.http.handler.HttpRequestToBeSent",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "messageId",
          "returnType": "int",
          "parameters": [],
          "description": "@return The ID for this request to be sent. The corresponding response will have an identical ID.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return annotations for request/response",
          "isProfessionalOnly": false
        },
        {
          "name": "toolSource",
          "returnType": "ToolSource",
          "parameters": [],
          "description": "@return Indicates which Burp tool sent the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "isInScope",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the request is in-scope.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [],
          "description": "HTTP service for the request.\n\n@return An {@link HttpService} object containing details of the HTTP service.",
          "isProfessionalOnly": false
        },
        {
          "name": "url",
          "returnType": "String",
          "parameters": [],
          "description": "URL for the request.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return The URL in the request.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "method",
          "returnType": "String",
          "parameters": [],
          "description": "HTTP method for the request.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return The HTTP method used in the request.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "path",
          "returnType": "String",
          "parameters": [],
          "description": "Request path including the query parameters.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return the path and query parameters.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "pathWithoutQuery",
          "returnType": "String",
          "parameters": [],
          "description": "Request path excluding the query parameters.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return the path excluding query parameters.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpVersion",
          "returnType": "String",
          "parameters": [],
          "description": "HTTP Version text parsed from the request line for HTTP 1 messages.\nHTTP 2 messages will return \"HTTP/2\"\n\n@return Version string",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "@param header The header to check if it exists in the request.\n\n@return True if the header exists in the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to query within the request.\n\n@return True if a header exists in the request with the supplied name.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "@param name  The name of the header to check.\n@param value The value of the header to check.\n\n@return True if a header exists in the request that matches the name and value supplied.",
          "isProfessionalOnly": false
        },
        {
          "name": "header",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return An instance of {@link HttpHeader} that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "headerValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return The {@code String} value of the header that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameters",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the request has parameters.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameters",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@return True if the request has parameters of type {@link HttpParameterType}",
          "isProfessionalOnly": false
        },
        {
          "name": "parameter",
          "returnType": "ParsedHttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to find.\n@param type The type of the parameter to find.\n\n@return An instance of {@link ParsedHttpParameter} that matches the type and name specified. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "parameterValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to get the value from.\n@param type The type of the parameter to get the value from.\n\n@return The value of the parameter that matches the name and type specified. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameter",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to find.\n@param type The type of the parameter to find.\n\n@return {@code true} if a parameter exists that matches the name and type specified. {@code false} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameter",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpParameter",
              "name": "parameter"
            }
          ],
          "description": "@param parameter An instance of {@link HttpParameter} to match to an existing parameter.\n\n@return {@code true} if a parameter exists that matches the data within the provided {@link HttpParameter}. {@code false} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contentType",
          "returnType": "ContentType",
          "parameters": [],
          "description": "@return The detected content type of the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "body",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Body of a message as a byte array.\n\n@return The body of a message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyToString",
          "returnType": "String",
          "parameters": [],
          "description": "Body of a message as a {@code String}.\n\n@return The body of a message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyOffset",
          "returnType": "int",
          "parameters": [],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "toByteArray",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Message as a byte array.\n\n@return The message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Message as a {@code String}.\n\n@return The message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "copyToTempFile",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "Create a copy of the {@code HttpRequest} in temporary file.<br>\nThis method is used to save the {@code HttpRequest} object to a temporary file,\nso that it is no longer held in memory. Extensions can use this method to convert\n{@code HttpRequest} objects into a form suitable for long-term usage.\n\n@return A new {@code HttpRequest} instance stored in temporary file.",
          "isProfessionalOnly": false
        },
        {
          "name": "withService",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new service.\n\n@param service An {@link HttpService} reference to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withPath",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "path"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new path.\n\n@param path The path to use.\n\n@return A new {@code HttpRequest} instance with updated path.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMethod",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "method"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new method.\n\n@param method the method to use\n\n@return a new {@code HttpRequest} instance with updated method.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added or updated header.<br>\nIf the header exists in the request, it is updated.<br>\nIf the header doesn't exist in the request, it is added.\n\n@param header HTTP header to add or update.\n\n@return A new {@code HttpRequest} with the added or updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added or updated header.<br>\nIf the header exists in the request, it is updated.<br>\nIf the header doesn't exist in the request, it is added.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return A new {@code HttpRequest} with the added or updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withParameter",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the HTTP parameter.<br>\nIf the parameter exists in the request, it is updated.<br>\nIf the parameter doesn't exist in the request, it is added.\n\n@param parameters HTTP parameter to add or update.\n\n@return A new {@code HttpRequest} with the added or updated parameter.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added HTTP parameters.\n\n@param parameters HTTP parameters to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added HTTP parameters.\n\n@param parameters HTTP parameters to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the removed HTTP parameters.\n\n@param parameters HTTP parameters to remove.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the removed HTTP parameters.\n\n@param parameters HTTP parameters to remove.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated HTTP parameters.<br>\n\n@param parameters HTTP parameters to update.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated HTTP parameters.<br>\n\n@param parameters HTTP parameters to update.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withTransformationApplied",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpTransformation",
              "name": "transformation"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the transformation applied.\n\n@param transformation Transformation to apply.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the request\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the request\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added header.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return The updated HTTP request with the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added header.\n\n@param header The {@link HttpHeader} to add to the HTTP request.\n\n@return The updated HTTP request with the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated header.\n\n@param name  The name of the header to update the value of.\n@param value The new value of the specified HTTP header.\n\n@return The updated request containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated header.\n\n@param header The {@link HttpHeader} to update containing the new value.\n\n@return The updated request containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Removes an existing HTTP header from the current request.\n\n@param name The name of the HTTP header to remove from the request.\n\n@return The updated request containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Removes an existing HTTP header from the current request.\n\n@param header The {@link HttpHeader} to remove from the request.\n\n@return The updated request containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<Marker>",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "Marker...",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withDefaultHeaders",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "Create a copy of the {@code HttpRequest} with added default headers.\n\n@return a new {@link HttpRequest} with added default headers",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.handler.HttpResponseReceived": {
      "name": "HttpResponseReceived",
      "fullName": "burp.api.montoya.http.handler.HttpResponseReceived",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "messageId",
          "returnType": "int",
          "parameters": [],
          "description": "@return The ID for this response which is identical to the ID on the corresponding request.",
          "isProfessionalOnly": false
        },
        {
          "name": "initiatingRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return initiatingRequest The HTTP request that was sent.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return Annotations for request/response.",
          "isProfessionalOnly": false
        },
        {
          "name": "toolSource",
          "returnType": "ToolSource",
          "parameters": [],
          "description": "@return ToolSource which indicates which Burp tool sent the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "statusCode",
          "returnType": "short",
          "parameters": [],
          "description": "Obtain the HTTP status code contained in the response.\n\n@return HTTP status code.",
          "isProfessionalOnly": false
        },
        {
          "name": "reasonPhrase",
          "returnType": "String",
          "parameters": [],
          "description": "Obtain the HTTP reason phrase contained in the response for HTTP 1 messages.\nHTTP 2 messages will return a mapped phrase based on the status code.\n\n@return HTTP Reason phrase.",
          "isProfessionalOnly": false
        },
        {
          "name": "isStatusCodeClass",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "StatusCodeClass",
              "name": "statusCodeClass"
            }
          ],
          "description": "Test whether the status code is in the specified class.\n\n@param statusCodeClass The class of status code to test.\n\n@return True if the status code is in the class.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpVersion",
          "returnType": "String",
          "parameters": [],
          "description": "Return the HTTP Version text parsed from the response line for HTTP 1 messages.\nHTTP 2 messages will return \"HTTP/2\"\n\n@return Version string",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to query within the request.\n\n@return True if a header exists in the request with the supplied name.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "@param name  The name of the header to check.\n@param value The value of the header to check.\n\n@return True if a header exists in the request that matches the name and value supplied.",
          "isProfessionalOnly": false
        },
        {
          "name": "header",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return An instance of {@link HttpHeader} that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "headerValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return The {@code String} value of the header that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "body",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Body of a message as a byte array.\n\n@return The body of a message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyToString",
          "returnType": "String",
          "parameters": [],
          "description": "Body of a message as a {@code String}.\n\n@return The body of a message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyOffset",
          "returnType": "int",
          "parameters": [],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookie",
          "returnType": "Cookie",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to find.\n\n@return An instance of {@link Cookie} that matches the name provided. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookieValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to retrieve the value from.\n\n@return The value of the cookie that matches the name provided. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasCookie",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to check if it exists in the response.\n\n@return {@code true} If a cookie exists within the response that matches the name provided. {@code false} if not.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasCookie",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Cookie",
              "name": "cookie"
            }
          ],
          "description": "@param cookie An instance of {@link Cookie} to check if it exists in the response.\n\n@return {@code true} If a cookie exists within the response that matches the {@link Cookie} provided. {@code false} if not.",
          "isProfessionalOnly": false
        },
        {
          "name": "mimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as determined by Burp Suite.\n\n@return The MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "statedMimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as stated in the HTTP headers.\n\n@return The stated MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "inferredMimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as inferred from the contents of the HTTP message body.\n\n@return The inferred MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "toByteArray",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Message as a byte array.\n\n@return The message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Message as a {@code String}.\n\n@return The message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "withStatusCode",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "short",
              "name": "statusCode"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the provided status code.\n\n@param statusCode the new status code for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withReasonPhrase",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "reasonPhrase"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the new reason phrase.\n\n@param reasonPhrase the new reason phrase for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHttpVersion",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "httpVersion"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the new http version.\n\n@param httpVersion the new http version for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added header.\n\n@param header The {@link HttpHeader} to add to the response.\n\n@return The updated response containing the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the added header.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return The updated response containing the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the updated header.\n\n@param header The {@link HttpHeader} to update containing the new value.\n\n@return The updated response containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the updated header.\n\n@param name  The name of the header to update the value of.\n@param value The new value of the specified HTTP header.\n\n@return The updated response containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the removed header.\n\n@param header The {@link HttpHeader} to remove from the response.\n\n@return The updated response containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the removed header.\n\n@param name The name of the HTTP header to remove from the response.\n\n@return The updated response containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "List<Marker>",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@code MarkedHttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "Marker...",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@code MarkedHttpRequestResponse} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.handler.RequestToBeSentAction": {
      "name": "RequestToBeSentAction",
      "fullName": "burp.api.montoya.http.handler.RequestToBeSentAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "RequestAction",
          "parameters": [],
          "description": "@return the action.",
          "isProfessionalOnly": false
        },
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The HTTP request.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "RequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "Create a new instance of {@code RequestResult}. Annotations will not be modified.\n\n@param request An HTTP request.\n\n@return A new {@code RequestHandlerResult} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "RequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "Create a new instance of {@code RequestResult}.\n\n@param request     An HTTP request.\n@param annotations modified annotations.\n\n@return A new {@code RequestHandlerResult} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.handler.ResponseReceivedAction": {
      "name": "ResponseReceivedAction",
      "fullName": "burp.api.montoya.http.handler.ResponseReceivedAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "ResponseAction",
          "parameters": [],
          "description": "@return the action.",
          "isProfessionalOnly": false
        },
        {
          "name": "response",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "@return The HTTP response.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "Create a new instance of {@code ResponseResult}. Annotations will not be modified.\n\n@param response An HTTP response.\n\n@return A new {@code ResponseResult} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "Create a new instance of {@code ResponseResult}.\n\n@param response    An HTTP response.\n@param annotations modified annotations.\n\n@return A new {@code ResponseResult} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.handler.TimingData": {
      "name": "TimingData",
      "fullName": "burp.api.montoya.http.handler.TimingData",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "timeBetweenRequestSentAndStartOfResponse",
          "returnType": "Duration",
          "parameters": [],
          "description": "The time between when Burp sent the request and the start of the response being received.\n\n@return the duration or null if no response returned.",
          "isProfessionalOnly": false
        },
        {
          "name": "timeBetweenRequestSentAndEndOfResponse",
          "returnType": "Duration",
          "parameters": [],
          "description": "The time between when Burp sent the request and the end of the response being received.\n\n@return the duration or null if no response returned or the response never completes.",
          "isProfessionalOnly": false
        },
        {
          "name": "timeRequestSent",
          "returnType": "ZonedDateTime",
          "parameters": [],
          "description": "The time that Burp issued the request.\n\n@return the time that Burp issued the request.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.Cookie": {
      "name": "Cookie",
      "fullName": "burp.api.montoya.http.message.Cookie",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "@return The name of the cookie",
          "isProfessionalOnly": false
        },
        {
          "name": "value",
          "returnType": "String",
          "parameters": [],
          "description": "@return The value of the cookie.",
          "isProfessionalOnly": false
        },
        {
          "name": "domain",
          "returnType": "String",
          "parameters": [],
          "description": "did not explicitly set a domain attribute for the cookie.\n\n@return The domain for which the cookie is in scope.",
          "isProfessionalOnly": false
        },
        {
          "name": "path",
          "returnType": "String",
          "parameters": [],
          "description": "Path for which the cookie is in scope.\n\n@return The path for which the cookie is in scope or {@code null} if none is set.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookie",
          "returnType": "the",
          "parameters": [
            {
              "type": "for",
              "name": "non-persistent"
            }
          ],
          "description": "Expiration time for the cookie if available.\n\n@return The expiration time for the cookie (i.e., for non-persistent session cookies).",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.HttpHeader": {
      "name": "HttpHeader",
      "fullName": "burp.api.montoya.http.message.HttpHeader",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "@return The name of the header.",
          "isProfessionalOnly": false
        },
        {
          "name": "value",
          "returnType": "String",
          "parameters": [],
          "description": "@return The value of the header.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "@return The {@code String} representation of the header.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpHeader",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a new instance of {@code HttpHeader} from name and value.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return A new {@code HttpHeader} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpHeader",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "header"
            }
          ],
          "description": "Create a new instance of HttpHeader from a {@code String} header representation.\nIt will be parsed according to the HTTP/1.1 specification for headers.\n\n@param header The {@code String} header representation.\n\n@return A new {@code HttpHeader} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.HttpMessage": {
      "name": "HttpMessage",
      "fullName": "burp.api.montoya.http.message.HttpMessage",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "@param header The header to check if it exists in the request.\n\n@return True if the header exists in the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to query within the request.\n\n@return True if a header exists in the request with the supplied name.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "@param name  The name of the header to check.\n@param value The value of the header to check.\n\n@return True if a header exists in the request that matches the name and value supplied.",
          "isProfessionalOnly": false
        },
        {
          "name": "header",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return An instance of {@link HttpHeader} that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "headerValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return The {@code String} value of the header that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpVersion",
          "returnType": "String",
          "parameters": [],
          "description": "HTTP Version text parsed from the request or response line for HTTP 1 messages.\nHTTP 2 messages will return \"HTTP/2\"\n\n@return Version string",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyOffset",
          "returnType": "int",
          "parameters": [],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "body",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Body of a message as a byte array.\n\n@return The body of a message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyToString",
          "returnType": "String",
          "parameters": [],
          "description": "Body of a message as a {@code String}.\n\n@return The body of a message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "toByteArray",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Message as a byte array.\n\n@return The message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Message as a {@code String}.\n\n@return The message as a {@code String}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.HttpRequestResponse": {
      "name": "HttpRequestResponse",
      "fullName": "burp.api.montoya.http.message.HttpRequestResponse",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The HTTP request message.",
          "isProfessionalOnly": false
        },
        {
          "name": "response",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "@return The HTTP response message.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [],
          "description": "HTTP service for the request.\n\n@return An {@link HttpService} object containing details of the HTTP service.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "url",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "hasResponse",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if there is an HTTP response message.",
          "isProfessionalOnly": false
        },
        {
          "name": "contentType",
          "returnType": "ContentType",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "statusCode",
          "returnType": "short",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP request, response and notes for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP request, response and notes for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "copyToTempFile",
          "returnType": "HttpRequestResponse",
          "parameters": [],
          "description": "Create a copy of the {@code HttpRequestResponse} in temporary file.<br>\nThis method is used to save the {@code HttpRequestResponse} object to a temporary file,\nso that it is no longer held in memory. Extensions can use this method to convert\n{@code HttpRequest} objects into a form suitable for long-term usage.\n\n@return A new {@code ByteArray} instance stored in temporary file.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAnnotations",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "Create a copy of the {@code HttpRequestResponse} with the added annotations.\n\n@param annotations annotations to add.\n\n@return A new {@code HttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRequestMarkers",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "List<Marker>",
              "name": "requestMarkers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequestResponse} with the added request markers.\n\n@param requestMarkers Request markers to add.\n\n@return A new {@code HttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRequestMarkers",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "Marker...",
              "name": "requestMarkers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequestResponse} with the added request markers.\n\n@param requestMarkers Request markers to add.\n\n@return A new {@code HttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withResponseMarkers",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "List<Marker>",
              "name": "responseMarkers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequestResponse} with the added response markers.\n\n@param responseMarkers Response markers to add.\n\n@return A new {@code HttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withResponseMarkers",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "Marker...",
              "name": "responseMarkers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequestResponse} with the added response markers.\n\n@param responseMarkers Response markers to add.\n\n@return A new {@code HttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestResponse",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "Create a new instance of {@link HttpRequestResponse}.<br>\n\n@param request  The HTTP request.\n@param response The HTTP response.\n\n@return A new {@link HttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestResponse",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "httpRequest"
            },
            {
              "type": "HttpResponse",
              "name": "httpResponse"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "Create a new instance of {@link HttpRequestResponse}.<br>\n\n@param httpRequest  The HTTP request.\n@param httpResponse The HTTP response.\n@param annotations  annotations.\n\n@return A new {@link HttpRequestResponse} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.params.HttpParameter": {
      "name": "HttpParameter",
      "fullName": "burp.api.montoya.http.message.params.HttpParameter",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "type",
          "returnType": "HttpParameterType",
          "parameters": [],
          "description": "@return The parameter type.",
          "isProfessionalOnly": false
        },
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "@return The parameter name.",
          "isProfessionalOnly": false
        },
        {
          "name": "value",
          "returnType": "String",
          "parameters": [],
          "description": "@return The parameter value.",
          "isProfessionalOnly": false
        },
        {
          "name": "urlParameter",
          "returnType": "HttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a new Instance of {@code HttpParameter} with {@link HttpParameterType#URL} type.\n\n@param name  The parameter name.\n@param value The parameter value.\n\n@return A new {@code HttpParameter} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyParameter",
          "returnType": "HttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a new Instance of {@code HttpParameter} with {@link HttpParameterType#BODY} type.\n\n@param name  The parameter name.\n@param value The parameter value.\n\n@return A new {@code HttpParameter} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookieParameter",
          "returnType": "HttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a new Instance of {@code HttpParameter} with {@link HttpParameterType#COOKIE} type.\n\n@param name  The parameter name.\n@param value The parameter value.\n\n@return A new {@code HttpParameter} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "parameter",
          "returnType": "HttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "Create a new Instance of {@code HttpParameter} with the specified type.\n\n@param name  The parameter name.\n@param value The parameter value.\n@param type  The header type.\n\n@return A new {@code HttpParameter} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.params.ParsedHttpParameter": {
      "name": "ParsedHttpParameter",
      "fullName": "burp.api.montoya.http.message.params.ParsedHttpParameter",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "type",
          "returnType": "HttpParameterType",
          "parameters": [],
          "description": "@return The parameter type.",
          "isProfessionalOnly": false
        },
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "@return The parameter name.",
          "isProfessionalOnly": false
        },
        {
          "name": "value",
          "returnType": "String",
          "parameters": [],
          "description": "@return The parameter value.",
          "isProfessionalOnly": false
        },
        {
          "name": "nameOffsets",
          "returnType": "Range",
          "parameters": [],
          "description": "Offsets of the parameter name within the HTTP request.\n\n@return The parameter name offsets.",
          "isProfessionalOnly": false
        },
        {
          "name": "valueOffsets",
          "returnType": "Range",
          "parameters": [],
          "description": "Offsets of the parameter value within the HTTP request.\n\n@return The parameter value offsets.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.requests.HttpRequest": {
      "name": "HttpRequest",
      "fullName": "burp.api.montoya.http.message.requests.HttpRequest",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "isInScope",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the request is in-scope.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [],
          "description": "HTTP service for the request.\n\n@return An {@link HttpService} object containing details of the HTTP service.",
          "isProfessionalOnly": false
        },
        {
          "name": "url",
          "returnType": "String",
          "parameters": [],
          "description": "URL for the request.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return The URL in the request.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "method",
          "returnType": "String",
          "parameters": [],
          "description": "HTTP method for the request.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return The HTTP method used in the request.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "path",
          "returnType": "String",
          "parameters": [],
          "description": "Request path including the query parameters.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return the path and query parameters.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "query",
          "returnType": "String",
          "parameters": [],
          "description": "The query for the request.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return the query, or an empty string if there is none.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "pathWithoutQuery",
          "returnType": "String",
          "parameters": [],
          "description": "Request path excluding the query parameters.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return the path excluding query parameters.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "fileExtension",
          "returnType": "String",
          "parameters": [],
          "description": "The file extension for the request.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return the file extension, or an empty string if there is none.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "contentType",
          "returnType": "ContentType",
          "parameters": [],
          "description": "@return The detected content type of the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameters",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the request has parameters.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameters",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@return True if the request has parameters of type {@link HttpParameterType}",
          "isProfessionalOnly": false
        },
        {
          "name": "parameter",
          "returnType": "ParsedHttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to find.\n@param type The type of the parameter to find.\n\n@return An instance of {@link ParsedHttpParameter} that matches the type and name specified. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "parameterValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to get the value from.\n@param type The type of the parameter to get the value from.\n\n@return The value of the parameter that matches the name and type specified. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "parameter",
          "returnType": "ParsedHttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the parameter to find.\n\n@return An instance of {@link ParsedHttpParameter} that matches the name specified. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "parameterValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the parameter to get the value from.\n\n@return The value of the parameter that matches the name specified. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameter",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to find.\n@param type The type of the parameter to find.\n\n@return {@code true} if a parameter exists that matches the name and type specified. {@code false} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameter",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpParameter",
              "name": "parameter"
            }
          ],
          "description": "@param parameter An instance of {@link HttpParameter} to match to an existing parameter.\n\n@return {@code true} if a parameter exists that matches the data within the provided {@link HttpParameter}. {@code false} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "@param header The header to check if it exists in the request.\n\n@return True if the header exists in the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to query within the request.\n\n@return True if a header exists in the request with the supplied name.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "@param name  The name of the header to check.\n@param value The value of the header to check.\n\n@return True if a header exists in the request that matches the name and value supplied.",
          "isProfessionalOnly": false
        },
        {
          "name": "header",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return An instance of {@link HttpHeader} that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "headerValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return The {@code String} value of the header that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpVersion",
          "returnType": "String",
          "parameters": [],
          "description": "HTTP Version text parsed from the request or response line for HTTP 1 messages.\nHTTP 2 messages will return \"HTTP/2\"\n\n@return Version string",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyOffset",
          "returnType": "int",
          "parameters": [],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "body",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Body of a message as a byte array.\n\n@return The body of a message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyToString",
          "returnType": "String",
          "parameters": [],
          "description": "Body of a message as a {@code String}.\n\n@return The body of a message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "toByteArray",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Message as a byte array.\n\n@return The message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Message as a {@code String}.\n\n@return The message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "copyToTempFile",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "Create a copy of the {@code HttpRequest} in temporary file.<br>\nThis method is used to save the {@code HttpRequest} object to a temporary file,\nso that it is no longer held in memory. Extensions can use this method to convert\n{@code HttpRequest} objects into a form suitable for long-term usage.\n\n@return A new {@code HttpRequest} instance stored in temporary file.",
          "isProfessionalOnly": false
        },
        {
          "name": "withService",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new service.\n\n@param service An {@link HttpService} reference to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withPath",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "path"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new path.\n\n@param path The path to use.\n\n@return A new {@code HttpRequest} instance with updated path.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMethod",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "method"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new method.\n\n@param method the method to use\n\n@return a new {@code HttpRequest} instance with updated method.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added or updated header.<br>\nIf the header exists in the request, it is updated.<br>\nIf the header doesn't exist in the request, it is added.\n\n@param header HTTP header to add or update.\n\n@return A new {@code HttpRequest} with the added or updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added or updated header.<br>\nIf the header exists in the request, it is updated.<br>\nIf the header doesn't exist in the request, it is added.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return A new {@code HttpRequest} with the added or updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withParameter",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the HTTP parameter.<br>\nIf the parameter exists in the request, it is updated.<br>\nIf the parameter doesn't exist in the request, it is added.\n\n@param parameters HTTP parameter to add or update.\n\n@return A new {@code HttpRequest} with the added or updated parameter.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added HTTP parameters.\n\n@param parameters HTTP parameters to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added HTTP parameters.\n\n@param parameters HTTP parameters to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the removed HTTP parameters.\n\n@param parameters HTTP parameters to remove.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the removed HTTP parameters.\n\n@param parameters HTTP parameters to remove.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated HTTP parameters.<br>\n\n@param parameters HTTP parameters to update.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated HTTP parameters.<br>\n\n@param parameters HTTP parameters to update.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withTransformationApplied",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpTransformation",
              "name": "transformation"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the transformation applied.\n\n@param transformation Transformation to apply.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the request\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the request\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added header.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return The updated HTTP request with the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added header.\n\n@param header The {@link HttpHeader} to add to the HTTP request.\n\n@return The updated HTTP request with the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeaders",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added HTTP headers.<br>\n\n@param headers HTTP headers to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeaders",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader...",
              "name": "headers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added HTTP headers.<br>\n\n@param headers HTTP headers to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated header.\n\n@param name  The name of the header to update the value of.\n@param value The new value of the specified HTTP header.\n\n@return The updated request containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated header.\n\n@param header The {@link HttpHeader} to update containing the new value.\n\n@return The updated request containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeaders",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated HTTP headers.<br>\n\n@param headers HTTP headers to update.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeaders",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader...",
              "name": "headers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated HTTP headers.<br>\n\n@param headers HTTP headers to update.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Removes an existing HTTP header from the current request.\n\n@param name The name of the HTTP header to remove from the request.\n\n@return The updated request containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Removes an existing HTTP header from the current request.\n\n@param header The {@link HttpHeader} to remove from the request.\n\n@return The updated request containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeaders",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the removed HTTP headers.\n\n@param headers HTTP headers to remove.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeaders",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader...",
              "name": "headers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the removed HTTP headers.\n\n@param headers HTTP headers to remove.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<Marker>",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "Marker...",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withDefaultHeaders",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "Create a copy of the {@code HttpRequest} with added default headers.\n\n@return a new {@link HttpRequest} with added default headers",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "Create a new empty instance of {@link HttpRequest}.<br>\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "request"
            }
          ],
          "description": "Create a new instance of {@link HttpRequest}.<br>\n\n@param request The HTTP request\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "request"
            }
          ],
          "description": "Create a new instance of {@link HttpRequest}.<br>\n\n@param request The HTTP request.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "ByteArray",
              "name": "request"
            }
          ],
          "description": "Create a new instance of {@link HttpRequest}.<br>\n\n@param service An HTTP service for the request.\n@param request The HTTP request.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "String",
              "name": "request"
            }
          ],
          "description": "Create a new instance of {@link HttpRequest}.<br>\n\n@param service An HTTP service for the request.\n@param request The HTTP request.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestFromUrl",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "url"
            }
          ],
          "description": "Create a new instance of {@link HttpRequest}.<br>\n\n@param url A URL for the request.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "http2Request",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "List<HttpHeader>",
              "name": "headers"
            },
            {
              "type": "ByteArray",
              "name": "body"
            }
          ],
          "description": "Create a new instance of {@link HttpRequest} containing HTTP 2 headers and body.<br>\n\n@param service An HTTP service for the request.\n@param headers A list of HTTP 2 headers.\n@param body    A body of the HTTP 2 request.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "http2Request",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "List<HttpHeader>",
              "name": "headers"
            },
            {
              "type": "String",
              "name": "body"
            }
          ],
          "description": "Create a new instance of {@link HttpRequest} containing HTTP 2 headers and body.<br>\n\n@param service An HTTP service for the request.\n@param headers A list of HTTP 2 headers.\n@param body    A body of the HTTP 2 request.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.responses.HttpResponse": {
      "name": "HttpResponse",
      "fullName": "burp.api.montoya.http.message.responses.HttpResponse",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "statusCode",
          "returnType": "short",
          "parameters": [],
          "description": "Obtain the HTTP status code contained in the response.\n\n@return HTTP status code.",
          "isProfessionalOnly": false
        },
        {
          "name": "reasonPhrase",
          "returnType": "String",
          "parameters": [],
          "description": "Obtain the HTTP reason phrase contained in the response for HTTP 1 messages.\nHTTP 2 messages will return a mapped phrase based on the status code.\n\n@return HTTP Reason phrase.",
          "isProfessionalOnly": false
        },
        {
          "name": "isStatusCodeClass",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "StatusCodeClass",
              "name": "statusCodeClass"
            }
          ],
          "description": "Test whether the status code is in the specified class.\n\n@param statusCodeClass The class of status code to test.\n\n@return True if the status code is in the class.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookie",
          "returnType": "Cookie",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to find.\n\n@return An instance of {@link Cookie} that matches the name provided. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookieValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to retrieve the value from.\n\n@return The value of the cookie that matches the name provided. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasCookie",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to check if it exists in the response.\n\n@return {@code true} If a cookie exists within the response that matches the name provided. {@code false} if not.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasCookie",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Cookie",
              "name": "cookie"
            }
          ],
          "description": "@param cookie An instance of {@link Cookie} to check if it exists in the response.\n\n@return {@code true} If a cookie exists within the response that matches the {@link Cookie} provided. {@code false} if not.",
          "isProfessionalOnly": false
        },
        {
          "name": "mimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as determined by Burp Suite.\n\n@return The MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "statedMimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as stated in the HTTP headers.\n\n@return The stated MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "inferredMimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as inferred from the contents of the HTTP message body.\n\n@return The inferred MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "@param header The header to check if it exists in the request.\n\n@return True if the header exists in the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to query within the request.\n\n@return True if a header exists in the request with the supplied name.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "@param name  The name of the header to check.\n@param value The value of the header to check.\n\n@return True if a header exists in the request that matches the name and value supplied.",
          "isProfessionalOnly": false
        },
        {
          "name": "header",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return An instance of {@link HttpHeader} that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "headerValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return The {@code String} value of the header that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpVersion",
          "returnType": "String",
          "parameters": [],
          "description": "HTTP Version text parsed from the request or response line for HTTP 1 messages.\nHTTP 2 messages will return \"HTTP/2\"\n\n@return Version string",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyOffset",
          "returnType": "int",
          "parameters": [],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "body",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Body of a message as a byte array.\n\n@return The body of a message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyToString",
          "returnType": "String",
          "parameters": [],
          "description": "Body of a message as a {@code String}.\n\n@return The body of a message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "toByteArray",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Message as a byte array.\n\n@return The message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Message as a {@code String}.\n\n@return The message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "copyToTempFile",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "Create a copy of the {@code HttpResponse} in temporary file.<br>\nThis method is used to save the {@code HttpResponse} object to a temporary file,\nso that it is no longer held in memory. Extensions can use this method to convert\n{@code HttpResponse} objects into a form suitable for long-term usage.\n\n@return A new {@code HttpResponse} instance stored in temporary file.",
          "isProfessionalOnly": false
        },
        {
          "name": "withStatusCode",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "short",
              "name": "statusCode"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the provided status code.\n\n@param statusCode the new status code for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withReasonPhrase",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "reasonPhrase"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the new reason phrase.\n\n@param reasonPhrase the new reason phrase for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHttpVersion",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "httpVersion"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the new http version.\n\n@param httpVersion the new http version for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added header.\n\n@param header The {@link HttpHeader} to add to the response.\n\n@return The updated response containing the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the added header.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return The updated response containing the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeaders",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added HTTP headers.<br>\n\n@param headers HTTP headers to add.\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeaders",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader...",
              "name": "headers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added HTTP headers.<br>\n\n@param headers HTTP headers to add.\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the updated header.\n\n@param header The {@link HttpHeader} to update containing the new value.\n\n@return The updated response containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the updated header.\n\n@param name  The name of the header to update the value of.\n@param value The new value of the specified HTTP header.\n\n@return The updated response containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeaders",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the updated HTTP headers.<br>\n\n@param headers HTTP headers to update.\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeaders",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader...",
              "name": "headers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the updated HTTP headers.<br>\n\n@param headers HTTP headers to update.\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the removed header.\n\n@param header The {@link HttpHeader} to remove from the response.\n\n@return The updated response containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the removed header.\n\n@param name The name of the HTTP header to remove from the response.\n\n@return The updated response containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeaders",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the removed HTTP headers.\n\n@param headers HTTP headers to remove.\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeaders",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader...",
              "name": "headers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the removed HTTP headers.\n\n@param headers HTTP headers to remove.\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "List<Marker>",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@code MarkedHttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "Marker...",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@code MarkedHttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpResponse",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "Create a new empty instance of {@link HttpResponse}.<br>\n\n@return A new {@link HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpResponse",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "response"
            }
          ],
          "description": "Create a new instance of {@link HttpResponse}.<br>\n\n@param response The HTTP response.\n\n@return A new {@link HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpResponse",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "response"
            }
          ],
          "description": "Create a new instance of {@link HttpResponse}.<br>\n\n@param response The HTTP response.\n\n@return A new {@link HttpResponse} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.responses.analysis.Attribute": {
      "name": "Attribute",
      "fullName": "burp.api.montoya.http.message.responses.analysis.Attribute",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "type",
          "returnType": "AttributeType",
          "parameters": [],
          "description": "@return The attribute type.",
          "isProfessionalOnly": false
        },
        {
          "name": "value",
          "returnType": "int",
          "parameters": [],
          "description": "@return The attribute value.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.responses.analysis.KeywordCount": {
      "name": "KeywordCount",
      "fullName": "burp.api.montoya.http.message.responses.analysis.KeywordCount",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "keyword",
          "returnType": "String",
          "parameters": [],
          "description": "@return The keyword.",
          "isProfessionalOnly": false
        },
        {
          "name": "count",
          "returnType": "int",
          "parameters": [],
          "description": "@return The number of times the keyword appeared in a response.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.responses.analysis.ResponseKeywordsAnalyzer": {
      "name": "ResponseKeywordsAnalyzer",
      "fullName": "burp.api.montoya.http.message.responses.analysis.ResponseKeywordsAnalyzer",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "updateWith",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "Update the analysis based on an additional response.\n\n@param response The new response to include in the analysis.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.responses.analysis.ResponseVariationsAnalyzer": {
      "name": "ResponseVariationsAnalyzer",
      "fullName": "burp.api.montoya.http.message.responses.analysis.ResponseVariationsAnalyzer",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "updateWith",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "Update the analysis based on an additional response.\n\n@param response The new response to include in the analysis.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.sessions.ActionResult": {
      "name": "ActionResult",
      "fullName": "burp.api.montoya.http.sessions.ActionResult",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The HTTP request.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "actionResult",
          "returnType": "ActionResult",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "Create a new instance of {@code ActionResult}.<br>\nAnnotations will not be modified.\n\n@param request An HTTP request.\n\n@return A new {@code ActionResult} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "actionResult",
          "returnType": "ActionResult",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "Create a new instance of {@code ActionResult}.\n\n@param request     An HTTP request.\n@param annotations modified annotations.\n\n@return A new {@code ActionResult} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.sessions.CookieJar": {
      "name": "CookieJar",
      "fullName": "burp.api.montoya.http.sessions.CookieJar",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "set",
          "returnType": "is",
          "parameters": [
            {
              "type": "for",
              "name": "non-persistent"
            }
          ],
          "description": "Add a new HTTP cookie to the Cookie Jar.\n\n@param name       The name of the cookie.\n@param value      The value of the cookie.\n@param path       The path for which the cookie is in scope or {@code null} if none is set.\n@param domain     The domain for which the cookie is in scope.\n@param expiration The expiration time for the cookie, or {@code null} if none is set (i.e., for non-persistent session cookies).",
          "isProfessionalOnly": false
        },
        {
          "name": "setCookie",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            },
            {
              "type": "String",
              "name": "path"
            },
            {
              "type": "String",
              "name": "domain"
            },
            {
              "type": "ZonedDateTime",
              "name": "expiration"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.sessions.SessionHandlingAction": {
      "name": "SessionHandlingAction",
      "fullName": "burp.api.montoya.http.sessions.SessionHandlingAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "@return Action name",
          "isProfessionalOnly": false
        },
        {
          "name": "performAction",
          "returnType": "ActionResult",
          "parameters": [
            {
              "type": "SessionHandlingActionData",
              "name": "actionData"
            }
          ],
          "description": "Invoked when the session handling action should be executed.<br>\nThis may happen as an action in its own right, or as a sub-action following execution of a macro.<br>\nIt can issue additional requests of its own if necessary, and can return a modified base request in the {@link ActionResult}\n\n@param actionData {@link SessionHandlingActionData} The action can query this object to obtain details about the base request.\n\n@return A new {@link ActionResult} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.sessions.SessionHandlingActionData": {
      "name": "SessionHandlingActionData",
      "fullName": "burp.api.montoya.http.sessions.SessionHandlingActionData",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The base request that is currently being processed.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return The message annotation on the request.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.internal.MontoyaObjectFactory": {
      "name": "MontoyaObjectFactory",
      "fullName": "burp.api.montoya.internal.MontoyaObjectFactory",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [
            {
              "type": "String",
              "name": "baseUrl"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [
            {
              "type": "String",
              "name": "host"
            },
            {
              "type": "boolean",
              "name": "secure"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [
            {
              "type": "String",
              "name": "host"
            },
            {
              "type": "int",
              "name": "port"
            },
            {
              "type": "boolean",
              "name": "secure"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpHeader",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpHeader",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "header"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "parameter",
          "returnType": "HttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "ByteArray",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "String",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "http2Request",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "List<HttpHeader>",
              "name": "headers"
            },
            {
              "type": "String",
              "name": "body"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "http2Request",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "List<HttpHeader>",
              "name": "headers"
            },
            {
              "type": "ByteArray",
              "name": "body"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestFromUrl",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "url"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpResponse",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpResponse",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "response"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpResponse",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "response"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestResponse",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestResponse",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "range",
          "returnType": "Range",
          "parameters": [
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [
            {
              "type": "String",
              "name": "notes"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [
            {
              "type": "HighlightColor",
              "name": "highlightColor"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [
            {
              "type": "String",
              "name": "notes"
            },
            {
              "type": "HighlightColor",
              "name": "highlightColor"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "auditInsertionPoint",
          "returnType": "AuditInsertionPoint",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpRequest",
              "name": "baseRequest"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "auditIssueDefinition",
          "returnType": "AuditIssueDefinition",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "background"
            },
            {
              "type": "String",
              "name": "remediation"
            },
            {
              "type": "AuditIssueSeverity",
              "name": "typicalSeverity"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "selection",
          "returnType": "Selection",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "selectionContents"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "selection",
          "returnType": "Selection",
          "parameters": [
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "selection",
          "returnType": "Selection",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "selectionContents"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "secretKey",
          "returnType": "SecretKey",
          "parameters": [
            {
              "type": "String",
              "name": "encodedKey"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "proxyRequestReceivedAction",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            },
            {
              "type": "MessageReceivedAction",
              "name": "action"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "proxyRequestToBeSentAction",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            },
            {
              "type": "MessageToBeSentAction",
              "name": "action"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "proxyResponseToReturnAction",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            },
            {
              "type": "MessageToBeSentAction",
              "name": "action"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "proxyResponseReceivedAction",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            },
            {
              "type": "MessageReceivedAction",
              "name": "action"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestResult",
          "returnType": "RequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseResult",
          "returnType": "ResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "content"
            },
            {
              "type": "List<Range>",
              "name": "insertionPointOffsets"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "List<Range>",
              "name": "insertionPointOffsets"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "content"
            },
            {
              "type": "HttpRequestTemplateGenerationOptions",
              "name": "options"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "HttpRequestTemplateGenerationOptions",
              "name": "options"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "payloadProcessingResult",
          "returnType": "PayloadProcessingResult",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "processedPayload"
            },
            {
              "type": "PayloadProcessingAction",
              "name": "action"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "interactionIdFilter",
          "returnType": "InteractionFilter",
          "parameters": [
            {
              "type": "String",
              "name": "id"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "interactionPayloadFilter",
          "returnType": "InteractionFilter",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "prefixFilter",
          "returnType": "SiteMapFilter",
          "parameters": [
            {
              "type": "String",
              "name": "prefix"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "marker",
          "returnType": "Marker",
          "parameters": [
            {
              "type": "Range",
              "name": "range"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "marker",
          "returnType": "Marker",
          "parameters": [
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "byteArrayOfLength",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "int",
              "name": "length"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "byteArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "byte[]",
              "name": "bytes"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "byteArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "int[]",
              "name": "ints"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "byteArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "String",
              "name": "text"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWithTextMessage",
          "returnType": "TextMessageAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "dropTextMessage",
          "returnType": "TextMessageAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "textMessageAction",
          "returnType": "TextMessageAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            },
            {
              "type": "MessageAction",
              "name": "action"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWithBinaryMessage",
          "returnType": "BinaryMessageAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "dropBinaryMessage",
          "returnType": "BinaryMessageAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "binaryMessageAction",
          "returnType": "BinaryMessageAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            },
            {
              "type": "MessageAction",
              "name": "action"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "followUserRulesInitialProxyBinaryMessage",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "followUserRulesInitialProxyTextMessage",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "interceptInitialProxyBinaryMessage",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "interceptInitialProxyTextMessage",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "dropInitialProxyBinaryMessage",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "dropInitialProxyTextMessage",
          "returnType": "TextMessageReceivedAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotInterceptInitialProxyBinaryMessage",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotInterceptInitialProxyTextMessage",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWithFinalProxyBinaryMessage",
          "returnType": "BinaryMessageToBeSentAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWithFinalProxyTextMessage",
          "returnType": "TextMessageToBeSentAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "dropFinalProxyBinaryMessage",
          "returnType": "BinaryMessageToBeSentAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "dropFinalProxyTextMessage",
          "returnType": "TextMessageToBeSentAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "persistedObject",
          "returnType": "PersistedObject",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "auditResult",
          "returnType": "AuditResult",
          "parameters": [
            {
              "type": "List<AuditIssue>",
              "name": "auditIssues"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "auditResult",
          "returnType": "AuditResult",
          "parameters": [
            {
              "type": "AuditIssue...",
              "name": "auditIssues"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "auditConfiguration",
          "returnType": "AuditConfiguration",
          "parameters": [
            {
              "type": "BuiltInAuditConfiguration",
              "name": "builtInAuditConfiguration"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "crawlConfiguration",
          "returnType": "CrawlConfiguration",
          "parameters": [
            {
              "type": "String...",
              "name": "seedUrls"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "urlParameter",
          "returnType": "HttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyParameter",
          "returnType": "HttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "cookieParameter",
          "returnType": "HttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "GeneratedPayload",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "GeneratedPayload",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "payloadEnd",
          "returnType": "GeneratedPayload",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "usePayload",
          "returnType": "PayloadProcessingResult",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "processedPayload"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "skipPayload",
          "returnType": "PayloadProcessingResult",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestFinalInterceptResultContinueWith",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestFinalInterceptResultContinueWith",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestFinalInterceptResultDrop",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseFinalInterceptResultDrop",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseFinalInterceptResultContinueWith",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseFinalInterceptResultContinueWith",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseInitialInterceptResultIntercept",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseInitialInterceptResultIntercept",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseInitialInterceptResultDoNotIntercept",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseInitialInterceptResultDoNotIntercept",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseInitialInterceptResultFollowUserRules",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseInitialInterceptResultFollowUserRules",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseInitialInterceptResultDrop",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestInitialInterceptResultIntercept",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestInitialInterceptResultIntercept",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestInitialInterceptResultDoNotIntercept",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestInitialInterceptResultDoNotIntercept",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestInitialInterceptResultFollowUserRules",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestInitialInterceptResultFollowUserRules",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestInitialInterceptResultDrop",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "responseResult",
          "returnType": "ResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestResult",
          "returnType": "RequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "highlightColor",
          "returnType": "HighlightColor",
          "parameters": [
            {
              "type": "String",
              "name": "color"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "actionResult",
          "returnType": "ActionResult",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "actionResult",
          "returnType": "ActionResult",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "menu",
          "returnType": "Menu",
          "parameters": [
            {
              "type": "String",
              "name": "caption"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "basicMenuItem",
          "returnType": "BasicMenuItem",
          "parameters": [
            {
              "type": "String",
              "name": "caption"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestOptions",
          "returnType": "RequestOptions",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNode",
          "returnType": "JsonNode",
          "parameters": [
            {
              "type": "String",
              "name": "json"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonArrayNode",
          "returnType": "JsonArrayNode",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonArrayNode",
          "returnType": "JsonArrayNode",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonArrayNode",
          "returnType": "JsonArrayNode",
          "parameters": [
            {
              "type": "JsonNode...",
              "name": "values"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonBooleanNode",
          "returnType": "JsonBooleanNode",
          "parameters": [
            {
              "type": "boolean",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNullNode",
          "returnType": "JsonNullNode",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNumberNode",
          "returnType": "JsonNumberNode",
          "parameters": [
            {
              "type": "long",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNumberNode",
          "returnType": "JsonNumberNode",
          "parameters": [
            {
              "type": "double",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNumberNode",
          "returnType": "JsonNumberNode",
          "parameters": [
            {
              "type": "Number",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonObjectNode",
          "returnType": "JsonObjectNode",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonObjectNode",
          "returnType": "JsonObjectNode",
          "parameters": [
            {
              "type": "?",
              "name": "extends"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonStringNode",
          "returnType": "JsonStringNode",
          "parameters": [
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "promptOptions",
          "returnType": "PromptOptions",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "systemMessage",
          "returnType": "Message",
          "parameters": [
            {
              "type": "String",
              "name": "content"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "userMessage",
          "returnType": "Message",
          "parameters": [
            {
              "type": "String",
              "name": "content"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "assistantMessage",
          "returnType": "Message",
          "parameters": [
            {
              "type": "String",
              "name": "content"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "settingsPanel",
          "returnType": "SettingsPanelBuilder",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "integerSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "integerSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "int",
              "name": "defaultValue"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "booleanSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "booleanSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "boolean",
              "name": "defaultValue"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "stringSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "stringSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "defaultValue"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "listSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String...",
              "name": "values"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "listSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "List<String>",
              "name": "values"
            },
            {
              "type": "String",
              "name": "defaultValue"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "executeOptions",
          "returnType": "ExecuteOptions",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.AttackConfiguration": {
      "name": "AttackConfiguration",
      "fullName": "burp.api.montoya.intruder.AttackConfiguration",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "requestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [],
          "description": "HTTP request template and insertion point offsets in a\nform of an {@link HttpRequestTemplate} instance.\n\n@return An instance of {@link HttpRequestTemplate}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.GeneratedPayload": {
      "name": "GeneratedPayload",
      "fullName": "burp.api.montoya.intruder.GeneratedPayload",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "value",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return Payload value.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "GeneratedPayload",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "Create a new {@link GeneratedPayload} instance from a String payload value.\n\n@param payload String payload value.\n\n@return A new {@link GeneratedPayload} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "GeneratedPayload",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "Create a new {@link GeneratedPayload} instance from a byte array payload value.\n\n@param payload Byte array payload value.\n\n@return A new {@link GeneratedPayload} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "end",
          "returnType": "GeneratedPayload",
          "parameters": [],
          "description": "Create a new {@link GeneratedPayload} instance to signify there are no more payloads.\n\n@return A new {@link GeneratedPayload} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.HttpRequestTemplate": {
      "name": "HttpRequestTemplate",
      "fullName": "burp.api.montoya.intruder.HttpRequestTemplate",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "content",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return Content of the request template.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "List<Range>",
              "name": "insertionPointOffsets"
            }
          ],
          "description": "Create a new {@link HttpRequestTemplate} instance\nfrom an {@link HttpRequest} object and a list of insertion point offsets.\n\n@param request               An instance of {@link HttpRequest}.\n@param insertionPointOffsets List of insertion point offsets.\n\n@return A new instance of {@link HttpRequestTemplate}.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "content"
            },
            {
              "type": "List<Range>",
              "name": "insertionPointOffsets"
            }
          ],
          "description": "Create a new {@link HttpRequestTemplate} instance\nfrom an HTTP request in a byte array form and a list of insertion point offsets.\n\n@param content               An HTTP request in a byte array form.\n@param insertionPointOffsets List of insertion point offsets.\n\n@return A new instance of {@link HttpRequestTemplate}.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "HttpRequestTemplateGenerationOptions",
              "name": "options"
            }
          ],
          "description": "Create a new {@link HttpRequestTemplate} instance\nfrom an {@link HttpRequest} object with insertion point offsets at each URL, cookie, and body parameter position.\n\n@param request               An instance of {@link HttpRequest}.\n@param options               Options to use when generating the template.\n\n@return A new instance of {@link HttpRequestTemplate}.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpRequestTemplate",
          "returnType": "HttpRequestTemplate",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "content"
            },
            {
              "type": "HttpRequestTemplateGenerationOptions",
              "name": "options"
            }
          ],
          "description": "Create a new {@link HttpRequestTemplate} instance\nfrom an HTTP request in a byte array form with insertion point offsets at each URL, cookie, and body parameter position.\n\n@param content               An HTTP request in a byte array form.\n@param options               Options to use when generating the template.\n\n@return A new instance of {@link HttpRequestTemplate}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.Intruder": {
      "name": "Intruder",
      "fullName": "burp.api.montoya.intruder.Intruder",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "registerPayloadProcessor",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "PayloadProcessor",
              "name": "payloadProcessor"
            }
          ],
          "description": "Register a custom Intruder payload processor. Each registered\nprocessor will be available within the Intruder UI for the user to select as the\naction for a payload processing rule.\n\n@param payloadProcessor An object created by the extension that implements the\n                        {@link PayloadProcessor} interface.\n\n@return The {@link Registration} for the payload processor.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerPayloadGeneratorProvider",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "PayloadGeneratorProvider",
              "name": "payloadGeneratorProvider"
            }
          ],
          "description": "Register a provider for Intruder payloads. Each registered\nprovider will be available within the Intruder UI for the user to select as the payload\nsource for an attack. When this is selected, the provider will be asked to provide a\nnew instance of an {@link PayloadGenerator} object, which will be used to generate\npayloads for the attack.\n\n@param payloadGeneratorProvider An object created by the extension that implements the\n                                PayloadGeneratorProvider interface.\n\n@return The {@link Registration} for the payload generator provider.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendToIntruder",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "HttpRequestTemplate",
              "name": "requestTemplate"
            }
          ],
          "description": "Send an HTTP request to the Burp Intruder tool. The request\nwill be displayed in the user interface, and markers for attack payloads will be placed\ninto the locations specified in the provided {@link HttpRequestTemplate} object.\n\n@param service         An {@link HttpService} object that specifies the hostname, port and protocol\n                       of a remote server.\n@param requestTemplate An HTTP request template containing insertion point offsets.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendToIntruder",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "HttpRequestTemplate",
              "name": "requestTemplate"
            },
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Send an HTTP request to the Burp Intruder tool. The request\nwill be displayed in the user interface, and markers for attack payloads will be placed\ninto the locations specified in the provided {@link HttpRequestTemplate} object.\n\n@param service         An {@link HttpService} object that specifies the hostname, port and protocol\n                       of a remote server.\n@param requestTemplate An HTTP request template containing insertion point offsets.\n@param name            An optional caption which will appear on the Intruder\n                       tab containing the request. If this value is {@code null} then a default\n                       tab index will be displayed.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendToIntruder",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "Send an HTTP request to the Burp Intruder tool. The request\nwill be displayed in the user interface.\n\n@param request The full HTTP request.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendToIntruder",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Send an HTTP request to the Burp Intruder tool. The request\nwill be displayed in the user interface.\n\n@param request The full HTTP request.\n@param name    A name which will appear on the Intruder\n               tab containing the request. If this value is {@code null} then a default\n               tab index will be displayed.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.IntruderInsertionPoint": {
      "name": "IntruderInsertionPoint",
      "fullName": "burp.api.montoya.intruder.IntruderInsertionPoint",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "baseValue",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The base value of the insertion point.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.PayloadData": {
      "name": "PayloadData",
      "fullName": "burp.api.montoya.intruder.PayloadData",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "currentPayload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The value of the payload to be processed.",
          "isProfessionalOnly": false
        },
        {
          "name": "originalPayload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The value of the original payload prior to processing by any already-applied processing rules",
          "isProfessionalOnly": false
        },
        {
          "name": "insertionPoint",
          "returnType": "IntruderInsertionPoint",
          "parameters": [],
          "description": "@return The insertion point data.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.PayloadGenerator": {
      "name": "PayloadGenerator",
      "fullName": "burp.api.montoya.intruder.PayloadGenerator",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "generatePayloadFor",
          "returnType": "GeneratedPayload",
          "parameters": [
            {
              "type": "IntruderInsertionPoint",
              "name": "insertionPoint"
            }
          ],
          "description": "@param insertionPoint Insertion point for the payload.\n\n@return A generated Intruder payload.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.PayloadGeneratorProvider": {
      "name": "PayloadGeneratorProvider",
      "fullName": "burp.api.montoya.intruder.PayloadGeneratorProvider",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "displayName",
          "returnType": "String",
          "parameters": [],
          "description": "Name Burp will use when displaying the payload generator\nin a dropdown list in the UI.\n\n@return Name of the payload generator.",
          "isProfessionalOnly": false
        },
        {
          "name": "providePayloadGenerator",
          "returnType": "PayloadGenerator",
          "parameters": [
            {
              "type": "AttackConfiguration",
              "name": "attackConfiguration"
            }
          ],
          "description": "Invoked by Burp to obtain an instance of {@link PayloadGenerator}\nto add to Intruder.\n\n@param attackConfiguration An object containing information about the currently\n                           selected attack configuration tab.\n\n@return An instance of an object that implements the {@link PayloadGenerator} interface.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.PayloadProcessingResult": {
      "name": "PayloadProcessingResult",
      "fullName": "burp.api.montoya.intruder.PayloadProcessingResult",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "processedPayload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The current value of the processed payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "action",
          "returnType": "PayloadProcessingAction",
          "parameters": [],
          "description": "Invoked by Burp to see what action it should perform with the payload. If the value\nis {@link PayloadProcessingAction#USE_PAYLOAD}, Burp will use the payload in the attack or skip it\nif the value is {@link PayloadProcessingAction#SKIP_PAYLOAD}.\n\n@return Action to perform with the payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "usePayload",
          "returnType": "PayloadProcessingResult",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "processedPayload"
            }
          ],
          "description": "Create a new instance of {@link PayloadProcessingResult} with a\n{@link PayloadProcessingAction#USE_PAYLOAD} action.\n\n@param processedPayload Processed payload value\n\n@return A new {@link PayloadProcessingResult} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "skipPayload",
          "returnType": "PayloadProcessingResult",
          "parameters": [],
          "description": "Create a new instance of {@link PayloadProcessingResult} with a\n{@link PayloadProcessingAction#SKIP_PAYLOAD} action.\n\n@return A new {@link PayloadProcessingResult} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "payloadProcessingResult",
          "returnType": "PayloadProcessingResult",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "processedPayload"
            },
            {
              "type": "PayloadProcessingAction",
              "name": "action"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.intruder.PayloadProcessor": {
      "name": "PayloadProcessor",
      "fullName": "burp.api.montoya.intruder.PayloadProcessor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "displayName",
          "returnType": "String",
          "parameters": [],
          "description": "Name Burp will use when displaying the payload processor\nin a dropdown list in the UI.\n\n@return Name of the payload processor",
          "isProfessionalOnly": false
        },
        {
          "name": "processPayload",
          "returnType": "PayloadProcessingResult",
          "parameters": [
            {
              "type": "PayloadData",
              "name": "payloadData"
            }
          ],
          "description": "Invoked by Burp each time the processor should be applied to an Intruder payload.\n\n@param payloadData Information about the current payload to be processed\n\n@return The value of the processed payload.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.logger.LoggerCaptureHttpRequestResponse": {
      "name": "LoggerCaptureHttpRequestResponse",
      "fullName": "burp.api.montoya.logger.LoggerCaptureHttpRequestResponse",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The HTTP request message.",
          "isProfessionalOnly": false
        },
        {
          "name": "response",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "@return The HTTP response message.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [],
          "description": "HTTP service for the request.\n\n@return An {@link HttpService} object containing details of the HTTP service.",
          "isProfessionalOnly": false
        },
        {
          "name": "time",
          "returnType": "ZonedDateTime",
          "parameters": [],
          "description": "Returns the date and time at which Burp Logger received the request.\n\n@return The time at which Burp Logger received the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "mimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response or request, as determined by Burp Suite.\nIf there is no response the mime type will be determined from the request url.\n\n@return The MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasResponse",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if there is a response.",
          "isProfessionalOnly": false
        },
        {
          "name": "timingData",
          "returnType": "TimingData",
          "parameters": [],
          "description": "Retrieve the timing data associated with this request.\n\n@return The timing data.",
          "isProfessionalOnly": false
        },
        {
          "name": "pageTitle",
          "returnType": "String",
          "parameters": [],
          "description": "The page title for the response.\n\n@return The page title, or an empty string if none exists.",
          "isProfessionalOnly": false
        },
        {
          "name": "toolSource",
          "returnType": "ToolSource",
          "parameters": [],
          "description": "The tool that issued the request.\n\n@return ToolSource which indicates which Burp tool sent the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP request and response for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP request, response and notes for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "isSessionHandlingEvent",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the item is a session handling request.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.logger.LoggerHttpRequestResponse": {
      "name": "LoggerHttpRequestResponse",
      "fullName": "burp.api.montoya.logger.LoggerHttpRequestResponse",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The HTTP request message.",
          "isProfessionalOnly": false
        },
        {
          "name": "response",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "@return The HTTP response message.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [],
          "description": "HTTP service for the request.\n\n@return An {@link HttpService} object containing details of the HTTP service.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "time",
          "returnType": "ZonedDateTime",
          "parameters": [],
          "description": "Returns the date and time at which Burp Logger received the request.\n\n@return The time at which Burp Logger received the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "mimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response or request, as determined by Burp Suite.\nIf there is no response the mime type will be determined from the request url.\n\n@return The MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasResponse",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if there is a response.",
          "isProfessionalOnly": false
        },
        {
          "name": "timingData",
          "returnType": "TimingData",
          "parameters": [],
          "description": "Retrieve the timing data associated with this request.\n\n@return The timing data.",
          "isProfessionalOnly": false
        },
        {
          "name": "pageTitle",
          "returnType": "String",
          "parameters": [],
          "description": "The page title for the response.\n\n@return The page title, or an empty string if none exists.",
          "isProfessionalOnly": false
        },
        {
          "name": "toolSource",
          "returnType": "ToolSource",
          "parameters": [],
          "description": "The tool that issued the request.\n\n@return ToolSource which indicates which Burp tool sent the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP request, response and notes for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP request, response and notes for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.logging.Logging": {
      "name": "Logging",
      "fullName": "burp.api.montoya.logging.Logging",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "output",
          "returnType": "PrintStream",
          "parameters": [],
          "description": "Obtain the current extension's standard output\nstream. Extensions should write all output to this stream, allowing the\nBurp user to configure how that output is handled from within the UI.\n\n@return The extension's standard output stream.\n\n@deprecated Use {@link burp.api.montoya.logging.Logging#logToOutput} instead.",
          "isProfessionalOnly": false
        },
        {
          "name": "error",
          "returnType": "PrintStream",
          "parameters": [],
          "description": "Obtain the current extension's standard error\nstream. Extensions should write all error messages to this stream,\nallowing the Burp user to configure how that output is handled from\nwithin the UI.\n\n@return The extension's standard error stream.\n\n@deprecated Use {@link burp.api.montoya.logging.Logging#logToError} instead.",
          "isProfessionalOnly": false
        },
        {
          "name": "logToOutput",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This method prints a line of output to the current extension's standard\noutput stream.\n\n@param message The message to print.",
          "isProfessionalOnly": false
        },
        {
          "name": "logToOutput",
          "returnType": "void",
          "parameters": [
            {
              "type": "Object",
              "name": "object"
            }
          ],
          "description": "This method prints a line of output to the current extension's standard\noutput stream.\n\n@param object The object to print.",
          "isProfessionalOnly": false
        },
        {
          "name": "logToError",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This method prints a line of output to the current extension's standard\nerror stream.\n\n@param message The message to print.",
          "isProfessionalOnly": false
        },
        {
          "name": "logToError",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            },
            {
              "type": "Throwable",
              "name": "cause"
            }
          ],
          "description": "This method prints a message and a stack trace to the current extension's standard\nerror stream.\n\n@param message The message to print.\n@param cause The cause of the error being logged.",
          "isProfessionalOnly": false
        },
        {
          "name": "logToError",
          "returnType": "void",
          "parameters": [
            {
              "type": "Throwable",
              "name": "cause"
            }
          ],
          "description": "This method prints a stack trace to the current extension's standard\nerror stream.\n\n@param cause The cause of the error being logged.",
          "isProfessionalOnly": false
        },
        {
          "name": "raiseDebugEvent",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This method can be used to display a debug event in the Burp Suite\nevent log.\n\n@param message The debug message to display.",
          "isProfessionalOnly": false
        },
        {
          "name": "raiseInfoEvent",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This method can be used to display an informational event in the Burp\nSuite event log.\n\n@param message The informational message to display.",
          "isProfessionalOnly": false
        },
        {
          "name": "raiseErrorEvent",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This method can be used to display an error event in the Burp Suite\nevent log.\n\n@param message The error message to display.",
          "isProfessionalOnly": false
        },
        {
          "name": "raiseCriticalEvent",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This method can be used to display a critical event in the Burp Suite\nevent log.\n\n@param message The critical message to display.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.organizer.Organizer": {
      "name": "Organizer",
      "fullName": "burp.api.montoya.organizer.Organizer",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "sendToOrganizer",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "This method can be used to send an HTTP request to the Burp Organizer\ntool.\n\n@param request The full HTTP request.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendToOrganizer",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "This method can be used to send an HTTP request and response to the Burp\nOrganizer tool.\n\n@param requestResponse The full HTTP request and response.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.organizer.OrganizerItem": {
      "name": "OrganizerItem",
      "fullName": "burp.api.montoya.organizer.OrganizerItem",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "id",
          "returnType": "int",
          "parameters": [],
          "description": "Returns the index number of the Organizer item.\n\n@return The item index number.",
          "isProfessionalOnly": false
        },
        {
          "name": "status",
          "returnType": "OrganizerItemStatus",
          "parameters": [],
          "description": "Returns the item status.\n\n@return The item status.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.organizer.OrganizerItemFilter": {
      "name": "OrganizerItemFilter",
      "fullName": "burp.api.montoya.organizer.OrganizerItemFilter",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "matches",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "OrganizerItem",
              "name": "item"
            }
          ],
          "description": "Determines whether the item should be included in the filtered results.\nThe method is called for each item in Organizer.\n\n@param item The {@link OrganizerItem} to evaluate.\n\n@return {@code true} if the item should be included in the results; {@code false} otherwise.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.persistence.PersistedList": {
      "name": "PersistedList",
      "fullName": "burp.api.montoya.persistence.PersistedList",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.persistence.PersistedObject": {
      "name": "PersistedObject",
      "fullName": "burp.api.montoya.persistence.PersistedObject",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getChildObject",
          "returnType": "PersistedObject",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link PersistedObject} associated with the specified key,\nor {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value to which the specified key is mapped, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setChildObject",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedObject",
              "name": "childObject"
            }
          ],
          "description": "Associates the specified {@link PersistedObject} with the specified key in this map.\nIf the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key         The key with which the specified child object is to be associated.\n@param childObject The {@link PersistedObject} to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteChildObject",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedObject}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getString",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link String} associated with the specified key,\nor {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setString",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link String} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteString",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link String}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getBoolean",
          "returnType": "Boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Boolean} associated with the specified key,\nor {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setBoolean",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "boolean",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code boolean} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value that is currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteBoolean",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link Boolean}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getByte",
          "returnType": "Byte",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Byte} associated with the specified key,\nor {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setByte",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "byte",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code byte} with the specified key in this map\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value that is currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteByte",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link Byte}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getShort",
          "returnType": "Short",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Short} associated with the specified key,\nor {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setShort",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "short",
              "name": "value"
            }
          ],
          "description": "Associates the specified short with the specified key in this map\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteShort",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link Short}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getInteger",
          "returnType": "Integer",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Integer} associated with the specified key,\nor {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setInteger",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "int",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code int}  with the specified key in this map\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value that is currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteInteger",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link Integer}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getLong",
          "returnType": "Long",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Long} associated with the specified key,\nor {@code null}} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setLong",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "long",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code long} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value that is currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteLong",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link Long}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getByteArray",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link ByteArray} associated with the specified key,\nor {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setByteArray",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "ByteArray",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code ByteArray} with the specified key in this map.\nIf the map previously contained a mapping for the key, the old value is replaced\nby the specified value.\n\n@param key  The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteByteArray",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link ByteArray}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getHttpRequest",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link HttpRequest} associated with the specified key,\nor {@code null} if this map contains no mapping for the key\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setHttpRequest",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "HttpRequest",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link HttpRequest} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteHttpRequest",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link HttpRequest}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setHttpRequestList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<HttpRequest>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@link HttpRequest} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             The methods of this list operate on the underlying persisted data.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteHttpRequestList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link HttpRequest}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getHttpResponse",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link HttpResponse} associated with the specified key,\nor {@code null} if this map contains no mapping for the key\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setHttpResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "HttpResponse",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link HttpResponse} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteHttpResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link HttpResponse}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setHttpResponseList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<HttpResponse>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@link HttpResponse} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             The methods of this list operate on the underlying persisted data.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteHttpResponseList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link HttpResponse}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getHttpRequestResponse",
          "returnType": "HttpRequestResponse",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link HttpRequestResponse} associated with the specified key,\nor {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setHttpRequestResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "HttpRequestResponse",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link HttpRequestResponse} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteHttpRequestResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link HttpRequestResponse}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setHttpRequestResponseList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<HttpRequestResponse>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@link HttpRequestResponse} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             The methods of this list operate on the underlying persisted data.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteHttpRequestResponseList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link HttpRequestResponse}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setBooleanList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<Boolean>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@link Boolean} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteBooleanList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link Boolean}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setShortList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<Short>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@link Short} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteShortList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link Short}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setIntegerList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<Integer>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@link Integer} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteIntegerList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link Integer}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setLongList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<Long>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@link Long} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteLongList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link Long}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setStringList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<String>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@link String} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteStringList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link String}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "setByteArrayList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "PersistedList<ByteArray>",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link PersistedList} of {@code ByteArray} with the specified key in this map.\nIf the map previously contained a mapping for the key,\nthe old value is replaced by the specified value.\n\n@param key   The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             The methods of this list operate on the underlying persisted data.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteByteArrayList",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping of the specified key to the {@link PersistedList} of {@link ByteArray}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "persistedObject",
          "returnType": "PersistedObject",
          "parameters": [],
          "description": "Create a new instance of {@link PersistedObject}.\n\n@return A new {@link PersistedObject} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": true,
      "documentation": ""
    },
    "burp.api.montoya.persistence.Persistence": {
      "name": "Persistence",
      "fullName": "burp.api.montoya.persistence.Persistence",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "extensionData",
          "returnType": "PersistedObject",
          "parameters": [],
          "description": "Access data storage functionality in the Burp project. When Burp is started without\na project file, the data is stored in memory.\n\n@return An implementation of the {@link PersistedObject} interface\nthat stores data in either the project file or memory.",
          "isProfessionalOnly": false
        },
        {
          "name": "preferences",
          "returnType": "Preferences",
          "parameters": [],
          "description": "Access Java preference store functionality\nin a way that survives reloads of the extension and of Burp Suite.\n\n@return An implementation of the {@link Preferences} interface\nthat stores data in a persistent way.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.persistence.Preferences": {
      "name": "Preferences",
      "fullName": "burp.api.montoya.persistence.Preferences",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getString",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link String} associated with the specified key.\nReturns {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setString",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@link String} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key  The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteString",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link String}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getBoolean",
          "returnType": "Boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Boolean} associated with the specified key.\nReturns {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setBoolean",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "boolean",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code boolean} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key  The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value that is currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteBoolean",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link Boolean}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getByte",
          "returnType": "Byte",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Byte} associated with the specified key.\nReturns {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setByte",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "byte",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code byte} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key  The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value that is currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteByte",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link Byte}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getShort",
          "returnType": "Short",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Short} associated with the specified key.\nReturns {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setShort",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "short",
              "name": "value"
            }
          ],
          "description": "Associates the specified short with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key  The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value that is currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteShort",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link Short}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getInteger",
          "returnType": "Integer",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Integer} associated with the specified key.\nReturns {@code null} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setInteger",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "int",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code int}  with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key  The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value that is currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteInteger",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link Integer}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        },
        {
          "name": "getLong",
          "returnType": "Long",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "{@link Long} associated with the specified key,\nor {@code null}} if this map contains no mapping for the key.\n\n@param key The key whose associated value is to be returned.\n\n@return The value associated with the specified key, or\n{@code null} if this map contains no mapping for the key.",
          "isProfessionalOnly": false
        },
        {
          "name": "setLong",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "long",
              "name": "value"
            }
          ],
          "description": "Associates the specified {@code long} with the specified key in this map.\nThis is an optional operation.  If the map previously contained a mapping for\nthe key, the old value is replaced by the specified value.\n\n@param key  The key with which the specified value is to be associated.\n@param value The value to be associated with the specified key.\n             If this value is {@code null} then any value currently mapped to the specified key is removed.",
          "isProfessionalOnly": false
        },
        {
          "name": "deleteLong",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the mapping from the specified key to the {@link Long}.\n\n@param key The key whose mapping is to be deleted.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.project.Project": {
      "name": "Project",
      "fullName": "burp.api.montoya.project.Project",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "Retrieves the name of the current project.\n\n@return name",
          "isProfessionalOnly": false
        },
        {
          "name": "id",
          "returnType": "String",
          "parameters": [],
          "description": "Retrieves the unique identifier of the current project.\n\n@return identifier",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.Proxy": {
      "name": "Proxy",
      "fullName": "burp.api.montoya.proxy.Proxy",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "enableIntercept",
          "returnType": "void",
          "parameters": [],
          "description": "This method enables the master interception for Burp Proxy.",
          "isProfessionalOnly": false
        },
        {
          "name": "disableIntercept",
          "returnType": "void",
          "parameters": [],
          "description": "This method disables the master interception for Burp Proxy.",
          "isProfessionalOnly": false
        },
        {
          "name": "isInterceptEnabled",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if master interception for Burp Proxy is enabled.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerRequestHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ProxyRequestHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will be notified of\nrequests being processed by the Proxy tool. Extensions can perform\ncustom analysis or modification of these messages, and control in-UI\nmessage interception.\n\n@param handler An object created by the extension that implements the\n               {@link ProxyRequestHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerResponseHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ProxyResponseHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will be notified of\nresponses being processed by the Proxy tool. Extensions can perform\ncustom analysis or modification of these messages, and control in-UI\nmessage interception.\n\n@param handler An object created by the extension that implements the\n               {@link ProxyResponseHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerWebSocketCreationHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ProxyWebSocketCreationHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will be invoked whenever a WebSocket is being created by the Proxy tool.\n\n@param handler An object created by the extension that implements {@link ProxyWebSocketCreationHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.ProxyHistoryFilter": {
      "name": "ProxyHistoryFilter",
      "fullName": "burp.api.montoya.proxy.ProxyHistoryFilter",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "matches",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "ProxyHttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "This method is invoked for every item in the Proxy history to determine\nwhether it should be included in the filtered list of items.\n\n@param requestResponse A {@link ProxyHttpRequestResponse} object that\n                       extensions can use to determine whether the item should be included in\n                       the filtered list of items.\n\n@return Return {@code true} if the item should be included in the\nfiltered list of items.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.ProxyHttpRequestResponse": {
      "name": "ProxyHttpRequestResponse",
      "fullName": "burp.api.montoya.proxy.ProxyHttpRequestResponse",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "finalRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "This method retrieves the HTTP request that was sent by Burp Proxy.\n\n@return The {@link HttpRequest} that was sent by Burp Proxy.",
          "isProfessionalOnly": false
        },
        {
          "name": "response",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "originalResponse",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "This method retrieves the HTTP response that was received by Burp Proxy.\n\n@return The {@link HttpResponse} that was received by Burp Proxy.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "This method retrieves the annotations for the request/response pair.\n\n@return The {@link Annotations} for the request/response pair.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [],
          "description": "HTTP service for the request.\n\n@return An {@link HttpService} object containing details of the HTTP service.",
          "isProfessionalOnly": false
        },
        {
          "name": "url",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "method",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "path",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "host",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "port",
          "returnType": "int",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "secure",
          "returnType": "boolean",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "httpServiceString",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestHttpVersion",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "requestBody",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "edited",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the request or response was edited",
          "isProfessionalOnly": false
        },
        {
          "name": "time",
          "returnType": "ZonedDateTime",
          "parameters": [],
          "description": "Returns the date and time at which Burp Proxy received the request.\n\n@return The time at which Burp Proxy received the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "listenerPort",
          "returnType": "int",
          "parameters": [],
          "description": "Returns the proxy listener port used for the request/response.\n\n@return the port number used by the proxy listener",
          "isProfessionalOnly": false
        },
        {
          "name": "mimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response or request, as determined by Burp Suite.\nIf there is no response the mime type will be determined from the request url.\n\n@return The MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasResponse",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if there is a response.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP request and response for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP request and response for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "timingData",
          "returnType": "TimingData",
          "parameters": [],
          "description": "Retrieve the timing data associated with this request and response.\n\n@return The timing data.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.ProxyWebSocketHistoryFilter": {
      "name": "ProxyWebSocketHistoryFilter",
      "fullName": "burp.api.montoya.proxy.ProxyWebSocketHistoryFilter",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "matches",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "ProxyWebSocketMessage",
              "name": "message"
            }
          ],
          "description": "This method is invoked for every item in the Proxy WebSockets history to determine\nwhether it should be included in the filtered list of items.\n\n@param message A {@link ProxyWebSocketMessage} object that\n                       extensions can use to determine whether the item should be included in\n                       the filtered list of items.\n\n@return Return {@code true} if the item should be included in the\nfiltered list of items.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.ProxyWebSocketMessage": {
      "name": "ProxyWebSocketMessage",
      "fullName": "burp.api.montoya.proxy.ProxyWebSocketMessage",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "This method retrieves the annotations for the message.\n\n@return The {@link Annotations} for the message.",
          "isProfessionalOnly": false
        },
        {
          "name": "direction",
          "returnType": "Direction",
          "parameters": [],
          "description": "@return The direction of the message.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return WebSocket payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "upgradeRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The {@link HttpRequest} used to create the WebSocket.",
          "isProfessionalOnly": false
        },
        {
          "name": "webSocketId",
          "returnType": "int",
          "parameters": [],
          "description": "@return The ID for the web socket connection that this message is linked to.",
          "isProfessionalOnly": false
        },
        {
          "name": "time",
          "returnType": "ZonedDateTime",
          "parameters": [],
          "description": "@return An instance of {@link ZonedDateTime} indicating when the message was sent.",
          "isProfessionalOnly": false
        },
        {
          "name": "editedPayload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The payload after modification from tools and extensions. {@code null} if the message has not been edited.",
          "isProfessionalOnly": false
        },
        {
          "name": "listenerPort",
          "returnType": "int",
          "parameters": [],
          "description": "Returns the proxy listener port used for the web socket message.\n\n@return the port number used by the proxy listener",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the web socket message for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the web socket message for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.InterceptedHttpMessage": {
      "name": "InterceptedHttpMessage",
      "fullName": "burp.api.montoya.proxy.http.InterceptedHttpMessage",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "messageId",
          "returnType": "int",
          "parameters": [],
          "description": "This method retrieves a unique ID for this request/response.\n\n@return An identifier that is unique to a single request/response pair.\nExtensions can use this to correlate details of requests and responses\nand perform processing on the response message accordingly.",
          "isProfessionalOnly": false
        },
        {
          "name": "listenerInterface",
          "returnType": "String",
          "parameters": [],
          "description": "This method retrieves the name of the Burp Proxy listener that is\nprocessing the intercepted message.\n\n@return The name of the Burp Proxy listener that is processing the\nintercepted message. The format is the same as that shown in the Proxy\nListeners UI - for example, \"127.0.0.1:8080\".",
          "isProfessionalOnly": false
        },
        {
          "name": "sourceIpAddress",
          "returnType": "InetAddress",
          "parameters": [],
          "description": "This method retrieves the IP address for the source of the intercepted\nmessage.\n\n@return The IP address for the source of the intercepted message.",
          "isProfessionalOnly": false
        },
        {
          "name": "destinationIpAddress",
          "returnType": "InetAddress",
          "parameters": [],
          "description": "This method retrieves the IP address for the destination of the\nintercepted message.\n\n@return The IP address for the destination of the intercepted message.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.InterceptedRequest": {
      "name": "InterceptedRequest",
      "fullName": "burp.api.montoya.proxy.http.InterceptedRequest",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return Annotations for request/response.",
          "isProfessionalOnly": false
        },
        {
          "name": "isInScope",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the request is in-scope.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [],
          "description": "HTTP service for the request.\n\n@return An {@link HttpService} object containing details of the HTTP service.",
          "isProfessionalOnly": false
        },
        {
          "name": "url",
          "returnType": "String",
          "parameters": [],
          "description": "URL for the request.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return The URL in the request.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "method",
          "returnType": "String",
          "parameters": [],
          "description": "HTTP method for the request.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return The HTTP method used in the request.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "path",
          "returnType": "String",
          "parameters": [],
          "description": "Request path including the query parameters.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return the path and query parameters.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "pathWithoutQuery",
          "returnType": "String",
          "parameters": [],
          "description": "Request path excluding the query parameters.\nIf the request is malformed, then a {@link MalformedRequestException} is thrown.\n\n@return the path excluding query parameters.\n@throws MalformedRequestException if request is malformed.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpVersion",
          "returnType": "String",
          "parameters": [],
          "description": "HTTP Version text parsed from the request line for HTTP 1 messages.\nHTTP 2 messages will return \"HTTP/2\"\n\n@return Version string",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "@param header The header to check if it exists in the request.\n\n@return True if the header exists in the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to query within the request.\n\n@return True if a header exists in the request with the supplied name.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "@param name  The name of the header to check.\n@param value The value of the header to check.\n\n@return True if a header exists in the request that matches the name and value supplied.",
          "isProfessionalOnly": false
        },
        {
          "name": "header",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return An instance of {@link HttpHeader} that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "headerValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return The {@code String} value of the header that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameters",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the request has parameters.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameters",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@return True if the request has parameters of type {@link HttpParameterType}",
          "isProfessionalOnly": false
        },
        {
          "name": "parameter",
          "returnType": "ParsedHttpParameter",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to find.\n@param type The type of the parameter to find.\n\n@return An instance of {@link ParsedHttpParameter} that matches the type and name specified. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "parameterValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to get the value from.\n@param type The type of the parameter to get the value from.\n\n@return The value of the parameter that matches the name and type specified. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameter",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpParameterType",
              "name": "type"
            }
          ],
          "description": "@param name The name of the parameter to find.\n@param type The type of the parameter to find.\n\n@return {@code true} if a parameter exists that matches the name and type specified. {@code false} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasParameter",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpParameter",
              "name": "parameter"
            }
          ],
          "description": "@param parameter An instance of {@link HttpParameter} to match to an existing parameter.\n\n@return {@code true} if a parameter exists that matches the data within the provided {@link HttpParameter}. {@code false} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contentType",
          "returnType": "ContentType",
          "parameters": [],
          "description": "@return The detected content type of the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "body",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Body of a message as a byte array.\n\n@return The body of a message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyToString",
          "returnType": "String",
          "parameters": [],
          "description": "Body of a message as a {@code String}.\n\n@return The body of a message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyOffset",
          "returnType": "int",
          "parameters": [],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "toByteArray",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Message as a byte array.\n\n@return The message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Message as a {@code String}.\n\n@return The message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "copyToTempFile",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "Create a copy of the {@code HttpRequest} in temporary file.<br>\nThis method is used to save the {@code HttpRequest} object to a temporary file,\nso that it is no longer held in memory. Extensions can use this method to convert\n{@code HttpRequest} objects into a form suitable for long-term usage.\n\n@return A new {@code HttpRequest} instance stored in temporary file.",
          "isProfessionalOnly": false
        },
        {
          "name": "withService",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new service.\n\n@param service An {@link HttpService} reference to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withPath",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "path"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new path.\n\n@param path The path to use.\n\n@return A new {@code HttpRequest} instance with updated path.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMethod",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "method"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the new method.\n\n@param method the method to use\n\n@return a new {@code HttpRequest} instance with updated method.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added or updated header.<br>\nIf the header exists in the request, it is updated.<br>\nIf the header doesn't exist in the request, it is added.\n\n@param header HTTP header to add or update.\n\n@return A new {@code HttpRequest} with the added or updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added or updated header.<br>\nIf the header exists in the request, it is updated.<br>\nIf the header doesn't exist in the request, it is added.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return A new {@code HttpRequest} with the added or updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withParameter",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the HTTP parameter.<br>\nIf the parameter exists in the request, it is updated.<br>\nIf the parameter doesn't exist in the request, it is added.\n\n@param parameters HTTP parameter to add or update.\n\n@return A new {@code HttpRequest} with the added or updated parameter.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added HTTP parameters.\n\n@param parameters HTTP parameters to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added HTTP parameters.\n\n@param parameters HTTP parameters to add.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the removed HTTP parameters.\n\n@param parameters HTTP parameters to remove.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the removed HTTP parameters.\n\n@param parameters HTTP parameters to remove.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated HTTP parameters.<br>\n\n@param parameters HTTP parameters to update.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedParameters",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpParameter...",
              "name": "parameters"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated HTTP parameters.<br>\n\n@param parameters HTTP parameters to update.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withTransformationApplied",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpTransformation",
              "name": "transformation"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the transformation applied.\n\n@param transformation Transformation to apply.\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the request\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the request\n\n@return A new {@code HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added header.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return The updated HTTP request with the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added header.\n\n@param header The {@link HttpHeader} to add to the HTTP request.\n\n@return The updated HTTP request with the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated header.\n\n@param name  The name of the header to update the value of.\n@param value The new value of the specified HTTP header.\n\n@return The updated request containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the updated header.\n\n@param header The {@link HttpHeader} to update containing the new value.\n\n@return The updated request containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Removes an existing HTTP header from the current request.\n\n@param name The name of the HTTP header to remove from the request.\n\n@return The updated request containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Removes an existing HTTP header from the current request.\n\n@param header The {@link HttpHeader} to remove from the request.\n\n@return The updated request containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "List<Marker>",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "Marker...",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpRequest} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@link HttpRequest} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withDefaultHeaders",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "Create a copy of the {@code HttpRequest} with added default headers.\n\n@return a new {@link HttpRequest} with added default headers",
          "isProfessionalOnly": false
        },
        {
          "name": "messageId",
          "returnType": "int",
          "parameters": [],
          "description": "This method retrieves a unique ID for this request/response.\n\n@return An identifier that is unique to a single request/response pair.\nExtensions can use this to correlate details of requests and responses\nand perform processing on the response message accordingly.",
          "isProfessionalOnly": false
        },
        {
          "name": "listenerInterface",
          "returnType": "String",
          "parameters": [],
          "description": "This method retrieves the name of the Burp Proxy listener that is\nprocessing the intercepted message.\n\n@return The name of the Burp Proxy listener that is processing the\nintercepted message. The format is the same as that shown in the Proxy\nListeners UI - for example, \"127.0.0.1:8080\".",
          "isProfessionalOnly": false
        },
        {
          "name": "sourceIpAddress",
          "returnType": "InetAddress",
          "parameters": [],
          "description": "This method retrieves the IP address for the source of the intercepted\nmessage.\n\n@return The IP address for the source of the intercepted message.",
          "isProfessionalOnly": false
        },
        {
          "name": "destinationIpAddress",
          "returnType": "InetAddress",
          "parameters": [],
          "description": "This method retrieves the IP address for the destination of the\nintercepted message.\n\n@return The IP address for the destination of the intercepted message.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.InterceptedResponse": {
      "name": "InterceptedResponse",
      "fullName": "burp.api.montoya.proxy.http.InterceptedResponse",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "initiatingRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return initiatingRequest The HTTP request that was sent.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return Annotations for request/response.",
          "isProfessionalOnly": false
        },
        {
          "name": "statusCode",
          "returnType": "short",
          "parameters": [],
          "description": "Obtain the HTTP status code contained in the response.\n\n@return HTTP status code.",
          "isProfessionalOnly": false
        },
        {
          "name": "reasonPhrase",
          "returnType": "String",
          "parameters": [],
          "description": "Obtain the HTTP reason phrase contained in the response for HTTP 1 messages.\nHTTP 2 messages will return a mapped phrase based on the status code.\n\n@return HTTP Reason phrase.",
          "isProfessionalOnly": false
        },
        {
          "name": "isStatusCodeClass",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "StatusCodeClass",
              "name": "statusCodeClass"
            }
          ],
          "description": "Test whether the status code is in the specified class.\n\n@param statusCodeClass The class of status code to test.\n\n@return True if the status code is in the class.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpVersion",
          "returnType": "String",
          "parameters": [],
          "description": "Return the HTTP Version text parsed from the response line for HTTP 1 messages.\nHTTP 2 messages will return \"HTTP/2\"\n\n@return Version string",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to query within the request.\n\n@return True if a header exists in the request with the supplied name.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasHeader",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "@param name  The name of the header to check.\n@param value The value of the header to check.\n\n@return True if a header exists in the request that matches the name and value supplied.",
          "isProfessionalOnly": false
        },
        {
          "name": "header",
          "returnType": "HttpHeader",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return An instance of {@link HttpHeader} that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "headerValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the header to retrieve.\n\n@return The {@code String} value of the header that matches the name supplied, {@code null} if no match found.",
          "isProfessionalOnly": false
        },
        {
          "name": "body",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Body of a message as a byte array.\n\n@return The body of a message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyToString",
          "returnType": "String",
          "parameters": [],
          "description": "Body of a message as a {@code String}.\n\n@return The body of a message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "bodyOffset",
          "returnType": "int",
          "parameters": [],
          "description": "Offset within the message where the message body begins.\n\n@return The message body offset.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookie",
          "returnType": "Cookie",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to find.\n\n@return An instance of {@link Cookie} that matches the name provided. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "cookieValue",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to retrieve the value from.\n\n@return The value of the cookie that matches the name provided. {@code null} if not found.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasCookie",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name The name of the cookie to check if it exists in the response.\n\n@return {@code true} If a cookie exists within the response that matches the name provided. {@code false} if not.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasCookie",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Cookie",
              "name": "cookie"
            }
          ],
          "description": "@param cookie An instance of {@link Cookie} to check if it exists in the response.\n\n@return {@code true} If a cookie exists within the response that matches the {@link Cookie} provided. {@code false} if not.",
          "isProfessionalOnly": false
        },
        {
          "name": "mimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as determined by Burp Suite.\n\n@return The MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "statedMimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as stated in the HTTP headers.\n\n@return The stated MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "inferredMimeType",
          "returnType": "MimeType",
          "parameters": [],
          "description": "Obtain the MIME type of the response, as inferred from the contents of the HTTP message body.\n\n@return The inferred MIME type.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified search term.\n\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return True if the search term is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "Searches the data in the HTTP message for the specified regular expression.\n\n@param pattern The regular expression to be searched for.\n\n@return True if the pattern is matched.",
          "isProfessionalOnly": false
        },
        {
          "name": "toByteArray",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "Message as a byte array.\n\n@return The message as a byte array.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "Message as a {@code String}.\n\n@return The message as a {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "withStatusCode",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "short",
              "name": "statusCode"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the provided status code.\n\n@param statusCode the new status code for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withReasonPhrase",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "reasonPhrase"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the new reason phrase.\n\n@param reasonPhrase the new reason phrase for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withHttpVersion",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "httpVersion"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the new http version.\n\n@param httpVersion the new http version for response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withBody",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "body"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the updated body.<br>\nUpdates Content-Length header.\n\n@param body the new body for the response\n\n@return A new {@code HttpResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added header.\n\n@param header The {@link HttpHeader} to add to the response.\n\n@return The updated response containing the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAddedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the added header.\n\n@param name  The name of the header.\n@param value The value of the header.\n\n@return The updated response containing the added header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the updated header.\n\n@param header The {@link HttpHeader} to update containing the new value.\n\n@return The updated response containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withUpdatedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the updated header.\n\n@param name  The name of the header to update the value of.\n@param value The new value of the specified HTTP header.\n\n@return The updated response containing the updated header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "HttpHeader",
              "name": "header"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the removed header.\n\n@param header The {@link HttpHeader} to remove from the response.\n\n@return The updated response containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withRemovedHeader",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse}  with the removed header.\n\n@param name The name of the HTTP header to remove from the response.\n\n@return The updated response containing the removed header.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "List<Marker>",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@code MarkedHttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMarkers",
          "returnType": "HttpResponse",
          "parameters": [
            {
              "type": "Marker...",
              "name": "markers"
            }
          ],
          "description": "Create a copy of the {@code HttpResponse} with the added markers.\n\n@param markers Request markers to add.\n\n@return A new {@code MarkedHttpRequestResponse} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "messageId",
          "returnType": "int",
          "parameters": [],
          "description": "This method retrieves a unique ID for this request/response.\n\n@return An identifier that is unique to a single request/response pair.\nExtensions can use this to correlate details of requests and responses\nand perform processing on the response message accordingly.",
          "isProfessionalOnly": false
        },
        {
          "name": "listenerInterface",
          "returnType": "String",
          "parameters": [],
          "description": "This method retrieves the name of the Burp Proxy listener that is\nprocessing the intercepted message.\n\n@return The name of the Burp Proxy listener that is processing the\nintercepted message. The format is the same as that shown in the Proxy\nListeners UI - for example, \"127.0.0.1:8080\".",
          "isProfessionalOnly": false
        },
        {
          "name": "sourceIpAddress",
          "returnType": "InetAddress",
          "parameters": [],
          "description": "This method retrieves the IP address for the source of the intercepted\nmessage.\n\n@return The IP address for the source of the intercepted message.",
          "isProfessionalOnly": false
        },
        {
          "name": "destinationIpAddress",
          "returnType": "InetAddress",
          "parameters": [],
          "description": "This method retrieves the IP address for the destination of the\nintercepted message.\n\n@return The IP address for the destination of the intercepted message.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.ProxyRequestHandler": {
      "name": "ProxyRequestHandler",
      "fullName": "burp.api.montoya.proxy.http.ProxyRequestHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handleRequestReceived",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "InterceptedRequest",
              "name": "interceptedRequest"
            }
          ],
          "description": "This method is invoked before an HTTP request is received by the Proxy.<br>\nCan modify the request.<br>\nCan modify the annotations.<br>\nCan control whether the request should be intercepted and displayed to the user for manual review or modification.<br>\nCan drop the request.<br>\n\n@param interceptedRequest An {@link InterceptedRequest} object that extensions can use to query and update details of the request.\n\n@return The {@link ProxyRequestReceivedAction} containing the required action, annotations and HTTP request to be passed through the proxy.",
          "isProfessionalOnly": false
        },
        {
          "name": "handleRequestToBeSent",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [
            {
              "type": "InterceptedRequest",
              "name": "interceptedRequest"
            }
          ],
          "description": "This method is invoked after an HTTP request has been processed by the Proxy before it is sent.<br>\nCan modify the request.<br>\nCan modify the annotations.<br>\nCan control whether the request is sent or dropped.<br>\n\n@param interceptedRequest An {@link InterceptedRequest} object that extensions can use to query and update details of the intercepted request.\n\n@return The {@link ProxyRequestToBeSentAction} containing the required action, annotations and HTTP request to be sent from the proxy.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.ProxyRequestReceivedAction": {
      "name": "ProxyRequestReceivedAction",
      "fullName": "burp.api.montoya.proxy.http.ProxyRequestReceivedAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageReceivedAction",
          "parameters": [],
          "description": "This method retrieves the current initial intercept action.\n\n@return The {@link MessageReceivedAction}.",
          "isProfessionalOnly": false
        },
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "This method retrieves the current HTTP request to forward after any\nmodifications by the extension.\n\n@return The {@link HttpRequest} to forward after any modifications by\nthe extension.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "This method retrieves the annotations for the current request after any\nmodifications by the extension.\n\n@return The {@link Annotations} for the intercepted HTTP request.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\nfollow the current interception rules to determine the appropriate\naction to take for the request.<br>\nAnnotations are not modified.\n\n@param request The {@link HttpRequest} received after any modifications\n               by the extension.\n\n@return The {@link ProxyRequestReceivedAction} that allows user rules to be\nfollowed.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\nfollow the current interception rules to determine the appropriate\naction to take for the request.\n\n@param request     The {@link HttpRequest} received after any modifications\n                   by the extension.\n@param annotations The {@link Annotations} for the intercepted\n                   HTTP request.\n\n@return The {@link ProxyRequestReceivedAction} that causes Burp Proxy\nto follow the current interception rules to determine the appropriate\naction to take for the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "intercept",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\npresent the request to the user for manual review or modification.<br>\nAnnotations are not modified.\n\n@param request The {@link HttpRequest} received after any modifications\n               by the extension.\n\n@return The {@link ProxyRequestReceivedAction} that causes Burp Proxy\nto present the request to the user for manual review or modification.",
          "isProfessionalOnly": false
        },
        {
          "name": "intercept",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\npresent the request to the user for manual review or modification.\n\n@param request     The {@link HttpRequest} received after any modifications\n                   by the extension.\n@param annotations The {@link Annotations} for the intercepted\n                   HTTP request.\n\n@return The {@link ProxyRequestReceivedAction} that causes Burp Proxy\nto present the request to the user for manual review or modification.",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotIntercept",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\nforward the request without presenting it to the user. <br>\nAnnotations are not modified.\n\n@param request The {@link HttpRequest} received after any modifications\n               by the extension.\n\n@return The {@link ProxyRequestReceivedAction} that causes Burp Proxy\nto forward the request without presenting it to the user.",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotIntercept",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\nforward the request without presenting it to the user.\n\n@param request     The {@link HttpRequest} received after any modifications\n                   by the extension.\n@param annotations The {@link Annotations} for the intercepted\n                   HTTP request.\n\n@return The {@link ProxyRequestReceivedAction} that causes Burp Proxy\nto forward the request without presenting it to the user.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [],
          "description": "This method can be used to create a result that causes Burp Proxy to\ndrop the request.\n\n@return The {@link ProxyRequestReceivedAction} that causes Burp Proxy\nto drop the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "proxyRequestReceivedAction",
          "returnType": "ProxyRequestReceivedAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            },
            {
              "type": "MessageReceivedAction",
              "name": "action"
            }
          ],
          "description": "This method can be used to create a default implementation of an initial\nintercept result for an HTTP request.\n\n@param request     The {@link HttpRequest} received after any modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted HTTP request. {@code null} value will leave the annotations unmodified.\n@param action      The {@link MessageReceivedAction} for the HTTP request.\n\n@return The {@link ProxyRequestReceivedAction} including the HTTP\nrequest, annotations and initial intercept action.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.ProxyRequestToBeSentAction": {
      "name": "ProxyRequestToBeSentAction",
      "fullName": "burp.api.montoya.proxy.http.ProxyRequestToBeSentAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageToBeSentAction",
          "parameters": [],
          "description": "This method retrieves the current final intercept action.\n\n@return The {@link MessageToBeSentAction}.",
          "isProfessionalOnly": false
        },
        {
          "name": "request",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "This method retrieves the current HTTP request to forward after any\nmodifications by the extension.\n\n@return The {@link HttpRequest} to forward after any modifications by\nthe extension.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "This method retrieves the annotations for the current request after any\nmodifications by the extension.\n\n@return The {@link Annotations} for the intercepted HTTP request.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\nforward the request.<br>\nAnnotations are not modified.\n\n@param request The {@link HttpRequest} to forward after any\n               modifications by the extension.\n\n@return The {@link ProxyRequestToBeSentAction} that causes Burp Proxy\nto forward the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\nforward the request.\n\n@param request     The {@link HttpRequest} to forward after any\n                   modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted\n                   HTTP request.\n\n@return The {@link ProxyRequestToBeSentAction} that causes Burp Proxy\nto forward the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [],
          "description": "This method can be used to create a result that causes Burp Proxy to\ndrop the request.\n\n@return The {@link ProxyRequestToBeSentAction} that causes Burp Proxy\nto drop the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "proxyRequestToBeSentAction",
          "returnType": "ProxyRequestToBeSentAction",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            },
            {
              "type": "MessageToBeSentAction",
              "name": "action"
            }
          ],
          "description": "This method can be used to create a default implementation of a final\nintercept result for an HTTP request.\n\n@param request     The {@link HttpRequest} to forward after any modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted HTTP request. {@code null} value will leave the annotations unmodified.\n@param action      The {@link MessageToBeSentAction} for the HTTP request.\n\n@return The {@link ProxyRequestToBeSentAction} including the HTTP\nrequest, annotations and final intercept action.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.ProxyResponseHandler": {
      "name": "ProxyResponseHandler",
      "fullName": "burp.api.montoya.proxy.http.ProxyResponseHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handleResponseReceived",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "InterceptedResponse",
              "name": "interceptedResponse"
            }
          ],
          "description": "This method is invoked when an HTTP response is received in the Proxy.\n\n@param interceptedResponse An {@link InterceptedResponse} object\n                           that extensions can use to query and update details of the response, and\n                           control whether the response should be intercepted and displayed to the\n                           user for manual review or modification.\n\n@return The {@link ProxyResponseReceivedAction} containing the required action, HTTP response and annotations to be passed through.",
          "isProfessionalOnly": false
        },
        {
          "name": "handleResponseToBeSent",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [
            {
              "type": "InterceptedResponse",
              "name": "interceptedResponse"
            }
          ],
          "description": "This method is invoked when an HTTP response has been processed by the\nProxy before it is returned to the client.\n\n@param interceptedResponse An {@link InterceptedResponse} object\n                           that extensions can use to query and update details of the response.\n\n@return The {@link ProxyResponseToBeSentAction} containing the required action, HTTP response and annotations to be passed through.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.ProxyResponseReceivedAction": {
      "name": "ProxyResponseReceivedAction",
      "fullName": "burp.api.montoya.proxy.http.ProxyResponseReceivedAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageReceivedAction",
          "parameters": [],
          "description": "This method retrieves the current initial intercept action.\n\n@return The {@link MessageReceivedAction}.",
          "isProfessionalOnly": false
        },
        {
          "name": "response",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "This method retrieves the current HTTP response to forward after any\nmodifications by the extension.\n\n@return The {@link HttpResponse} to forward after any modifications by\nthe extension.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "This method retrieves the annotations for the current response after any\nmodifications by the extension.\n\n@return The {@link Annotations} for the intercepted HTTP response.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "This method can be used to create an action that causes Burp Proxy to\nfollow the current interception rules to determine the appropriate\naction to take for the response.<br>\nAnnotations are not modified.\n\n@param response The {@link HttpResponse} received after any\n                modifications by the extension.\n\n@return The {@link ProxyResponseReceivedAction} that causes Burp\nProxy to follow the current interception rules to determine the\nappropriate action to take for the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "This method can be used to create an action that causes Burp Proxy to\nfollow the current interception rules to determine the appropriate\naction to take for the response.\n\n@param response    The {@link HttpResponse} received after any\n                   modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted\n                   HTTP response.\n\n@return The {@link ProxyResponseReceivedAction} that causes Burp\nProxy to follow the current interception rules to determine the\nappropriate action to take for the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "intercept",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "This method can be used to create an action that causes Burp Proxy to\npresent the response to the user for manual review or modification.<br>\nAnnotations are not modified.\n\n@param response The {@link HttpResponse} received after any\n                modifications by the extension.\n\n@return The {@link ProxyResponseReceivedAction} that causes Burp\nProxy to present the response to the user for manual review or\nmodification.",
          "isProfessionalOnly": false
        },
        {
          "name": "intercept",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "This method can be used to create an action that causes Burp Proxy to\npresent the response to the user for manual review or modification.\n\n@param response    The {@link HttpResponse} received after any\n                   modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted\n                   HTTP response.\n\n@return The {@link ProxyResponseReceivedAction} that causes Burp\nProxy to present the response to the user for manual review or\nmodification.",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotIntercept",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "This method can be used to create an action that causes Burp Proxy to\nforward the response without presenting it to the user.<br>\nAnnotations are not modified.\n\n@param response The {@link HttpResponse} received after any\n                modifications by the extension.\n\n@return The {@link ProxyResponseReceivedAction} that causes Burp\nProxy to forward the response without presenting it to the user.",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotIntercept",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "This method can be used to create an action that causes Burp Proxy to\nforward the response without presenting it to the user.\n\n@param response    The {@link HttpResponse} received after any\n                   modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted\n                   HTTP response.\n\n@return The {@link ProxyResponseReceivedAction} that causes Burp\nProxy to forward the response without presenting it to the user.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [],
          "description": "This method can be used to create an action that causes Burp Proxy to\ndrop the response.\n\n@return The {@link ProxyResponseReceivedAction} that causes Burp\nProxy to drop the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "proxyResponseReceivedAction",
          "returnType": "ProxyResponseReceivedAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            },
            {
              "type": "MessageReceivedAction",
              "name": "action"
            }
          ],
          "description": "This method can be used to create a default implementation of a {@link ProxyResponseReceivedAction}\nfor an HTTP response.\n\n@param response    The {@link HttpResponse} received after any modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted HTTP response. {@code null} value will leave the annotations unmodified.\n@param action      The {@link MessageReceivedAction} for the HTTP response.\n\n@return The {@link ProxyResponseReceivedAction} including the HTTP response, annotations and intercept action.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.http.ProxyResponseToBeSentAction": {
      "name": "ProxyResponseToBeSentAction",
      "fullName": "burp.api.montoya.proxy.http.ProxyResponseToBeSentAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageToBeSentAction",
          "parameters": [],
          "description": "This method retrieves the current final intercept action.\n\n@return The {@link MessageToBeSentAction}.",
          "isProfessionalOnly": false
        },
        {
          "name": "response",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "This method retrieves the current HTTP response to forward after any\nmodifications by the extension.\n\n@return The {@link HttpResponse} to forward after any modifications by\nthe extension.",
          "isProfessionalOnly": false
        },
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "This method retrieves the annotations for the current response after any\nmodifications by the extension.\n\n@return The {@link Annotations} for the intercepted HTTP response.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\nforward the response.<br>\nAnnotations are not modified.\n\n@param response The {@link HttpResponse} to forward after any\n                modifications by the extension.\n\n@return The {@link ProxyResponseToBeSentAction} that causes Burp Proxy\nto forward the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            }
          ],
          "description": "This method can be used to create a result that causes Burp Proxy to\nforward the response.\n\n@param response    The {@link HttpResponse} to forward after any modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted HTTP response.\n\n@return The {@link ProxyResponseToBeSentAction} that causes Burp Proxy\nto forward the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [],
          "description": "This method can be used to create a result that causes Burp Proxy to\ndrop the response.\n\n@return The {@link ProxyResponseToBeSentAction} that causes Burp Proxy\nto drop the response.",
          "isProfessionalOnly": false
        },
        {
          "name": "proxyResponseToReturnAction",
          "returnType": "ProxyResponseToBeSentAction",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            },
            {
              "type": "Annotations",
              "name": "annotations"
            },
            {
              "type": "MessageToBeSentAction",
              "name": "action"
            }
          ],
          "description": "This method can be used to create a default implementation of a final\nintercept result for an HTTP response.\n\n@param response    The {@link HttpResponse} to forward after any modifications by the extension.\n@param annotations The {@link Annotations} for the intercepted HTTP response. {@code null} value will leave the annotations unmodified.\n@param action      The {@link MessageToBeSentAction} for the HTTP response.\n\n@return The {@link ProxyResponseToBeSentAction} including the HTTP\nresponse, annotations and final intercept action.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.BinaryMessageReceivedAction": {
      "name": "BinaryMessageReceivedAction",
      "fullName": "burp.api.montoya.proxy.websocket.BinaryMessageReceivedAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageReceivedAction",
          "parameters": [],
          "description": "@return The action associated with this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The payload of this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "Build a binary WebSocket message to\nfollow the current interception rules to determine the appropriate\naction to take for the message.\n\n@param payload The binary message payload.\n\n@return The {@link BinaryMessageReceivedAction} that allows user rules to be\nfollowed.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "BinaryMessage",
              "name": "message"
            }
          ],
          "description": "Build a binary WebSocket message to\nfollow the current interception rules to determine the appropriate\naction to take for the message.\n\n@param message The binary message.\n\n@return The {@link BinaryMessageReceivedAction} that allows user rules to be\nfollowed.",
          "isProfessionalOnly": false
        },
        {
          "name": "intercept",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "Build a binary WebSocket message to be intercepted within the Proxy.\n\n@param payload The binary message payload.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "intercept",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "BinaryMessage",
              "name": "message"
            }
          ],
          "description": "Build a binary WebSocket message to be intercepted within the Proxy.\n\n@param message The binary message.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotIntercept",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "Build a binary WebSocket message to continue within the Proxy without interception.\n\n@param payload The binary message payload.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotIntercept",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "BinaryMessage",
              "name": "message"
            }
          ],
          "description": "Build a binary WebSocket message to continue within the Proxy without interception.\n\n@param message The binary message.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [],
          "description": "Build a binary WebSocket message to be dropped.\n\n@return The message to be dropped.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.BinaryMessageToBeSentAction": {
      "name": "BinaryMessageToBeSentAction",
      "fullName": "burp.api.montoya.proxy.websocket.BinaryMessageToBeSentAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageToBeSentAction",
          "parameters": [],
          "description": "@return The action associated with this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The payload of this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "BinaryMessageToBeSentAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "Build a binary WebSocket message to continue through Burp.\n\n@param payload The binary message payload.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "BinaryMessageToBeSentAction",
          "parameters": [
            {
              "type": "BinaryMessage",
              "name": "message"
            }
          ],
          "description": "Build a binary WebSocket message to continue through Burp.\n\n@param message The binary message.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "BinaryMessageToBeSentAction",
          "parameters": [],
          "description": "Build a binary WebSocket message to be dropped.\n\n@return The message to be dropped.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.InterceptedBinaryMessage": {
      "name": "InterceptedBinaryMessage",
      "fullName": "burp.api.montoya.proxy.websocket.InterceptedBinaryMessage",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return Binary based WebSocket payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "direction",
          "returnType": "Direction",
          "parameters": [],
          "description": "@return The direction of the message.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.InterceptedTextMessage": {
      "name": "InterceptedTextMessage",
      "fullName": "burp.api.montoya.proxy.websocket.InterceptedTextMessage",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "@return The annotations.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "String",
          "parameters": [],
          "description": "@return Text based WebSocket payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "direction",
          "returnType": "Direction",
          "parameters": [],
          "description": "@return The direction of the message.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.ProxyMessageHandler": {
      "name": "ProxyMessageHandler",
      "fullName": "burp.api.montoya.proxy.websocket.ProxyMessageHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handleTextMessageReceived",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "InterceptedTextMessage",
              "name": "interceptedTextMessage"
            }
          ],
          "description": "Invoked when a text message is received from either the client or server.\nThis gives the extension the ability to modify the message before it is\nprocessed by Burp.\n\n@param interceptedTextMessage Intercepted text WebSocket message.\n\n@return The {@link TextMessageReceivedAction} containing the required action and text message to be passed through.",
          "isProfessionalOnly": false
        },
        {
          "name": "handleTextMessageToBeSent",
          "returnType": "TextMessageToBeSentAction",
          "parameters": [
            {
              "type": "InterceptedTextMessage",
              "name": "interceptedTextMessage"
            }
          ],
          "description": "Invoked when a text message is about to be sent to either the client or server.\nThis gives the extension the ability to modify the message before it is\nsent.\n\n@param interceptedTextMessage Intercepted text WebSocket message.\n\n@return The {@link TextMessageReceivedAction} containing the required action and text message to be passed through.",
          "isProfessionalOnly": false
        },
        {
          "name": "handleBinaryMessageReceived",
          "returnType": "BinaryMessageReceivedAction",
          "parameters": [
            {
              "type": "InterceptedBinaryMessage",
              "name": "interceptedBinaryMessage"
            }
          ],
          "description": "Invoked when a binary message is received from either the client or server.\nThis gives the extension the ability to modify the message before it is\nprocessed by Burp.\n\n@param interceptedBinaryMessage Intercepted binary WebSocket message.\n\n@return The {@link BinaryMessageReceivedAction} containing the required action and binary message to be passed through.",
          "isProfessionalOnly": false
        },
        {
          "name": "handleBinaryMessageToBeSent",
          "returnType": "BinaryMessageToBeSentAction",
          "parameters": [
            {
              "type": "InterceptedBinaryMessage",
              "name": "interceptedBinaryMessage"
            }
          ],
          "description": "Invoked when a binary message is about to be sent to either the client or server.\nThis gives the extension the ability to modify the message before it is\nsent.\n\n@param interceptedBinaryMessage Intercepted binary WebSocket message.\n\n@return The {@link BinaryMessageReceivedAction} containing the required action and binary message to be passed through.",
          "isProfessionalOnly": false
        },
        {
          "name": "onClose",
          "returnType": "void",
          "parameters": [],
          "description": "Invoked when the WebSocket is closed.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.ProxyWebSocket": {
      "name": "ProxyWebSocket",
      "fullName": "burp.api.montoya.proxy.websocket.ProxyWebSocket",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "sendTextMessage",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "textMessage"
            },
            {
              "type": "Direction",
              "name": "direction"
            }
          ],
          "description": "This method allows an extension to send a text message via the WebSocket to either the client or the server.\n\n@param textMessage The message to be sent.\n@param direction   The direction of the message.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendBinaryMessage",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "binaryMessage"
            },
            {
              "type": "Direction",
              "name": "direction"
            }
          ],
          "description": "This method allows an extension to send a binary message via the WebSocket to either the client or the server.\n\n@param binaryMessage The message to be sent.\n@param direction   The direction of the message.",
          "isProfessionalOnly": false
        },
        {
          "name": "close",
          "returnType": "void",
          "parameters": [],
          "description": "This method will close the WebSocket.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerProxyMessageHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ProxyMessageHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will perform actions when messages are sent or received by the WebSocket.\n\n@param handler An object created by the extension that implements {@link ProxyMessageHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.ProxyWebSocketCreation": {
      "name": "ProxyWebSocketCreation",
      "fullName": "burp.api.montoya.proxy.websocket.ProxyWebSocketCreation",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "proxyWebSocket",
          "returnType": "ProxyWebSocket",
          "parameters": [],
          "description": "@return The ProxyWebSocket that is being created.",
          "isProfessionalOnly": false
        },
        {
          "name": "upgradeRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The HTTP upgrade request that initiated the WebSocket creation.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.ProxyWebSocketCreationHandler": {
      "name": "ProxyWebSocketCreationHandler",
      "fullName": "burp.api.montoya.proxy.websocket.ProxyWebSocketCreationHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handleWebSocketCreation",
          "returnType": "void",
          "parameters": [
            {
              "type": "ProxyWebSocketCreation",
              "name": "webSocketCreation"
            }
          ],
          "description": "Invoked by Burp when a WebSocket is being created by the Proxy tool.<br>\n<b>Note</b> that the client side of the connection will not be upgraded until after this method completes.\n\n@param webSocketCreation {@link ProxyWebSocketCreation} containing information about the proxy websocket that is being created",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.TextMessageReceivedAction": {
      "name": "TextMessageReceivedAction",
      "fullName": "burp.api.montoya.proxy.websocket.TextMessageReceivedAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageReceivedAction",
          "parameters": [],
          "description": "@return The action associated with this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "String",
          "parameters": [],
          "description": "@return The payload of this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "Build a text WebSocket message to\nfollow the current interception rules to determine the appropriate\naction to take for the message.\n\n@param payload The text message payload.\n\n@return The {@link TextMessageReceivedAction} that allows user rules to be\nfollowed.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "TextMessage",
              "name": "message"
            }
          ],
          "description": "Build a text WebSocket message to\nfollow the current interception rules to determine the appropriate\naction to take for the message.\n\n@param message The text message.\n\n@return The {@link TextMessageReceivedAction} that allows user rules to be\nfollowed.",
          "isProfessionalOnly": false
        },
        {
          "name": "intercept",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "Build a text WebSocket message to be intercepted within the Proxy.\n\n@param payload The text message payload.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "intercept",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "TextMessage",
              "name": "message"
            }
          ],
          "description": "Build a text WebSocket message to be intercepted within the Proxy.\n\n@param message The text message.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotIntercept",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "Build a text WebSocket message to continue within the Proxy without interception.\n\n@param payload The text message payload.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "doNotIntercept",
          "returnType": "TextMessageReceivedAction",
          "parameters": [
            {
              "type": "TextMessage",
              "name": "message"
            }
          ],
          "description": "Build a text WebSocket message to continue within the Proxy without interception.\n\n@param message The text message payload.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "TextMessageReceivedAction",
          "parameters": [],
          "description": "Build a text WebSocket message to be dropped.\n\n@return The message to be dropped.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.websocket.TextMessageToBeSentAction": {
      "name": "TextMessageToBeSentAction",
      "fullName": "burp.api.montoya.proxy.websocket.TextMessageToBeSentAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageToBeSentAction",
          "parameters": [],
          "description": "@return The action associated with this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "String",
          "parameters": [],
          "description": "@return The payload of this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "TextMessageToBeSentAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "Build a text WebSocket message to continue through Burp.\n\n@param payload The text message payload.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "TextMessageToBeSentAction",
          "parameters": [
            {
              "type": "TextMessage",
              "name": "message"
            }
          ],
          "description": "Build a text WebSocket message to continue through Burp.\n\n@param message The text message.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "TextMessageToBeSentAction",
          "parameters": [],
          "description": "Build a text WebSocket message to be dropped.\n\n@return The message to be dropped.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.repeater.EditorPane": {
      "name": "EditorPane",
      "fullName": "burp.api.montoya.repeater.EditorPane",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "set",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "contents"
            }
          ],
          "description": "Replace the contents of the editor with the specified text.\n\n@param contents The new content as a plain string.",
          "isProfessionalOnly": false
        },
        {
          "name": "set",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "contents"
            }
          ],
          "description": "Replace the contents of the editor with the specified Burp ByteArray.\n\n@param contents The new contents for the pane as a {@link ByteArray}.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "code",
          "parameters": [],
          "description": "Sets the contents of the editor using an arbitrary object.\nThe object’s {@code toString()} method will be used to obtain the contents.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "code",
          "parameters": [],
          "description": "@param contents An object whose {@code toString()} result will be set as the editor contents.",
          "isProfessionalOnly": false
        },
        {
          "name": "set",
          "returnType": "void",
          "parameters": [
            {
              "type": "Object",
              "name": "contents"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "replace",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "search"
            },
            {
              "type": "String",
              "name": "replacement"
            }
          ],
          "description": "Find all instances of the specified text and replace them with the given replacement text.\n\n@param search      The text to find within the editor.\n@param replacement The text to replace each occurrence with.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.repeater.HttpEditor": {
      "name": "HttpEditor",
      "fullName": "burp.api.montoya.repeater.HttpEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "requestPane",
          "returnType": "EditorPane",
          "parameters": [],
          "description": "Retrieves the editor pane for modifying the HTTP request.\n\n@return An {@link EditorPane} instance for editing the request.",
          "isProfessionalOnly": false
        },
        {
          "name": "responsePane",
          "returnType": "EditorPane",
          "parameters": [],
          "description": "Retrieves the editor pane for modifying the HTTP response.\n\n@return An {@link EditorPane} instance for editing the response.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.repeater.Repeater": {
      "name": "Repeater",
      "fullName": "burp.api.montoya.repeater.Repeater",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "sendToRepeater",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "This method can be used to send an HTTP request to the Burp Repeater\ntool. The request will be displayed in the user interface using a\ndefault tab index, but will not be sent until the user initiates\nthis action.\n\n@param request The full HTTP request.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendToRepeater",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "This method can be used to send an HTTP request to the Burp Repeater\ntool. The request will be displayed in the user interface, but will not\nbe issued until the user initiates this action.\n\n@param request The full HTTP request.\n@param name    An optional caption which will appear on the Repeater\n               tab containing the request. If this value is {@code null} then a default\n               tab index will be displayed.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.AuditConfiguration": {
      "name": "AuditConfiguration",
      "fullName": "burp.api.montoya.scanner.AuditConfiguration",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "auditConfiguration",
          "returnType": "AuditConfiguration",
          "parameters": [
            {
              "type": "BuiltInAuditConfiguration",
              "name": "configuration"
            }
          ],
          "description": "This method can be used to create a built-in audit configuration.\n\n@param configuration The {@link BuiltInAuditConfiguration} to use for the audit.\n\n@return a {@code AuditConfiguration} based on a built-in configuration",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.AuditResult": {
      "name": "AuditResult",
      "fullName": "burp.api.montoya.scanner.AuditResult",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "auditResult",
          "returnType": "AuditResult",
          "parameters": [
            {
              "type": "List<AuditIssue>",
              "name": "auditIssues"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "auditResult",
          "returnType": "AuditResult",
          "parameters": [
            {
              "type": "AuditIssue...",
              "name": "auditIssues"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.Crawl": {
      "name": "Crawl",
      "fullName": "burp.api.montoya.scanner.Crawl",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "requestCount",
          "returnType": "int",
          "parameters": [],
          "description": "Number of requests that have been made for the\nscan task.\n\n@return The number of requests that have been made for the scan task.",
          "isProfessionalOnly": false
        },
        {
          "name": "errorCount",
          "returnType": "int",
          "parameters": [],
          "description": "Number of network errors that have occurred for\nthe scan task.\n\n@return The number of network errors that have occurred for the scan\ntask.",
          "isProfessionalOnly": false
        },
        {
          "name": "delete",
          "returnType": "void",
          "parameters": [],
          "description": "Delete the task.",
          "isProfessionalOnly": false
        },
        {
          "name": "statusMessage",
          "returnType": "String",
          "parameters": [],
          "description": "This functionality is not yet implemented.\n\n@return the current status message of the task",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.CrawlAndAudit": {
      "name": "CrawlAndAudit",
      "fullName": "burp.api.montoya.scanner.CrawlAndAudit",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "requestCount",
          "returnType": "int",
          "parameters": [],
          "description": "Number of requests that have been made for the\nscan task.\n\n@return The number of requests that have been made for the scan task.",
          "isProfessionalOnly": false
        },
        {
          "name": "errorCount",
          "returnType": "int",
          "parameters": [],
          "description": "Number of network errors that have occurred for\nthe scan task.\n\n@return The number of network errors that have occurred for the scan\ntask.",
          "isProfessionalOnly": false
        },
        {
          "name": "delete",
          "returnType": "void",
          "parameters": [],
          "description": "Delete the task.",
          "isProfessionalOnly": false
        },
        {
          "name": "statusMessage",
          "returnType": "String",
          "parameters": [],
          "description": "@return the current status message of the task",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.CrawlConfiguration": {
      "name": "CrawlConfiguration",
      "fullName": "burp.api.montoya.scanner.CrawlConfiguration",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "crawlConfiguration",
          "returnType": "CrawlConfiguration",
          "parameters": [
            {
              "type": "String...",
              "name": "seedUrls"
            }
          ],
          "description": "Build a crawl configuration with seed urls\n\n@param seedUrls used by the crawler\n\n@return crawl configuration required by the crawler.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.ScanCheck": {
      "name": "ScanCheck",
      "fullName": "burp.api.montoya.scanner.ScanCheck",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "activeAudit",
          "returnType": "AuditResult",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "baseRequestResponse"
            },
            {
              "type": "AuditInsertionPoint",
              "name": "auditInsertionPoint"
            }
          ],
          "description": "The Scanner invokes this method for each insertion point that is\nactively audited. Extensions may issue HTTP requests as required to\ncarry out an active audit, and should use the\n{@link AuditInsertionPoint} object provided to build requests for\nparticular payloads.\n<b>Note:</b>\nScan checks should submit raw non-encoded payloads to insertion points,\nand the insertion point has responsibility for performing any data\nencoding that is necessary given the nature and location of the insertion\npoint.\n\n@param baseRequestResponse The base {@link HttpRequestResponse} that\n                           should be actively audited.\n@param auditInsertionPoint An {@link AuditInsertionPoint} object that\n                           can be queried to obtain details of the insertion point being tested, and\n                           can be used to build requests for particular payloads.\n\n@return An {@link AuditResult} object with a list of {@link AuditIssue}\nobjects, or an empty {@link AuditResult} object if no issues are identified.",
          "isProfessionalOnly": false
        },
        {
          "name": "passiveAudit",
          "returnType": "AuditResult",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "baseRequestResponse"
            }
          ],
          "description": "The Scanner invokes this method for each base request / response that is\npassively audited. <b>Note:</b> Extensions should only analyze the\nHTTP messages provided during a passive audit, and should not make any\nnew HTTP requests of their own.\n\n@param baseRequestResponse The base {@link HttpRequestResponse} that\n                           should be passively audited.\n\n@return An {@link AuditResult} object with a list of {@link AuditIssue}\nobjects, or an empty {@link AuditResult} object if no issues are identified.",
          "isProfessionalOnly": false
        },
        {
          "name": "issue",
          "returnType": "which",
          "parameters": [],
          "description": "should determine whether the issues are duplicates. In most cases, where\na check uses distinct issue names or descriptions for distinct issues,\nthe consolidation process will simply be a matter of comparing these\nfeatures for the two issues.\n\n@param existingIssue An {@link AuditIssue} that was previously reported\n                     by this Scan check.\n@param newIssue      An {@link AuditIssue} at the same URL path that has been\n                     newly reported by this Scan check.\n\n@return A {@link ConsolidationAction} to determine which issue(s) should",
          "isProfessionalOnly": false
        },
        {
          "name": "consolidateIssues",
          "returnType": "ConsolidationAction",
          "parameters": [
            {
              "type": "AuditIssue",
              "name": "existingIssue"
            },
            {
              "type": "AuditIssue",
              "name": "newIssue"
            }
          ],
          "description": "be reported in the main Scanner results.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.ScanConfiguration": {
      "name": "ScanConfiguration",
      "fullName": "burp.api.montoya.scanner.ScanConfiguration",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": "Configurations for the Burp Scanner tool.\n"
    },
    "burp.api.montoya.scanner.ScanTask": {
      "name": "ScanTask",
      "fullName": "burp.api.montoya.scanner.ScanTask",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "requestCount",
          "returnType": "int",
          "parameters": [],
          "description": "Number of requests that have been made for the\nscan task.\n\n@return The number of requests that have been made for the scan task.",
          "isProfessionalOnly": false
        },
        {
          "name": "errorCount",
          "returnType": "int",
          "parameters": [],
          "description": "Number of network errors that have occurred for\nthe scan task.\n\n@return The number of network errors that have occurred for the scan\ntask.",
          "isProfessionalOnly": false
        },
        {
          "name": "delete",
          "returnType": "void",
          "parameters": [],
          "description": "Delete the task.",
          "isProfessionalOnly": false
        },
        {
          "name": "statusMessage",
          "returnType": "String",
          "parameters": [],
          "description": "@return the current status message of the task",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.Scanner": {
      "name": "Scanner",
      "fullName": "burp.api.montoya.scanner.Scanner",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "registerActiveScanCheck",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ActiveScanCheck",
              "name": "activeScanCheck"
            },
            {
              "type": "ScanCheckType",
              "name": "scanCheckType"
            }
          ],
          "description": "Register a custom active scan check.\nDuring scanning, Burp will invoke this check\non the base request, and report any identified issues.\n\n@param activeScanCheck An object created by the extension that implements the {@link ActiveScanCheck} interface.\n@param scanCheckType A {@link ScanCheckType} object. This specifies the point a scan check is invoked by the scanner.\n\n@return The {@link Registration} for the check.",
          "isProfessionalOnly": false
        },
        {
          "name": "checks",
          "returnType": "scan",
          "parameters": [
            {
              "type": "See",
              "name": "{@link"
            }
          ],
          "description": "Register a custom passive scan check.\nDuring scanning, Burp will invoke this check\non the base request, and report any identified issues.\n\n@param passiveScanCheck An object created by the extension that implements the {@link PassiveScanCheck} interface.\n@param scanCheckType   A {@link ScanCheckType} object. This specifies the point a scan check is invoked by the scanner.\n\n@return The {@link Registration} for the check.\n\n@throws IllegalArgumentException if the specified {@link ScanCheckType} is not applicable to passive scan checks (See {@link ScanCheckType}).",
          "isProfessionalOnly": false
        },
        {
          "name": "registerPassiveScanCheck",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "PassiveScanCheck",
              "name": "passiveScanCheck"
            },
            {
              "type": "ScanCheckType",
              "name": "scanCheckType"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "registerAuditIssueHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "AuditIssueHandler",
              "name": "auditIssueHandler"
            }
          ],
          "description": "Register a handler which will be notified of new\naudit issues that are reported by the Scanner tool. Extensions can\nperform custom analysis or logging of audit issues by registering an\naudit issue handler.\n\n@param auditIssueHandler An object created by the extension that\n                         implements the {@link AuditIssueHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerScanCheck",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ScanCheck",
              "name": "scanCheck"
            }
          ],
          "description": "@param scanCheck An object created by the extension that implements the\n                 {@link ScanCheck} interface.\n\n@return The {@link Registration} for the check.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerInsertionPointProvider",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "AuditInsertionPointProvider",
              "name": "insertionPointProvider"
            }
          ],
          "description": "Register a provider of Scanner insertion points.\nFor each base request that is actively scanned, Burp will ask the\nprovider to provide any custom Scanner insertion points that are\nappropriate for the request.\n\n@param insertionPointProvider An object created by the extension that\n                              implements the {@link AuditInsertionPointProvider} interface.\n\n@return The {@link Registration} for the provider.",
          "isProfessionalOnly": false
        },
        {
          "name": "startCrawl",
          "returnType": "Crawl",
          "parameters": [
            {
              "type": "CrawlConfiguration",
              "name": "crawlConfiguration"
            }
          ],
          "description": "This method can be used to start a crawl in the Burp Scanner tool.\n\n@return The {@link Crawl} started in the Burp Scanner tool.",
          "isProfessionalOnly": false
        },
        {
          "name": "startAudit",
          "returnType": "Audit",
          "parameters": [
            {
              "type": "AuditConfiguration",
              "name": "auditConfiguration"
            }
          ],
          "description": "This method can be used to start an audit in the Burp Scanner tool.\n\n@return The {@link Audit} started in the Burp Scanner tool.",
          "isProfessionalOnly": false
        },
        {
          "name": "generateReport",
          "returnType": "void",
          "parameters": [
            {
              "type": "List<AuditIssue>",
              "name": "issues"
            },
            {
              "type": "ReportFormat",
              "name": "format"
            },
            {
              "type": "Path",
              "name": "path"
            }
          ],
          "description": "Generate a report for the specified Scanner\nissues. The report format can be specified. For all other reporting\noptions, the default settings that appear in the reporting UI wizard are\nused.\n\n@param issues The {@link AuditIssue}s issues to be reported.\n@param format The {@link ReportFormat} to be used in the report.\n@param path   The {@link Path} to the file that will be saved.",
          "isProfessionalOnly": false
        },
        {
          "name": "bChecks",
          "returnType": "BChecks",
          "parameters": [],
          "description": "Access functionality related to BChecks.\n\n@return An implementation of the {@link BChecks} interface which exposes BChecks functionality.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": true,
      "documentation": ""
    },
    "burp.api.montoya.scanner.audit.Audit": {
      "name": "Audit",
      "fullName": "burp.api.montoya.scanner.audit.Audit",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "insertionPointCount",
          "returnType": "int",
          "parameters": [],
          "description": "This method retrieves the number of insertion points.\n\n@return The number of insertion points.",
          "isProfessionalOnly": false
        },
        {
          "name": "addRequest",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "This method can be used to add an HTTP request to this audit.\n\n@param request The {@link HttpRequest} to add to this audit.",
          "isProfessionalOnly": false
        },
        {
          "name": "addRequest",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            },
            {
              "type": "List<Range>",
              "name": "insertionPointOffsets"
            }
          ],
          "description": "This method can be used to add an HTTP request to this audit.\n\n@param request               The {@link HttpRequest} to add to this audit.\n@param insertionPointOffsets The list of {@link Range}s representing the\n                             insertion point offsets.",
          "isProfessionalOnly": false
        },
        {
          "name": "addRequestResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "This method can be used to add an HTTP request and response to this\naudit.\n\n@param requestResponse The {@link HttpRequestResponse} to add to this\n                       audit.",
          "isProfessionalOnly": false
        },
        {
          "name": "requestCount",
          "returnType": "int",
          "parameters": [],
          "description": "Number of requests that have been made for the\nscan task.\n\n@return The number of requests that have been made for the scan task.",
          "isProfessionalOnly": false
        },
        {
          "name": "errorCount",
          "returnType": "int",
          "parameters": [],
          "description": "Number of network errors that have occurred for\nthe scan task.\n\n@return The number of network errors that have occurred for the scan\ntask.",
          "isProfessionalOnly": false
        },
        {
          "name": "delete",
          "returnType": "void",
          "parameters": [],
          "description": "Delete the task.",
          "isProfessionalOnly": false
        },
        {
          "name": "statusMessage",
          "returnType": "String",
          "parameters": [],
          "description": "@return the current status message of the task",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.audit.AuditIssueHandler": {
      "name": "AuditIssueHandler",
      "fullName": "burp.api.montoya.scanner.audit.AuditIssueHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handleNewAuditIssue",
          "returnType": "void",
          "parameters": [
            {
              "type": "AuditIssue",
              "name": "auditIssue"
            }
          ],
          "description": "This method is invoked when a new issue is added to Burp Scanner's\nresults.\n\n@param auditIssue An {@link AuditIssue} object that the extension can\n                  query to obtain details about the new issue.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPoint": {
      "name": "AuditInsertionPoint",
      "fullName": "burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPoint",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "Name of this insertion point.\n\n@return The name of this insertion point (for example, a description of\na particular request parameter).",
          "isProfessionalOnly": false
        },
        {
          "name": "baseValue",
          "returnType": "String",
          "parameters": [],
          "description": "Base value for this insertion point.\n\n@return the base value that appears in this insertion point in the base\nrequest being audited, or {@code null} if there is no value in the base\nrequest that corresponds to this insertion point.",
          "isProfessionalOnly": false
        },
        {
          "name": "buildHttpRequestWithPayload",
          "returnType": "HttpRequest",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "Build a request with the specified payload placed\ninto the insertion point. There is no requirement for extension-provided\ninsertion points to adjust the Content-Length header in requests if the\nbody length has changed, although Burp-provided insertion points will\nalways do this and will return a request with a valid Content-Length\nheader.\n<b>Note:</b>\nScan checks should submit raw non-encoded payloads to insertion points,\nand the insertion point has responsibility for performing any data\nencoding that is necessary given the nature and location of the insertion\npoint.\n\n@param payload The payload that should be placed into the insertion\n               point.\n\n@return The resulting request.",
          "isProfessionalOnly": false
        },
        {
          "name": "type",
          "returnType": "AuditInsertionPointType",
          "parameters": [],
          "description": "Type of this insertion point.\n\n@return The {@link AuditInsertionPointType} for this insertion point.",
          "isProfessionalOnly": false
        },
        {
          "name": "auditInsertionPoint",
          "returnType": "AuditInsertionPoint",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "HttpRequest",
              "name": "baseRequest"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "This method can be used to create an audit insertion point based on offsets.\n\n@param name                The name of the audit insertion point.\n@param baseRequest         The base {@link HttpRequest}.\n@param startIndexInclusive The start index inclusive.\n@param endIndexExclusive   The end index exclusive.\n\n@return The {@link AuditInsertionPoint} based on offsets.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPointProvider": {
      "name": "AuditInsertionPointProvider",
      "fullName": "burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPointProvider",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.audit.issues.AuditIssue": {
      "name": "AuditIssue",
      "fullName": "burp.api.montoya.scanner.audit.issues.AuditIssue",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "type",
          "returnType": "issue",
          "parameters": [
            {
              "type": "e.g.",
              "name": "\"SQL"
            }
          ],
          "description": "Name of this issue type.\n\n@return The name of this issue type (e.g. \"SQL injection\").",
          "isProfessionalOnly": false
        },
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "detail",
          "returnType": "String",
          "parameters": [],
          "description": "This method returns detailed information about this specific instance of\nthe issue.\n\n@return Detailed information about this specific instance of the issue,\nor {@code null} if none applies. A limited set of HTML tags may be used.",
          "isProfessionalOnly": false
        },
        {
          "name": "remediation",
          "returnType": "String",
          "parameters": [],
          "description": "This method returns detailed information about the remediation for this\nspecific instance of the issue.\n\n@return Detailed information about the remediation for this specific\ninstance of the issue, or {@code null} if none applies. A limited set of\nHTML tags may be used.",
          "isProfessionalOnly": false
        },
        {
          "name": "httpService",
          "returnType": "HttpService",
          "parameters": [],
          "description": "HTTP service for which the issue was generated.\n\n@return The HTTP service for which the issue was generated.",
          "isProfessionalOnly": false
        },
        {
          "name": "baseUrl",
          "returnType": "String",
          "parameters": [],
          "description": "Base URL for which this issue was generated.\n\n@return The base URL for which this issue was generated.",
          "isProfessionalOnly": false
        },
        {
          "name": "severity",
          "returnType": "AuditIssueSeverity",
          "parameters": [],
          "description": "Issue severity level.\n\n@return The {@link AuditIssueSeverity} level.",
          "isProfessionalOnly": false
        },
        {
          "name": "confidence",
          "returnType": "AuditIssueConfidence",
          "parameters": [],
          "description": "Issue confidence level.\n\n@return The {@link AuditIssueConfidence} level.",
          "isProfessionalOnly": false
        },
        {
          "name": "definition",
          "returnType": "AuditIssueDefinition",
          "parameters": [],
          "description": "Definition for this issue.\n\n@return The {@link AuditIssueDefinition} for this issue.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.audit.issues.AuditIssueDefinition": {
      "name": "AuditIssueDefinition",
      "fullName": "burp.api.montoya.scanner.audit.issues.AuditIssueDefinition",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "type",
          "returnType": "issue",
          "parameters": [
            {
              "type": "e.g.",
              "name": "\"SQL"
            }
          ],
          "description": "Name of this issue type.\n\n@return The name of this issue type (e.g. \"SQL injection\").",
          "isProfessionalOnly": false
        },
        {
          "name": "name",
          "returnType": "String",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "background",
          "returnType": "String",
          "parameters": [],
          "description": "This method returns a background description for this issue type.\n\n@return A background description for this type of issue, or {@code null}\nif none applies. A limited set of HTML tags may be used.",
          "isProfessionalOnly": false
        },
        {
          "name": "remediation",
          "returnType": "String",
          "parameters": [],
          "description": "This method returns a background description of the remediation for this\ntype of issue.\n\n@return A background description of the remediation for this type of\nissue, or {@code null} if none applies. A limited set of HTML tags may\nbe used.",
          "isProfessionalOnly": false
        },
        {
          "name": "typicalSeverity",
          "returnType": "AuditIssueSeverity",
          "parameters": [],
          "description": "Typical issue severity level.\n\n@return The typical {@link AuditIssueSeverity} level.",
          "isProfessionalOnly": false
        },
        {
          "name": "typeIndex",
          "returnType": "int",
          "parameters": [],
          "description": "This method returns an index of the issue type. See the Burp Scanner\ndocumentation for a listing of all the issue types.\n\n@return An index of the issue type.",
          "isProfessionalOnly": false
        },
        {
          "name": "auditIssueDefinition",
          "returnType": "AuditIssueDefinition",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "background"
            },
            {
              "type": "String",
              "name": "remediation"
            },
            {
              "type": "AuditIssueSeverity",
              "name": "typicalSeverity"
            }
          ],
          "description": "This method can be used to create a default implementation of an audit\nissue definition.\n\n@param name            The name of the issue type.\n@param background      The background description for the type of issue.\n@param remediation     The background description of the remediation for\n                       this type of issue.\n@param typicalSeverity The typical {@link AuditIssueSeverity} level.\n\n@return The audit issue definition.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.bchecks.BCheckImportResult": {
      "name": "BCheckImportResult",
      "fullName": "burp.api.montoya.scanner.bchecks.BCheckImportResult",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "status",
          "returnType": "Status",
          "parameters": [],
          "description": "The status of the BCheck after import\n\n@return the status",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.bchecks.BChecks": {
      "name": "BChecks",
      "fullName": "burp.api.montoya.scanner.bchecks.BChecks",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "importBCheck",
          "returnType": "BCheckImportResult",
          "parameters": [
            {
              "type": "String",
              "name": "script"
            }
          ],
          "description": "This method can be used to import a BCheck. By default, these will be enabled if the\nscript imports without errors.\n\n@param script the BCheck script to import\n\n@return The {@link BCheckImportResult} which contains the result of importing the BCheck.",
          "isProfessionalOnly": false
        },
        {
          "name": "importBCheck",
          "returnType": "BCheckImportResult",
          "parameters": [
            {
              "type": "String",
              "name": "script"
            },
            {
              "type": "boolean",
              "name": "enabled"
            }
          ],
          "description": "This method can be used to import a BCheck.\n\n@param script the BCheck script to import\n@param enabled whether the script should be enabled after successful import\n\n@return The {@link BCheckImportResult} which contains the result of importing the BCheck.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.scancheck.ActiveScanCheck": {
      "name": "ActiveScanCheck",
      "fullName": "burp.api.montoya.scanner.scancheck.ActiveScanCheck",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "checkName",
          "returnType": "String",
          "parameters": [],
          "description": "The name Burp will use to identify this scan check.\n\n@return Name of the scan check.",
          "isProfessionalOnly": false
        },
        {
          "name": "doCheck",
          "returnType": "AuditResult",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "baseRequestResponse"
            },
            {
              "type": "AuditInsertionPoint",
              "name": "insertionPoint"
            },
            {
              "type": "Http",
              "name": "http"
            }
          ],
          "description": "The Scanner invokes this method according to the registered {@link ScanCheckType}.\n\nUse the {@link Http} object to issue HTTP requests during an active audit.\nUse the {@link AuditInsertionPoint} object to build requests with specific payloads.\n\n<b>Note:</b>\nScan checks should submit non-encoded payloads to insertion points.\nThe insertion point should handle any necessary encoding based on its type and location.\n\n@param baseRequestResponse The base {@link HttpRequestResponse} that\n                           should be actively audited.\n\n@param insertionPoint An {@link AuditInsertionPoint} object.\n                      This can be queried to obtain details of the insertion point being tested.\n                      It can also be used to build requests for particular payloads.\n                      <b>Note:</b> This object is only available if the scan check is registered with the {@link ScanCheckType#PER_INSERTION_POINT} type.\n                      For other types, a {@link AuditInsertionPoint} object is returned, but it only contains placeholder data.\n\n@param http A {@link Http} object. This can be used to send and retrieve HTTP requests within the custom scan check.\n            Any requests you send are automatically linked to the current scan task.\n\n@return An {@link AuditResult} object that contains a list of {@link AuditIssue}\nobjects, or an empty {@link AuditResult} object if no issues are identified.",
          "isProfessionalOnly": false
        },
        {
          "name": "issue",
          "returnType": "which",
          "parameters": [],
          "description": "should determine whether the issues are duplicates. In most cases, where\na check uses distinct issue names or descriptions for distinct issues,\nthe consolidation process will simply be a matter of comparing these\nfeatures for the two issues.\n\n@param existingIssue An {@link AuditIssue} that was previously reported\n                     by this Scan check.\n@param newIssue      An {@link AuditIssue} at the same URL path that has been\n                     newly reported by this Scan check.\n\n@return A {@link ConsolidationAction} to determine which issue(s) should",
          "isProfessionalOnly": false
        },
        {
          "name": "consolidateIssues",
          "returnType": "ConsolidationAction",
          "parameters": [
            {
              "type": "AuditIssue",
              "name": "existingIssue"
            },
            {
              "type": "AuditIssue",
              "name": "newIssue"
            }
          ],
          "description": "be reported in the main Scanner results.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scanner.scancheck.PassiveScanCheck": {
      "name": "PassiveScanCheck",
      "fullName": "burp.api.montoya.scanner.scancheck.PassiveScanCheck",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "checkName",
          "returnType": "String",
          "parameters": [],
          "description": "The name Burp will use to identify this scan check.\n\n@return Name of the scan check.",
          "isProfessionalOnly": false
        },
        {
          "name": "doCheck",
          "returnType": "AuditResult",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "baseRequestResponse"
            }
          ],
          "description": "The Scanner invokes this method at the registered {@link ScanCheckType}.\n<b>Note:</b>\nExtensions should only analyze the\nHTTP messages provided during a passive audit, and should not make any\nnew HTTP requests of their own.\n\n@param baseRequestResponse The base {@link HttpRequestResponse} that\n                           should be actively audited.\n\n@return An {@link AuditResult} object with a list of {@link AuditIssue}\nobjects, or an empty {@link AuditResult} object if no issues are identified.",
          "isProfessionalOnly": false
        },
        {
          "name": "issue",
          "returnType": "which",
          "parameters": [],
          "description": "should determine whether the issues are duplicates. In most cases, where\na check uses distinct issue names or descriptions for distinct issues,\nthe consolidation process will simply be a matter of comparing these\nfeatures for the two issues.\n\n@param existingIssue An {@link AuditIssue} that was previously reported\n                     by this Scan check.\n@param newIssue      An {@link AuditIssue} at the same URL path that has been\n                     newly reported by this Scan check.\n\n@return A {@link ConsolidationAction} to determine which issue(s) should",
          "isProfessionalOnly": false
        },
        {
          "name": "consolidateIssues",
          "returnType": "ConsolidationAction",
          "parameters": [
            {
              "type": "AuditIssue",
              "name": "existingIssue"
            },
            {
              "type": "AuditIssue",
              "name": "newIssue"
            }
          ],
          "description": "be reported in the main Scanner results.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scope.Scope": {
      "name": "Scope",
      "fullName": "burp.api.montoya.scope.Scope",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "isInScope",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "url"
            }
          ],
          "description": "This method can be used to query whether a specified URL is within the\ncurrent Suite-wide target scope.\n\n@param url The URL to query.\n\n@return Returns {@code true} if the URL is within the current Suite-wide\ntarget scope.",
          "isProfessionalOnly": false
        },
        {
          "name": "includeInScope",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "url"
            }
          ],
          "description": "This method can be used to include the specified URL in the Suite-wide\ntarget scope.\n\n@param url The URL to include in the Suite-wide target scope.",
          "isProfessionalOnly": false
        },
        {
          "name": "excludeFromScope",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "url"
            }
          ],
          "description": "This method can be used to exclude the specified URL from the Suite-wide\ntarget scope.\n\n@param url The URL to exclude from the Suite-wide target scope.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerScopeChangeHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ScopeChangeHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will be notified of\nchanges to Burp's Suite-wide target scope.\n\n@param handler An object created by the extension that implements the\n               {@link ScopeChangeHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.scope.ScopeChange": {
      "name": "ScopeChange",
      "fullName": "burp.api.montoya.scope.ScopeChange",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": "Change to Burp's Suite-wide target scope.\n"
    },
    "burp.api.montoya.scope.ScopeChangeHandler": {
      "name": "ScopeChangeHandler",
      "fullName": "burp.api.montoya.scope.ScopeChangeHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "scopeChanged",
          "returnType": "void",
          "parameters": [
            {
              "type": "ScopeChange",
              "name": "scopeChange"
            }
          ],
          "description": "This method is invoked whenever a change occurs to Burp's Suite-wide\ntarget scope.\n\n@param scopeChange An object representing the change to Burp's\n                   Suite-wide target scope.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.sitemap.SiteMap": {
      "name": "SiteMap",
      "fullName": "burp.api.montoya.sitemap.SiteMap",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "add",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "This method can be used to add an {@link HttpRequestResponse} item to Burp's site\nmap with the specified request/response details. This will overwrite the details of any\nexisting matching item in the site map.\n\n@param requestResponse Item to be added to the site map",
          "isProfessionalOnly": false
        },
        {
          "name": "add",
          "returnType": "void",
          "parameters": [
            {
              "type": "AuditIssue",
              "name": "auditIssue"
            }
          ],
          "description": "Register a new Audit issue. Note: Wherever possible, extensions\nshould implement custom Scanner checks using {@link ScanCheck} and report issues\nvia those checks, to integrate with Burp's user-driven workflow, and ensure proper\nconsolidation of duplicate reported issues. This method is only designed for tasks\noutside the normal testing workflow, such as porting results from other scanning tools.\n\n@param auditIssue An object created by the extension that implements the\n                  {@link AuditIssue} interface.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.sitemap.SiteMapFilter": {
      "name": "SiteMapFilter",
      "fullName": "burp.api.montoya.sitemap.SiteMapFilter",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "matches",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "SiteMapNode",
              "name": "node"
            }
          ],
          "description": "Invoked by Burp to check whether a given site map node matches the filter.\n\n@param node Site map node to match.\n\n@return Returns true if the site map node matches the filter.",
          "isProfessionalOnly": false
        },
        {
          "name": "prefixFilter",
          "returnType": "SiteMapFilter",
          "parameters": [
            {
              "type": "String",
              "name": "prefix"
            }
          ],
          "description": "This method returns a site map filter object that matches site map nodes with URLs\nstarting with the specified prefix. Note that the prefix is case-sensitive.\n\n@param prefix Case-sensitive URL prefix used to match site tree nodes. If {@code null} is\n              passed, the resulting filter will match all site map nodes.\n\n@return A site map filter object that matches nodes via a URL prefix",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.sitemap.SiteMapNode": {
      "name": "SiteMapNode",
      "fullName": "burp.api.montoya.sitemap.SiteMapNode",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "url",
          "returnType": "String",
          "parameters": [],
          "description": "Retrieve the URL associated with the site map's node.\n\n@return The URL of the node.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.Selection": {
      "name": "Selection",
      "fullName": "burp.api.montoya.ui.Selection",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "contents",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The contents that are derived from within the user's selection range.",
          "isProfessionalOnly": false
        },
        {
          "name": "offsets",
          "returnType": "Range",
          "parameters": [],
          "description": "@return The positional data of where the user has selected.",
          "isProfessionalOnly": false
        },
        {
          "name": "selection",
          "returnType": "Selection",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "selectionContents"
            }
          ],
          "description": "@param selectionContents The contents of the selection.\n\n@return A new instance of {@link Selection}",
          "isProfessionalOnly": false
        },
        {
          "name": "selection",
          "returnType": "Selection",
          "parameters": [
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "Create an instance of {@link Selection} without content data.\n\n@param startIndexInclusive The start position of the selection range.\n@param endIndexExclusive   The end position of the selection range.\n\n@return A new instance of {@link Selection}",
          "isProfessionalOnly": false
        },
        {
          "name": "selection",
          "returnType": "Selection",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "selectionContents"
            },
            {
              "type": "int",
              "name": "startIndexInclusive"
            },
            {
              "type": "int",
              "name": "endIndexExclusive"
            }
          ],
          "description": "Create an instance of {@link Selection}.\n\n@param selectionContents   The contents of the selection.\n@param startIndexInclusive The start position of the selection range.\n@param endIndexExclusive   The end position of the selection range.\n\n@return A new instance of {@link Selection}",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.UserInterface": {
      "name": "UserInterface",
      "fullName": "burp.api.montoya.ui.UserInterface",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "menuBar",
          "returnType": "MenuBar",
          "parameters": [],
          "description": "@return The Burp Suite {@link MenuBar}.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerSuiteTab",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "String",
              "name": "title"
            },
            {
              "type": "Component",
              "name": "component"
            }
          ],
          "description": "Add a custom tab to the main Burp Suite window.\n\n@param title     The text to be displayed in the tab heading.\n@param component The component that will be rendered within the custom tab.\n\n@return A {@link Registration} of the custom suite tab.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerContextMenuItemsProvider",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ContextMenuItemsProvider",
              "name": "provider"
            }
          ],
          "description": "This method can be used to register a provider of custom context menu items.\n\n@param provider The provider to register.\n\n@return A {@link Registration} of the context menu item provider.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerHttpRequestEditorProvider",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "HttpRequestEditorProvider",
              "name": "provider"
            }
          ],
          "description": "This method can be used to register a provider of custom HTTP request editors.\n\n@param provider The provider to register.\n\n@return A {@link Registration} of the HTTP request editor provider.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerHttpResponseEditorProvider",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "HttpResponseEditorProvider",
              "name": "provider"
            }
          ],
          "description": "This method can be used to register a provider of custom HTTP response editors.\n\n@param provider The provider to register.\n\n@return A {@link Registration} of the HTTP response editor provider.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerWebSocketMessageEditorProvider",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "WebSocketMessageEditorProvider",
              "name": "provider"
            }
          ],
          "description": "This method can be used to register a provider of custom Web Socket message editors.\n\n@param provider The provider to register.\n\n@return A {@link Registration} of the Web Socket message editor provider.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerHotKeyHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "HotKeyContext",
              "name": "context"
            },
            {
              "type": "String",
              "name": "hotKey"
            },
            {
              "type": "HotKeyHandler",
              "name": "handler"
            }
          ],
          "description": "This method can be used to register hotkey handlers.\nHotkeys are defined in the same format as within Burp's Settings.\n\n@param context context\n@param hotKey hotkey\n@param handler the handler to register\n\n@return A {@link Registration} of the Hot Key handler.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerSettingsPanel",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "SettingsPanel",
              "name": "settingsPanel"
            }
          ],
          "description": "This method can be used to register a settings panel within Burp's Settings dialog.\n\n@param settingsPanel the settings panel to register\n\n@return A {@link Registration} of the settings panel.",
          "isProfessionalOnly": false
        },
        {
          "name": "createRawEditor",
          "returnType": "RawEditor",
          "parameters": [
            {
              "type": "EditorOptions...",
              "name": "options"
            }
          ],
          "description": "Create a new instance of Burp's plain text editor, for the extension to use in its own UI.\n\n@param options Optional options to apply to the editor.\n\n@return An instance of the {@link RawEditor} interface.",
          "isProfessionalOnly": false
        },
        {
          "name": "createWebSocketMessageEditor",
          "returnType": "WebSocketMessageEditor",
          "parameters": [
            {
              "type": "EditorOptions...",
              "name": "options"
            }
          ],
          "description": "Create a new instance of Burp's WebSocket message editor, for the extension to use in its own UI.\n\n@param options Optional options to apply to the editor.\n\n@return An instance of the {@link WebSocketMessageEditor} interface.",
          "isProfessionalOnly": false
        },
        {
          "name": "createHttpRequestEditor",
          "returnType": "HttpRequestEditor",
          "parameters": [
            {
              "type": "EditorOptions...",
              "name": "options"
            }
          ],
          "description": "Create a new instance of Burp's HTTP request editor, for the extension to use in its own UI.\n\n@param options Optional options to apply to the editor.\n\n@return An instance of the {@link HttpRequestEditor} interface.",
          "isProfessionalOnly": false
        },
        {
          "name": "createHttpResponseEditor",
          "returnType": "HttpResponseEditor",
          "parameters": [
            {
              "type": "EditorOptions...",
              "name": "options"
            }
          ],
          "description": "Create a new instance of Burp's HTTP response editor, for the extension to use in its own UI.\n\n@param options Optional options to apply to the editor.\n\n@return An instance of the {@link HttpResponseEditor} interface.",
          "isProfessionalOnly": false
        },
        {
          "name": "applyThemeToComponent",
          "returnType": "void",
          "parameters": [
            {
              "type": "Component",
              "name": "component"
            }
          ],
          "description": "Customize UI components in line with Burp's UI style, including font size, colors, table line spacing, etc.\nThe action is performed recursively on any child components of the passed-in component.\n\n@param component The component to be customized.",
          "isProfessionalOnly": false
        },
        {
          "name": "currentTheme",
          "returnType": "Theme",
          "parameters": [],
          "description": "Identify the theme currently being used.\n\n@return The current {@link Theme}",
          "isProfessionalOnly": false
        },
        {
          "name": "currentEditorFont",
          "returnType": "Font",
          "parameters": [],
          "description": "Access the message editor's font type and size.\n\n@return The current {@link java.awt.Font}, as specified in the <strong>Settings</strong> dialog under the <strong>HTTP message display</strong> setting.",
          "isProfessionalOnly": false
        },
        {
          "name": "currentDisplayFont",
          "returnType": "Font",
          "parameters": [],
          "description": "Access Burp's font size.\n\n@return The current {@link java.awt.Font}, as specified in the <strong>Settings</strong> dialog under the <strong>Appearance</strong> setting.",
          "isProfessionalOnly": false
        },
        {
          "name": "swingUtils",
          "returnType": "SwingUtils",
          "parameters": [],
          "description": "@return An instance of {@link SwingUtils}",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.AuditIssueContextMenuEvent": {
      "name": "AuditIssueContextMenuEvent",
      "fullName": "burp.api.montoya.ui.contextmenu.AuditIssueContextMenuEvent",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.ComponentEvent": {
      "name": "ComponentEvent",
      "fullName": "burp.api.montoya.ui.contextmenu.ComponentEvent",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "inputEvent",
          "returnType": "InputEvent",
          "parameters": [],
          "description": "This method can be used to retrieve the native Java input event that was\nthe trigger for the context menu invocation.\n\n@return The {@link InputEvent} that was the trigger for the context menu invocation.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.ContextMenuEvent": {
      "name": "ContextMenuEvent",
      "fullName": "burp.api.montoya.ui.contextmenu.ContextMenuEvent",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.ContextMenuItemsProvider": {
      "name": "ContextMenuItemsProvider",
      "fullName": "burp.api.montoya.ui.contextmenu.ContextMenuItemsProvider",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "items",
          "returnType": "menu",
          "parameters": [
            {
              "type": "which",
              "name": "may"
            },
            {
              "type": "checkbox",
              "name": "menu"
            }
          ],
          "description": "@param event This object can be queried to find out about HTTP request/responses that are associated with the context menu invocation.\n\n@return A list of custom menu items (which may include sub-menus, checkbox menu items, etc.) that should be displayed.",
          "isProfessionalOnly": false
        },
        {
          "name": "emptyList",
          "returnType": "return",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "items",
          "returnType": "menu",
          "parameters": [
            {
              "type": "which",
              "name": "may"
            },
            {
              "type": "checkbox",
              "name": "menu"
            }
          ],
          "description": "@param event This object can be queried to find out about WebSocket messages that are associated with the context menu invocation.\n\n@return A list of custom menu items (which may include sub-menus, checkbox menu items, etc.) that should be displayed.",
          "isProfessionalOnly": false
        },
        {
          "name": "emptyList",
          "returnType": "return",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "items",
          "returnType": "menu",
          "parameters": [
            {
              "type": "which",
              "name": "may"
            },
            {
              "type": "checkbox",
              "name": "menu"
            }
          ],
          "description": "@param event This object can be queried to find out about audit issues that are associated with the context menu invocation.\n\n@return A list of custom menu items (which may include sub-menus, checkbox menu items, etc.) that should be displayed.",
          "isProfessionalOnly": false
        },
        {
          "name": "emptyList",
          "returnType": "return",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.InvocationSource": {
      "name": "InvocationSource",
      "fullName": "burp.api.montoya.ui.contextmenu.InvocationSource",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "invocationType",
          "returnType": "InvocationType",
          "parameters": [],
          "description": "@return An instance of {@link InvocationType} which provides the current location of the context menu being invoked.",
          "isProfessionalOnly": false
        },
        {
          "name": "isFrom",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "InvocationType...",
              "name": "invocationType"
            }
          ],
          "description": "A helper method to allow the extension to ask if the context is within a set of locations.\n\n@param invocationType One or more instances of {@link InvocationType} to check.\n\n@return True if the context menu is being invoked from one of the types that is being checked.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.MessageEditorHttpRequestResponse": {
      "name": "MessageEditorHttpRequestResponse",
      "fullName": "burp.api.montoya.ui.contextmenu.MessageEditorHttpRequestResponse",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "selectionContext",
          "returnType": "SelectionContext",
          "parameters": [],
          "description": "@return An {@link SelectionContext} which indicates what data has been selected by the user and has focus.",
          "isProfessionalOnly": false
        },
        {
          "name": "caretPosition",
          "returnType": "int",
          "parameters": [],
          "description": "@return The index of the position for the carat within the current message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "requestResponse",
          "returnType": "HttpRequestResponse",
          "parameters": [],
          "description": "@return An instance of {@link HttpRequestResponse} which contains the information about the currently displayed or selected HTTP request/response.",
          "isProfessionalOnly": false
        },
        {
          "name": "setRequest",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "Update the message editor with the HTTP request\n\n@param request the request to update the editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "Update the message editor with the HTTP response\n\n@param response the response to update the editor.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.WebSocketContextMenuEvent": {
      "name": "WebSocketContextMenuEvent",
      "fullName": "burp.api.montoya.ui.contextmenu.WebSocketContextMenuEvent",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.WebSocketEditorEvent": {
      "name": "WebSocketEditorEvent",
      "fullName": "burp.api.montoya.ui.contextmenu.WebSocketEditorEvent",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getContents",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The contents of the message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setContents",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "contents"
            }
          ],
          "description": "This method can be used to set the content within the message editor programmatically.\nIf the editor is read only the contents will not be updated.\n\n@param contents The content to set in the message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "webSocketMessage",
          "returnType": "WebSocketMessage",
          "parameters": [],
          "description": "@return the WebSocket message used to populate the editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "isReadOnly",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return if the editor is read only.",
          "isProfessionalOnly": false
        },
        {
          "name": "caretPosition",
          "returnType": "int",
          "parameters": [],
          "description": "@return The index of the position for the carat within the current message editor.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.contextmenu.WebSocketMessage": {
      "name": "WebSocketMessage",
      "fullName": "burp.api.montoya.ui.contextmenu.WebSocketMessage",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "annotations",
          "returnType": "Annotations",
          "parameters": [],
          "description": "This method retrieves the annotations for the message.\n\n@return The {@link Annotations} for the message.",
          "isProfessionalOnly": false
        },
        {
          "name": "direction",
          "returnType": "Direction",
          "parameters": [],
          "description": "@return The direction of the message.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return WebSocket payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "upgradeRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The {@link HttpRequest} used to create the WebSocket.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.Editor": {
      "name": "Editor",
      "fullName": "burp.api.montoya.ui.editor.Editor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "setSearchExpression",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "expression"
            }
          ],
          "description": "Update the search expression that is shown in the search bar below the editor.\n\n@param expression The search expression.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the contents of the editor since the last time the content was set programmatically.",
          "isProfessionalOnly": false
        },
        {
          "name": "caretPosition",
          "returnType": "int",
          "parameters": [],
          "description": "@return The index of the position for the carat within the current message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return UI component of the editor, for extensions to add to their own UI.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.HttpRequestEditor": {
      "name": "HttpRequestEditor",
      "fullName": "burp.api.montoya.ui.editor.HttpRequestEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return an instance of {@link HttpRequest} derived from the contents of the editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setRequest",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "request"
            }
          ],
          "description": "Display the contents of an HTTP request in the editor.\n\n@param request The HTTP request to be set.",
          "isProfessionalOnly": false
        },
        {
          "name": "setSearchExpression",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "expression"
            }
          ],
          "description": "Update the search expression that is shown in the search bar below the editor.\n\n@param expression The search expression.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the contents of the editor since the last time the content was set programmatically.",
          "isProfessionalOnly": false
        },
        {
          "name": "caretPosition",
          "returnType": "int",
          "parameters": [],
          "description": "@return The index of the position for the carat within the current message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return UI component of the editor, for extensions to add to their own UI.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.HttpResponseEditor": {
      "name": "HttpResponseEditor",
      "fullName": "burp.api.montoya.ui.editor.HttpResponseEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getResponse",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "@return an instance of {@link HttpResponse} derived from the contents of the editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpResponse",
              "name": "response"
            }
          ],
          "description": "Display the contents of an HTTP response in the editor.\n\n@param response The HTTP response to be set.",
          "isProfessionalOnly": false
        },
        {
          "name": "setSearchExpression",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "expression"
            }
          ],
          "description": "Update the search expression that is shown in the search bar below the editor.\n\n@param expression The search expression.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the contents of the editor since the last time the content was set programmatically.",
          "isProfessionalOnly": false
        },
        {
          "name": "caretPosition",
          "returnType": "int",
          "parameters": [],
          "description": "@return The index of the position for the carat within the current message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return UI component of the editor, for extensions to add to their own UI.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.RawEditor": {
      "name": "RawEditor",
      "fullName": "burp.api.montoya.ui.editor.RawEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "setEditable",
          "returnType": "void",
          "parameters": [
            {
              "type": "boolean",
              "name": "editable"
            }
          ],
          "description": "@param editable Boolean flag to toggle if this text editor is editable or not.",
          "isProfessionalOnly": false
        },
        {
          "name": "getContents",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The contents of the text editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setContents",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "contents"
            }
          ],
          "description": "This method can be used to set content within the text editor programmatically\n\n@param contents The content to set in the text editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setSearchExpression",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "expression"
            }
          ],
          "description": "Update the search expression that is shown in the search bar below the editor.\n\n@param expression The search expression.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the contents of the editor since the last time the content was set programmatically.",
          "isProfessionalOnly": false
        },
        {
          "name": "caretPosition",
          "returnType": "int",
          "parameters": [],
          "description": "@return The index of the position for the carat within the current message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return UI component of the editor, for extensions to add to their own UI.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.WebSocketMessageEditor": {
      "name": "WebSocketMessageEditor",
      "fullName": "burp.api.montoya.ui.editor.WebSocketMessageEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getContents",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The contents of the message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setContents",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "contents"
            }
          ],
          "description": "This method can be used to set content within the message editor programmatically\n\n@param contents The content to set in the message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setSearchExpression",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "expression"
            }
          ],
          "description": "Update the search expression that is shown in the search bar below the editor.\n\n@param expression The search expression.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the contents of the editor since the last time the content was set programmatically.",
          "isProfessionalOnly": false
        },
        {
          "name": "caretPosition",
          "returnType": "int",
          "parameters": [],
          "description": "@return The index of the position for the carat within the current message editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return UI component of the editor, for extensions to add to their own UI.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.extension.EditorCreationContext": {
      "name": "EditorCreationContext",
      "fullName": "burp.api.montoya.ui.editor.extension.EditorCreationContext",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "toolSource",
          "returnType": "ToolSource",
          "parameters": [],
          "description": "Indicates which Burp tool is requesting the editor.\n\n@return The tool requesting an editor",
          "isProfessionalOnly": false
        },
        {
          "name": "editorMode",
          "returnType": "EditorMode",
          "parameters": [],
          "description": "Indicates which modes the Burp tool requests of the editor.\ne.g. Proxy expects a read only editor, Repeater expects the default editor.\n\n@return The mode required by the editor.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.extension.ExtensionProvidedEditor": {
      "name": "ExtensionProvidedEditor",
      "fullName": "burp.api.montoya.ui.editor.extension.ExtensionProvidedEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "setRequestResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "Sets the provided {@link HttpRequestResponse} object within the editor component.\n\n@param requestResponse The request and response to set in the editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "isEnabledFor",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "A check to determine if the HTTP message editor is enabled for a specific {@link HttpRequestResponse}\n\n@param requestResponse The {@link HttpRequestResponse} to check.\n\n@return True if the HTTP message editor is enabled for the provided request and response.",
          "isProfessionalOnly": false
        },
        {
          "name": "caption",
          "returnType": "String",
          "parameters": [],
          "description": "@return The caption located in the message editor tab header.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return The component that is rendered within the message editor tab.",
          "isProfessionalOnly": false
        },
        {
          "name": "selectedData",
          "returnType": "Selection",
          "parameters": [],
          "description": "The method should return {@code null} if no data has been selected.\n\n@return The data that is currently selected by the user.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the current message within the editor.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.extension.ExtensionProvidedHttpRequestEditor": {
      "name": "ExtensionProvidedHttpRequestEditor",
      "fullName": "burp.api.montoya.ui.editor.extension.ExtensionProvidedHttpRequestEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return An instance of {@link HttpRequest} derived from the content of the HTTP request editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setRequestResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "Sets the provided {@link HttpRequestResponse} object within the editor component.\n\n@param requestResponse The request and response to set in the editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "isEnabledFor",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "A check to determine if the HTTP message editor is enabled for a specific {@link HttpRequestResponse}\n\n@param requestResponse The {@link HttpRequestResponse} to check.\n\n@return True if the HTTP message editor is enabled for the provided request and response.",
          "isProfessionalOnly": false
        },
        {
          "name": "caption",
          "returnType": "String",
          "parameters": [],
          "description": "@return The caption located in the message editor tab header.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return The component that is rendered within the message editor tab.",
          "isProfessionalOnly": false
        },
        {
          "name": "selectedData",
          "returnType": "Selection",
          "parameters": [],
          "description": "The method should return {@code null} if no data has been selected.\n\n@return The data that is currently selected by the user.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the current message within the editor.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.extension.ExtensionProvidedHttpResponseEditor": {
      "name": "ExtensionProvidedHttpResponseEditor",
      "fullName": "burp.api.montoya.ui.editor.extension.ExtensionProvidedHttpResponseEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getResponse",
          "returnType": "HttpResponse",
          "parameters": [],
          "description": "@return An instance of {@link HttpResponse} derived from the content of the HTTP response editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "setRequestResponse",
          "returnType": "void",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "Sets the provided {@link HttpRequestResponse} object within the editor component.\n\n@param requestResponse The request and response to set in the editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "isEnabledFor",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "HttpRequestResponse",
              "name": "requestResponse"
            }
          ],
          "description": "A check to determine if the HTTP message editor is enabled for a specific {@link HttpRequestResponse}\n\n@param requestResponse The {@link HttpRequestResponse} to check.\n\n@return True if the HTTP message editor is enabled for the provided request and response.",
          "isProfessionalOnly": false
        },
        {
          "name": "caption",
          "returnType": "String",
          "parameters": [],
          "description": "@return The caption located in the message editor tab header.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return The component that is rendered within the message editor tab.",
          "isProfessionalOnly": false
        },
        {
          "name": "selectedData",
          "returnType": "Selection",
          "parameters": [],
          "description": "The method should return {@code null} if no data has been selected.\n\n@return The data that is currently selected by the user.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the current message within the editor.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.extension.ExtensionProvidedWebSocketMessageEditor": {
      "name": "ExtensionProvidedWebSocketMessageEditor",
      "fullName": "burp.api.montoya.ui.editor.extension.ExtensionProvidedWebSocketMessageEditor",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getMessage",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The current message set in the editor as an instance of {@link ByteArray}",
          "isProfessionalOnly": false
        },
        {
          "name": "setMessage",
          "returnType": "void",
          "parameters": [
            {
              "type": "WebSocketMessage",
              "name": "message"
            }
          ],
          "description": "Sets the provided {@link WebSocketMessage} within the editor component.\n\n@param message The message to set in the editor.",
          "isProfessionalOnly": false
        },
        {
          "name": "isEnabledFor",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "WebSocketMessage",
              "name": "message"
            }
          ],
          "description": "A check to determine if the Web Socket editor is enabled for a specific {@link WebSocketMessage} message\n\n@param message The {@link WebSocketMessage} to check.\n\n@return True if the Web Socket message editor is enabled for the provided message.",
          "isProfessionalOnly": false
        },
        {
          "name": "caption",
          "returnType": "String",
          "parameters": [],
          "description": "@return The caption located in the message editor tab header.",
          "isProfessionalOnly": false
        },
        {
          "name": "uiComponent",
          "returnType": "Component",
          "parameters": [],
          "description": "@return The component that is rendered within the message editor tab.",
          "isProfessionalOnly": false
        },
        {
          "name": "selectedData",
          "returnType": "Selection",
          "parameters": [],
          "description": "The method should return {@code null} if no data has been selected.\n\n@return The data that is currently selected by the user.",
          "isProfessionalOnly": false
        },
        {
          "name": "isModified",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return True if the user has modified the current message within the editor.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.extension.HttpRequestEditorProvider": {
      "name": "HttpRequestEditorProvider",
      "fullName": "burp.api.montoya.ui.editor.extension.HttpRequestEditorProvider",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "provideHttpRequestEditor",
          "returnType": "ExtensionProvidedHttpRequestEditor",
          "parameters": [
            {
              "type": "EditorCreationContext",
              "name": "creationContext"
            }
          ],
          "description": "Invoked by Burp when a new HTTP request editor is required from the extension.\n\n@param creationContext details about the context that is requiring a request editor\n\n@return An instance of {@link ExtensionProvidedHttpRequestEditor}",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.extension.HttpResponseEditorProvider": {
      "name": "HttpResponseEditorProvider",
      "fullName": "burp.api.montoya.ui.editor.extension.HttpResponseEditorProvider",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "provideHttpResponseEditor",
          "returnType": "ExtensionProvidedHttpResponseEditor",
          "parameters": [
            {
              "type": "EditorCreationContext",
              "name": "creationContext"
            }
          ],
          "description": "Invoked by Burp when a new HTTP response editor is required from the extension.\n\n@param creationContext details about the context that is requiring a response editor\n\n@return An instance of {@link ExtensionProvidedHttpResponseEditor}",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.extension.WebSocketMessageEditorProvider": {
      "name": "WebSocketMessageEditorProvider",
      "fullName": "burp.api.montoya.ui.editor.extension.WebSocketMessageEditorProvider",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "provideMessageEditor",
          "returnType": "ExtensionProvidedWebSocketMessageEditor",
          "parameters": [
            {
              "type": "EditorCreationContext",
              "name": "creationContext"
            }
          ],
          "description": "Invoked by Burp when a new Web Socket message editor is required from the extension.\n\n@param creationContext details about the context that is requiring a message editor\n\n@return An instance of {@link ExtensionProvidedWebSocketMessageEditor}",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.hotkey.HotKeyEvent": {
      "name": "HotKeyEvent",
      "fullName": "burp.api.montoya.ui.hotkey.HotKeyEvent",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.hotkey.HotKeyHandler": {
      "name": "HotKeyHandler",
      "fullName": "burp.api.montoya.ui.hotkey.HotKeyHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handle",
          "returnType": "void",
          "parameters": [
            {
              "type": "HotKeyEvent",
              "name": "event"
            }
          ],
          "description": "Invoked by Burp Suite when the user invokes a hot key in the user interface.\n\n@param event the hot key event {@link HotKeyEvent}",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.menu.BasicMenuItem": {
      "name": "BasicMenuItem",
      "fullName": "burp.api.montoya.ui.menu.BasicMenuItem",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "void",
          "parameters": [],
          "description": "The action performed when the {@link BasicMenuItem} is clicked.",
          "isProfessionalOnly": false
        },
        {
          "name": "withAction",
          "returnType": "BasicMenuItem",
          "parameters": [
            {
              "type": "Runnable",
              "name": "action"
            }
          ],
          "description": "Create a copy of {@link BasicMenuItem} with a new {@link Runnable} action.\n\n@param action The new {@link Runnable} action.\n\n@return An updated copy of {@link BasicMenuItem}.",
          "isProfessionalOnly": false
        },
        {
          "name": "withCaption",
          "returnType": "BasicMenuItem",
          "parameters": [
            {
              "type": "String",
              "name": "caption"
            }
          ],
          "description": "Create a copy of {@link BasicMenuItem} with a new caption.\n\n@param caption The new caption.\n\n@return An updated copy of {@link BasicMenuItem}",
          "isProfessionalOnly": false
        },
        {
          "name": "basicMenuItem",
          "returnType": "BasicMenuItem",
          "parameters": [
            {
              "type": "String",
              "name": "caption"
            }
          ],
          "description": "Create a new instance of {@link BasicMenuItem} with a caption.\n\n@param caption The caption for the {@link BasicMenuItem}.\n\n@return A new instance of the {@link BasicMenuItem}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.menu.Menu": {
      "name": "Menu",
      "fullName": "burp.api.montoya.ui.menu.Menu",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "caption",
          "returnType": "String",
          "parameters": [],
          "description": "The caption to be displayed for the menu.\n\n@return The caption",
          "isProfessionalOnly": false
        },
        {
          "name": "withCaption",
          "returnType": "Menu",
          "parameters": [
            {
              "type": "String",
              "name": "caption"
            }
          ],
          "description": "Create a copy of {@link Menu} with a new caption.\n\n@param caption The new caption.\n\n@return An updated copy of {@link Menu}.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMenuItems",
          "returnType": "Menu",
          "parameters": [
            {
              "type": "MenuItem...",
              "name": "menuItems"
            }
          ],
          "description": "Create a copy of {@link Menu} with one or more instances of {@link MenuItem}.\n\n@param menuItems One or more instances of {@link MenuItem}.\n\n@return An updated copy of {@link Menu}.",
          "isProfessionalOnly": false
        },
        {
          "name": "withMenuItems",
          "returnType": "Menu",
          "parameters": [
            {
              "type": "List<MenuItem>",
              "name": "menuItems"
            }
          ],
          "description": "Create a copy of {@link Menu} with a new list of {@link MenuItem}.\n\n@param menuItems The new list of {@link MenuItem}.\n\n@return An updated copy of {@link Menu}.",
          "isProfessionalOnly": false
        },
        {
          "name": "menu",
          "returnType": "Menu",
          "parameters": [
            {
              "type": "String",
              "name": "caption"
            }
          ],
          "description": "Create a new instance of {@link Menu}.\n\n@param caption The caption for the menu.\n\n@return A new instance of {@link Menu}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.menu.MenuBar": {
      "name": "MenuBar",
      "fullName": "burp.api.montoya.ui.menu.MenuBar",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "registerMenu",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "JMenu",
              "name": "menu"
            }
          ],
          "description": "Register a menu to be added to the menu bar.\nThis option is available if you want more control over the menu structure.\n\n@param menu The menu to be registered.\n\n@return A {@link Registration} for the menu.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerMenu",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "Menu",
              "name": "menu"
            }
          ],
          "description": "Register a menu to be added to the menu bar.\nThis option is available if you want to add a simple menu.\n\n@param menu The menu to be registered.\n\n@return A {@link Registration} for the menu.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.menu.MenuItem": {
      "name": "MenuItem",
      "fullName": "burp.api.montoya.ui.menu.MenuItem",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "caption",
          "returnType": "String",
          "parameters": [],
          "description": "The caption of the {@link MenuItem}.\n\n@return The caption.",
          "isProfessionalOnly": false
        },
        {
          "name": "basicMenuItem",
          "returnType": "BasicMenuItem",
          "parameters": [
            {
              "type": "String",
              "name": "caption"
            }
          ],
          "description": "Create a new instance of {@link BasicMenuItem} with a caption.\n\n@param caption The caption for the {@link BasicMenuItem}.\n\n@return A new instance of the {@link BasicMenuItem}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.settings.SettingData": {
      "name": "SettingData",
      "fullName": "burp.api.montoya.ui.settings.SettingData",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getString",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name of the setting value.\n\n@return the setting value or empty string if none exists.",
          "isProfessionalOnly": false
        },
        {
          "name": "getBoolean",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name of the setting value.\n\n@return the setting value or false if none exists.",
          "isProfessionalOnly": false
        },
        {
          "name": "getInteger",
          "returnType": "int",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "@param name of the setting value.\n\n@return setting value or 0 if none exists.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.settings.SettingsPanel": {
      "name": "SettingsPanel",
      "fullName": "burp.api.montoya.ui.settings.SettingsPanel",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "uiComponent",
          "returnType": "JComponent",
          "parameters": [],
          "description": "@return the UI component to display in the Settings dialog.",
          "isProfessionalOnly": false
        },
        {
          "name": "emptySet",
          "returnType": "return",
          "parameters": [],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.settings.SettingsPanelBuilder": {
      "name": "SettingsPanelBuilder",
      "fullName": "burp.api.montoya.ui.settings.SettingsPanelBuilder",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "withPersistence",
          "returnType": "SettingsPanelBuilder",
          "parameters": [
            {
              "type": "SettingsPanelPersistence",
              "name": "persistence"
            }
          ],
          "description": "Sets the type of data persistence.\n\n@param persistence type of data persistence.\n\n@return instance of the builder.",
          "isProfessionalOnly": false
        },
        {
          "name": "withTitle",
          "returnType": "SettingsPanelBuilder",
          "parameters": [
            {
              "type": "String",
              "name": "title"
            }
          ],
          "description": "Sets the title to be displayed within Settings panel.\nIf no title is set then the extension name will be used.\n\n@param title the title.\n\n@return instance of the builder.",
          "isProfessionalOnly": false
        },
        {
          "name": "withDescription",
          "returnType": "SettingsPanelBuilder",
          "parameters": [
            {
              "type": "String",
              "name": "description"
            }
          ],
          "description": "Sets the description to be displayed within Settings panel.\n\n@param description the description.\n\n@return instance of the builder.",
          "isProfessionalOnly": false
        },
        {
          "name": "withSetting",
          "returnType": "SettingsPanelBuilder",
          "parameters": [
            {
              "type": "SettingsPanelSetting",
              "name": "entry"
            }
          ],
          "description": "Used to add a {@link SettingsPanelSetting} to the Settings panel.\n\n@param entry the entry.\n\n@return instance of the builder.",
          "isProfessionalOnly": false
        },
        {
          "name": "withSettings",
          "returnType": "SettingsPanelBuilder",
          "parameters": [
            {
              "type": "SettingsPanelSetting...",
              "name": "entries"
            }
          ],
          "description": "Used to add multiple {@link SettingsPanelSetting} to the Settings panel.\n\n@param entries the entries.\n\n@return instance of the builder.",
          "isProfessionalOnly": false
        },
        {
          "name": "withKeywords",
          "returnType": "SettingsPanelBuilder",
          "parameters": [
            {
              "type": "String...",
              "name": "keywords"
            }
          ],
          "description": "A set of keywords used by the Settings search function to help users find the Settings panel.\n\n@return instance of the builder.",
          "isProfessionalOnly": false
        },
        {
          "name": "withKeywords",
          "returnType": "SettingsPanelBuilder",
          "parameters": [
            {
              "type": "Collection<String>",
              "name": "keywords"
            }
          ],
          "description": "A set of keywords used by the Settings search function to help users find the Settings panel.\n\n@return instance of the builder.",
          "isProfessionalOnly": false
        },
        {
          "name": "build",
          "returnType": "SettingsPanelWithData",
          "parameters": [],
          "description": "Used to build the settings panel.\n\n@return the settings panel",
          "isProfessionalOnly": false
        },
        {
          "name": "settingsPanel",
          "returnType": "SettingsPanelBuilder",
          "parameters": [],
          "description": "Used to obtain an instance of the SettingsPanelBuilder.\n\n@return an instance of the SettingsPanelBuilder.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.settings.SettingsPanelSetting": {
      "name": "SettingsPanelSetting",
      "fullName": "burp.api.montoya.ui.settings.SettingsPanelSetting",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "integerSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Used to build a text field that only accepts integer values.\n\n@param name the name used to access the associated data via {@link SettingsPanelWithData}.\n\n@return the SettingsPanelSetting.",
          "isProfessionalOnly": false
        },
        {
          "name": "integerSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "int",
              "name": "defaultValue"
            }
          ],
          "description": "Used to build a text field that only accepts integer values and has an initial value.\nIf a value with the same name has been previously persisted value then this will be used\ninstead of the default value.\n\n@param name the name used to access the associated data via {@link SettingsPanelWithData}.\n@param defaultValue the initial value.\n\n@return the SettingsPanelSetting.",
          "isProfessionalOnly": false
        },
        {
          "name": "booleanSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Used to build a checkbox.\n\n@param name the name used to access the associated data via {@link SettingsPanelWithData}.\n\n@return the SettingsPanelSetting.",
          "isProfessionalOnly": false
        },
        {
          "name": "booleanSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "boolean",
              "name": "defaultValue"
            }
          ],
          "description": "Used to a checkbox that is set via an initial selection state.\nIf a value with the same name has been previously persisted state then this will be used\ninstead of the default state.\n\n@param name the name used to access the associated data via {@link SettingsPanelWithData}.\n@param defaultValue the initial value.\n\n@return the SettingsPanelSetting.",
          "isProfessionalOnly": false
        },
        {
          "name": "stringSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            }
          ],
          "description": "Used to build a text field.\n\n@param name the name used to access the associated data via {@link SettingsPanelWithData}.\n\n@return the SettingsPanelSetting.",
          "isProfessionalOnly": false
        },
        {
          "name": "stringSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "defaultValue"
            }
          ],
          "description": "Used to build a text field that has an initial value.\nIf a value with the same name has been previously persisted value then this will be used\ninstead of the default value.\n\n@param name the name used to access the associated data via {@link SettingsPanelWithData}.\n@param defaultValue the initial value.\n\n@return the SettingsPanelSetting.",
          "isProfessionalOnly": false
        },
        {
          "name": "listSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String...",
              "name": "values"
            }
          ],
          "description": "Used to build a combo box.\n\n@param name the name used to access the associated data via {@link SettingsPanelWithData}.\n@param values the values to use within the combo box.\n\n@return the SettingsPanelSetting.",
          "isProfessionalOnly": false
        },
        {
          "name": "listSetting",
          "returnType": "SettingsPanelSetting",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "List<String>",
              "name": "values"
            },
            {
              "type": "String",
              "name": "defaultValue"
            }
          ],
          "description": "Used to build a combo box that has a specific initial value selected.\nIf a value with the same name has been previously persisted value then this will be used\ninstead of the default value.\n\n@param name the name used to access the associated data via {@link SettingsPanelWithData}.\n@param values the values to use within the combo box.\n@param defaultValue the initial value.\n\n@return the SettingsPanelSetting.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.settings.SettingsPanelWithData": {
      "name": "SettingsPanelWithData",
      "fullName": "burp.api.montoya.ui.settings.SettingsPanelWithData",
      "type": "interface",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": "Represents a settings panel built using {@link SettingsPanelBuilder} displayed in Burp's Settings dialog,\nwhich has associated data.\n"
    },
    "burp.api.montoya.ui.swing.SwingUtils": {
      "name": "SwingUtils",
      "fullName": "burp.api.montoya.ui.swing.SwingUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "suiteFrame",
          "returnType": "Frame",
          "parameters": [],
          "description": "@return the main Burp suite frame.",
          "isProfessionalOnly": false
        },
        {
          "name": "windowForComponent",
          "returnType": "Window",
          "parameters": [
            {
              "type": "Component",
              "name": "component"
            }
          ],
          "description": "Retrieve the top-level {@code Window} containing the supplied component.\n\n@param component the component.\n\n@return the top-level {@code Window} containing the component.",
          "isProfessionalOnly": false
        },
        {
          "name": "colorForHighLight",
          "returnType": "Color",
          "parameters": [
            {
              "type": "HighlightColor",
              "name": "highlightColor"
            }
          ],
          "description": "Convert a highlight color to a java color.\n\n@param highlightColor the {@link HighlightColor}\n\n@return the java color for the highlight color.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.Base64Utils": {
      "name": "Base64Utils",
      "fullName": "burp.api.montoya.utilities.Base64Utils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "encode",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "data"
            },
            {
              "type": "Base64EncodingOptions...",
              "name": "options"
            }
          ],
          "description": "Encodes all bytes from the specified byte array into a newly-allocated\nbyte array using the {@link Base64} encoding scheme. The returned byte\narray is of the length of the resulting bytes.\n\n@param data    the byte array to encode\n@param options the options to use for encoding\n\n@return A newly-allocated byte array containing the resulting\nencoded bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "encode",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "String",
              "name": "data"
            },
            {
              "type": "Base64EncodingOptions...",
              "name": "options"
            }
          ],
          "description": "Encodes all bytes from the specified String into a newly-allocated\nbyte array using the {@link Base64} encoding scheme. The returned byte\narray is of the length of the resulting bytes.\n\n@param data    the string to encode.\n@param options the options to use for encoding\n\n@return A newly-allocated byte array containing the resulting\nencoded bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "encodeToString",
          "returnType": "String",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "data"
            },
            {
              "type": "Base64EncodingOptions...",
              "name": "options"
            }
          ],
          "description": "Encodes all bytes from the specified byte array into a String using the {@link Base64} encoding scheme.\n\n@param data    the byte array to encode\n@param options the options to use for encoding\n\n@return A newly-allocated byte array containing the resulting\nencoded bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "encodeToString",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "data"
            },
            {
              "type": "Base64EncodingOptions...",
              "name": "options"
            }
          ],
          "description": "Encodes all bytes from the specified String into a String using the {@link Base64} encoding scheme.\n\n@param data    the string to encode.\n@param options the options to use for encoding\n\n@return A newly-allocated byte array containing the resulting\nencoded bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "decode",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "data"
            },
            {
              "type": "Base64DecodingOptions...",
              "name": "options"
            }
          ],
          "description": "Decodes all bytes from the specified byte array into a newly-allocated\nbyte array using the {@link Base64} decoding scheme. The returned byte\narray is of the length of the resulting bytes.\n\n@param data    the bytes to decode.\n@param options the options to use for decoding\n\n@return A newly-allocated byte array containing the resulting\ndecoded bytes.",
          "isProfessionalOnly": false
        },
        {
          "name": "decode",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "String",
              "name": "data"
            },
            {
              "type": "Base64DecodingOptions...",
              "name": "options"
            }
          ],
          "description": "Decodes all bytes from the specified String into a newly-allocated\nbyte array using the {@link Base64} decoding scheme. The returned byte\narray is of the length of the resulting bytes.\n\n@param data    the string to decode.\n@param options the options to use for decoding\n\n@return A newly-allocated byte array containing the resulting\ndecoded bytes.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.ByteUtils": {
      "name": "ByteUtils",
      "fullName": "burp.api.montoya.utilities.ByteUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "byte[]",
              "name": "searchTerm"
            }
          ],
          "description": "@param data       The data to be searched.\n@param searchTerm The value to be searched for.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "byte[]",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "@param data          The data to be searched.\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "byte[]",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            },
            {
              "type": "int",
              "name": "from"
            },
            {
              "type": "int",
              "name": "to"
            }
          ],
          "description": "@param data          The data to be searched.\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n@param from          The offset within data where the search should begin.\n@param to            The offset within data where the search should end.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "This method searches a piece of data for the first occurrence of a specified pattern.\n\n@param data    The data to be searched.\n@param pattern The pattern to be matched.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "indexOf",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "Pattern",
              "name": "pattern"
            },
            {
              "type": "int",
              "name": "from"
            },
            {
              "type": "int",
              "name": "to"
            }
          ],
          "description": "This method searches a piece of data for the first occurrence of a specified pattern.\n\n@param data    The data to be searched.\n@param pattern The pattern to be matched.\n@param from    The offset within data where the search should begin.\n@param to      The offset within data where the search should end.\n\n@return The offset of the first occurrence of the pattern within the specified bounds, or -1 if no match is found.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "byte[]",
              "name": "searchTerm"
            }
          ],
          "description": "This method searches a piece of data and counts all matches for a specified pattern.\n\n@param data       The data to be searched.\n@param searchTerm The value to be searched for.\n\n@return The count of all matches of the pattern.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "byte[]",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            }
          ],
          "description": "This method searches a piece of data and counts all matches for a specified pattern.\n\n@param data          The data to be searched.\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n\n@return The count of all matches of the pattern.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "byte[]",
              "name": "searchTerm"
            },
            {
              "type": "boolean",
              "name": "caseSensitive"
            },
            {
              "type": "int",
              "name": "from"
            },
            {
              "type": "int",
              "name": "to"
            }
          ],
          "description": "This method searches a piece of data and counts all matches for a specified pattern.\n\n@param data          The data to be searched.\n@param searchTerm    The value to be searched for.\n@param caseSensitive Flags whether the search is case-sensitive.\n@param from          The offset within data where the search should begin.\n@param to            The offset within data where the search should end.\n\n@return The count of all matches of the pattern within the specified bounds.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "Pattern",
              "name": "pattern"
            }
          ],
          "description": "This method searches a piece of data and counts all matches for a specified pattern.\n\n@param data    The data to be searched.\n@param pattern The pattern to be matched.\n\n@return The count of all matches of the pattern within the specified bounds.",
          "isProfessionalOnly": false
        },
        {
          "name": "countMatches",
          "returnType": "int",
          "parameters": [
            {
              "type": "byte[]",
              "name": "data"
            },
            {
              "type": "Pattern",
              "name": "pattern"
            },
            {
              "type": "int",
              "name": "from"
            },
            {
              "type": "int",
              "name": "to"
            }
          ],
          "description": "This method searches a piece of data and counts all matches for a specified pattern.\n\n@param data    The data to be searched.\n@param pattern The pattern to be matched.\n@param from    The offset within data where the search should begin.\n@param to      The offset within data where the search should end.\n\n@return The count of all matches of the pattern within the specified bounds.",
          "isProfessionalOnly": false
        },
        {
          "name": "convertToString",
          "returnType": "String",
          "parameters": [
            {
              "type": "byte[]",
              "name": "bytes"
            }
          ],
          "description": "and byte-based data that is converted to a String and back again using these two methods is guaranteed to retain its integrity (which may not be the case with\nconversions that reflect a given character set).\n\n@param bytes The data to be converted.\n\n@return The converted data.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.CompressionUtils": {
      "name": "CompressionUtils",
      "fullName": "burp.api.montoya.utilities.CompressionUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "compress",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "data"
            },
            {
              "type": "CompressionType",
              "name": "type"
            }
          ],
          "description": "Compress data using the specified compression type.\n\n@param data data to be compressed\n@param type {@link CompressionType} to use. Only GZIP is supported\n\n@return compressed data",
          "isProfessionalOnly": false
        },
        {
          "name": "decompress",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "compressedData"
            },
            {
              "type": "CompressionType",
              "name": "type"
            }
          ],
          "description": "Decompress data compressed using the specified compression type.\n\n@param compressedData data to be decompressed\n@param type           {@link CompressionType} of the compressed data\n\n@return decompressed data",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.CryptoUtils": {
      "name": "CryptoUtils",
      "fullName": "burp.api.montoya.utilities.CryptoUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "generateDigest",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "data"
            },
            {
              "type": "DigestAlgorithm",
              "name": "algorithm"
            }
          ],
          "description": "Generate a message digest for the supplied data using the specified algorithm\n\n@param data      the data to generate the digest from\n@param algorithm the message {@link DigestAlgorithm} to use\n\n@return the generated message digest",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.HtmlUtils": {
      "name": "HtmlUtils",
      "fullName": "burp.api.montoya.utilities.HtmlUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "encode",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "html"
            }
          ],
          "description": "Encode HTML text using {@link HtmlEncoding#STANDARD} encoding.\n\n@param html {@code String} to be encoded.\n\n@return the encoded {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "encode",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "html"
            },
            {
              "type": "HtmlEncoding",
              "name": "encoding"
            }
          ],
          "description": "Encode HTML text.\n\n@param html     {@code String} to be encoded.\n@param encoding {@link HtmlEncoding} to be used.\n\n@return the encoded {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "decode",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "encodedHtml"
            }
          ],
          "description": "Decode encoded HTML text.\n\n@param encodedHtml {@code String} to be decoded.\n\n@return the decoded {@code String}.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.NumberUtils": {
      "name": "NumberUtils",
      "fullName": "burp.api.montoya.utilities.NumberUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "convertBinaryToOctal",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "binaryString"
            }
          ],
          "description": "@param binaryString the binary string to convert\n\n@return string containing the octal representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertBinaryToOctal",
          "returnType": "String",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "byteArray"
            }
          ],
          "description": "@param byteArray the byte array to convert\n\n@return string containing the octal representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertBinaryToDecimal",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "binaryString"
            }
          ],
          "description": "@param binaryString the binary string to convert\n\n@return string containing the decimal representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertBinaryToDecimal",
          "returnType": "String",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "byteArray"
            }
          ],
          "description": "@param byteArray the byte array to convert\n\n@return string containing the decimal representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertBinaryToHex",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "binaryString"
            }
          ],
          "description": "@param binaryString the binary string to convert\n\n@return string containing the hex representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertBinaryToHex",
          "returnType": "String",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "byteArray"
            }
          ],
          "description": "@param byteArray the byte array to convert\n\n@return string containing the hex representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertOctalToBinary",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "octalString"
            }
          ],
          "description": "@param octalString the octal string to convert\n\n@return string containing the binary representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertOctalToDecimal",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "octalString"
            }
          ],
          "description": "@param octalString the octal string to convert\n\n@return string containing the decimal representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertOctalToHex",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "octalString"
            }
          ],
          "description": "@param octalString the octal string to convert\n\n@return string containing the hex representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertDecimalToBinary",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "decimalString"
            }
          ],
          "description": "@param decimalString the decimal string to convert\n\n@return string containing the binary representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertDecimalToOctal",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "decimalString"
            }
          ],
          "description": "@param decimalString the decimal string to convert\n\n@return string containing the octal representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertDecimalToHex",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "decimalString"
            }
          ],
          "description": "@param decimalString the decimal string to convert\n\n@return string containing the hex representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertHexToBinary",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "hexString"
            }
          ],
          "description": "@param hexString the hex string to convert\n\n@return string containing the binary representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertHexToOctal",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "hexString"
            }
          ],
          "description": "@param hexString the hex string to convert\n\n@return string containing the octal representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertHexToDecimal",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "hexString"
            }
          ],
          "description": "@param hexString the hex string to convert\n\n@return string containing the decimal representation",
          "isProfessionalOnly": false
        },
        {
          "name": "convertBinary",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "binaryString"
            },
            {
              "type": "int",
              "name": "radix"
            }
          ],
          "description": "@param binaryString the binary string to convert\n@param radix        the radix to convert to\n\n@return string containing the representation in the specified radix",
          "isProfessionalOnly": false
        },
        {
          "name": "convertOctal",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "octalString"
            },
            {
              "type": "int",
              "name": "radix"
            }
          ],
          "description": "@param octalString the octal string to convert\n@param radix       the radix to convert to\n\n@return string containing the representation in the specified radix",
          "isProfessionalOnly": false
        },
        {
          "name": "convertDecimal",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "decimalString"
            },
            {
              "type": "int",
              "name": "radix"
            }
          ],
          "description": "@param decimalString the decimal string to convert\n@param radix         the radix to convert to\n\n@return string containing the representation in the specified radix",
          "isProfessionalOnly": false
        },
        {
          "name": "convertHex",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "hexString"
            },
            {
              "type": "int",
              "name": "radix"
            }
          ],
          "description": "@param hexString the hex string to convert\n@param radix     the radix to convert to\n\n@return string containing the representation in the specified radix",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.RandomUtils": {
      "name": "RandomUtils",
      "fullName": "burp.api.montoya.utilities.RandomUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "randomString",
          "returnType": "String",
          "parameters": [
            {
              "type": "int",
              "name": "length"
            }
          ],
          "description": "Generate a random string using alphanumeric characters\n\n@param length length of the resulting random string\n\n@return randomly generated string",
          "isProfessionalOnly": false
        },
        {
          "name": "randomString",
          "returnType": "String",
          "parameters": [
            {
              "type": "int",
              "name": "length"
            },
            {
              "type": "String",
              "name": "chars"
            }
          ],
          "description": "Generate a random string using the supplied characters\n\n@param length length of the resulting random string\n@param chars  the characters to use to generate the string\n\n@return randomly generated string",
          "isProfessionalOnly": false
        },
        {
          "name": "randomString",
          "returnType": "String",
          "parameters": [
            {
              "type": "int",
              "name": "length"
            },
            {
              "type": "CharacterSet...",
              "name": "characterSets"
            }
          ],
          "description": "Generate a random string using the supplied {@link CharacterSet}\n\n@param length        length of the resulting random string\n@param characterSets the list {@code CharacterSet} to use to generate the string\n\n@return randomly generated string",
          "isProfessionalOnly": false
        },
        {
          "name": "randomString",
          "returnType": "String",
          "parameters": [
            {
              "type": "int",
              "name": "minLength"
            },
            {
              "type": "int",
              "name": "maxLength"
            },
            {
              "type": "String",
              "name": "chars"
            }
          ],
          "description": "Generate a random string using the supplied characters\n\n@param minLength the inclusive minimum length of the generated string\n@param maxLength the inclusive maximum length of the generated string\n@param chars     the characters to use to generate the string\n\n@return randomly generated string",
          "isProfessionalOnly": false
        },
        {
          "name": "randomString",
          "returnType": "String",
          "parameters": [
            {
              "type": "int",
              "name": "minLength"
            },
            {
              "type": "int",
              "name": "maxLength"
            },
            {
              "type": "CharacterSet...",
              "name": "characterSets"
            }
          ],
          "description": "Generate a random string using the supplied {@link CharacterSet}\n\n@param minLength     the inclusive minimum length of the generated string\n@param maxLength     the inclusive maximum length of the generated string\n@param characterSets the list {@code CharacterSet} to use to generate the string\n\n@return randomly generated string",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.StringUtils": {
      "name": "StringUtils",
      "fullName": "burp.api.montoya.utilities.StringUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "convertAsciiToHexString",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "data"
            }
          ],
          "description": "Convert a string to the hex values of its ASCII characters.\nEach character will be converted to a two digit hex value.\n\n@param data The ASCII data to convert.\n\n@return The string of hex values.",
          "isProfessionalOnly": false
        },
        {
          "name": "convertHexStringToAscii",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "data"
            }
          ],
          "description": "Convert a string of hex values to a string of ASCII characters.\nEach pair of hex digits will be converted to a single ASCII character.\n\n@param data The string of hex values to convert.\n\n@return The string of ASCII characters.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.URLUtils": {
      "name": "URLUtils",
      "fullName": "burp.api.montoya.utilities.URLUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "encode",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "string"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "encode",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "string"
            },
            {
              "type": "URLEncoding",
              "name": "encoding"
            }
          ],
          "description": "@param string {@code String} to be url encoded.\n@param encoding {@link URLEncoding} to be used.\n\n@return the url encoded {@code String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "decode",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "string"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "encode",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "byteArray"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        },
        {
          "name": "decode",
          "returnType": "ByteArray",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "byteArray"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.Utilities": {
      "name": "Utilities",
      "fullName": "burp.api.montoya.utilities.Utilities",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "base64Utils",
          "returnType": "Base64Utils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.Base64Utils}",
          "isProfessionalOnly": false
        },
        {
          "name": "byteUtils",
          "returnType": "ByteUtils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.ByteUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "compressionUtils",
          "returnType": "CompressionUtils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.CompressionUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "cryptoUtils",
          "returnType": "CryptoUtils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.CryptoUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "htmlUtils",
          "returnType": "HtmlUtils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.HtmlUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "numberUtils",
          "returnType": "NumberUtils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.NumberUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "randomUtils",
          "returnType": "RandomUtils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.RandomUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "stringUtils",
          "returnType": "StringUtils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.StringUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "urlUtils",
          "returnType": "URLUtils",
          "parameters": [],
          "description": "@return an instance of {@link burp.api.montoya.utilities.URLUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonUtils",
          "returnType": "JsonUtils",
          "parameters": [],
          "description": "@return an instance of {@link JsonUtils}",
          "isProfessionalOnly": false
        },
        {
          "name": "shellUtils",
          "returnType": "ShellUtils",
          "parameters": [],
          "description": "@return an instance of {@link ShellUtils}",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonArrayNode": {
      "name": "JsonArrayNode",
      "fullName": "burp.api.montoya.utilities.json.JsonArrayNode",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "add",
          "returnType": "void",
          "parameters": [
            {
              "type": "JsonNode",
              "name": "value"
            }
          ],
          "description": "Adds a {@link JsonNode} to this {@link JsonArrayNode}.\n\n@param value The node to add.",
          "isProfessionalOnly": false
        },
        {
          "name": "addString",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Adds a string to this {@link JsonArrayNode}.\n\n@param value The string to add.\n@throws NullPointerException if the value is null.",
          "isProfessionalOnly": false
        },
        {
          "name": "addBoolean",
          "returnType": "void",
          "parameters": [
            {
              "type": "boolean",
              "name": "value"
            }
          ],
          "description": "Adds a boolean to this {@link JsonArrayNode}.\n\n@param value The boolean to add.",
          "isProfessionalOnly": false
        },
        {
          "name": "addNumber",
          "returnType": "void",
          "parameters": [
            {
              "type": "long",
              "name": "value"
            }
          ],
          "description": "Adds a long to this {@link JsonArrayNode}.\n\n@param value The long to add.",
          "isProfessionalOnly": false
        },
        {
          "name": "addNumber",
          "returnType": "void",
          "parameters": [
            {
              "type": "double",
              "name": "value"
            }
          ],
          "description": "Adds a double to this {@link JsonArrayNode}.\n\n@param value The double to add.",
          "isProfessionalOnly": false
        },
        {
          "name": "addNumber",
          "returnType": "void",
          "parameters": [
            {
              "type": "Number",
              "name": "value"
            }
          ],
          "description": "Adds a number to this {@link JsonArrayNode}.\n\n@param value The number to add.",
          "isProfessionalOnly": false
        },
        {
          "name": "get",
          "returnType": "JsonNode",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "Attempts to return the JsonNode at the given index.\n\n@param index The index to retrieve.\n\n@return The {@link JsonNode} at the given index.",
          "isProfessionalOnly": false
        },
        {
          "name": "getString",
          "returnType": "String",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "Attempts to return the string at the given index.\n\n@param index The index to retrieve.\n\n@return The string at the given index or null if it is not a {@link String}.",
          "isProfessionalOnly": false
        },
        {
          "name": "getBoolean",
          "returnType": "Boolean",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "Attempts to return the boolean at the given index.\n\n@param index The index to retrieve.\n\n@return The boolean at the given index or null if it is not a {@link Boolean}.",
          "isProfessionalOnly": false
        },
        {
          "name": "getLong",
          "returnType": "Long",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "Attempts to return the number at the given index as a long.\n\n@param index The index to retrieve.\n\n@return The number at the given index as a long or null if it is not a {@link Long}.",
          "isProfessionalOnly": false
        },
        {
          "name": "getDouble",
          "returnType": "Double",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "Attempts to return the number at the given index as a double.\n\n@param index The index to retrieve.\n\n@return The number at the given index as a double or null if it is not a {@link Double}.",
          "isProfessionalOnly": false
        },
        {
          "name": "getNumber",
          "returnType": "Number",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "Attempts to return the number at the given index.\n\n@param index The index to retrieve.\n\n@return The number at the given index or null if it is not a {@link Number}.",
          "isProfessionalOnly": false
        },
        {
          "name": "remove",
          "returnType": "void",
          "parameters": [
            {
              "type": "int",
              "name": "index"
            }
          ],
          "description": "Removes the JsonNode at the given index.\n\n@param index The index for the JsonNode to remove.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonArrayNode",
          "returnType": "JsonArrayNode",
          "parameters": [],
          "description": "Creates a new empty instance of {@link JsonArrayNode}.\n\n@return A new {@link JsonArrayNode} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonArrayNode",
          "returnType": "JsonArrayNode",
          "parameters": [
            {
              "type": "List<?",
              "name": "extends"
            }
          ],
          "description": "Creates a new instance of {@link JsonArrayNode} from the supplied list of {@link JsonNode}.\n\n@param value The list of {@link JsonNode}.\n\n@return A new {@link JsonNode} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonArrayNode",
          "returnType": "JsonArrayNode",
          "parameters": [
            {
              "type": "JsonNode...",
              "name": "values"
            }
          ],
          "description": "Creates a new instance of {@link JsonArrayNode} from the supplied {@link JsonNode} instances.\n\n@param values The instances of {@link JsonNode}.\n\n@return A new {@link JsonNode} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonBooleanNode": {
      "name": "JsonBooleanNode",
      "fullName": "burp.api.montoya.utilities.json.JsonBooleanNode",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getValue",
          "returnType": "Boolean",
          "parameters": [],
          "description": "This interface is used to define a JSON boolean node.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonBooleanNode",
          "returnType": "JsonBooleanNode",
          "parameters": [
            {
              "type": "boolean",
              "name": "value"
            }
          ],
          "description": "Creates a new instance of {@link JsonBooleanNode} from the supplied boolean.\n\n@param value The boolean value.\n\n@return A new {@link JsonBooleanNode} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonNode": {
      "name": "JsonNode",
      "fullName": "burp.api.montoya.utilities.json.JsonNode",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getValue",
          "returnType": "Object",
          "parameters": [],
          "description": "Retrieves the value for this {@link JsonNode}.\n\n@return The value for this JsonNode.",
          "isProfessionalOnly": false
        },
        {
          "name": "toJsonString",
          "returnType": "String",
          "parameters": [],
          "description": "Returns this {@link JsonNode} as its string representation.\n\n@return The JsonNode in JSON string format.",
          "isProfessionalOnly": false
        },
        {
          "name": "isArray",
          "returnType": "boolean",
          "parameters": [],
          "description": "Checks if this {@link JsonNode} is an array.\n\n@return True if this JsonNode represents a JSON array.",
          "isProfessionalOnly": false
        },
        {
          "name": "isObject",
          "returnType": "boolean",
          "parameters": [],
          "description": "Checks if this {@link JsonNode} is an object.\n\n@return True if this JsonNode represents a JSON object.",
          "isProfessionalOnly": false
        },
        {
          "name": "isString",
          "returnType": "boolean",
          "parameters": [],
          "description": "Checks if this {@link JsonNode} is a string.\n\n@return True if this JsonNode represents a JSON string.",
          "isProfessionalOnly": false
        },
        {
          "name": "isNumber",
          "returnType": "boolean",
          "parameters": [],
          "description": "Checks if this {@link JsonNode} is a number.\n\n@return True if this JsonNode represents a JSON number.",
          "isProfessionalOnly": false
        },
        {
          "name": "isBoolean",
          "returnType": "boolean",
          "parameters": [],
          "description": "Checks if this {@link JsonNode} is a boolean.\n\n@return True if this JsonNode represents a JSON boolean.",
          "isProfessionalOnly": false
        },
        {
          "name": "isNull",
          "returnType": "boolean",
          "parameters": [],
          "description": "Checks if this {@link JsonNode} is null.\n\n@return True if this JsonNode represents a null value.",
          "isProfessionalOnly": false
        },
        {
          "name": "asBoolean",
          "returnType": "Boolean",
          "parameters": [],
          "description": "Attempts to return this {@link JsonNode} as a boolean.\n\n@throws IllegalStateException If this JsonNode is not a boolean type.",
          "isProfessionalOnly": false
        },
        {
          "name": "asString",
          "returnType": "String",
          "parameters": [],
          "description": "Attempts to return this {@link JsonNode} as a string.\n\n@throws IllegalStateException If this JsonNode is not a string type.",
          "isProfessionalOnly": false
        },
        {
          "name": "asNumber",
          "returnType": "Number",
          "parameters": [],
          "description": "Attempts to return this {@link JsonNode} as a number.\n\n@throws IllegalStateException If this JsonNode is not a number type.",
          "isProfessionalOnly": false
        },
        {
          "name": "asLong",
          "returnType": "Long",
          "parameters": [],
          "description": "Attempts to return this {@link JsonNode} as a long.\n\n@throws IllegalStateException If this JsonNode is not a number type.",
          "isProfessionalOnly": false
        },
        {
          "name": "asDouble",
          "returnType": "Double",
          "parameters": [],
          "description": "Attempts to return this {@link JsonNode} as a double.\n\n@throws IllegalStateException If this JsonNode is not a number type.",
          "isProfessionalOnly": false
        },
        {
          "name": "asArray",
          "returnType": "JsonArrayNode",
          "parameters": [],
          "description": "Attempts to return this {@link JsonNode} as a list of nodes.\n\n@throws IllegalStateException If this JsonNode is not an array type.",
          "isProfessionalOnly": false
        },
        {
          "name": "asObject",
          "returnType": "JsonObjectNode",
          "parameters": [],
          "description": "Attempts to return this {@link JsonNode} as an object.\n\n@throws IllegalStateException If this JsonNode is not an object type.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNode",
          "returnType": "JsonNode",
          "parameters": [
            {
              "type": "String",
              "name": "json"
            }
          ],
          "description": "Creates a new instance of {@link JsonNode} from the supplied json string.\n\n@param json The JSON string, which may use single quotes in place of double quotes.\n\n@return A new {@link JsonNode} instance.\n@throws JsonParseException If the string is not valid JSON.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonNullNode": {
      "name": "JsonNullNode",
      "fullName": "burp.api.montoya.utilities.json.JsonNullNode",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getValue",
          "returnType": "Object",
          "parameters": [],
          "description": "This interface is used to define a JSON null node.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNullNode",
          "returnType": "JsonNullNode",
          "parameters": [],
          "description": "Creates a new instance of {@link JsonNullNode}.\n\n@return A new {@link JsonNullNode} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonNumberNode": {
      "name": "JsonNumberNode",
      "fullName": "burp.api.montoya.utilities.json.JsonNumberNode",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getValue",
          "returnType": "Number",
          "parameters": [],
          "description": "This interface is used to define a JSON number node.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNumberNode",
          "returnType": "JsonNumberNode",
          "parameters": [
            {
              "type": "long",
              "name": "value"
            }
          ],
          "description": "Creates a new instance of {@link JsonNumberNode} from the supplied long.\n\n@param value The long value.\n\n@return A new {@link JsonNumberNode} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNumberNode",
          "returnType": "JsonNumberNode",
          "parameters": [
            {
              "type": "double",
              "name": "value"
            }
          ],
          "description": "Creates a new instance of {@link JsonNumberNode} from the supplied double.\n\n@param value The double value.\n\n@return A new {@link JsonNumberNode} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonNumberNode",
          "returnType": "JsonNumberNode",
          "parameters": [
            {
              "type": "Number",
              "name": "value"
            }
          ],
          "description": "Creates a new instance of {@link JsonNumberNode} from the supplied number.\n\n@param value The number value.\n\n@return A new {@link JsonNumberNode} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonObjectNode": {
      "name": "JsonObjectNode",
      "fullName": "burp.api.montoya.utilities.json.JsonObjectNode",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "put",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "JsonNode",
              "name": "value"
            }
          ],
          "description": "Puts a {@link JsonNode} into this {@link JsonObjectNode}.\n\n@param key The key to use.\n@param value The JsonNode that the key should point to.",
          "isProfessionalOnly": false
        },
        {
          "name": "putString",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Puts a string into this {@link JsonObjectNode}.\n\n@param key The key to use.\n@param value The string value that the key should point to.\n@throws NullPointerException if the value is null.",
          "isProfessionalOnly": false
        },
        {
          "name": "putBoolean",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "boolean",
              "name": "value"
            }
          ],
          "description": "Puts a double into this {@link JsonObjectNode}.\n\n@param key The key to use.\n@param value The boolean value that the key should point to.",
          "isProfessionalOnly": false
        },
        {
          "name": "putNumber",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "long",
              "name": "value"
            }
          ],
          "description": "Puts a long into this {@link JsonObjectNode}.\n\n@param key The key to use.\n@param value The long value that the key should point to.",
          "isProfessionalOnly": false
        },
        {
          "name": "putNumber",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "double",
              "name": "value"
            }
          ],
          "description": "Puts a double into this {@link JsonObjectNode}.\n\n@param key The key to use.\n@param value The double value that the key should point to.",
          "isProfessionalOnly": false
        },
        {
          "name": "putNumber",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            },
            {
              "type": "Number",
              "name": "value"
            }
          ],
          "description": "Puts a number into this {@link JsonObjectNode}.\n\n@param key The key to use.\n@param value The number value that the key should point to.",
          "isProfessionalOnly": false
        },
        {
          "name": "get",
          "returnType": "JsonNode",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Attempts to return the JsonNode for the given key.\n\n@param key The key to retrieve.\n\n@return The {@link JsonNode} for the given key.",
          "isProfessionalOnly": false
        },
        {
          "name": "getString",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Attempts to return the string for the given key.\n\n@param key The key to retrieve.\n\n@return The string for the given key, or null if it is not a {@link String}, or if it is not present.",
          "isProfessionalOnly": false
        },
        {
          "name": "getBoolean",
          "returnType": "Boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Attempts to return the boolean for the given key.\n\n@param key The key to retrieve.\n\n@return The boolean for the given key, or null if it is not a {@link Boolean}, or if it is not present.",
          "isProfessionalOnly": false
        },
        {
          "name": "getLong",
          "returnType": "Long",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Attempts to return the number for the given key as a long.\n\n@param key The key to retrieve.\n\n@return The number at the given key as a long, or null if it is not a {@link Long}, or if it is not present.",
          "isProfessionalOnly": false
        },
        {
          "name": "getDouble",
          "returnType": "Double",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Attempts to return the number for the given key as a double.\n\n@param key The key to retrieve.\n\n@return The number for the given key as a double, or null if it is not a {@link Double}, or if it is not present.",
          "isProfessionalOnly": false
        },
        {
          "name": "getNumber",
          "returnType": "Number",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Attempts to return the number for the given key.\n\n@param key The key to retrieve.\n\n@return The number for the given key, or null if it is not a {@link Number}, or if it is not present.",
          "isProfessionalOnly": false
        },
        {
          "name": "remove",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Removes the given key and corresponding JsonNode from the object.\n\n@param key The key to remove.",
          "isProfessionalOnly": false
        },
        {
          "name": "has",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Determines if the object contains the given key.\n\n@param key The key to check for.\n\n@return True if the object contains the given key.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasString",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Determines if the object contains the given key, and if the corresponding value is a string.\n\n@param key The key to check for.\n\n@return True if the object contains the given key, and the corresponding value is a string.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasBoolean",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Determines if the object contains the given key, and if the corresponding value is a boolean.\n\n@param key The key to check for.\n\n@return True if the object contains the given key, and the corresponding value is a boolean.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasNumber",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Determines if the object contains the given key, and if the corresponding value is a number.\n\n@param key The key to check for.\n\n@return True if the object contains the given key, and the corresponding value is a number.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasArray",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Determines if the object contains the given key, and if the corresponding value is an array.\n\n@param key The key to check for.\n\n@return True if the object contains the given key, and the corresponding value is an array.",
          "isProfessionalOnly": false
        },
        {
          "name": "hasObject",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "key"
            }
          ],
          "description": "Determines if the object contains the given key, and if the corresponding value is an object.\n\n@param key The key to check for.\n\n@return True if the object contains the given key, and the corresponding value is an object.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonObjectNode",
          "returnType": "JsonObjectNode",
          "parameters": [],
          "description": "Creates a new empty instance of {@link JsonObjectNode}.\n\n@return A new {@link JsonObjectNode} instance.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonObjectNode",
          "returnType": "JsonObjectNode",
          "parameters": [
            {
              "type": "?",
              "name": "extends"
            }
          ],
          "description": "Creates a new instance of {@link JsonObjectNode} from the supplied map of String to {@link JsonNode}.\n\n@param value The map of String to {@link JsonNode}.\n\n@return A new {@link JsonNode} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonStringNode": {
      "name": "JsonStringNode",
      "fullName": "burp.api.montoya.utilities.json.JsonStringNode",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "getValue",
          "returnType": "String",
          "parameters": [],
          "description": "This interface is used to define a JSON string node.",
          "isProfessionalOnly": false
        },
        {
          "name": "jsonStringNode",
          "returnType": "JsonStringNode",
          "parameters": [
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Creates a new instance of {@link JsonStringNode} from the supplied string.\n\n@param value The string value.\n\n@return A new {@link JsonStringNode} instance.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonUtils": {
      "name": "JsonUtils",
      "fullName": "burp.api.montoya.utilities.json.JsonUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "add",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            },
            {
              "type": "String",
              "name": "location"
            },
            {
              "type": "String",
              "name": "newJson"
            }
          ],
          "description": "Uses the location to create a new JSON string with the newJson added to the sourceJson.\n\n@param sourceJson The JSON to add the newJson to.\n@param location Identifies where to add the newJson.\n@param newJson The new JSON to add to the source.\n@return A new string with the modified JSON.\n@throws JsonException If the location is invalid.\n@throws JsonParseException If either the sourceJson or newJson are not valid JSON.",
          "isProfessionalOnly": false
        },
        {
          "name": "update",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            },
            {
              "type": "String",
              "name": "location"
            },
            {
              "type": "String",
              "name": "newJson"
            }
          ],
          "description": "Uses the location to create a new JSON string where the sourceJson is updated with the newJson.\n\n@param sourceJson The JSON that will be updated by the newJson.\n@param location Identifies where the update should occur on the sourceJson.\n@param newJson The new JSON to use in the location.\n@return A new string with the modified JSON.\n@throws JsonException If the location is invalid.\n@throws JsonParseException If either the sourceJson or newJson are not valid JSON.",
          "isProfessionalOnly": false
        },
        {
          "name": "remove",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            },
            {
              "type": "String",
              "name": "location"
            }
          ],
          "description": "Creates a new JSON string where the data at the provided location is removed form the sourceJson.\n\n@param sourceJson The JSON that will have data removed.\n@param location Identifies where to remove the JSON.\n@return A new string with the data at the provided location removed from sourceJson.\n@throws JsonException If the location is invalid.\n@throws JsonParseException If the sourceJson is not valid JSON.",
          "isProfessionalOnly": false
        },
        {
          "name": "read",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            },
            {
              "type": "String",
              "name": "location"
            }
          ],
          "description": "Uses the location to work out where to read from the sourceJson.\n\n@param sourceJson The JSON to read some data from.\n@param location Identifies where to read from the sourceJson.\n@return The JSON read at the given location as a JSON string.\n@throws JsonException If the location is invalid.\n@throws JsonParseException If the sourceJson is not valid JSON.",
          "isProfessionalOnly": false
        },
        {
          "name": "readBoolean",
          "returnType": "Boolean",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            },
            {
              "type": "String",
              "name": "location"
            }
          ],
          "description": "Uses the location to work out where to read a {@link Boolean} value from the provided sourceJson.\n\n@param sourceJson The JSON to read from.\n@param location Identifies where to read from the sourceJson.\n@return The boolean value at the given location, or null if it is not a {@link Boolean}, or if it is not present.\n@throws JsonException If the location is invalid.\n@throws JsonParseException If the sourceJson is not valid JSON.",
          "isProfessionalOnly": false
        },
        {
          "name": "readDouble",
          "returnType": "Double",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            },
            {
              "type": "String",
              "name": "location"
            }
          ],
          "description": "<p>Uses the location to work out where to read a number as a {@link Double} value from the sourceJson.</p>\n\n<p><em>Note: A double value in Java represents a floating point number. </em></p>\n\n@param sourceJson The JSON to read from.\n@param location Identifies where to read from the sourceJson\n@return The number value as a {@link Double} at the given location, or null if it not a {@link Double}, or if it is not present.\n@throws JsonException If the location is invalid.\n@throws JsonParseException If the sourceJson is not valid JSON.",
          "isProfessionalOnly": false
        },
        {
          "name": "readLong",
          "returnType": "Long",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            },
            {
              "type": "String",
              "name": "location"
            }
          ],
          "description": "<p>Uses the location to work out where to read a number as a {@link Long} value from the sourceJson.</p>\n\n<p><em>Note: A long value in Java represents a mathematical integer - Reading a floating point number with this method will round it down.</em></p>\n\n@param sourceJson The JSON to read from.\n@param location Identifies where to read from the sourceJson\n@return The number value as a {@link Long} at the given location, or null if it not a {@link Long}, or if it is not present.\n@throws JsonException If the location is invalid.\n@throws JsonParseException If the sourceJson is not valid JSON.",
          "isProfessionalOnly": false
        },
        {
          "name": "readString",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            },
            {
              "type": "String",
              "name": "location"
            }
          ],
          "description": "Uses the location to work out where to read a {@link String} value from the sourceJson.\n\n@param sourceJson The JSON to read from.\n@param location Identifies where to read from the sourceJson\n@return The string value at the given location, or null if it not a {@link String}, or if it is not present.\n@throws JsonException If the location is invalid.\n@throws JsonParseException If the sourceJson is not valid JSON.",
          "isProfessionalOnly": false
        },
        {
          "name": "quotes",
          "returnType": "double",
          "parameters": [
            {
              "type": "\"'foo'\"",
              "name": "or"
            }
          ],
          "description": "Checks if the supplied sourceJson can be parsed into one of the base JSON types - string, number, boolean, array, object or null.\n\n<p><em>Note: Passing in null will return false, whereas \"null\" will return true.</em></p>\n<p><em>Note: To pass in a JSON string, surround it in single or double quotes (\"'foo'\" or \"\\\"foo\\\"\").</em></p>",
          "isProfessionalOnly": false
        },
        {
          "name": "isValidJson",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "String",
              "name": "sourceJson"
            }
          ],
          "description": "@param sourceJson The JSON string to check\n@return True if this parser can parse the JSON string into one of the base JSON types. False otherwise or if sourceJson is null.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.shell.ExecuteOptions": {
      "name": "ExecuteOptions",
      "fullName": "burp.api.montoya.utilities.shell.ExecuteOptions",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "withTimeout",
          "returnType": "ExecuteOptions",
          "parameters": [
            {
              "type": "int",
              "name": "seconds"
            }
          ],
          "description": "Sets the maximum duration the process is allowed to run in seconds. Defaults to 10 seconds. To disable the timeout, use 0.\n<p>\nUse {@link ExecuteOptions#withTimeoutBehavior} to define the behavior regarding whether timeouts should throw an exception or be silently ignored.\n\n@param seconds The timeout duration, in seconds. Use 0 for unlimited.\n\n@return An {@link ExecuteOptions} instance with the updated timeout.",
          "isProfessionalOnly": false
        },
        {
          "name": "withTimeout",
          "returnType": "ExecuteOptions",
          "parameters": [
            {
              "type": "Duration",
              "name": "duration"
            }
          ],
          "description": "Sets the maximum duration the process is allowed to run. Defaults to 10 seconds. To disable the timeout, use {@link Duration#ZERO}.\n<p>\nUse {@link ExecuteOptions#withTimeoutBehavior} to define the behavior regarding whether timeouts should throw an exception or be silently ignored.\n\n@param duration The timeout duration. Use {@code Duration.ZERO} for unlimited.\n\n@return An {@link ExecuteOptions} instance with the updated timeout.",
          "isProfessionalOnly": false
        },
        {
          "name": "withTimeoutBehavior",
          "returnType": "ExecuteOptions",
          "parameters": [
            {
              "type": "TimeoutBehavior",
              "name": "behavior"
            }
          ],
          "description": "Sets the behavior regarding whether timeouts should throw an exception or be silently ignored. Defaults to {@link TimeoutBehavior#FAIL_ON_TIMEOUT}.\n\n@param behavior The timeout behavior.\n\n@return An {@link ExecuteOptions} instance with the updated timeout behavior.",
          "isProfessionalOnly": false
        },
        {
          "name": "stderr",
          "returnType": "how",
          "parameters": [
            {
              "type": "standard",
              "name": "error"
            }
          ],
          "description": "Sets how stderr (standard error) output is handled. Defaults to {@link StderrBehavior#DISCARD}.",
          "isProfessionalOnly": false
        },
        {
          "name": "withStderrBehavior",
          "returnType": "ExecuteOptions",
          "parameters": [
            {
              "type": "StderrBehavior",
              "name": "behavior"
            }
          ],
          "description": "@param behavior The stderr handling behavior.\n\n@return An {@link ExecuteOptions} instance with the updated stderr behavior.",
          "isProfessionalOnly": false
        },
        {
          "name": "withExitCodeBehavior",
          "returnType": "ExecuteOptions",
          "parameters": [
            {
              "type": "ExitCodeBehavior",
              "name": "behavior"
            }
          ],
          "description": "Sets whether non-zero exit codes throw an exception, or are silently ignored. Defaults to {@link ExitCodeBehavior#FAIL_ON_NON_ZERO}.\n\n@param behavior The non-zero exit code handling behavior.\n\n@return An {@link ExecuteOptions} instance with the updated non-zero exit behavior.",
          "isProfessionalOnly": false
        },
        {
          "name": "withEnvironmentVariable",
          "returnType": "ExecuteOptions",
          "parameters": [
            {
              "type": "String",
              "name": "name"
            },
            {
              "type": "String",
              "name": "value"
            }
          ],
          "description": "Defines an environment variable to be used by the process.\n\n@param name  The variable name.\n@param value The variable value.\n\n@return An {@link ExecuteOptions} instance with the added variable.",
          "isProfessionalOnly": false
        },
        {
          "name": "executeOptions",
          "returnType": "ExecuteOptions",
          "parameters": [],
          "description": "Creates a new {@link ExecuteOptions} instance.\n\n@return An {@link ExecuteOptions} instance with default settings.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.shell.ShellUtils": {
      "name": "ShellUtils",
      "fullName": "burp.api.montoya.utilities.shell.ShellUtils",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "dangerouslyExecute",
          "returnType": "String",
          "parameters": [
            {
              "type": "String",
              "name": "command"
            }
          ],
          "description": "</p>\n\n@param command The command and its parameters, separated by whitespace.\n\n@return The output produced by the command.",
          "isProfessionalOnly": false
        },
        {
          "name": "dangerouslyExecute",
          "returnType": "String",
          "parameters": [
            {
              "type": "ExecuteOptions",
              "name": "options"
            },
            {
              "type": "String",
              "name": "command"
            }
          ],
          "description": "</p>\n\n@param options The options that control how the command is executed.\n@param command The command and its parameters, separated by whitespace.\n\n@return The output produced by the command.",
          "isProfessionalOnly": false
        },
        {
          "name": "execute",
          "returnType": "String",
          "parameters": [
            {
              "type": "String...",
              "name": "command"
            }
          ],
          "description": "Executes the specified command using the default execution options.\n\n@param command The command and its parameters, specified as separate strings.\n\n@return The output produced by this command.",
          "isProfessionalOnly": false
        },
        {
          "name": "execute",
          "returnType": "String",
          "parameters": [
            {
              "type": "ExecuteOptions",
              "name": "options"
            },
            {
              "type": "String...",
              "name": "command"
            }
          ],
          "description": "Executes the specified command using the specified execution options.\n\n@param options The options that control how the command is executed.\n@param command The command and its parameters, specified as separate strings.\n\n@return The output produced by this command.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.BinaryMessage": {
      "name": "BinaryMessage",
      "fullName": "burp.api.montoya.websocket.BinaryMessage",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "payload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return Binary based WebSocket payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "direction",
          "returnType": "Direction",
          "parameters": [],
          "description": "@return The direction of the message.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.BinaryMessageAction": {
      "name": "BinaryMessageAction",
      "fullName": "burp.api.montoya.websocket.BinaryMessageAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageAction",
          "parameters": [],
          "description": "@return The action associated with this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "ByteArray",
          "parameters": [],
          "description": "@return The payload of this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "BinaryMessageAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            }
          ],
          "description": "Build a binary WebSocket message to be processed.\n\n@param payload The binary message payload.\n\n@return The {@link BinaryMessageAction} containing the message to be processed.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "BinaryMessageAction",
          "parameters": [
            {
              "type": "BinaryMessage",
              "name": "binaryMessage"
            }
          ],
          "description": "Build a binary WebSocket message to be processed.\n\n@param binaryMessage The binary message payload.\n\n@return The {@link BinaryMessageAction} containing the message to be processed.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "BinaryMessageAction",
          "parameters": [],
          "description": "Build a binary WebSocket message to be dropped.\n\n@return The {@link BinaryMessageAction} dropping the message.",
          "isProfessionalOnly": false
        },
        {
          "name": "binaryMessageAction",
          "returnType": "BinaryMessageAction",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "payload"
            },
            {
              "type": "MessageAction",
              "name": "action"
            }
          ],
          "description": "Build a binary websocket message action.\n\n@param payload the binary payload for the message\n@param action  the action to take for the message.\n\n@return The {@link BinaryMessageAction} containing the message and the action.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.MessageHandler": {
      "name": "MessageHandler",
      "fullName": "burp.api.montoya.websocket.MessageHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handleTextMessage",
          "returnType": "TextMessageAction",
          "parameters": [
            {
              "type": "TextMessage",
              "name": "textMessage"
            }
          ],
          "description": "Invoked when a text message is sent or received from the application.\nThis gives the extension the ability to modify the message before it is\nsent to the application or processed by Burp.\n\n@param textMessage Intercepted text based WebSocket message.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "handleBinaryMessage",
          "returnType": "BinaryMessageAction",
          "parameters": [
            {
              "type": "BinaryMessage",
              "name": "binaryMessage"
            }
          ],
          "description": "Invoked when a binary message is sent or received from the application.\nThis gives the extension the ability to modify the message before it is\nsent to the application or processed by Burp.\n\n@param binaryMessage Intercepted binary based WebSocket message.\n\n@return The message.",
          "isProfessionalOnly": false
        },
        {
          "name": "onClose",
          "returnType": "void",
          "parameters": [],
          "description": "Invoked when the WebSocket is closed.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.TextMessage": {
      "name": "TextMessage",
      "fullName": "burp.api.montoya.websocket.TextMessage",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "payload",
          "returnType": "String",
          "parameters": [],
          "description": "@return Text based WebSocket payload.",
          "isProfessionalOnly": false
        },
        {
          "name": "direction",
          "returnType": "Direction",
          "parameters": [],
          "description": "@return The direction of the message.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.TextMessageAction": {
      "name": "TextMessageAction",
      "fullName": "burp.api.montoya.websocket.TextMessageAction",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "action",
          "returnType": "MessageAction",
          "parameters": [],
          "description": "@return The action associated with this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "payload",
          "returnType": "String",
          "parameters": [],
          "description": "@return The payload of this message.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "TextMessageAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            }
          ],
          "description": "Build a text WebSocket message to be processed.\n\n@param payload The text message payload.\n\n@return The {@link TextMessageAction} containing the message to be processed.",
          "isProfessionalOnly": false
        },
        {
          "name": "continueWith",
          "returnType": "TextMessageAction",
          "parameters": [
            {
              "type": "TextMessage",
              "name": "textMessage"
            }
          ],
          "description": "Build a text WebSocket message to be processed.\n\n@param textMessage the text message payload\n\n@return The {@link TextMessageAction} containing the message to be processed.",
          "isProfessionalOnly": false
        },
        {
          "name": "drop",
          "returnType": "TextMessageAction",
          "parameters": [],
          "description": "Build a text WebSocket message to be dropped.\n\n@return The {@link TextMessageAction} dropping the message.",
          "isProfessionalOnly": false
        },
        {
          "name": "textMessageAction",
          "returnType": "TextMessageAction",
          "parameters": [
            {
              "type": "String",
              "name": "payload"
            },
            {
              "type": "MessageAction",
              "name": "action"
            }
          ],
          "description": "Build a websocket text message action.\n\n@param payload the binary payload for the message\n@param action  the action to take for the message.\n\n@return The {@link TextMessageAction} containing the message and the action.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.WebSocket": {
      "name": "WebSocket",
      "fullName": "burp.api.montoya.websocket.WebSocket",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "sendTextMessage",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This method allows an extension to send a text message via the WebSocket.\n\n@param message The message to be sent.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendBinaryMessage",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "message"
            }
          ],
          "description": "This method allows an extension to send a binary message via the WebSocket.\n\n@param message The message to be sent.",
          "isProfessionalOnly": false
        },
        {
          "name": "close",
          "returnType": "void",
          "parameters": [],
          "description": "This method will close the WebSocket.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerMessageHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "MessageHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will perform an action when a message is sent to or received from the application.\n\n@param handler An object created by the extension that implements {@link MessageHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.WebSocketCreated": {
      "name": "WebSocketCreated",
      "fullName": "burp.api.montoya.websocket.WebSocketCreated",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "webSocket",
          "returnType": "WebSocket",
          "parameters": [],
          "description": "@return The WebSocket that was created.",
          "isProfessionalOnly": false
        },
        {
          "name": "upgradeRequest",
          "returnType": "HttpRequest",
          "parameters": [],
          "description": "@return The HTTP upgrade request that initiated the WebSocket creation.",
          "isProfessionalOnly": false
        },
        {
          "name": "toolSource",
          "returnType": "ToolSource",
          "parameters": [],
          "description": "@return Indicates which Burp tool that created the WebSocket.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.WebSocketCreatedHandler": {
      "name": "WebSocketCreatedHandler",
      "fullName": "burp.api.montoya.websocket.WebSocketCreatedHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "handleWebSocketCreated",
          "returnType": "void",
          "parameters": [
            {
              "type": "WebSocketCreated",
              "name": "webSocketCreated"
            }
          ],
          "description": "Invoked by Burp when an application WebSocket has been created.\n\n@param webSocketCreated {@link WebSocketCreated} containing information about the application websocket that is being created.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.WebSockets": {
      "name": "WebSockets",
      "fullName": "burp.api.montoya.websocket.WebSockets",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "registerWebSocketCreatedHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "WebSocketCreatedHandler",
              "name": "handler"
            }
          ],
          "description": "Register a handler which will be invoked whenever a WebSocket is created by any Burp tool.\n\n@param handler An object created by the extension that implements {@link WebSocketCreatedHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        },
        {
          "name": "createWebSocket",
          "returnType": "ExtensionWebSocketCreation",
          "parameters": [
            {
              "type": "HttpService",
              "name": "service"
            },
            {
              "type": "String",
              "name": "path"
            }
          ],
          "description": "Create a new WebSocket using the specified service and path.\n\n@param service An {@link HttpService} specifying the target host\n@param path path for the upgrade HTTP request\n\n@return The {@link ExtensionWebSocketCreation} result.",
          "isProfessionalOnly": false
        },
        {
          "name": "createWebSocket",
          "returnType": "ExtensionWebSocketCreation",
          "parameters": [
            {
              "type": "HttpRequest",
              "name": "upgradeRequest"
            }
          ],
          "description": "Create a new WebSocket using the specified upgrade request.\n\n@param upgradeRequest The {@link HttpRequest} upgrade request\n\n@return The {@link ExtensionWebSocketCreation} result.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.extension.ExtensionWebSocket": {
      "name": "ExtensionWebSocket",
      "fullName": "burp.api.montoya.websocket.extension.ExtensionWebSocket",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "sendTextMessage",
          "returnType": "void",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This method allows an extension to send a text message via the WebSocket.\n\n@param message The message to be sent.",
          "isProfessionalOnly": false
        },
        {
          "name": "sendBinaryMessage",
          "returnType": "void",
          "parameters": [
            {
              "type": "ByteArray",
              "name": "message"
            }
          ],
          "description": "This method allows an extension to send a binary message via the WebSocket.\n\n@param message The message to be sent.",
          "isProfessionalOnly": false
        },
        {
          "name": "close",
          "returnType": "void",
          "parameters": [],
          "description": "This method will close the WebSocket.",
          "isProfessionalOnly": false
        },
        {
          "name": "registerMessageHandler",
          "returnType": "Registration",
          "parameters": [
            {
              "type": "ExtensionWebSocketMessageHandler",
              "name": "handler"
            }
          ],
          "description": "Register an interface that is notified when messages arrive from the server.\n\n@param handler An object created by the extension that implements {@link ExtensionWebSocketMessageHandler} interface.\n\n@return The {@link Registration} for the handler.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.extension.ExtensionWebSocketCreation": {
      "name": "ExtensionWebSocketCreation",
      "fullName": "burp.api.montoya.websocket.extension.ExtensionWebSocketCreation",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "status",
          "returnType": "ExtensionWebSocketCreationStatus",
          "parameters": [],
          "description": "The status of the WebSocket creation attempt.\n\n@return The {@link ExtensionWebSocketCreationStatus} creation status",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.websocket.extension.ExtensionWebSocketMessageHandler": {
      "name": "ExtensionWebSocketMessageHandler",
      "fullName": "burp.api.montoya.websocket.extension.ExtensionWebSocketMessageHandler",
      "type": "interface",
      "description": "",
      "methods": [
        {
          "name": "textMessageReceived",
          "returnType": "void",
          "parameters": [
            {
              "type": "TextMessage",
              "name": "textMessage"
            }
          ],
          "description": "Invoked when a text message is received from the application.\n\n@param textMessage text WebSocket message.",
          "isProfessionalOnly": false
        },
        {
          "name": "binaryMessageReceived",
          "returnType": "void",
          "parameters": [
            {
              "type": "BinaryMessage",
              "name": "binaryMessage"
            }
          ],
          "description": "Invoked when a binary message is received from the application.\n\n@param binaryMessage binary WebSocket message.",
          "isProfessionalOnly": false
        },
        {
          "name": "onClose",
          "returnType": "void",
          "parameters": [],
          "description": "Invoked when the WebSocket is closed.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    }
  },
  "classes": {
    "burp.api.montoya.ai.chat.PromptException": {
      "name": "PromptException",
      "fullName": "burp.api.montoya.ai.chat.PromptException",
      "type": "class",
      "description": "",
      "methods": [
        {
          "name": "PromptException",
          "returnType": "public",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This class represents an exception which is thrown when using AI chat prompt functionality.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.requests.MalformedRequestException": {
      "name": "MalformedRequestException",
      "fullName": "burp.api.montoya.http.message.requests.MalformedRequestException",
      "type": "class",
      "description": "",
      "methods": [
        {
          "name": "MalformedRequestException",
          "returnType": "public",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This class represents an exception which is thrown when trying to retrieve attributes from a malformed request.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.internal.ObjectFactoryLocator": {
      "name": "ObjectFactoryLocator",
      "fullName": "burp.api.montoya.internal.ObjectFactoryLocator",
      "type": "class",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": "This is initialized when your extension is loaded.\n"
    },
    "burp.api.montoya.utilities.json.JsonException": {
      "name": "JsonException",
      "fullName": "burp.api.montoya.utilities.json.JsonException",
      "type": "class",
      "description": "",
      "methods": [
        {
          "name": "JsonException",
          "returnType": "public",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This class represents an exception which is thrown when attempting operations that are unsuccessful.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.json.JsonParseException": {
      "name": "JsonParseException",
      "fullName": "burp.api.montoya.utilities.json.JsonParseException",
      "type": "class",
      "description": "",
      "methods": [
        {
          "name": "JsonParseException",
          "returnType": "public",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "This class represents an exception which is thrown when attempting to parse an invalid JSON structure.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.shell.ProcessExecutionException": {
      "name": "ProcessExecutionException",
      "fullName": "burp.api.montoya.utilities.shell.ProcessExecutionException",
      "type": "class",
      "description": "",
      "methods": [
        {
          "name": "ProcessExecutionException",
          "returnType": "public",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            }
          ],
          "description": "Thrown to indicate that an error occurred while executing a process with {@link ShellUtils}.",
          "isProfessionalOnly": false
        },
        {
          "name": "ProcessExecutionException",
          "returnType": "public",
          "parameters": [
            {
              "type": "String",
              "name": "message"
            },
            {
              "type": "Throwable",
              "name": "cause"
            }
          ],
          "description": "",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    }
  },
  "enums": {
    "burp.api.montoya.EnhancedCapability": {
      "name": "EnhancedCapability",
      "fullName": "burp.api.montoya.EnhancedCapability",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "AI_FEATURES",
          "type": "enum",
          "description": "Enhanced capabilities that need to be explicitly requested."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Enhanced capabilities that need to be explicitly requested.\n"
    },
    "burp.api.montoya.burpsuite.ShutdownOptions": {
      "name": "ShutdownOptions",
      "fullName": "burp.api.montoya.burpsuite.ShutdownOptions",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "PROMPT_USER",
          "type": "enum",
          "description": "Display a dialog to the user allowing them to confirm or cancel the shutdown"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Display a dialog to the user allowing them to confirm or cancel the shutdown\n"
    },
    "burp.api.montoya.collaborator.DnsQueryType": {
      "name": "DnsQueryType",
      "fullName": "burp.api.montoya.collaborator.DnsQueryType",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "System",
          "returnType": "Name",
          "parameters": [],
          "description": "Domain Name System (DNS) query types.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [
        {
          "name": "A",
          "type": "enum",
          "description": "Address Record"
        },
        {
          "name": "AAAA",
          "type": "enum",
          "description": "IPv6 address record"
        },
        {
          "name": "ALL",
          "type": "enum",
          "description": "All cached records"
        },
        {
          "name": "CAA",
          "type": "enum",
          "description": "Certification Authority Authorization"
        },
        {
          "name": "CNAME",
          "type": "enum",
          "description": "Canonical name record"
        },
        {
          "name": "DNSKEY",
          "type": "enum",
          "description": "DNS Key record"
        },
        {
          "name": "DS",
          "type": "enum",
          "description": "Delegation signer"
        },
        {
          "name": "HINFO",
          "type": "enum",
          "description": "Host Information"
        },
        {
          "name": "HTTPS",
          "type": "enum",
          "description": "HTTPS Binding"
        },
        {
          "name": "MX",
          "type": "enum",
          "description": "Mail exchange record"
        },
        {
          "name": "NAPTR",
          "type": "enum",
          "description": "Naming Authority Pointer"
        },
        {
          "name": "NS",
          "type": "enum",
          "description": "Name Server Record"
        },
        {
          "name": "PTR",
          "type": "enum",
          "description": "PTR Resource Record"
        },
        {
          "name": "SOA",
          "type": "enum",
          "description": "Start of authority record"
        },
        {
          "name": "SRV",
          "type": "enum",
          "description": "Service locator"
        },
        {
          "name": "TXT",
          "type": "enum",
          "description": "Text record"
        },
        {
          "name": "UNKNOWN",
          "type": "enum",
          "description": "Unknown / Not Mapped / Obsolete"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Unknown / Not Mapped / Obsolete\n"
    },
    "burp.api.montoya.collaborator.InteractionType": {
      "name": "InteractionType",
      "fullName": "burp.api.montoya.collaborator.InteractionType",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "DNS",
          "type": "enum",
          "description": "Domain Name System"
        },
        {
          "name": "HTTP",
          "type": "enum",
          "description": "Hypertext Transfer Protocol"
        },
        {
          "name": "SMTP",
          "type": "enum",
          "description": "Simple Mail Transfer Protocol"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Simple Mail Transfer Protocol\n"
    },
    "burp.api.montoya.collaborator.PayloadOption": {
      "name": "PayloadOption",
      "fullName": "burp.api.montoya.collaborator.PayloadOption",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "WITHOUT_SERVER_LOCATION",
          "type": "enum",
          "description": "Generate a payload excluding the server location"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Generate a payload excluding the server location\n"
    },
    "burp.api.montoya.collaborator.SmtpProtocol": {
      "name": "SmtpProtocol",
      "fullName": "burp.api.montoya.collaborator.SmtpProtocol",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "Protocol",
          "returnType": "Transfer",
          "parameters": [],
          "description": "Simple Mail Transfer Protocol (SMTP) protocols.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [
        {
          "name": "SMTP",
          "type": "enum",
          "description": "Simple Mail Transfer Protocol"
        },
        {
          "name": "SMTPS",
          "type": "enum",
          "description": "Simple Mail Transfer Protocol Secure"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Simple Mail Transfer Protocol Secure\n"
    },
    "burp.api.montoya.core.BurpSuiteEdition": {
      "name": "BurpSuiteEdition",
      "fullName": "burp.api.montoya.core.BurpSuiteEdition",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "displayName",
          "returnType": "String",
          "parameters": [],
          "description": "@return displayName for this edition of Burp Suite.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.HighlightColor": {
      "name": "HighlightColor",
      "fullName": "burp.api.montoya.core.HighlightColor",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "displayName",
          "returnType": "String",
          "parameters": [],
          "description": "@return displayName of highlightColor",
          "isProfessionalOnly": false
        },
        {
          "name": "highlightColor",
          "returnType": "HighlightColor",
          "parameters": [
            {
              "type": "String",
              "name": "colorName"
            }
          ],
          "description": "Create HighlightColor from display name string.\n\n@param colorName Color's display name\n\n@return highlight color instance",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.core.ToolType": {
      "name": "ToolType",
      "fullName": "burp.api.montoya.core.ToolType",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "toolName",
          "returnType": "String",
          "parameters": [],
          "description": "@return The tool name.",
          "isProfessionalOnly": false
        },
        {
          "name": "toString",
          "returnType": "String",
          "parameters": [],
          "description": "@return The tool name.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.HttpMode": {
      "name": "HttpMode",
      "fullName": "burp.api.montoya.http.HttpMode",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "AUTO",
          "type": "enum",
          "description": "Use the HTTP protocol specified by the server"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Force HTTP 2 and ignore ALPN.<br>\nWill <b>not</b> error if server is HTTP 1 only.\n"
    },
    "burp.api.montoya.http.HttpProtocol": {
      "name": "HttpProtocol",
      "fullName": "burp.api.montoya.http.HttpProtocol",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "HTTP",
          "type": "enum",
          "description": "Hypertext Transfer Protocol"
        },
        {
          "name": "HTTPS",
          "type": "enum",
          "description": "Hypertext Transfer Protocol Secure"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Hypertext Transfer Protocol Secure\n"
    },
    "burp.api.montoya.http.RedirectionMode": {
      "name": "RedirectionMode",
      "fullName": "burp.api.montoya.http.RedirectionMode",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "ALWAYS",
          "type": "enum",
          "description": "Always follow redirects."
        },
        {
          "name": "NEVER",
          "type": "enum",
          "description": "Never follow redirects."
        },
        {
          "name": "SAME_HOST",
          "type": "enum",
          "description": "Only follow redirects to the same host."
        },
        {
          "name": "IN_SCOPE",
          "type": "enum",
          "description": "Only follow redirects if the redirect location is in scope."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Only follow redirects if the redirect location is in scope.\n"
    },
    "burp.api.montoya.http.handler.RequestAction": {
      "name": "RequestAction",
      "fullName": "burp.api.montoya.http.handler.RequestAction",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "CONTINUE",
          "type": "enum",
          "description": "Causes Burp to send the request."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Causes Burp to send the request.\n"
    },
    "burp.api.montoya.http.handler.ResponseAction": {
      "name": "ResponseAction",
      "fullName": "burp.api.montoya.http.handler.ResponseAction",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "CONTINUE",
          "type": "enum",
          "description": "Causes Burp to send the response."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Causes Burp to send the response.\n"
    },
    "burp.api.montoya.http.message.ContentType": {
      "name": "ContentType",
      "fullName": "burp.api.montoya.http.message.ContentType",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "NONE",
          "type": "enum",
          "description": "Content types recognised by Burp."
        },
        {
          "name": "UNKNOWN",
          "type": "enum",
          "description": "Content types recognised by Burp."
        },
        {
          "name": "AMF",
          "type": "enum",
          "description": "Content types recognised by Burp."
        },
        {
          "name": "JSON",
          "type": "enum",
          "description": "Content types recognised by Burp."
        },
        {
          "name": "MULTIPART",
          "type": "enum",
          "description": "Content types recognised by Burp."
        },
        {
          "name": "URL_ENCODED",
          "type": "enum",
          "description": "Content types recognised by Burp."
        },
        {
          "name": "XML",
          "type": "enum",
          "description": "Content types recognised by Burp."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Content types recognised by Burp.\n"
    },
    "burp.api.montoya.http.message.MimeType": {
      "name": "MimeType",
      "fullName": "burp.api.montoya.http.message.MimeType",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "description",
          "returnType": "String",
          "parameters": [],
          "description": "@return MIME type description.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.StatusCodeClass": {
      "name": "StatusCodeClass",
      "fullName": "burp.api.montoya.http.message.StatusCodeClass",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "response",
          "returnType": "Informational",
          "parameters": [
            {
              "type": "100",
              "name": "to"
            }
          ],
          "description": "Informational response (100 to 199).",
          "isProfessionalOnly": false
        },
        {
          "name": "errors",
          "returnType": "Client",
          "parameters": [
            {
              "type": "400",
              "name": "to"
            }
          ],
          "description": "Client errors (400 to 499).",
          "isProfessionalOnly": false
        },
        {
          "name": "errors",
          "returnType": "Server",
          "parameters": [
            {
              "type": "500",
              "name": "to"
            }
          ],
          "description": "Server errors (500 to 599).",
          "isProfessionalOnly": false
        },
        {
          "name": "startStatusCodeInclusive",
          "returnType": "int",
          "parameters": [],
          "description": "@return the inclusive start status code.",
          "isProfessionalOnly": false
        },
        {
          "name": "endStatusCodeExclusive",
          "returnType": "int",
          "parameters": [],
          "description": "@return the exclusive end status code.",
          "isProfessionalOnly": false
        },
        {
          "name": "contains",
          "returnType": "boolean",
          "parameters": [
            {
              "type": "int",
              "name": "statusCode"
            }
          ],
          "description": "@param statusCode The status code to test.\n\n@return True if the status code is in the status code class.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.http.message.params.HttpParameterType": {
      "name": "HttpParameterType",
      "fullName": "burp.api.montoya.http.message.params.HttpParameterType",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "URL",
          "type": "enum",
          "description": "HTTP parameter types."
        },
        {
          "name": "BODY",
          "type": "enum",
          "description": "HTTP parameter types."
        },
        {
          "name": "COOKIE",
          "type": "enum",
          "description": "HTTP parameter types."
        },
        {
          "name": "XML",
          "type": "enum",
          "description": "HTTP parameter types."
        },
        {
          "name": "XML_ATTRIBUTE",
          "type": "enum",
          "description": "HTTP parameter types."
        },
        {
          "name": "MULTIPART_ATTRIBUTE",
          "type": "enum",
          "description": "HTTP parameter types."
        },
        {
          "name": "JSON",
          "type": "enum",
          "description": "HTTP parameter types."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "HTTP parameter types.\n"
    },
    "burp.api.montoya.http.message.requests.HttpTransformation": {
      "name": "HttpTransformation",
      "fullName": "burp.api.montoya.http.message.requests.HttpTransformation",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "TOGGLE_METHOD",
          "type": "enum",
          "description": "Convert a GET request into a POST request<br>\nor<br>\nConvert a POST request into a GET request<br>"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Convert a GET request into a POST request<br>\nor<br>\nConvert a POST request into a GET request<br>\n"
    },
    "burp.api.montoya.http.message.responses.analysis.AttributeType": {
      "name": "AttributeType",
      "fullName": "burp.api.montoya.http.message.responses.analysis.AttributeType",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "STATUS_CODE",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "ETAG_HEADER",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "LAST_MODIFIED_HEADER",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "CONTENT_TYPE",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "CONTENT_LENGTH",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "COOKIE_NAMES",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "TAG_NAMES",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "TAG_IDS",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "DIV_IDS",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "BODY_CONTENT",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "VISIBLE_TEXT",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "WORD_COUNT",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "VISIBLE_WORD_COUNT",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "COMMENTS",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "INITIAL_CONTENT",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "CANONICAL_LINK",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "PAGE_TITLE",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "FIRST_HEADER_TAG",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "HEADER_TAGS",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "ANCHOR_LABELS",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "INPUT_SUBMIT_LABELS",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "BUTTON_SUBMIT_LABELS",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "CSS_CLASSES",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "LINE_COUNT",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "LIMITED_BODY_CONTENT",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "OUTBOUND_EDGE_COUNT",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "OUTBOUND_EDGE_TAG_NAMES",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "INPUT_IMAGE_LABELS",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "CONTENT_LOCATION",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "LOCATION",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        },
        {
          "name": "NON_HIDDEN_FORM_INPUT_TYPES",
          "type": "enum",
          "description": "Otions that Burp can use to query attributes of HTTP responses."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Otions that Burp can use to query attributes of HTTP responses.\n"
    },
    "burp.api.montoya.intruder.HttpRequestTemplateGenerationOptions": {
      "name": "HttpRequestTemplateGenerationOptions",
      "fullName": "burp.api.montoya.intruder.HttpRequestTemplateGenerationOptions",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "REPLACE_BASE_PARAMETER_VALUE_WITH_OFFSETS",
          "type": "enum",
          "description": "Replace base parameter value with offsets."
        },
        {
          "name": "APPEND_OFFSETS_TO_BASE_PARAMETER_VALUE",
          "type": "enum",
          "description": "Append offsets to base parameter value."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Append offsets to base parameter value.\n"
    },
    "burp.api.montoya.intruder.PayloadProcessingAction": {
      "name": "PayloadProcessingAction",
      "fullName": "burp.api.montoya.intruder.PayloadProcessingAction",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "SKIP_PAYLOAD",
          "type": "enum",
          "description": "Skip the current payload"
        },
        {
          "name": "USE_PAYLOAD",
          "type": "enum",
          "description": "Use the current payload"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Use the current payload\n"
    },
    "burp.api.montoya.organizer.OrganizerItemStatus": {
      "name": "OrganizerItemStatus",
      "fullName": "burp.api.montoya.organizer.OrganizerItemStatus",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "displayName",
          "returnType": "String",
          "parameters": [],
          "description": "Returns the user-friendly label for this status, as displayed in Burp Organizer.\n\n@return The display name of the status.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.proxy.MessageReceivedAction": {
      "name": "MessageReceivedAction",
      "fullName": "burp.api.montoya.proxy.MessageReceivedAction",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "CONTINUE",
          "type": "enum",
          "description": "Causes Burp Proxy to follow the current interception rules to determine\nthe appropriate action to take for the message."
        },
        {
          "name": "INTERCEPT",
          "type": "enum",
          "description": "Causes Burp Proxy to present the message to the user for manual review\nor modification."
        },
        {
          "name": "DO_NOT_INTERCEPT",
          "type": "enum",
          "description": "Causes Burp Proxy to forward the message without presenting it to the\nuser."
        },
        {
          "name": "DROP",
          "type": "enum",
          "description": "Causes Burp Proxy to drop the message."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Causes Burp Proxy to drop the message.\n"
    },
    "burp.api.montoya.proxy.MessageToBeSentAction": {
      "name": "MessageToBeSentAction",
      "fullName": "burp.api.montoya.proxy.MessageToBeSentAction",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "CONTINUE",
          "type": "enum",
          "description": "Causes Burp Proxy to forward the message."
        },
        {
          "name": "DROP",
          "type": "enum",
          "description": "Causes Burp Proxy to drop the message."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Causes Burp Proxy to drop the message.\n"
    },
    "burp.api.montoya.scanner.BuiltInAuditConfiguration": {
      "name": "BuiltInAuditConfiguration",
      "fullName": "burp.api.montoya.scanner.BuiltInAuditConfiguration",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "LEGACY_PASSIVE_AUDIT_CHECKS",
          "type": "enum",
          "description": "This enum represents built in configurations for the Burp Scanner tool."
        },
        {
          "name": "LEGACY_ACTIVE_AUDIT_CHECKS",
          "type": "enum",
          "description": "This enum represents built in configurations for the Burp Scanner tool."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum represents built in configurations for the Burp Scanner tool.\n"
    },
    "burp.api.montoya.scanner.ConsolidationAction": {
      "name": "ConsolidationAction",
      "fullName": "burp.api.montoya.scanner.ConsolidationAction",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "KEEP_EXISTING",
          "type": "enum",
          "description": "This enum represents the action to be taken when duplicate audit issues are\nfound."
        },
        {
          "name": "KEEP_BOTH",
          "type": "enum",
          "description": "This enum represents the action to be taken when duplicate audit issues are\nfound."
        },
        {
          "name": "KEEP_NEW",
          "type": "enum",
          "description": "This enum represents the action to be taken when duplicate audit issues are\nfound."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum represents the action to be taken when duplicate audit issues are\nfound.\n"
    },
    "burp.api.montoya.scanner.ReportFormat": {
      "name": "ReportFormat",
      "fullName": "burp.api.montoya.scanner.ReportFormat",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "HTML",
          "type": "enum",
          "description": "This enum represents the formats for scan reports."
        },
        {
          "name": "XML",
          "type": "enum",
          "description": "This enum represents the formats for scan reports."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum represents the formats for scan reports.\n"
    },
    "burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPointType": {
      "name": "AuditInsertionPointType",
      "fullName": "burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPointType",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "PARAM_URL",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_BODY",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_COOKIE",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_XML",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_XML_ATTR",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_MULTIPART_ATTR",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_JSON",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_AMF",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "HEADER",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_NAME_URL",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "PARAM_NAME_BODY",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "ENTIRE_BODY",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "URL_PATH_FILENAME",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "URL_PATH_FOLDER",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "USER_PROVIDED",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "EXTENSION_PROVIDED",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        },
        {
          "name": "UNKNOWN",
          "type": "enum",
          "description": "This enum represents the audit insertion point type."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum represents the audit insertion point type.\n"
    },
    "burp.api.montoya.scanner.audit.issues.AuditIssueConfidence": {
      "name": "AuditIssueConfidence",
      "fullName": "burp.api.montoya.scanner.audit.issues.AuditIssueConfidence",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "CERTAIN",
          "type": "enum",
          "description": "This enum represents the confidence level of an audit issue."
        },
        {
          "name": "FIRM",
          "type": "enum",
          "description": "This enum represents the confidence level of an audit issue."
        },
        {
          "name": "TENTATIVE",
          "type": "enum",
          "description": "This enum represents the confidence level of an audit issue."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum represents the confidence level of an audit issue.\n"
    },
    "burp.api.montoya.scanner.audit.issues.AuditIssueSeverity": {
      "name": "AuditIssueSeverity",
      "fullName": "burp.api.montoya.scanner.audit.issues.AuditIssueSeverity",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "HIGH",
          "type": "enum",
          "description": "This enum represents the severity level of an audit issue."
        },
        {
          "name": "MEDIUM",
          "type": "enum",
          "description": "This enum represents the severity level of an audit issue."
        },
        {
          "name": "LOW",
          "type": "enum",
          "description": "This enum represents the severity level of an audit issue."
        },
        {
          "name": "INFORMATION",
          "type": "enum",
          "description": "This enum represents the severity level of an audit issue."
        },
        {
          "name": "FALSE_POSITIVE",
          "type": "enum",
          "description": "This enum represents the severity level of an audit issue."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum represents the severity level of an audit issue.\n"
    },
    "burp.api.montoya.scanner.scancheck.ScanCheckType": {
      "name": "ScanCheckType",
      "fullName": "burp.api.montoya.scanner.scancheck.ScanCheckType",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "check",
          "returnType": "scan",
          "parameters": [
            {
              "type": "{@link",
              "name": "ActiveScanCheck}"
            }
          ],
          "description": "The type of scan check ({@link ActiveScanCheck} or {@link PassiveScanCheck}) that will be run.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [
        {
          "name": "PER_HOST",
          "type": "enum",
          "description": "The Scanner invokes the scan check once for each <b>host</b>."
        },
        {
          "name": "PER_REQUEST",
          "type": "enum",
          "description": "The Scanner invokes the scan check once for each <b>request</b>."
        },
        {
          "name": "PER_INSERTION_POINT",
          "type": "enum",
          "description": "an {@link IllegalArgumentException}."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "an {@link IllegalArgumentException}.\n"
    },
    "burp.api.montoya.ui.Theme": {
      "name": "Theme",
      "fullName": "burp.api.montoya.ui.Theme",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "DARK",
          "type": "enum",
          "description": "This enum contains the different themes available in Burp Suites user interface."
        },
        {
          "name": "LIGHT",
          "type": "enum",
          "description": "This enum contains the different themes available in Burp Suites user interface."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum contains the different themes available in Burp Suites user interface.\n"
    },
    "burp.api.montoya.ui.contextmenu.InvocationType": {
      "name": "InvocationType",
      "fullName": "burp.api.montoya.ui.contextmenu.InvocationType",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "containsHttpMessage",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return A helper method to ask if this type contains HTTP messages.",
          "isProfessionalOnly": false
        },
        {
          "name": "containsHttpRequestResponses",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return A helper method to ask if this type contains HTTP request/responses.",
          "isProfessionalOnly": false
        },
        {
          "name": "containsScanIssues",
          "returnType": "boolean",
          "parameters": [],
          "description": "@return A helper method to ask if this type contains any scan issues.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [
        {
          "name": "MESSAGE_EDITOR_REQUEST",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "MESSAGE_EDITOR_RESPONSE",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "MESSAGE_VIEWER_REQUEST",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "MESSAGE_VIEWER_RESPONSE",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "SITE_MAP_TREE",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "SITE_MAP_TABLE",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "PROXY_HISTORY",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "PROXY_INTERCEPT",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "SCANNER_RESULTS",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "INTRUDER_PAYLOAD_POSITIONS",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "INTRUDER_ATTACK_RESULTS",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        },
        {
          "name": "SEARCH_RESULTS",
          "type": "enum",
          "description": "An enum containing different types of context menu invocations."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.editor.EditorOptions": {
      "name": "EditorOptions",
      "fullName": "burp.api.montoya.ui.editor.EditorOptions",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "READ_ONLY",
          "type": "enum",
          "description": "Editor should be read only."
        },
        {
          "name": "WRAP_LINES",
          "type": "enum",
          "description": "Editor should wrap lines - only applicable for Raw Editors."
        },
        {
          "name": "SHOW_NON_PRINTABLE_CHARACTERS",
          "type": "enum",
          "description": "Editor should show non printable characters - only applicable for Raw Editors."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Editor should show non printable characters - only applicable for Raw Editors.\n"
    },
    "burp.api.montoya.ui.editor.extension.EditorMode": {
      "name": "EditorMode",
      "fullName": "burp.api.montoya.ui.editor.extension.EditorMode",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "DEFAULT",
          "type": "enum",
          "description": "An enum to describe the different modes of Burp Suites message editor."
        },
        {
          "name": "READ_ONLY",
          "type": "enum",
          "description": "An enum to describe the different modes of Burp Suites message editor."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "An enum to describe the different modes of Burp Suites message editor.\n"
    },
    "burp.api.montoya.ui.hotkey.HotKeyContext": {
      "name": "HotKeyContext",
      "fullName": "burp.api.montoya.ui.hotkey.HotKeyContext",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "HTTP_MESSAGE_EDITOR",
          "type": "enum",
          "description": ""
        }
      ],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.ui.settings.SettingsPanelPersistence": {
      "name": "SettingsPanelPersistence",
      "fullName": "burp.api.montoya.ui.settings.SettingsPanelPersistence",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "NONE",
          "type": "enum",
          "description": "Settings value are held in memory and not saved when Burp closes."
        },
        {
          "name": "PROJECT_SETTINGS",
          "type": "enum",
          "description": "Settings are saved within the current project file."
        },
        {
          "name": "USER_SETTINGS",
          "type": "enum",
          "description": "Settings are saved within user data."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Settings are saved within user data.\n"
    },
    "burp.api.montoya.utilities.Base64DecodingOptions": {
      "name": "Base64DecodingOptions",
      "fullName": "burp.api.montoya.utilities.Base64DecodingOptions",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "URL",
          "type": "enum",
          "description": "Decode using the URL and Filename safe type base64 transcoding scheme"
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Decode using the URL and Filename safe type base64 transcoding scheme\n"
    },
    "burp.api.montoya.utilities.Base64EncodingOptions": {
      "name": "Base64EncodingOptions",
      "fullName": "burp.api.montoya.utilities.Base64EncodingOptions",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "URL",
          "type": "enum",
          "description": "Encode using the URL and Filename safe type base64 transcoding scheme"
        },
        {
          "name": "NO_PADDING",
          "type": "enum",
          "description": "Encode without adding any padding characters at the end of the data."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Encode without adding any padding characters at the end of the data.\n"
    },
    "burp.api.montoya.utilities.CompressionType": {
      "name": "CompressionType",
      "fullName": "burp.api.montoya.utilities.CompressionType",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "GZIP",
          "type": "enum",
          "description": "This enum defines available compression types."
        },
        {
          "name": "DEFLATE",
          "type": "enum",
          "description": "This enum defines available compression types."
        },
        {
          "name": "BROTLI",
          "type": "enum",
          "description": "This enum defines available compression types."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum defines available compression types.\n"
    },
    "burp.api.montoya.utilities.DigestAlgorithm": {
      "name": "DigestAlgorithm",
      "fullName": "burp.api.montoya.utilities.DigestAlgorithm",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [],
      "isProfessionalOnly": false,
      "documentation": ""
    },
    "burp.api.montoya.utilities.HtmlEncoding": {
      "name": "HtmlEncoding",
      "fullName": "burp.api.montoya.utilities.HtmlEncoding",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "STANDARD",
          "type": "enum",
          "description": "Encode only HTML special characters."
        },
        {
          "name": "ALL_CHARACTERS",
          "type": "enum",
          "description": "Encode HTML special characters as per STANDARD,\nencode all other characters as decimal entities."
        },
        {
          "name": "ALL_CHARACTERS_DECIMAL",
          "type": "enum",
          "description": "Encode all characters as decimal entities."
        },
        {
          "name": "ALL_CHARACTERS_HEX",
          "type": "enum",
          "description": "Encode all characters as hex entities."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Encode all characters as hex entities.\n"
    },
    "burp.api.montoya.utilities.URLEncoding": {
      "name": "URLEncoding",
      "fullName": "burp.api.montoya.utilities.URLEncoding",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "JAVA_DEFAULT",
          "type": "enum",
          "description": "Encode using {@link java.net.URLEncoder}."
        },
        {
          "name": "KEY_CHARACTERS",
          "type": "enum",
          "description": "Encode key characters only."
        },
        {
          "name": "ALL_CHARACTERS",
          "type": "enum",
          "description": "Encode all characters."
        },
        {
          "name": "ALL_CHARACTERS_UNICODE",
          "type": "enum",
          "description": "Encode all characters to Unicode."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Encode all characters to Unicode.\n"
    },
    "burp.api.montoya.utilities.shell.ExitCodeBehavior": {
      "name": "ExitCodeBehavior",
      "fullName": "burp.api.montoya.utilities.shell.ExitCodeBehavior",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "FAIL_ON_NON_ZERO",
          "type": "enum",
          "description": "Throw an exception if the process returns a non-zero exit code."
        },
        {
          "name": "ALLOW_NON_ZERO",
          "type": "enum",
          "description": "Silently ignore non-zero exit codes."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Silently ignore non-zero exit codes.\n"
    },
    "burp.api.montoya.utilities.shell.StderrBehavior": {
      "name": "StderrBehavior",
      "fullName": "burp.api.montoya.utilities.shell.StderrBehavior",
      "type": "enum",
      "description": "",
      "methods": [
        {
          "name": "stderr",
          "returnType": "how",
          "parameters": [
            {
              "type": "standard",
              "name": "error"
            }
          ],
          "description": "Defines how stderr (standard error) output is handled.",
          "isProfessionalOnly": false
        }
      ],
      "fields": [
        {
          "name": "MERGE",
          "type": "enum",
          "description": "Merge stderr output with the stdout stream."
        },
        {
          "name": "DISCARD",
          "type": "enum",
          "description": "Discard all stderr output."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Discard all stderr output.\n"
    },
    "burp.api.montoya.utilities.shell.TimeoutBehavior": {
      "name": "TimeoutBehavior",
      "fullName": "burp.api.montoya.utilities.shell.TimeoutBehavior",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "FAIL_ON_TIMEOUT",
          "type": "enum",
          "description": "Throw an exception if the process times out."
        },
        {
          "name": "ALLOW_TIMEOUT",
          "type": "enum",
          "description": "Silently ignore process execution timeout."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Silently ignore process execution timeout.\n"
    },
    "burp.api.montoya.websocket.Direction": {
      "name": "Direction",
      "fullName": "burp.api.montoya.websocket.Direction",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "CLIENT_TO_SERVER",
          "type": "enum",
          "description": "This enum is used to indicate the direction of the WebSocket message."
        },
        {
          "name": "SERVER_TO_CLIENT",
          "type": "enum",
          "description": "This enum is used to indicate the direction of the WebSocket message."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "This enum is used to indicate the direction of the WebSocket message.\n"
    },
    "burp.api.montoya.websocket.MessageAction": {
      "name": "MessageAction",
      "fullName": "burp.api.montoya.websocket.MessageAction",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "CONTINUE",
          "type": "enum",
          "description": "Causes Burp to forward the message."
        },
        {
          "name": "DROP",
          "type": "enum",
          "description": "Causes Burp to drop the message."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Causes Burp to drop the message.\n"
    },
    "burp.api.montoya.websocket.extension.ExtensionWebSocketCreationStatus": {
      "name": "ExtensionWebSocketCreationStatus",
      "fullName": "burp.api.montoya.websocket.extension.ExtensionWebSocketCreationStatus",
      "type": "enum",
      "description": "",
      "methods": [],
      "fields": [
        {
          "name": "SUCCESS",
          "type": "enum",
          "description": "WebSocket creation was successful."
        },
        {
          "name": "INVALID_HOST",
          "type": "enum",
          "description": "Specified host was invalid."
        },
        {
          "name": "UNKNOWN_HOST",
          "type": "enum",
          "description": "Unable to resolve address for specified host."
        },
        {
          "name": "INVALID_PORT",
          "type": "enum",
          "description": "Specified port was invalid."
        },
        {
          "name": "CONNECTION_FAILED",
          "type": "enum",
          "description": "Unable to connect to specified host."
        },
        {
          "name": "INVALID_REQUEST",
          "type": "enum",
          "description": "Specified upgrade request was invalid."
        },
        {
          "name": "NON_UPGRADE_RESPONSE",
          "type": "enum",
          "description": "Server returned a non-upgrade response."
        },
        {
          "name": "STREAMING_RESPONSE",
          "type": "enum",
          "description": "Specified endpoint is configured for streaming responses."
        }
      ],
      "isProfessionalOnly": false,
      "documentation": "Specified endpoint is configured for streaming responses.\n"
    }
  },
  "examples": {
    "ai": {
      "name": "ai",
      "description": "",
      "sourceFiles": [
        {
          "name": "AiExample.java",
          "path": "/example/ai/AiExample.java",
          "content": "/*\n * Copyright (c) 2025. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.ai;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.EnhancedCapability;\nimport burp.api.montoya.MontoyaApi;\n\nimport java.util.Set;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\nimport static burp.api.montoya.EnhancedCapability.AI_FEATURES;\n\npublic class AiExample implements BurpExtension\n{\n    public static final String SYSTEM_MESSAGE = \"\"\"\n                                                You are an API request analyzer. Your job is to determine whether an HTTP request might be related to authentication.\n                                                You must analyze the content and context of the request carefully and respond only with \"Yes\" if the request is related to authentication, or \"No\" if it is not.\n                                                Do not provide any additional information beyond \"Yes\" or \"No.\"\n                                                \"\"\";\n\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"AI extension\");\n\n        ExecutorService executorService = Executors.newFixedThreadPool(5);\n        MyPromptMessage promptMessageHandler = new MyPromptMessage(SYSTEM_MESSAGE);\n\n        api.proxy().registerRequestHandler(new MyProxyRequestHandler(api.ai(), api.logging(), executorService, promptMessageHandler));\n\n        api.extension().registerUnloadingHandler(executorService::shutdownNow);\n    }\n\n    @Override\n    public Set<EnhancedCapability> enhancedCapabilities()\n    {\n        return Set.of(AI_FEATURES);\n    }\n}"
        },
        {
          "name": "MyPromptMessage.java",
          "path": "/example/ai/MyPromptMessage.java",
          "content": "/*\n * Copyright (c) 2025. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.ai;\n\nimport burp.api.montoya.ai.chat.Message;\n\nimport static burp.api.montoya.ai.chat.Message.systemMessage;\nimport static burp.api.montoya.ai.chat.Message.userMessage;\n\npublic class MyPromptMessage\n{\n    private final Message systemMessage;\n\n    public MyPromptMessage(String systemPrompt)\n    {\n        systemMessage = systemMessage(systemPrompt);\n    }\n\n    public Message[] build(String userPrompt)\n    {\n        return new Message[]{systemMessage, userMessage(userPrompt)};\n    }\n}\n"
        },
        {
          "name": "MyProxyRequestHandler.java",
          "path": "/example/ai/MyProxyRequestHandler.java",
          "content": "/*\n * Copyright (c) 2025. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.ai;\n\nimport burp.api.montoya.ai.Ai;\nimport burp.api.montoya.ai.chat.PromptException;\nimport burp.api.montoya.ai.chat.PromptResponse;\nimport burp.api.montoya.logging.Logging;\nimport burp.api.montoya.proxy.http.InterceptedRequest;\nimport burp.api.montoya.proxy.http.ProxyRequestHandler;\nimport burp.api.montoya.proxy.http.ProxyRequestReceivedAction;\nimport burp.api.montoya.proxy.http.ProxyRequestToBeSentAction;\n\nimport java.util.concurrent.ExecutorService;\n\nimport static burp.api.montoya.core.HighlightColor.GREEN;\nimport static java.util.Locale.US;\n\nclass MyProxyRequestHandler implements ProxyRequestHandler\n{\n    private final Ai ai;\n    private final Logging logging;\n    private final MyPromptMessage promptMessageHandler;\n    private final ExecutorService executorService;\n\n    public MyProxyRequestHandler(Ai ai, Logging logging, ExecutorService executorService, MyPromptMessage promptMessageHandler)\n    {\n        this.ai = ai;\n        this.logging = logging;\n        this.promptMessageHandler = promptMessageHandler;\n        this.executorService = executorService;\n    }\n\n    @Override\n    public ProxyRequestReceivedAction handleRequestReceived(InterceptedRequest interceptedRequest)\n    {\n        if (ai.isEnabled() && interceptedRequest.isInScope())\n        {\n            // AI requests are slow, so should be run on a separate thread.\n            executorService.submit(() -> processRequest(interceptedRequest));\n        }\n\n        return ProxyRequestReceivedAction.continueWith(interceptedRequest);\n    }\n\n    @Override\n    public ProxyRequestToBeSentAction handleRequestToBeSent(InterceptedRequest interceptedRequest)\n    {\n        return ProxyRequestToBeSentAction.continueWith(interceptedRequest);\n    }\n\n    private void processRequest(InterceptedRequest request)\n    {\n        try\n        {\n            PromptResponse promptResponse = ai.prompt().execute(promptMessageHandler.build(request.toString()));\n\n            if (promptResponse.content().toLowerCase(US).contains(\"yes\"))\n            {\n                request.annotations().setHighlightColor(GREEN);\n            }\n        } catch (PromptException e)\n        {\n            if (e.getMessage().contains(\"Not enough credits\"))\n            {\n                logging.logToOutput(\"Please increase your credit balance.\");\n            } else\n            {\n                logging.logToError(\"Issue executing prompt\", e);\n            }\n        }\n    }\n}"
        }
      ],
      "readme": "AI Example Extension\n============================\n\n###### Demonstrates using AI functionality.\n\n---\nThis extension demonstrates using Burp's built-in functionality to issue requests to an LLM and process the responses.\n\nThis extension uses an LLM to analyze in-scope requests and determine whether they are related to authentication. \n\nThe sample extension demonstrates the following techniques:\n- Marking an extension as AI-compatible.\n  - The implementation of `BurpExtension` overrides `BurpExtension.enhancedCapabilities()`\n- `MyPromptMessage` provides an easy way to provide the `Message.systemMessage()` with the `Message.userMessage()`. This allows you to provide context at the same time as the user message when sending prompts to the LLM.\n\n  > When sending prompts to the LLM, `Message.systemMessage()` needs to be sent each time to provide the context.\n  > \n  > Conversations between the LLM and the user can be continued by chaining `Message.userMessage()` and `Message.assistantMessage()` within `Prompt.execute()`.\n\n- By registering a `ProxyRequestHandler`, the extension can analyze all outgoing Proxy requests.\n- For each request, the extension first checks if AI functionality is enabled using `Ai.isEnabled()`.\n- To minimize unnecessary data sent to the LLM, the extension checks if the traffic is in scope.\n- Provided the previous conditions are met, the extension will submit a task to the configured thread pool to execute the prompt.\n\n  > LLM queries are slow and should be performed on their own thread to reduce impact on browsing speed.\n\n- The task will issue a request to the LLM using `Prompt.execute()`.\n- The `PromptResponse` is analyzed. Due to our `Message.systemMessage()`, the output should contain \"yes\" or \"no\".\n  - If the outcome of the analysis is \"yes\", the extension highlights the request in the Proxy History table.\n  - If the outcome of the analysis is \"no\", no action is taken.\n- If a `PromptException` is thrown, additional handling has been put in place.\n  - If the user does not have sufficient credits, a message is logged to the output stream of the extension.\n  - If the prompt execution fails for a different reason, a message and the exception is logged to the error stream of the extension.\n\nFurther references:\n- [Creating AI extensions](https://portswigger.net/burp/documentation/desktop/extensions/creating/creating-ai-extensions)\n- [Best practices for writing AI extensions](https://portswigger.net/burp/documentation/desktop/extensions/creating/creating-ai-extensions/best-practices)\n- [Developing AI features in extensions](https://portswigger.net/burp/documentation/desktop/extensions/creating/creating-ai-extensions/developing-ai-features)\n- [Using AI extensions](https://portswigger.net/burp/documentation/desktop/extensions/using-ai-extensions)\n- [AI security, privacy and data handling](https://portswigger.net/burp/documentation/desktop/extensions/ai-security-privacy-data-handling)"
    },
    "collaborator": {
      "name": "collaborator",
      "description": "",
      "sourceFiles": [
        {
          "name": "CollaboratorExample.java",
          "path": "/example/collaborator/CollaboratorExample.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.collaborator;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.collaborator.CollaboratorClient;\nimport burp.api.montoya.collaborator.SecretKey;\nimport burp.api.montoya.persistence.PersistedObject;\nimport example.collaborator.poller.Poller;\n\nimport java.time.Duration;\n\npublic class CollaboratorExample implements BurpExtension\n{\n    private MontoyaApi api;\n\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        this.api = api;\n\n        api.extension().setName(\"Collaborator example extension\");\n\n        CollaboratorClient collaboratorClient = createCollaboratorClient(api.persistence().extensionData());\n\n        // Log any stored interactions.\n        InteractionLogger interactionLogger = new InteractionLogger(api);\n        interactionLogger.logInteractions(collaboratorClient.getAllInteractions());\n\n        api.proxy().registerRequestHandler(new MyProxyRequestHandler(collaboratorClient));\n\n        // Periodically poll the CollaboratorClient to retrieve any new interactions.\n        Poller collaboratorPoller = new Poller(collaboratorClient, Duration.ofSeconds(10));\n        collaboratorPoller.registerInteractionHandler(new MyInteractionHandler(api, interactionLogger));\n        collaboratorPoller.start();\n\n        api.extension().registerUnloadingHandler(() ->\n        {\n            // Stop polling the CollaboratorClient.\n            collaboratorPoller.shutdown();\n\n            api.logging().logToOutput(\"Extension unloading...\");\n        });\n    }\n\n    private CollaboratorClient createCollaboratorClient(PersistedObject persistedData)\n    {\n        CollaboratorClient collaboratorClient;\n\n        String existingCollaboratorKey = persistedData.getString(\"persisted_collaborator\");\n\n        if (existingCollaboratorKey != null)\n        {\n            api.logging().logToOutput(\"Creating Collaborator client from key.\");\n            collaboratorClient = api.collaborator().restoreClient(SecretKey.secretKey(existingCollaboratorKey));\n        }\n        else\n        {\n            api.logging().logToOutput(\"No previously found Collaborator client. Creating new client...\");\n            collaboratorClient = api.collaborator().createClient();\n\n            // Save the secret key of the CollaboratorClient so that you can retrieve it later.\n            api.logging().logToOutput(\"Saving Collaborator secret key.\");\n            persistedData.setString(\"persisted_collaborator\", collaboratorClient.getSecretKey().toString());\n        }\n\n        return collaboratorClient;\n    }\n}\n"
        },
        {
          "name": "InteractionLogger.java",
          "path": "/example/collaborator/InteractionLogger.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.collaborator;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.collaborator.Interaction;\n\nimport java.util.List;\n\nimport static java.lang.String.format;\n\npublic class InteractionLogger\n{\n    private final MontoyaApi api;\n\n    public InteractionLogger(MontoyaApi api)\n    {\n        this.api = api;\n    }\n\n    public void logInteractions(List<Interaction> allInteractions)\n    {\n        api.logging().logToOutput(allInteractions.size() + \" unread interactions.\");\n\n        for (Interaction allInteraction : allInteractions)\n        {\n            logInteraction(allInteraction);\n        }\n    }\n\n    public void logInteraction(Interaction interaction)\n    {\n        api.logging().logToOutput(\n                format(\n                        \"\"\"\n                        Interaction type: %s\n                        Interaction ID: %s\n                        \"\"\",\n                        interaction.type().name(),\n                        interaction.id()\n                )\n        );\n    }\n}\n"
        },
        {
          "name": "MyInteractionHandler.java",
          "path": "/example/collaborator/MyInteractionHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.collaborator;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.collaborator.Interaction;\nimport burp.api.montoya.http.message.HttpRequestResponse;\nimport burp.api.montoya.proxy.ProxyHttpRequestResponse;\nimport burp.api.montoya.scanner.audit.issues.AuditIssue;\nimport burp.api.montoya.scanner.audit.issues.AuditIssueConfidence;\nimport burp.api.montoya.scanner.audit.issues.AuditIssueSeverity;\nimport example.collaborator.poller.InteractionHandler;\n\nimport java.util.List;\n\npublic class MyInteractionHandler implements InteractionHandler\n{\n    private final MontoyaApi api;\n    private final InteractionLogger interactionLogger;\n\n    public MyInteractionHandler(MontoyaApi api, InteractionLogger interactionLogger)\n    {\n        this.api = api;\n        this.interactionLogger = interactionLogger;\n    }\n\n    @Override\n    public void handleInteraction(Interaction interaction)\n    {\n        interactionLogger.logInteraction(interaction);\n\n        List<ProxyHttpRequestResponse> proxyHttpRequestResponseList = api.proxy().history(requestResponse -> requestResponse.finalRequest().toString().contains(interaction.id().toString()));\n\n        proxyHttpRequestResponseList.forEach(item -> api.siteMap().add(\n                AuditIssue.auditIssue(\n                        \"Collaborator example issue\",\n                        \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\n                        \"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\",\n                        item.finalRequest().url(),\n                        AuditIssueSeverity.HIGH,\n                        AuditIssueConfidence.CERTAIN,\n                        \"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\n                        \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\n                        AuditIssueSeverity.HIGH,\n                        HttpRequestResponse.httpRequestResponse(item.finalRequest(), item.originalResponse())\n                )\n        ));\n    }\n}\n"
        },
        {
          "name": "MyProxyRequestHandler.java",
          "path": "/example/collaborator/MyProxyRequestHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.collaborator;\n\nimport burp.api.montoya.collaborator.CollaboratorClient;\nimport burp.api.montoya.http.message.params.HttpParameter;\nimport burp.api.montoya.http.message.requests.HttpRequest;\nimport burp.api.montoya.proxy.http.InterceptedRequest;\nimport burp.api.montoya.proxy.http.ProxyRequestHandler;\nimport burp.api.montoya.proxy.http.ProxyRequestReceivedAction;\nimport burp.api.montoya.proxy.http.ProxyRequestToBeSentAction;\n\npublic class MyProxyRequestHandler implements ProxyRequestHandler\n{\n    private final CollaboratorClient collaboratorClient;\n\n    public MyProxyRequestHandler(CollaboratorClient collaboratorClient)\n    {\n        this.collaboratorClient = collaboratorClient;\n    }\n\n    @Override\n    public ProxyRequestReceivedAction handleRequestReceived(InterceptedRequest interceptedRequest)\n    {\n        String payload = collaboratorClient.generatePayload().toString();\n\n        HttpRequest newRequest = interceptedRequest.withParameter(HttpParameter.urlParameter(\"host\", payload)); // Test this on: https://portswigger-labs.net/ssrf-dns.php\n\n        return ProxyRequestReceivedAction.continueWith(newRequest);\n    }\n\n    @Override\n    public ProxyRequestToBeSentAction handleRequestToBeSent(InterceptedRequest interceptedRequest)\n    {\n        return ProxyRequestToBeSentAction.continueWith(interceptedRequest);\n    }\n}\n"
        },
        {
          "name": "InteractionHandler.java",
          "path": "/example/collaborator/poller/InteractionHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.collaborator.poller;\n\nimport burp.api.montoya.collaborator.Interaction;\n\npublic interface InteractionHandler\n{\n    void handleInteraction(Interaction interaction);\n}\n"
        },
        {
          "name": "Poller.java",
          "path": "/example/collaborator/poller/Poller.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.collaborator.poller;\n\nimport burp.api.montoya.collaborator.CollaboratorClient;\nimport burp.api.montoya.collaborator.Interaction;\n\nimport java.time.Duration;\nimport java.util.LinkedList;\nimport java.util.List;\nimport java.util.concurrent.ScheduledFuture;\nimport java.util.concurrent.ScheduledThreadPoolExecutor;\nimport java.util.concurrent.TimeUnit;\n\npublic class Poller\n{\n    private final CollaboratorClient collaboratorClient;\n    private final Duration pollInterval;\n    private final List<InteractionHandler> interactionHandlers;\n    private ScheduledThreadPoolExecutor scheduledThreadPoolExecutor;\n    private ScheduledFuture<?> schedule;\n\n    public Poller(CollaboratorClient collaboratorClient, Duration pollInterval)\n    {\n        this.collaboratorClient = collaboratorClient;\n        this.pollInterval = pollInterval;\n        this.interactionHandlers = new LinkedList<>();\n    }\n\n    public void registerInteractionHandler(InteractionHandler interactionHandler)\n    {\n        interactionHandlers.add(interactionHandler);\n    }\n\n    public void start()\n    {\n        scheduledThreadPoolExecutor = new ScheduledThreadPoolExecutor(1);\n        schedule = scheduledThreadPoolExecutor.scheduleAtFixedRate(new PollingRunnable(), 0, pollInterval.getSeconds(), TimeUnit.SECONDS);\n    }\n\n    public void shutdown()\n    {\n        schedule.cancel(true);\n        scheduledThreadPoolExecutor.shutdown();\n    }\n\n    private class PollingRunnable implements Runnable\n    {\n        @Override\n        public void run()\n        {\n            List<Interaction> interactionList = collaboratorClient.getAllInteractions();\n\n            for (Interaction interaction : interactionList)\n            {\n                for (InteractionHandler interactionHandler : interactionHandlers)\n                {\n                    interactionHandler.handleInteraction(interaction);\n                }\n            }\n        }\n    }\n}\n"
        }
      ],
      "readme": "Collaborator Example Extension\n============================\n\n###### Demonstrates using Collaborator and Persistence functionality.\n\n---\nThis extension demonstrates creating a `CollaboratorClient`, polling the Collaborator Server and saving the Collaborator `SecretKey` to the project file using Persistence.\n\nThe sample extension demonstrates the following techniques:\n- Creating a Collaborator Client\n  - If the extension has been previously loaded in the project file, it restores the previously used `CollaboratorClient`\n  - If this is the first time the extension has been loaded in this project file, it creates a new `CollaboratorClient` and saves the `SecretKey` to the project file\n- Registers a `ProxyRequestHandler` to insert Collaborator payloads into requests\n- Polls the Collaborator Server for asynchronous interactions\n- Logs any discovered interactions to the extension Output tab\n- When the extension is unloaded or Burp Suite is closed, the extension stops polling the Collaborator server\n\nYou can test this extension on the following URL: https://portswigger-labs.net/ssrf-dns.php\n\nThe `poller` package has been designed to be easily reused in other extensions."
    },
    "contextmenu": {
      "name": "contextmenu",
      "description": "",
      "sourceFiles": [
        {
          "name": "ContextMenu.java",
          "path": "/example/contextmenu/ContextMenu.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.contextmenu;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\npublic class ContextMenu implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"Context menu extension\");\n\n        api.userInterface().registerContextMenuItemsProvider(new MyContextMenuItemsProvider(api));\n    }\n}\n"
        },
        {
          "name": "MyContextMenuItemsProvider.java",
          "path": "/example/contextmenu/MyContextMenuItemsProvider.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.contextmenu;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.core.ToolType;\nimport burp.api.montoya.http.message.HttpRequestResponse;\nimport burp.api.montoya.ui.contextmenu.ContextMenuEvent;\nimport burp.api.montoya.ui.contextmenu.ContextMenuItemsProvider;\n\nimport javax.swing.*;\nimport java.awt.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MyContextMenuItemsProvider implements ContextMenuItemsProvider\n{\n\n    private final MontoyaApi api;\n\n    public MyContextMenuItemsProvider(MontoyaApi api)\n    {\n        this.api = api;\n    }\n\n    @Override\n    public List<Component> provideMenuItems(ContextMenuEvent event)\n    {\n        if (event.isFromTool(ToolType.PROXY, ToolType.TARGET, ToolType.LOGGER))\n        {\n            List<Component> menuItemList = new ArrayList<>();\n\n            JMenuItem retrieveRequestItem = new JMenuItem(\"Print request\");\n            JMenuItem retrieveResponseItem = new JMenuItem(\"Print response\");\n\n            HttpRequestResponse requestResponse = event.messageEditorRequestResponse().isPresent() ? event.messageEditorRequestResponse().get().requestResponse() : event.selectedRequestResponses().get(0);\n\n            retrieveRequestItem.addActionListener(l -> api.logging().logToOutput(\"Request is:\\r\\n\" + requestResponse.request().toString()));\n            menuItemList.add(retrieveRequestItem);\n\n            if (requestResponse.response() != null)\n            {\n                retrieveResponseItem.addActionListener(l -> api.logging().logToOutput(\"Response is:\\r\\n\" + requestResponse.response().toString()));\n                menuItemList.add(retrieveResponseItem);\n            }\n\n            return menuItemList;\n        }\n\n        return null;\n    }\n}\n"
        }
      ],
      "readme": "Context Menu Example Extension\n============================\n\n###### Registers new context menu items to print requests and responses.\n\n---\nThis extension adds a new context menu item to print out the request or response of an HttpRequestResponse in the Target, Proxy or Logger tab.\n\nThe sample extension demonstrates the following techniques:\n- Registering a new `ContextMenuItemsProvider`.\n- Creating a `JMenuItem`.\n- Adding an action listener to a `JMenuItem`.\n- If you right-click in a message editor context, it will use the item from the message editor.\n- If you right-click on a table item, it will print the request/response for the first selected item."
    },
    "customlogger": {
      "name": "customlogger",
      "description": "",
      "sourceFiles": [
        {
          "name": "CustomLogger.java",
          "path": "/example/customlogger/CustomLogger.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customlogger;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.http.handler.HttpResponseReceived;\nimport burp.api.montoya.ui.UserInterface;\nimport burp.api.montoya.ui.editor.HttpRequestEditor;\nimport burp.api.montoya.ui.editor.HttpResponseEditor;\n\nimport javax.swing.*;\nimport java.awt.*;\n\nimport static burp.api.montoya.ui.editor.EditorOptions.READ_ONLY;\n\npublic class CustomLogger implements BurpExtension\n{\n    private MontoyaApi api;\n\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        this.api = api;\n        api.extension().setName(\"Custom logger\");\n\n        MyTableModel tableModel = new MyTableModel();\n        api.userInterface().registerSuiteTab(\"Custom logger\", constructLoggerTab(tableModel));\n        api.http().registerHttpHandler(new MyHttpHandler(tableModel));\n    }\n\n    private Component constructLoggerTab(MyTableModel tableModel)\n    {\n        // main split pane\n        JSplitPane splitPane = new JSplitPane(JSplitPane.VERTICAL_SPLIT);\n\n        // tabs with request/response viewers\n        JTabbedPane tabs = new JTabbedPane();\n\n        UserInterface userInterface = api.userInterface();\n\n        HttpRequestEditor requestViewer = userInterface.createHttpRequestEditor(READ_ONLY);\n        HttpResponseEditor responseViewer = userInterface.createHttpResponseEditor(READ_ONLY);\n\n        tabs.addTab(\"Request\", requestViewer.uiComponent());\n        tabs.addTab(\"Response\", responseViewer.uiComponent());\n\n        splitPane.setRightComponent(tabs);\n\n        // table of log entries\n        JTable table = new JTable(tableModel)\n        {\n            @Override\n            public void changeSelection(int rowIndex, int columnIndex, boolean toggle, boolean extend)\n            {\n                // show the log entry for the selected row\n                HttpResponseReceived responseReceived = tableModel.get(rowIndex);\n                requestViewer.setRequest(responseReceived.initiatingRequest());\n                responseViewer.setResponse(responseReceived);\n\n                super.changeSelection(rowIndex, columnIndex, toggle, extend);\n            }\n        };\n\n        JScrollPane scrollPane = new JScrollPane(table);\n\n        splitPane.setLeftComponent(scrollPane);\n\n        return splitPane;\n    }\n}\n"
        },
        {
          "name": "MyHttpHandler.java",
          "path": "/example/customlogger/MyHttpHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customlogger;\n\nimport burp.api.montoya.http.handler.*;\n\npublic class MyHttpHandler implements HttpHandler\n{\n    private final MyTableModel tableModel;\n\n    public MyHttpHandler(MyTableModel tableModel)\n    {\n\n        this.tableModel = tableModel;\n    }\n\n    @Override\n    public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent requestToBeSent)\n    {\n        return RequestToBeSentAction.continueWith(requestToBeSent);\n    }\n\n    @Override\n    public ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived responseReceived)\n    {\n        tableModel.add(responseReceived);\n        return ResponseReceivedAction.continueWith(responseReceived);\n    }\n}\n"
        },
        {
          "name": "MyTableModel.java",
          "path": "/example/customlogger/MyTableModel.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customlogger;\n\nimport burp.api.montoya.http.handler.HttpResponseReceived;\n\nimport javax.swing.table.AbstractTableModel;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MyTableModel extends AbstractTableModel\n{\n    private final List<HttpResponseReceived> log;\n\n    public MyTableModel()\n    {\n        this.log = new ArrayList<>();\n    }\n\n    @Override\n    public synchronized int getRowCount()\n    {\n        return log.size();\n    }\n\n    @Override\n    public int getColumnCount()\n    {\n        return 2;\n    }\n\n    @Override\n    public String getColumnName(int column)\n    {\n        return switch (column)\n                {\n                    case 0 -> \"Tool\";\n                    case 1 -> \"URL\";\n                    default -> \"\";\n                };\n    }\n\n    @Override\n    public synchronized Object getValueAt(int rowIndex, int columnIndex)\n    {\n        HttpResponseReceived responseReceived = log.get(rowIndex);\n\n        return switch (columnIndex)\n                {\n                    case 0 -> responseReceived.toolSource().toolType();\n                    case 1 -> responseReceived.initiatingRequest().url();\n                    default -> \"\";\n                };\n    }\n\n    public synchronized void add(HttpResponseReceived responseReceived)\n    {\n        int index = log.size();\n        log.add(responseReceived);\n        fireTableRowsInserted(index, index);\n    }\n\n    public synchronized HttpResponseReceived get(int rowIndex)\n    {\n        return log.get(rowIndex);\n    }\n}\n"
        }
      ],
      "readme": "Custom Logger Example Extension\n============================\n\n###### Adds a new tab to Burp's UI and displays a log of HTTP traffic for all Burp tools.\n\n ---\n\nThis extension provides a suite-wide HTTP logger within the main Burp UI.\n\nThe extension uses the following techniques:\n- It creates a custom tab within the main Burp UI, in which to display logging user interface\n- It displays a table of items and a read-only editor for requests and responses within a splitpane\n- When an item passes through the HttpHandler, it gets added to the table\n- You can view the request and response for an item in the table by clicking on the relevant row"
    },
    "customrequesteditortab": {
      "name": "customrequesteditortab",
      "description": "",
      "sourceFiles": [
        {
          "name": "CustomRequestEditorTab.java",
          "path": "/example/customrequesteditortab/CustomRequestEditorTab.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customrequesteditortab;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\npublic class CustomRequestEditorTab implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"Serialized input editor\");\n\n        api.userInterface().registerHttpRequestEditorProvider(new MyHttpRequestEditorProvider(api));\n    }\n}\n"
        },
        {
          "name": "MyExtensionProvidedHttpRequestEditor.java",
          "path": "/example/customrequesteditortab/MyExtensionProvidedHttpRequestEditor.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customrequesteditortab;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.core.ByteArray;\nimport burp.api.montoya.http.message.HttpRequestResponse;\nimport burp.api.montoya.http.message.params.HttpParameter;\nimport burp.api.montoya.http.message.params.ParsedHttpParameter;\nimport burp.api.montoya.http.message.requests.HttpRequest;\nimport burp.api.montoya.ui.Selection;\nimport burp.api.montoya.ui.editor.EditorOptions;\nimport burp.api.montoya.ui.editor.RawEditor;\nimport burp.api.montoya.ui.editor.extension.EditorCreationContext;\nimport burp.api.montoya.ui.editor.extension.EditorMode;\nimport burp.api.montoya.ui.editor.extension.ExtensionProvidedHttpRequestEditor;\nimport burp.api.montoya.utilities.Base64EncodingOptions;\nimport burp.api.montoya.utilities.Base64Utils;\nimport burp.api.montoya.utilities.URLUtils;\n\nimport java.awt.*;\nimport java.util.Optional;\n\nimport static burp.api.montoya.core.ByteArray.byteArray;\n\nclass MyExtensionProvidedHttpRequestEditor implements ExtensionProvidedHttpRequestEditor\n{\n    private final RawEditor requestEditor;\n    private final Base64Utils base64Utils;\n    private final URLUtils urlUtils;\n    private HttpRequestResponse requestResponse;\n    private final MontoyaApi api;\n\n    private ParsedHttpParameter parsedHttpParameter;\n\n    MyExtensionProvidedHttpRequestEditor(MontoyaApi api, EditorCreationContext creationContext)\n    {\n        this.api = api;\n        base64Utils = api.utilities().base64Utils();\n        urlUtils = api.utilities().urlUtils();\n\n        if (creationContext.editorMode() == EditorMode.READ_ONLY)\n        {\n            requestEditor = api.userInterface().createRawEditor(EditorOptions.READ_ONLY);\n        }\n        else {\n            requestEditor = api.userInterface().createRawEditor();\n        }\n    }\n\n    @Override\n    public HttpRequest getRequest()\n    {\n        HttpRequest request;\n\n        if (requestEditor.isModified())\n        {\n            // reserialize data\n            String base64Encoded = base64Utils.encodeToString(requestEditor.getContents(), Base64EncodingOptions.URL);\n            String encodedData = urlUtils.encode(base64Encoded);\n\n            request = requestResponse.request().withUpdatedParameters(HttpParameter.parameter(parsedHttpParameter.name(), encodedData, parsedHttpParameter.type()));\n        }\n        else\n        {\n            request = requestResponse.request();\n        }\n\n        return request;\n    }\n\n    @Override\n    public void setRequestResponse(HttpRequestResponse requestResponse)\n    {\n        this.requestResponse = requestResponse;\n\n        String urlDecoded = urlUtils.decode(parsedHttpParameter.value());\n\n        ByteArray output;\n\n        try\n        {\n            output = base64Utils.decode(urlDecoded);\n        }\n        catch (Exception e)\n        {\n            output = byteArray(urlDecoded);\n        }\n\n        this.requestEditor.setContents(output);\n    }\n\n    @Override\n    public boolean isEnabledFor(HttpRequestResponse requestResponse)\n    {\n        Optional<ParsedHttpParameter> dataParam = requestResponse.request().parameters().stream().filter(p -> p.name().equals(\"data\")).findFirst();\n\n        dataParam.ifPresent(httpParameter -> parsedHttpParameter = httpParameter);\n\n        return dataParam.isPresent();\n    }\n\n    @Override\n    public String caption()\n    {\n        return \"Serialized input\";\n    }\n\n    @Override\n    public Component uiComponent()\n    {\n        return requestEditor.uiComponent();\n    }\n\n    @Override\n    public Selection selectedData()\n    {\n        return requestEditor.selection().isPresent() ? requestEditor.selection().get() : null;\n    }\n\n    @Override\n    public boolean isModified()\n    {\n        return requestEditor.isModified();\n    }\n}"
        },
        {
          "name": "MyHttpRequestEditorProvider.java",
          "path": "/example/customrequesteditortab/MyHttpRequestEditorProvider.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customrequesteditortab;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.ui.editor.extension.EditorCreationContext;\nimport burp.api.montoya.ui.editor.extension.ExtensionProvidedHttpRequestEditor;\nimport burp.api.montoya.ui.editor.extension.HttpRequestEditorProvider;\n\nclass MyHttpRequestEditorProvider implements HttpRequestEditorProvider\n{\n    private final MontoyaApi api;\n\n    MyHttpRequestEditorProvider(MontoyaApi api)\n    {\n        this.api = api;\n    }\n\n    @Override\n    public ExtensionProvidedHttpRequestEditor provideHttpRequestEditor(EditorCreationContext creationContext)\n    {\n        return new MyExtensionProvidedHttpRequestEditor(api, creationContext);\n    }\n}\n"
        }
      ],
      "readme": "Custom Request Editor Tab Example Extension\n============================\n\n###### Adds a new tab to Burp's HTTP message editor, in order to handle a data serialization format\n\n ---\n\nThis extension provides a new tab on the message editor for requests that contain a specified parameter.\n\nThe extension uses the following techniques:\n- It creates a custom request tab on the message editor, provided that the `data` parameter is present\n- If it is appropriate, the editor is set to be read-only\n- The value of the `data` parameter is deserialized (URL decoded, then Base64 decoded) and displayed in the custom tab\n- If the value of the data is modified, the content will be re-serialized (Base64 encoded then URL encoded) and updated in the HttpRequest"
    },
    "customscanchecks": {
      "name": "customscanchecks",
      "description": "",
      "sourceFiles": [
        {
          "name": "CustomScanChecks.java",
          "path": "/example/customscanchecks/CustomScanChecks.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customscanchecks;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\npublic class CustomScanChecks implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"Custom Scanner checks\");\n\n        api.scanner().registerScanCheck(new MyScanCheck(api));\n    }\n}\n"
        },
        {
          "name": "MyScanCheck.java",
          "path": "/example/customscanchecks/MyScanCheck.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customscanchecks;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.core.Marker;\nimport burp.api.montoya.http.message.HttpRequestResponse;\nimport burp.api.montoya.http.message.requests.HttpRequest;\nimport burp.api.montoya.scanner.AuditResult;\nimport burp.api.montoya.scanner.ConsolidationAction;\nimport burp.api.montoya.scanner.ScanCheck;\nimport burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPoint;\nimport burp.api.montoya.scanner.audit.issues.AuditIssue;\nimport burp.api.montoya.scanner.audit.issues.AuditIssueConfidence;\nimport burp.api.montoya.scanner.audit.issues.AuditIssueSeverity;\n\nimport java.util.LinkedList;\nimport java.util.List;\n\nimport static burp.api.montoya.core.ByteArray.byteArray;\nimport static burp.api.montoya.scanner.AuditResult.auditResult;\nimport static burp.api.montoya.scanner.ConsolidationAction.KEEP_BOTH;\nimport static burp.api.montoya.scanner.ConsolidationAction.KEEP_EXISTING;\nimport static burp.api.montoya.scanner.audit.issues.AuditIssue.auditIssue;\nimport static java.util.Collections.emptyList;\nimport static java.util.Collections.singletonList;\n\nclass MyScanCheck implements ScanCheck\n{\n    private static final String GREP_STRING = \"Page generated by:\";\n    private static final String INJ_TEST = \"|\";\n    private static final String INJ_ERROR = \"Unexpected pipe\";\n\n    private final MontoyaApi api;\n\n    MyScanCheck(MontoyaApi api)\n    {\n        this.api = api;\n    }\n\n    @Override\n    public AuditResult activeAudit(HttpRequestResponse baseRequestResponse, AuditInsertionPoint auditInsertionPoint)\n    {\n        HttpRequest checkRequest = auditInsertionPoint.buildHttpRequestWithPayload(byteArray(INJ_TEST)).withService(baseRequestResponse.httpService());\n\n        HttpRequestResponse checkRequestResponse = api.http().sendRequest(checkRequest);\n\n        List<Marker> responseHighlights = getResponseHighlights(checkRequestResponse, INJ_ERROR);\n\n        List<AuditIssue> auditIssueList = responseHighlights.isEmpty() ? emptyList() : singletonList(\n                auditIssue(\n                        \"Pipe injection\",\n                        \"Submitting a pipe character returned the string: \" + INJ_ERROR,\n                        null,\n                        baseRequestResponse.request().url(),\n                        AuditIssueSeverity.HIGH,\n                        AuditIssueConfidence.CERTAIN,\n                        null,\n                        null,\n                        AuditIssueSeverity.HIGH,\n                        checkRequestResponse.withResponseMarkers(responseHighlights)\n                )\n        );\n\n        return auditResult(auditIssueList);\n    }\n\n    @Override\n    public AuditResult passiveAudit(HttpRequestResponse baseRequestResponse)\n    {\n        List<Marker> responseHighlights = getResponseHighlights(baseRequestResponse, GREP_STRING);\n\n        List<AuditIssue> auditIssueList = responseHighlights.isEmpty() ? emptyList() : singletonList(\n                auditIssue(\n                        \"CMS Info Leakage\",\n                        \"The response contains the string: \" + GREP_STRING,\n                        null,\n                        baseRequestResponse.request().url(),\n                        AuditIssueSeverity.HIGH,\n                        AuditIssueConfidence.CERTAIN,\n                        null,\n                        null,\n                        AuditIssueSeverity.HIGH,\n                        baseRequestResponse.withResponseMarkers(responseHighlights)\n                )\n        );\n\n        return auditResult(auditIssueList);\n    }\n\n    @Override\n    public ConsolidationAction consolidateIssues(AuditIssue newIssue, AuditIssue existingIssue)\n    {\n        return existingIssue.name().equals(newIssue.name()) ? KEEP_EXISTING : KEEP_BOTH;\n    }\n\n    private static List<Marker> getResponseHighlights(HttpRequestResponse requestResponse, String match)\n    {\n        List<Marker> highlights = new LinkedList<>();\n        String response = requestResponse.response().toString();\n\n        int start = 0;\n\n        while (start < response.length())\n        {\n            start = response.indexOf(match, start);\n\n            if (start == -1)\n            {\n                break;\n            }\n\n            Marker marker = Marker.marker(start, start+match.length());\n            highlights.add(marker);\n\n            start += match.length();\n        }\n\n        return highlights;\n    }\n}"
        }
      ],
      "readme": "Custom Scan Checks Example Extension\n============================\n\n###### Implements custom checks to extend the capabilities of Burp's active and passive scanning engines.\n\n---\n\nThe sample extension demonstrates the following techniques:\n- Registering a custom scan check\n- Performing passive and active scanning when initiated by the user\n- Using the Burp-provided `AuditInsertionPoint` to construct requests for active scanning using specified payloads\n- Using a helper method to search responses for relevant match strings\n- Providing an `MarkedHttpRequestResponse` to highlight relevant portions of requests and responses, \n- Synchronously reporting custom scan issues in response to the relevant checks.\n- Guiding Burp on when to consolidate duplicated issues at the same URL (e.g., when the user has scanned the same item multiple times)."
    },
    "customscaninsertionpoints": {
      "name": "customscaninsertionpoints",
      "description": "",
      "sourceFiles": [
        {
          "name": "CustomScanInsertionPoints.java",
          "path": "/example/customscaninsertionpoints/CustomScanInsertionPoints.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customscaninsertionpoints;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\npublic class CustomScanInsertionPoints implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"Custom scan insertion points\");\n\n        api.scanner().registerInsertionPointProvider(new MyInsertionPointProvider(api));\n    }\n}"
        },
        {
          "name": "MyAuditInsertionPoint.java",
          "path": "/example/customscaninsertionpoints/MyAuditInsertionPoint.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customscaninsertionpoints;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.core.ByteArray;\nimport burp.api.montoya.core.Range;\nimport burp.api.montoya.http.message.HttpRequestResponse;\nimport burp.api.montoya.http.message.params.HttpParameter;\nimport burp.api.montoya.http.message.params.ParsedHttpParameter;\nimport burp.api.montoya.http.message.requests.HttpRequest;\nimport burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPoint;\nimport burp.api.montoya.utilities.Utilities;\n\nimport java.util.List;\n\nimport static burp.api.montoya.http.message.params.HttpParameter.parameter;\n\nclass MyAuditInsertionPoint implements AuditInsertionPoint\n{\n    private final String insertionPointPrefix;\n    private final String insertionPointSuffix;\n    private final HttpRequestResponse requestResponse;\n    private final ParsedHttpParameter parameter;\n    private final String baseValue;\n    private final Utilities utilities;\n\n    MyAuditInsertionPoint(MontoyaApi api, HttpRequestResponse baseHttpRequestResponse, ParsedHttpParameter parameter)\n    {\n        this.requestResponse = baseHttpRequestResponse;\n        this.parameter = parameter;\n        this.utilities = api.utilities();\n\n        String paramValue = parameter.value();\n\n        // URL and base-64 decode the data\n        String urlDecoded = utilities.urlUtils().decode(paramValue);\n        ByteArray byteData = utilities.base64Utils().decode(urlDecoded);\n\n        String data = byteData.toString();\n\n        // Parse the location of the input string within the decoded data\n        int start = data.indexOf(\"input=\") + 6;\n        int end = data.indexOf(\"&\", start);\n\n        if (end == -1)\n        {\n            end = data.length();\n        }\n\n        baseValue = data.substring(start, end);\n\n        insertionPointPrefix = data.substring(0, start);\n        insertionPointSuffix = data.substring(end);\n    }\n\n    @Override\n    public String name()\n    {\n        return \"Base64-wrapped input\";\n    }\n\n    @Override\n    public String baseValue()\n    {\n        return baseValue;\n    }\n\n    @Override\n    public HttpRequest buildHttpRequestWithPayload(ByteArray payload)\n    {\n        // build the raw data using the specified payload\n        String input = insertionPointPrefix + payload.toString() + insertionPointSuffix;\n\n        // Base-64 and URL-encode the data\n        String updatedParameterValue = utilities.urlUtils().encode(utilities.base64Utils().encodeToString(input));\n\n        HttpParameter updatedParameter = parameter(parameter.name(), updatedParameterValue, parameter.type());\n\n        return requestResponse.request().withUpdatedParameters(updatedParameter);\n    }\n\n    @Override\n    public List<Range> issueHighlights(ByteArray payload)\n    {\n        return null;\n    }\n}\n"
        },
        {
          "name": "MyInsertionPointProvider.java",
          "path": "/example/customscaninsertionpoints/MyInsertionPointProvider.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customscaninsertionpoints;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.http.message.HttpRequestResponse;\nimport burp.api.montoya.http.message.params.ParsedHttpParameter;\nimport burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPoint;\nimport burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPointProvider;\n\nimport java.util.List;\n\nimport static java.util.stream.Collectors.toList;\n\nclass MyInsertionPointProvider implements AuditInsertionPointProvider\n{\n    private final MontoyaApi api;\n\n    MyInsertionPointProvider(MontoyaApi api)\n    {\n        this.api = api;\n    }\n\n    @Override\n    public List<AuditInsertionPoint> provideInsertionPoints(HttpRequestResponse baseHttpRequestResponse)\n    {\n        List<ParsedHttpParameter> parameters = baseHttpRequestResponse.request().parameters();\n\n        return parameters.stream()\n                .filter(p -> p.name().equals(\"data\"))\n                .map(p -> new MyAuditInsertionPoint(api, baseHttpRequestResponse, p))\n                .collect(toList());\n    }\n}\n"
        }
      ],
      "readme": "Custom Scan Checks Example Extension\n============================\n\n###### Provides custom attack insertion points for active scanning.\n\n---\n\nThe sample extension demonstrates the following techniques:\n- Registering a custom `AuditInsertionPointProvider`\n- If the request contains the `data` parameter, it will provide a custom `AuditInsertionPoint`\n- The custom `AuditInsertionPoint` will perform the following:\n  - Deserialize the data (URL decode and then Base64 decode)\n  - Parse the location of the `input=` string withing the decoded data\n  - Split the data into a prefix, location to place the payload, and a suffix\n  - When building the request with the appropriate payload, it will perform the following:\n    - Build the raw data with the appropriate payload\n    - Re-serialize the data (Base64 encode then URL encode)"
    },
    "customsessiontokens": {
      "name": "customsessiontokens",
      "description": "",
      "sourceFiles": [
        {
          "name": "CustomSessionTokens.java",
          "path": "/example/customsessiontokens/CustomSessionTokens.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customsessiontokens;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class CustomSessionTokens implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"Session token example\");\n\n        api.http().registerSessionHandlingAction(new MySessionHandlingAction());\n    }\n}\n"
        },
        {
          "name": "MySessionHandlingAction.java",
          "path": "/example/customsessiontokens/MySessionHandlingAction.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.customsessiontokens;\n\nimport burp.api.montoya.http.message.HttpHeader;\nimport burp.api.montoya.http.message.HttpRequestResponse;\nimport burp.api.montoya.http.message.requests.HttpRequest;\nimport burp.api.montoya.http.sessions.ActionResult;\nimport burp.api.montoya.http.sessions.SessionHandlingAction;\nimport burp.api.montoya.http.sessions.SessionHandlingActionData;\n\nimport java.util.List;\n\nimport static burp.api.montoya.http.sessions.ActionResult.actionResult;\n\npublic class MySessionHandlingAction implements SessionHandlingAction\n{\n    @Override\n    public String name()\n    {\n        return \"Use session token from macro\";\n    }\n\n    @Override\n    public ActionResult performAction(SessionHandlingActionData actionData)\n    {\n        ActionResult result = actionResult(actionData.request(), actionData.annotations());\n\n        List<HttpRequestResponse> macroRequestResponseList = actionData.macroRequestResponses();\n\n        if (macroRequestResponseList.isEmpty())\n        {\n            return result;\n        }\n\n        // Extract the response headers\n        List<HttpHeader> headers = macroRequestResponseList.get(macroRequestResponseList.size()-1).response().headers();\n\n        // Find session header\n        HttpHeader sessionHeader = findSessionHeader(headers);\n\n        // If we failed to find a session token, stop doing work\n        if (sessionHeader == null)\n        {\n            return result;\n        }\n\n        // Create an HTTP request with updated session header\n        HttpRequest updatedRequest = actionData.request().withUpdatedHeader(sessionHeader);\n\n        return actionResult(updatedRequest, actionData.annotations());\n    }\n\n    private HttpHeader findSessionHeader(List<HttpHeader> headers)\n    {\n        HttpHeader sessionHeader = null;\n\n        for(HttpHeader header : headers)\n        {\n            // Skip any header that isn't an \"X-Custom-Session-Id\"\n            if (!header.name().equals(\"X-Custom-Session-Id\"))\n            {\n                continue;\n            }\n\n            // Grab the session token\n            sessionHeader = header;\n        }\n\n        return sessionHeader;\n    }\n}\n"
        }
      ],
      "readme": "Custom Session Tokens Example Extension\n============================\n\n###### Demonstrates working with custom session tokens that Burp doesn't normally understand.\n\n ---\n\nThis example demonstrates how you can couple a recorded macro with an extension to automatically gain a session token for a website and use it in later requests that Burp makes.\n\nThe macro mechanism that Burp provides allows you to record the request triggering creation of a session made via the proxy.\n\nThe extension uses the following techniques:\n- Registers a `SessionHandlingAction` handler\n- Fetches the list of macro requests and responses\n- Extracts the response headers from the last `HttprequestResponse` item in the list\n- Finds the relevant session header (in this example, this header is `X-Custom-Session-Id`)\n- Returns an `HttpRequest` with an updated session header"
    },
    "eventlisteners": {
      "name": "eventlisteners",
      "description": "",
      "sourceFiles": [
        {
          "name": "EventListeners.java",
          "path": "/example/eventlisteners/EventListeners.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.eventlisteners;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.extension.Extension;\nimport burp.api.montoya.extension.ExtensionUnloadingHandler;\nimport burp.api.montoya.http.Http;\nimport burp.api.montoya.logging.Logging;\nimport burp.api.montoya.proxy.Proxy;\nimport burp.api.montoya.scanner.Scanner;\nimport burp.api.montoya.scanner.audit.AuditIssueHandler;\nimport burp.api.montoya.scanner.audit.issues.AuditIssue;\n\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class EventListeners implements BurpExtension {\n    private Logging logging;\n\n    @Override\n    public void initialize(MontoyaApi api) {\n        logging = api.logging();\n\n        Http http = api.http();\n        Proxy proxy = api.proxy();\n        Extension extension = api.extension();\n        Scanner scanner = api.scanner();\n\n        // set extension name\n        extension.setName(\"Event listeners\");\n\n        // register a new HTTP handler\n        http.registerHttpHandler(new MyHttpHandler(api));\n\n        // register new Proxy handlers\n        proxy.registerRequestHandler(new MyProxyRequestHandler(api));\n        proxy.registerResponseHandler(new MyProxyResponseHandler(api));\n\n        // register a new Audit Issue handler\n        scanner.registerAuditIssueHandler(new MyAuditIssueListenerHandler());\n\n        // register a new extension unload handler\n        extension.registerUnloadingHandler(new MyExtensionUnloadHandler());\n    }\n\n    private class MyAuditIssueListenerHandler implements AuditIssueHandler {\n        @Override\n        public void handleNewAuditIssue(AuditIssue auditIssue) {\n            logging.logToOutput(\"New scan issue: \" + auditIssue.name());\n        }\n    }\n\n    private class MyExtensionUnloadHandler implements ExtensionUnloadingHandler {\n        @Override\n        public void extensionUnloaded() {\n            logging.logToOutput(\"Extension was unloaded.\");\n        }\n    }\n}"
        },
        {
          "name": "MyHttpHandler.java",
          "path": "/example/eventlisteners/MyHttpHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.eventlisteners;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.http.handler.*;\nimport burp.api.montoya.logging.Logging;\n\npublic class MyHttpHandler implements HttpHandler\n{\n    private final Logging logging;\n\n    public MyHttpHandler(MontoyaApi api)\n    {\n        logging = api.logging();\n    }\n\n    @Override\n    public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent httpRequestToBeSent) {\n        logging.logToOutput(\"HTTP request to \" + httpRequestToBeSent.httpService() + \" [\" + httpRequestToBeSent.toolSource().toolType().toolName() + \"]\");\n\n        return RequestToBeSentAction.continueWith(httpRequestToBeSent);\n    }\n\n    @Override\n    public ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived httpResponseReceived) {\n        logging.logToOutput(\"HTTP response from \" + httpResponseReceived.initiatingRequest().httpService() + \" [\" + httpResponseReceived.toolSource().toolType().toolName() + \"]\");\n\n        return ResponseReceivedAction.continueWith(httpResponseReceived);\n    }\n}"
        },
        {
          "name": "MyProxyRequestHandler.java",
          "path": "/example/eventlisteners/MyProxyRequestHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.eventlisteners;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.logging.Logging;\nimport burp.api.montoya.proxy.http.InterceptedRequest;\nimport burp.api.montoya.proxy.http.ProxyRequestHandler;\nimport burp.api.montoya.proxy.http.ProxyRequestReceivedAction;\nimport burp.api.montoya.proxy.http.ProxyRequestToBeSentAction;\n\npublic class MyProxyRequestHandler implements ProxyRequestHandler\n{\n    private final Logging logging;\n\n    public MyProxyRequestHandler(MontoyaApi api)\n    {\n        logging = api.logging();\n    }\n\n    @Override\n    public ProxyRequestReceivedAction handleRequestReceived(InterceptedRequest interceptedRequest) {\n        logging.logToOutput(\"Initial intercepted proxy request to \" + interceptedRequest.httpService());\n\n        return ProxyRequestReceivedAction.continueWith(interceptedRequest);\n    }\n\n    @Override\n    public ProxyRequestToBeSentAction handleRequestToBeSent(InterceptedRequest interceptedRequest) {\n        logging.logToOutput(\"Final intercepted proxy request to \" + interceptedRequest.httpService());\n\n        return ProxyRequestToBeSentAction.continueWith(interceptedRequest);\n    }\n}\n"
        },
        {
          "name": "MyProxyResponseHandler.java",
          "path": "/example/eventlisteners/MyProxyResponseHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.eventlisteners;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.logging.Logging;\nimport burp.api.montoya.proxy.http.InterceptedResponse;\nimport burp.api.montoya.proxy.http.ProxyResponseHandler;\nimport burp.api.montoya.proxy.http.ProxyResponseReceivedAction;\nimport burp.api.montoya.proxy.http.ProxyResponseToBeSentAction;\n\npublic class MyProxyResponseHandler implements ProxyResponseHandler\n{\n    private final Logging logging;\n\n    public MyProxyResponseHandler(MontoyaApi api)\n    {\n        logging = api.logging();\n    }\n\n    @Override\n    public ProxyResponseReceivedAction handleResponseReceived(InterceptedResponse interceptedResponse) {\n        logging.logToOutput(\"Initial intercepted proxy response from \" + interceptedResponse.initiatingRequest().httpService());\n\n        return ProxyResponseReceivedAction.continueWith(interceptedResponse);\n    }\n\n    @Override\n    public ProxyResponseToBeSentAction handleResponseToBeSent(InterceptedResponse interceptedResponse) {\n        logging.logToOutput(\"Final intercepted proxy response from \" + interceptedResponse.initiatingRequest().httpService());\n\n        return ProxyResponseToBeSentAction.continueWith(interceptedResponse);\n    }\n\n}\n"
        }
      ],
      "readme": "Event Listeners Example Extension\n============================\n\n###### Registers handlers for various runtime events, and prints a message when each event occurs.\n\n ---\n\nThis extension demonstrates how to register listeners for various runtime\nevents:\n- HTTP requests and responses for all Burp tools.\n- HTTP messages intercepted by the Proxy.\n- Addition of new scan issues.\n- The extension being unloaded by the user.\n\nThe sample extension simply prints a message to the output stream when an event\noccurs."
    },
    "helloworld": {
      "name": "helloworld",
      "description": "",
      "sourceFiles": [
        {
          "name": "HelloWorld.java",
          "path": "/example/helloworld/HelloWorld.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.helloworld;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.logging.Logging;\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class HelloWorld implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        // set extension name\n        api.extension().setName(\"Hello world extension\");\n\n        Logging logging = api.logging();\n\n        // write a message to our output stream\n        logging.logToOutput(\"Hello output.\");\n\n        // write a message to our error stream\n        logging.logToError(\"Hello error.\");\n\n        // write a message to the Burp alerts tab\n        logging.raiseInfoEvent(\"Hello info event.\");\n        logging.raiseDebugEvent(\"Hello debug event.\");\n        logging.raiseErrorEvent(\"Hello error event.\");\n        logging.raiseCriticalEvent(\"Hello critical event.\");\n\n        // throw an exception that will appear in our error stream\n        try\n        {\n            throw new RuntimeException(\"Hello exception.\");\n        }\n        catch (RuntimeException e)\n        {\n            logging.logToError(\"Hello thrown exception.\", e);\n        }\n    }\n}\n"
        }
      ],
      "readme": "Hello World Example Extension\n============================\n\n###### Prints output to various locations within Burp.\n\n ---\n\nThis extension is about as basic as things can get, while actually\ndoing something.\n\nIt demonstrates the following techniques:\n- Setting the name of the extension, which will be shown to the user in the UI.\n- Writing messages to the output and error streams.\n- Writing messages to the main Burp alerts log.\n- Generating an exception to demonstrate how this is reported to the user."
    },
    "httphandler": {
      "name": "httphandler",
      "description": "",
      "sourceFiles": [
        {
          "name": "HttpHandlerExample.java",
          "path": "/example/httphandler/HttpHandlerExample.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.httphandler;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class HttpHandlerExample implements BurpExtension {\n    @Override\n    public void initialize(MontoyaApi api) {\n        api.extension().setName(\"HTTP Handler Example\");\n\n        //Register our http handler with Burp.\n        api.http().registerHttpHandler(new MyHttpHandler(api));\n    }\n}\n"
        },
        {
          "name": "MyHttpHandler.java",
          "path": "/example/httphandler/MyHttpHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.httphandler;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.core.Annotations;\nimport burp.api.montoya.core.HighlightColor;\nimport burp.api.montoya.http.handler.*;\nimport burp.api.montoya.http.message.requests.HttpRequest;\nimport burp.api.montoya.logging.Logging;\n\nimport static burp.api.montoya.http.handler.RequestToBeSentAction.continueWith;\nimport static burp.api.montoya.http.handler.ResponseReceivedAction.continueWith;\nimport static burp.api.montoya.http.message.params.HttpParameter.urlParameter;\n\nclass MyHttpHandler implements HttpHandler {\n    private final Logging logging;\n\n    public MyHttpHandler(MontoyaApi api) {\n        this.logging = api.logging();\n    }\n\n\n    @Override\n    public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent requestToBeSent) {\n        Annotations annotations = requestToBeSent.annotations();\n\n        // If the request is a post, log the body and add notes.\n        if (isPost(requestToBeSent)) {\n            annotations = annotations.withNotes(\"Request was a post\");\n            logging.logToOutput(requestToBeSent.bodyToString());\n        }\n\n        //Modify the request by adding url param.\n        HttpRequest modifiedRequest = requestToBeSent.withAddedParameters(urlParameter(\"foo\", \"bar\"));\n\n        //Return the modified request to burp with updated annotations.\n        return continueWith(modifiedRequest, annotations);\n    }\n\n    @Override\n    public ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived responseReceived) {\n        Annotations annotations = responseReceived.annotations();\n        //Highlight all responses where the request had a Content-Length header.\n        if (responseHasContentLengthHeader(responseReceived)) {\n            annotations = annotations.withHighlightColor(HighlightColor.BLUE);\n        }\n\n        return continueWith(responseReceived, annotations);\n    }\n\n    private static boolean isPost(HttpRequestToBeSent httpRequestToBeSent) {\n        return httpRequestToBeSent.method().equalsIgnoreCase(\"POST\");\n    }\n\n    private static boolean responseHasContentLengthHeader(HttpResponseReceived httpResponseReceived) {\n        return httpResponseReceived.initiatingRequest().headers().stream().anyMatch(header -> header.name().equalsIgnoreCase(\"Content-Length\"));\n    }\n}\n"
        }
      ],
      "readme": "HTTP Handler Example Extension\n============================\n\n###### Demonstrates performing various actions on requests passing through any tool in Burp\n\n ---\n\nThe extension works as follows:\n- It registers an HTTP handler\n- For outgoing request messages:\n    - If the request is a `POST` request:\n        - The body of the request is logged to output\n        - A comment is added to the request\n    - A URL parameter is added to the request\n- For incoming response messages:\n    - If the corresponding request contained a `Content-Length` header, a `BLUE` highlight is added"
    },
    "intruderpayloads": {
      "name": "intruderpayloads",
      "description": "",
      "sourceFiles": [
        {
          "name": "IntruderPayloads.java",
          "path": "/example/intruderpayloads/IntruderPayloads.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.intruderpayloads;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\npublic class IntruderPayloads implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"Intruder payloads\");\n\n        api.intruder().registerPayloadGeneratorProvider(new MyPayloadGeneratorProvider());\n        api.intruder().registerPayloadProcessor(new MyPayloadProcessor(api));\n    }\n}\n"
        },
        {
          "name": "MyPayloadGenerator.java",
          "path": "/example/intruderpayloads/MyPayloadGenerator.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.intruderpayloads;\n\nimport burp.api.montoya.intruder.GeneratedPayload;\nimport burp.api.montoya.intruder.IntruderInsertionPoint;\nimport burp.api.montoya.intruder.PayloadGenerator;\n\nimport java.util.List;\n\npublic class MyPayloadGenerator implements PayloadGenerator\n{\n    private static final List<String> PAYLOADS = List.of(\"|\", \"<script>alert(1)</script>\");\n    private int payloadIndex;\n\n    @Override\n    public GeneratedPayload generatePayloadFor(IntruderInsertionPoint insertionPoint)\n    {\n        payloadIndex++;\n\n        if (payloadIndex > PAYLOADS.size())\n        {\n            return GeneratedPayload.end();\n        }\n\n        String payload = PAYLOADS.get(payloadIndex);\n\n        return GeneratedPayload.payload(payload);\n    }\n}\n"
        },
        {
          "name": "MyPayloadGeneratorProvider.java",
          "path": "/example/intruderpayloads/MyPayloadGeneratorProvider.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.intruderpayloads;\n\nimport burp.api.montoya.intruder.AttackConfiguration;\nimport burp.api.montoya.intruder.PayloadGenerator;\nimport burp.api.montoya.intruder.PayloadGeneratorProvider;\n\npublic class MyPayloadGeneratorProvider implements PayloadGeneratorProvider\n{\n    @Override\n    public String displayName()\n    {\n        return \"My custom payloads\";\n    }\n\n    @Override\n    public PayloadGenerator providePayloadGenerator(AttackConfiguration attackConfiguration)\n    {\n        return new MyPayloadGenerator();\n    }\n}\n"
        },
        {
          "name": "MyPayloadProcessor.java",
          "path": "/example/intruderpayloads/MyPayloadProcessor.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.intruderpayloads;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.core.ByteArray;\nimport burp.api.montoya.intruder.PayloadData;\nimport burp.api.montoya.intruder.PayloadProcessingResult;\nimport burp.api.montoya.intruder.PayloadProcessor;\nimport burp.api.montoya.utilities.Base64Utils;\nimport burp.api.montoya.utilities.URLUtils;\n\nimport static burp.api.montoya.intruder.PayloadProcessingResult.usePayload;\n\npublic class MyPayloadProcessor implements PayloadProcessor\n{\n    public static final String INPUT_PREFIX = \"input=\";\n    private final MontoyaApi api;\n\n    public MyPayloadProcessor(MontoyaApi api)\n    {\n        this.api = api;\n    }\n\n    @Override\n    public String displayName()\n    {\n        return \"Serialized input wrapper\";\n    }\n\n    @Override\n    public PayloadProcessingResult processPayload(PayloadData payloadData)\n    {\n        Base64Utils base64Utils = api.utilities().base64Utils();\n        URLUtils urlUtils = api.utilities().urlUtils();\n\n        // Decode the base value\n        String dataParameter = base64Utils.decode(urlUtils.decode(payloadData.insertionPoint().baseValue())).toString();\n\n        // Parse the location of the input string in the decoded data\n        String prefix = findPrefix(dataParameter);\n        if (prefix == null)\n        {\n            return usePayload(payloadData.currentPayload());\n        }\n\n        String suffix = findSuffix(dataParameter);\n\n        // Rebuild serialized data with the new payload\n        String rebuiltDataParameter = prefix + payloadData.currentPayload() + suffix;\n        ByteArray reserializedDataParameter = urlUtils.encode(base64Utils.encode(rebuiltDataParameter));\n\n        return usePayload(reserializedDataParameter);\n    }\n\n    private String findPrefix(String dataParameter)\n    {\n        int start = dataParameter.indexOf(INPUT_PREFIX);\n\n        if (start == -1)\n        {\n            return null;\n        }\n\n        start += INPUT_PREFIX.length();\n\n        return dataParameter.substring(0, start);\n    }\n\n    private String findSuffix(String dataParameter)\n    {\n        int start = dataParameter.indexOf(INPUT_PREFIX);\n\n        int end = dataParameter.indexOf(\"&\", start);\n\n        if (end == -1)\n        {\n            end = dataParameter.length();\n        }\n\n        return dataParameter.substring(end);\n    }\n}\n"
        }
      ],
      "readme": "Custom Intruder Payloads Example Extension\n============================\n\n###### Provides custom Intruder payloads and payload processing.\n\n ---\n\nThis example shows how you can use an extension to:\n- Generate custom Intruder payloads\n- Apply custom processing to Intruder payloads (including built-in ones)\n\nWhen an extension registers itself as an Intruder payload provider, this will be available within the Intruder UI for the user to select as the payload source for an attack. When an extension registers itself as a payload processor, the user can create a payload processing rule and select the extension's processor as the rule's action.\n\nThe extension uses the following techniques:\n- Registers a new `PayloadGeneratorProvider`, which returns a new `PayloadGenerator`\n- Registers a new `PayloadProcessor`\n- The `PayloadGenerator` does the following:\n  - Contains a list of payloads to be used\n  - Iterates through the payload list, until there are no longer any payloads available\n- The `PayloadProcessor` does the following:\n  - Decodes the base value of the payload\n  - Parses the location of the `input` string in the decoded data\n  - Rebuilds the serialized data with the new payload"
    },
    "menubar": {
      "name": "menubar",
      "description": "",
      "sourceFiles": [
        {
          "name": "MenuBar.java",
          "path": "/example/menubar/MenuBar.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.menubar;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.ui.menu.BasicMenuItem;\nimport burp.api.montoya.ui.menu.Menu;\nimport burp.api.montoya.ui.menu.MenuItem;\n\npublic class MenuBar implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"Add menu bar\");\n        api.logging().logToOutput(\"Extension has been loaded.\");\n\n        BasicMenuItem alertEventItem = BasicMenuItem.basicMenuItem(\"Raise critical alert\").withAction(() -> api.logging().raiseCriticalEvent(\"Alert from extension\"));\n\n        BasicMenuItem basicMenuItem = MenuItem.basicMenuItem(\"Unload extension\");\n        MenuItem unloadExtensionItem = basicMenuItem.withAction(() -> api.extension().unload());\n\n        Menu menu = Menu.menu(\"Menu bar\").withMenuItems(alertEventItem, unloadExtensionItem);\n\n        api.userInterface().menuBar().registerMenu(menu);\n\n        api.extension().registerUnloadingHandler(new MyExtensionUnloadingHandler(api));\n    }\n}\n"
        },
        {
          "name": "MyExtensionUnloadingHandler.java",
          "path": "/example/menubar/MyExtensionUnloadingHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.menubar;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.extension.ExtensionUnloadingHandler;\n\npublic class MyExtensionUnloadingHandler implements ExtensionUnloadingHandler\n{\n    private final MontoyaApi api;\n\n    public MyExtensionUnloadingHandler(MontoyaApi api)\n    {\n        this.api = api;\n    }\n\n    @Override\n    public void extensionUnloaded()\n    {\n        api.logging().logToOutput(\"Extension has been unloaded.\");\n    }\n}\n"
        }
      ],
      "readme": "Menu Bar Example Extension\n============================\n\n###### Registers a top level menu bar with actions.\n\n ---\n\nThis extension demonstrates registering a top level menu bar item with various actions.\n\nIt demonstrates the following techniques:\n- Creating a `BasicMenuItem` with a caption\n- Providing an action for a `BasicMenuItem`\n- Adding the `Menu` to Burp\n- Registering an `ExtensionUnloadingHandler`"
    },
    "multiapi": {
      "name": "multiapi",
      "description": "",
      "sourceFiles": [
        {
          "name": "MultiApiExample.java",
          "path": "/example/multiapi/MultiApiExample.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.multiapi;\n\nimport burp.IBurpExtender;\nimport burp.IBurpExtenderCallbacks;\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\nimport javax.swing.*;\nimport java.awt.*;\nimport java.net.MalformedURLException;\nimport java.net.URL;\n\n//Burp will auto-detect and load any class that extends BurpExtension / IBurpExtender\n//When a class extends both BurpExtension AND IBurpExtender Burp will inject both of the relevant API implementations\n//It will inject IBurpExtender first, then BurpExtension.\n//This will BurpExtension precedence over IBurpExtender\npublic class MultiApiExample implements BurpExtension, IBurpExtender\n{\n    private MontoyaApi montoyaApi;\n    private IBurpExtenderCallbacks wienerApi;\n\n    //Invoked Last\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        this.montoyaApi = api;\n\n        //Register a suite tab that has a button that uses both api's\n        api.userInterface().registerSuiteTab(\"My Suite Tab\", new MySuiteTab());\n\n        api.extension().setName(\"Montoya Name\"); //Replaces name set by Wiener Api.\n\n        if (api.scope().isInScope(\"http://test.url\")) //Is true because Wiener API added it to scope.\n        {\n            wienerApi.issueAlert(\"test.url is in scope\"); //Wiener api has been set, so we can use it.\n        }\n        else\n        {\n            api.extension().unload(); //Should never happen\n        }\n    }\n\n    //Invoked First\n    @Override\n    public void registerExtenderCallbacks(IBurpExtenderCallbacks callbacks)\n    {\n        this.wienerApi = callbacks;\n\n        callbacks.setExtensionName(\"Wiener Name\"); //Will be replaced by Montoya version.\n\n        try\n        {\n            URL url = new URL(\"http://test.url\");\n            callbacks.includeInScope(url); //Include test.url in the scope\n        }\n        catch (MalformedURLException e)\n        {\n            throw new RuntimeException(e);\n        }\n    }\n\n    private class MySuiteTab extends JComponent\n    {\n        public MySuiteTab()\n        {\n            setLayout(new BoxLayout(this, BoxLayout.PAGE_AXIS));\n\n            JPanel customTabContent = new JPanel();\n            customTabContent.setName(\"The One Ring Custom Tab Panel\");\n            customTabContent.setBackground(Color.GRAY);\n\n            JButton button = new JButton(\"Print filename to log file\");\n            button.addActionListener(e -> {\n                montoyaApi.logging().logToOutput(\"Montoya API used to log:\" + montoyaApi.extension().filename());\n                wienerApi.printOutput(\"Wiener API used to log:\" + wienerApi.getExtensionFilename());\n            });\n\n            customTabContent.add(button);\n            add(customTabContent);\n        }\n    }\n}\n"
        }
      ],
      "readme": "Multi-API Example Extension\n============================\n\n###### Demonstrates using both the Montoya API and the legacy Extender API in one extension\n\n ---\n\nThis extension works as follows:\n- `registerExtenderCallbacks()` is called\n    - It registers an extension name\n    - It also includes `http://test.url` as an in-scope URL\n- `initialize()`is called\n    - It registers a new Suite tab\n    - Registers an extension name, which overwrites the `registerExtenderCallbacks()` name\n    - Checks whether `http://test.url` is in scope, and writes an alert to the Dashboard\n- The new Suite tab contains a button\n    - When the button is used, the filename according to both the Wiener API and Montoya API are printed to the output"
    },
    "persistence": {
      "name": "persistence",
      "description": "",
      "sourceFiles": [
        {
          "name": "PersistenceExample.java",
          "path": "/example/persistence/PersistenceExample.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.persistence;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.persistence.PersistedObject;\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class PersistenceExample implements BurpExtension {\n\n    static final String STARTUP_COUNT_KEY = \"Startup Count\";\n\n    @Override\n    public void initialize(MontoyaApi api) {\n        //Extension data will use the extension name to save/load for that specific extension\n        api.extension().setName(\"Persistence example extension\");\n\n        PersistedObject myExtensionData = api.persistence().extensionData();\n\n        //Retrieve an integer value from the project file\n        Integer startupCount = myExtensionData.getInteger(STARTUP_COUNT_KEY);\n\n        //If a value is null, it does not exist in the project file.\n        //We could also check if the key exists\n        //e.g. myExtensionData.integerKeys().contains(STARTUP_COUNT_KEY)\n        if (startupCount == null) {\n            startupCount = 0;\n        }\n\n        //Set an integer value in the project file\n        myExtensionData.setInteger(STARTUP_COUNT_KEY, startupCount + 1);\n\n        //Retrieve the updated value and create a info event.\n        api.logging().raiseInfoEvent(\"Startup count is: \" + myExtensionData.getInteger(STARTUP_COUNT_KEY));\n\n        advancedExamples(api);\n    }\n\n    private static void advancedExamples(MontoyaApi api) {\n        //Advanced example saving and loading requests.\n        SavingLoadingRequests savingLoadingRequests = new SavingLoadingRequests(api);\n        savingLoadingRequests.runExample();\n\n        //More advanced example working with Lists of HttpRequestResponse.\n        RequestResponseLogging requestLogging = new RequestResponseLogging(api);\n        requestLogging.runExample();\n    }\n}\n"
        },
        {
          "name": "RequestResponseLogging.java",
          "path": "/example/persistence/RequestResponseLogging.java",
          "content": "package example.persistence;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.http.handler.*;\nimport burp.api.montoya.http.message.HttpRequestResponse;\nimport burp.api.montoya.persistence.PersistedList;\nimport burp.api.montoya.persistence.PersistedObject;\n\nimport static burp.api.montoya.http.handler.RequestToBeSentAction.continueWith;\nimport static burp.api.montoya.http.handler.ResponseReceivedAction.continueWith;\nimport static burp.api.montoya.http.message.HttpRequestResponse.httpRequestResponse;\n\npublic class RequestResponseLogging {\n    private static final String REQUEST_RESPONSE_LIST_KEY = \"last5\";\n\n    private final MontoyaApi api;\n    private final PersistedObject myExtensionData;\n\n    public RequestResponseLogging(MontoyaApi api) {\n        this.api = api;\n        this.myExtensionData = api.persistence().extensionData();\n    }\n\n    public void runExample() {\n        ensurePersistedListIsPresent();\n\n        //Load our request/response list from the project file.\n        PersistedList<HttpRequestResponse> myPersistedList = myExtensionData.getHttpRequestResponseList(REQUEST_RESPONSE_LIST_KEY);\n        printToOutput(myPersistedList);\n\n        api.http().registerHttpHandler(new HttpHandler() {\n            @Override\n            public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent requestToBeSent) {\n                return continueWith(requestToBeSent);\n            }\n\n            @Override\n            public synchronized ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived responseReceived) {\n                //Keep a list of the last 5\n                if (myPersistedList.size() >= 5) {\n                    myPersistedList.remove(0);\n                }\n\n                //We don't need the body for our log.\n                myPersistedList.add(httpRequestResponse(responseReceived.initiatingRequest().withBody(\"\"), responseReceived.withBody(\"\")));\n\n                return continueWith(responseReceived);\n            }\n        });\n    }\n\n    private void printToOutput(PersistedList<HttpRequestResponse> myPersistedList) {\n        //Print the loaded list to the output log\n        for (HttpRequestResponse httpRequestResponse : myPersistedList) {\n            api.logging().logToOutput(httpRequestResponse.request().toString());\n            api.logging().logToOutput(\"\\n========================\\n\");\n            api.logging().logToOutput(httpRequestResponse.response().toString());\n            api.logging().logToOutput(\"\\n**************************\".repeat(2));\n        }\n    }\n\n    private void ensurePersistedListIsPresent() {\n        //Create a persisted request/response list\n        if (myExtensionData.getHttpRequestResponseList(REQUEST_RESPONSE_LIST_KEY) == null) {\n            //Create a new empty list and save it to our key\n            PersistedList<HttpRequestResponse> emptyPersistedList = PersistedList.persistedHttpRequestResponseList();\n            myExtensionData.setHttpRequestResponseList(REQUEST_RESPONSE_LIST_KEY, emptyPersistedList);\n        }\n    }\n}\n"
        },
        {
          "name": "SavingLoadingRequests.java",
          "path": "/example/persistence/SavingLoadingRequests.java",
          "content": "package example.persistence;\n\nimport burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.http.message.requests.HttpRequest;\nimport burp.api.montoya.persistence.PersistedObject;\n\nimport static burp.api.montoya.http.message.requests.HttpRequest.httpRequest;\nimport static burp.api.montoya.http.message.requests.HttpRequest.httpRequestFromUrl;\nimport static example.persistence.PersistenceExample.STARTUP_COUNT_KEY;\n\npublic class SavingLoadingRequests {\n    public static final String SIMPLE_REQUEST_KEY = \"simpleRequest\";\n    public static final String REQUEST_WITH_HEADERS_KEY = \"requestWithHeaders\";\n    public static final String REQUEST_FROM_URL_KEY = \"requestFromUrl\";\n    private final MontoyaApi api;\n    private final PersistedObject myExtensionData;\n\n    public SavingLoadingRequests(MontoyaApi api) {\n        this.api = api;\n        this.myExtensionData = api.persistence().extensionData();\n    }\n\n    public void runExample() {\n        //Check if we have example requests saved\n        if (!checkForRequests()) {\n            api.logging().raiseInfoEvent(\"No Requests saved, creating requests\");\n            createAndSaveExampleRequests();\n        }\n\n        sendExampleRequestsToRepeaterWithStartupCount();\n    }\n\n    private boolean checkForRequests() {\n        // We can get a list of keys for each type of data type saved.\n        return myExtensionData.httpRequestKeys().contains(SIMPLE_REQUEST_KEY) &&\n                myExtensionData.httpRequestKeys().contains(REQUEST_WITH_HEADERS_KEY) &&\n                myExtensionData.httpRequestKeys().contains(REQUEST_FROM_URL_KEY);\n    }\n\n    //Build example requests and save them to their own key\n    private void createAndSaveExampleRequests() {\n        HttpRequest simpleRequest = httpRequest(\"GET / HTTP1.0\\r\\n\\r\\n\");\n        HttpRequest requestWithHeaders = httpRequest(\"GET / HTTP1.1\\r\\nHost: localhost\\r\\nMyHeader: Example\\r\\n\\r\\n\");\n        HttpRequest requestFromUrl = httpRequestFromUrl(\"http://localhost\");\n\n        //Save each request to its own key\n        myExtensionData.setHttpRequest(SIMPLE_REQUEST_KEY, simpleRequest);\n        myExtensionData.setHttpRequest(REQUEST_WITH_HEADERS_KEY, requestWithHeaders);\n        myExtensionData.setHttpRequest(REQUEST_FROM_URL_KEY, requestFromUrl);\n    }\n\n    //Add our requests to repeater with startup count in the tab name\n    private void sendExampleRequestsToRepeaterWithStartupCount() {\n        HttpRequest simpleRequest = myExtensionData.getHttpRequest(SIMPLE_REQUEST_KEY);\n        HttpRequest requestWithHeaders = myExtensionData.getHttpRequest(REQUEST_WITH_HEADERS_KEY);\n        HttpRequest requestFromUrl = myExtensionData.getHttpRequest(REQUEST_FROM_URL_KEY);\n\n        Integer startupCount = myExtensionData.getInteger(STARTUP_COUNT_KEY);\n\n        api.repeater().sendToRepeater(simpleRequest, \"Simple Request \" + startupCount);\n        api.repeater().sendToRepeater(requestWithHeaders, \"Request With Headers \" + startupCount);\n        api.repeater().sendToRepeater(requestFromUrl, \"Request From Url \" + startupCount);\n    }\n}\n"
        }
      ],
      "readme": "Persistence Example Extension\n============================\n\n###### Demonstrates saving and loading data to the project file.\n\n ---\n\nThe extension works as follows:\n- It saves and loads a simple incrementing integer value with the project file.\n  - Sends to the event log how many times Burp or the extension were restarted.\n- It saves and loads extension built http requests\n  - Sends the  requests to repeater with an incrementing tab counter when Burp is restarted or the extension is reloaded.\n- It saves the last 5 requests/responses issued by Burp\n  - Prints the last 5 request/responses to the output log when burp is restarted or the extension is reloaded. \n  - Uses Persisted Lists to automatically save/load data stored in the list."
    },
    "proxyhandler": {
      "name": "proxyhandler",
      "description": "",
      "sourceFiles": [
        {
          "name": "MyProxyHttpRequestHandler.java",
          "path": "/example/proxyhandler/MyProxyHttpRequestHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.proxyhandler;\n\n\nimport burp.api.montoya.proxy.http.InterceptedRequest;\nimport burp.api.montoya.proxy.http.ProxyRequestHandler;\nimport burp.api.montoya.proxy.http.ProxyRequestReceivedAction;\nimport burp.api.montoya.proxy.http.ProxyRequestToBeSentAction;\n\nimport static burp.api.montoya.core.HighlightColor.RED;\nimport static burp.api.montoya.http.message.ContentType.JSON;\n\nclass MyProxyHttpRequestHandler implements ProxyRequestHandler {\n    @Override\n    public ProxyRequestReceivedAction handleRequestReceived(InterceptedRequest interceptedRequest) {\n        //Drop all post requests\n        if (interceptedRequest.method().equals(\"POST\")) {\n            return ProxyRequestReceivedAction.drop();\n        }\n\n        //Do not intercept any request with foo in the url\n        if (interceptedRequest.url().contains(\"foo\")) {\n            return ProxyRequestReceivedAction.doNotIntercept(interceptedRequest);\n        }\n\n        //If the content type is json, highlight the request and follow burp rules for interception\n        if (interceptedRequest.contentType() == JSON) {\n            return ProxyRequestReceivedAction.continueWith(interceptedRequest, interceptedRequest.annotations().withHighlightColor(RED));\n        }\n\n        //Intercept all other requests\n        return ProxyRequestReceivedAction.intercept(interceptedRequest);\n    }\n\n    @Override\n    public ProxyRequestToBeSentAction handleRequestToBeSent(InterceptedRequest interceptedRequest) {\n        //Do nothing with the user modified request, continue as normal.\n        return ProxyRequestToBeSentAction.continueWith(interceptedRequest);\n    }\n}\n\n"
        },
        {
          "name": "MyProxyHttpResponseHandler.java",
          "path": "/example/proxyhandler/MyProxyHttpResponseHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.proxyhandler;\n\nimport burp.api.montoya.proxy.http.InterceptedResponse;\nimport burp.api.montoya.proxy.http.ProxyResponseHandler;\nimport burp.api.montoya.proxy.http.ProxyResponseReceivedAction;\nimport burp.api.montoya.proxy.http.ProxyResponseToBeSentAction;\n\nimport static burp.api.montoya.core.HighlightColor.BLUE;\n\nclass MyProxyHttpResponseHandler implements ProxyResponseHandler {\n    @Override\n    public ProxyResponseReceivedAction handleResponseReceived(InterceptedResponse interceptedResponse) {\n        //Highlight all responses that have username in them\n        if (interceptedResponse.bodyToString().contains(\"username\")) {\n            return ProxyResponseReceivedAction.continueWith(interceptedResponse, interceptedResponse.annotations().withHighlightColor(BLUE));\n        }\n\n        return ProxyResponseReceivedAction.continueWith(interceptedResponse);\n    }\n\n    @Override\n    public ProxyResponseToBeSentAction handleResponseToBeSent(InterceptedResponse interceptedResponse) {\n        return ProxyResponseToBeSentAction.continueWith(interceptedResponse);\n    }\n}\n"
        },
        {
          "name": "ProxyHandlerExample.java",
          "path": "/example/proxyhandler/ProxyHandlerExample.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.proxyhandler;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class ProxyHandlerExample implements BurpExtension\n{\n    @Override\n    public void initialize(MontoyaApi api)\n    {\n        api.extension().setName(\"Proxy Handler Example\");\n\n        //Register proxy handlers with Burp.\n        api.proxy().registerRequestHandler(new MyProxyHttpRequestHandler());\n        api.proxy().registerResponseHandler(new MyProxyHttpResponseHandler());\n    }\n}\n"
        }
      ],
      "readme": "Proxy Handler Example Extension\n============================\n\n###### Demonstrates performing various actions on requests passing through the Proxy\n\n ---\n\nThe extension works as follows:\n- It registers a Proxy handler\n- For outgoing request messages:\n    - It drops all `POST` requests\n    - Requests with `foo` in the URL are not intercepted\n    - If the `Content-Type` is `JSON`, the request is highlighted `RED` and Burp rules for Interception are followed\n    - All other requests are intercepted\n    - User modified requests are continued as normal\n- For incoming response messages:\n    - All responses that contain the string `username` are highlighted `BLUE`\n    - All other responses follow Burp rules for Interception"
    },
    "proxywebsockethandler": {
      "name": "proxywebsockethandler",
      "description": "",
      "sourceFiles": [
        {
          "name": "MyProxyWebSocketCreationHandler.java",
          "path": "/MyProxyWebSocketCreationHandler.java",
          "content": "import burp.api.montoya.proxy.websocket.ProxyWebSocketCreation;\nimport burp.api.montoya.proxy.websocket.ProxyWebSocketCreationHandler;\n\nclass MyProxyWebSocketCreationHandler implements ProxyWebSocketCreationHandler {\n\n    @Override\n    public void handleWebSocketCreation(ProxyWebSocketCreation webSocketCreation) {\n        webSocketCreation.proxyWebSocket().registerProxyMessageHandler(new MyProxyWebSocketMessageHandler());\n    }\n}\n"
        },
        {
          "name": "MyProxyWebSocketMessageHandler.java",
          "path": "/MyProxyWebSocketMessageHandler.java",
          "content": "import burp.api.montoya.core.HighlightColor;\nimport burp.api.montoya.proxy.websocket.*;\n\nimport static burp.api.montoya.websocket.Direction.CLIENT_TO_SERVER;\n\nclass MyProxyWebSocketMessageHandler implements ProxyMessageHandler {\n\n    @Override\n    public TextMessageReceivedAction handleTextMessageReceived(InterceptedTextMessage interceptedTextMessage) {\n        if (interceptedTextMessage.payload().contains(\"username\")) {\n            interceptedTextMessage.annotations().setHighlightColor(HighlightColor.RED);\n        }\n\n        if (interceptedTextMessage.direction() == CLIENT_TO_SERVER && interceptedTextMessage.payload().contains(\"password\")) {\n            return TextMessageReceivedAction.intercept(interceptedTextMessage);\n        }\n\n        return TextMessageReceivedAction.continueWith(interceptedTextMessage);\n    }\n\n    @Override\n    public TextMessageToBeSentAction handleTextMessageToBeSent(InterceptedTextMessage interceptedTextMessage) {\n        return TextMessageToBeSentAction.continueWith(interceptedTextMessage);\n    }\n\n    @Override\n    public BinaryMessageReceivedAction handleBinaryMessageReceived(InterceptedBinaryMessage interceptedBinaryMessage) {\n        return BinaryMessageReceivedAction.continueWith(interceptedBinaryMessage);\n    }\n\n    @Override\n    public BinaryMessageToBeSentAction handleBinaryMessageToBeSent(InterceptedBinaryMessage interceptedBinaryMessage) {\n        return BinaryMessageToBeSentAction.continueWith(interceptedBinaryMessage);\n    }\n}\n"
        },
        {
          "name": "ProxyWebSocketHandlerExample.java",
          "path": "/ProxyWebSocketHandlerExample.java",
          "content": "import burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class ProxyWebSocketHandlerExample implements BurpExtension {\n\n    @Override\n    public void initialize(MontoyaApi api) {\n        api.extension().setName(\"Proxy Websocket Handler Example\");\n\n        //Register proxy web socket handler with Burp.\n        MyProxyWebSocketCreationHandler exampleWebSocketCreationHandler = new MyProxyWebSocketCreationHandler();\n        api.proxy().registerWebSocketCreationHandler(exampleWebSocketCreationHandler);\n    }\n}\n"
        }
      ],
      "readme": "Proxy WebSocket Handler Example Extension\n=========================================\n\n###### Demonstrates performing various actions on websocket messages passing through the Proxy\n\n ---\n\nThe extension works as follows:\n- It registers a Proxy web socket creation handler\n- When a Proxy web socket is created\n  - It registers a proxy web socket message listener for the created websocket\n  - Any message that contains the text \"username\" is highlighted in red.\n  - Any message from the client that contains the text \"password\" is force intercepted.\n"
    },
    "trafficredirector": {
      "name": "trafficredirector",
      "description": "",
      "sourceFiles": [
        {
          "name": "MyHttpHandler.java",
          "path": "/example/trafficredirector/MyHttpHandler.java",
          "content": "/*\n * Copyright (c) 2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.trafficredirector;\n\nimport burp.api.montoya.http.HttpService;\nimport burp.api.montoya.http.handler.*;\nimport burp.api.montoya.http.message.requests.HttpRequest;\n\nimport static burp.api.montoya.http.HttpService.httpService;\nimport static burp.api.montoya.http.handler.RequestToBeSentAction.continueWith;\n\npublic class MyHttpHandler implements HttpHandler\n{\n    @Override\n    public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent httpRequestToBeSent) {\n        HttpService service = httpRequestToBeSent.httpService();\n\n        if (TrafficRedirector.HOST_FROM.equalsIgnoreCase(service.host())) {\n            HttpRequest updatedHttpServiceRequest = httpRequestToBeSent.withService(httpService(TrafficRedirector.HOST_TO, service.port(), service.secure()));\n            HttpRequest updatedHostHeaderRequest = updatedHttpServiceRequest.withUpdatedHeader(\"Host\", TrafficRedirector.HOST_TO);\n\n            return continueWith(updatedHostHeaderRequest);\n        }\n\n        return continueWith(httpRequestToBeSent);\n    }\n\n    @Override\n    public ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived httpResponseReceived) {\n        return ResponseReceivedAction.continueWith(httpResponseReceived);\n    }\n}"
        },
        {
          "name": "TrafficRedirector.java",
          "path": "/example/trafficredirector/TrafficRedirector.java",
          "content": "/*\n * Copyright (c) 2022-2023. PortSwigger Ltd. All rights reserved.\n *\n * This code may be used to extend the functionality of Burp Suite Community Edition\n * and Burp Suite Professional, provided that this usage does not violate the\n * license terms for those products.\n */\n\npackage example.trafficredirector;\n\nimport burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class TrafficRedirector implements BurpExtension {\n    static final String HOST_FROM = \"host1.example.org\";\n    static final String HOST_TO = \"host2.example.org\";\n\n    @Override\n    public void initialize(MontoyaApi api) {\n        // set extension name\n        api.extension().setName(\"Traffic redirector\");\n\n        // register a new HTTP handler\n        api.http().registerHttpHandler(new MyHttpHandler());\n    }\n}\n"
        }
      ],
      "readme": "Traffic Redirector Example Extension\n============================\n\n###### Redirects all outbound requests from one host to another.\n\n ---\n\nThis extension demonstrates how to redirect outgoing HTTP requests from one host to another. This task might arise, for example, if you have mapped out an application which then moves to a different staging URL. By simply redirecting traffic to the new hostname, you can continue to drive your testing from the original site map.\n\nThe extension works as follows:\n- It registers an HTTP handler.\n- For outgoing request messages, it retrieves the HTTP service for the request.\n- If the HTTP service host matches the \"from\" host, builds an HTTP service using the \"to\" host, and other details unchanged.\n- It returns the HTTP request with the new HTTP service.\n\n**Note:** The sample code uses \"host1.example.org\" and \"host2.example.org\" as the \"from\" and \"to\" hostnames. You should edit the code to use your own hostnames before using it."
    },
    "websockethandler": {
      "name": "websockethandler",
      "description": "",
      "sourceFiles": [
        {
          "name": "MyWebSocketCreatedHandler.java",
          "path": "/MyWebSocketCreatedHandler.java",
          "content": "import burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.websocket.WebSocketCreated;\nimport burp.api.montoya.websocket.WebSocketCreatedHandler;\n\nclass MyWebSocketCreatedHandler implements WebSocketCreatedHandler {\n\n    private final MontoyaApi api;\n\n    MyWebSocketCreatedHandler(MontoyaApi api) {\n        this.api = api;\n    }\n\n    @Override\n    public void handleWebSocketCreated(WebSocketCreated webSocketCreated) {\n        webSocketCreated.webSocket().sendTextMessage(\"First Message\");\n\n        webSocketCreated.webSocket().registerMessageHandler(new MyWebSocketMessageHandler(api));\n    }\n}\n"
        },
        {
          "name": "MyWebSocketMessageHandler.java",
          "path": "/MyWebSocketMessageHandler.java",
          "content": "import burp.api.montoya.MontoyaApi;\nimport burp.api.montoya.websocket.*;\n\nimport static burp.api.montoya.websocket.Direction.CLIENT_TO_SERVER;\n\nclass MyWebSocketMessageHandler implements MessageHandler {\n\n    private final MontoyaApi api;\n\n    public MyWebSocketMessageHandler(MontoyaApi api) {\n        this.api = api;\n    }\n\n    @Override\n    public TextMessageAction handleTextMessage(TextMessage textMessage) {\n        if (textMessage.direction() == CLIENT_TO_SERVER && textMessage.payload().contains(\"password\")) {\n            String base64EncodedPayload = api.utilities().base64Utils().encodeToString(textMessage.payload());\n\n            return TextMessageAction.continueWith(base64EncodedPayload);\n        }\n\n        return TextMessageAction.continueWith(textMessage);\n    }\n\n    @Override\n    public BinaryMessageAction handleBinaryMessage(BinaryMessage binaryMessage) {\n        return BinaryMessageAction.continueWith(binaryMessage);\n    }\n}\n"
        },
        {
          "name": "WebSocketHandlerExample.java",
          "path": "/WebSocketHandlerExample.java",
          "content": "import burp.api.montoya.BurpExtension;\nimport burp.api.montoya.MontoyaApi;\n\n//Burp will auto-detect and load any class that extends BurpExtension.\npublic class WebSocketHandlerExample implements BurpExtension {\n\n    @Override\n    public void initialize(MontoyaApi api) {\n        api.extension().setName(\"WebSocket Handler Example\");\n\n        //Register web socket handler with Burp.\n        MyWebSocketCreatedHandler exampleWebSocketCreationHandler = new MyWebSocketCreatedHandler(api);\n        api.websockets().registerWebSocketCreatedHandler(exampleWebSocketCreationHandler);\n    }\n}\n"
        }
      ],
      "readme": "WebSocket Handler Example Extension\n===================================\n\n###### Demonstrates performing various actions on websocket messages passing through any tool in Burp\n\n ---\n\nThe extension works as follows:\n- It registers a web socket created handler\n- When a web socket is created\n  - It sends an initial text message\n  - It registers a message listener for the websocket\n  - Any message from the client that contains the text \"password\" is base64 encoded.\n"
    }
  }
};

// Helper functions for API lookup
export function findApiClass(className: string): ApiClass | undefined {
    return BURP_API_KNOWLEDGE.interfaces[className] || 
           BURP_API_KNOWLEDGE.classes[className] || 
           BURP_API_KNOWLEDGE.enums[className];
}

export function findApiMethod(className: string, methodName: string): ApiMethod | undefined {
    const apiClass = findApiClass(className);
    return apiClass?.methods.find(m => m.name === methodName);
}

export function getAllApiClasses(): ApiClass[] {
    return [
        ...Object.values(BURP_API_KNOWLEDGE.interfaces),
        ...Object.values(BURP_API_KNOWLEDGE.classes),
        ...Object.values(BURP_API_KNOWLEDGE.enums)
    ];
}

export function getApiClassesByType(type: 'interface' | 'class' | 'enum'): ApiClass[] {
    return getAllApiClasses().filter(c => c.type === type);
}

export function searchApiMethods(query: string): ApiMethod[] {
    const results: ApiMethod[] = [];
    
    for (const apiClass of getAllApiClasses()) {
        for (const method of apiClass.methods) {
            if (method.name.toLowerCase().includes(query.toLowerCase()) ||
                method.description.toLowerCase().includes(query.toLowerCase())) {
                results.push(method);
            }
        }
    }
    
    return results;
}

export function getProfessionalOnlyFeatures(): ApiClass[] {
    return getAllApiClasses().filter(c => c.isProfessionalOnly);
}

export function getExampleByName(name: string): ApiExample | undefined {
    return BURP_API_KNOWLEDGE.examples[name];
}

export function getAllExamples(): ApiExample[] {
    return Object.values(BURP_API_KNOWLEDGE.examples);
}
