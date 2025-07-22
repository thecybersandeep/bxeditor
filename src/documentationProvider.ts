import * as vscode from 'vscode';

export class BurpDocumentationProvider {
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    async openDocumentation() {
        const options = [
            {
                label: '$(book) Montoya API Javadoc',
                description: 'Complete API documentation',
                action: () => this.openUrl('https://portswigger.github.io/burp-extensions-montoya-api/javadoc/burp/api/montoya/MontoyaApi.html')
            },
            {
                label: '$(github) GitHub Repository',
                description: 'Source code and examples',
                action: () => this.openUrl('https://github.com/PortSwigger/burp-extensions-montoya-api')
            },
            {
                label: '$(book) Extension Development Guide',
                description: 'Getting started guide',
                action: () => this.openUrl('https://portswigger.net/burp/documentation/desktop/extensions')
            },
            {
                label: '$(globe) BApp Store',
                description: 'Browse existing extensions',
                action: () => this.openUrl('https://portswigger.net/bappstore')
            },
            {
                label: '$(question) Community Forum',
                description: 'Get help from the community',
                action: () => this.openUrl('https://forum.portswigger.net/forum/burp-extensions')
            }
        ];

        const selected = await vscode.window.showQuickPick(options, {
            placeHolder: 'Select documentation to open'
        });

        if (selected) {
            selected.action();
        }
    }

    async showExamples() {
        const examples = [
            {
                label: 'Hello World',
                description: 'Basic extension template',
                code: this.getHelloWorldExample()
            },
            {
                label: 'HTTP Handler',
                description: 'Handle HTTP requests and responses',
                code: this.getHttpHandlerExample()
            },
            {
                label: 'Proxy Handler',
                description: 'Intercept proxy traffic',
                code: this.getProxyHandlerExample()
            },
            {
                label: 'Scanner Extension',
                description: 'Custom vulnerability scanner',
                code: this.getScannerExample()
            },
            {
                label: 'UI Extension',
                description: 'Custom user interface',
                code: this.getUIExample()
            },
            {
                label: 'Context Menu',
                description: 'Add context menu items',
                code: this.getContextMenuExample()
            }
        ];

        const selected = await vscode.window.showQuickPick(examples, {
            placeHolder: 'Select an example to view'
        });

        if (selected) {
            await this.showCodeExample(selected.label, selected.code);
        }
    }

    private async showCodeExample(title: string, code: string) {
        const document = await vscode.workspace.openTextDocument({
            content: code,
            language: 'java'
        });

        await vscode.window.showTextDocument(document, {
            preview: true,
            viewColumn: vscode.ViewColumn.Beside
        });

        vscode.window.showInformationMessage(`${title} example opened. You can copy this code to your project.`);
    }

    private openUrl(url: string) {
        vscode.env.openExternal(vscode.Uri.parse(url));
    }

    private getHelloWorldExample(): string {
        return `package example.helloworld;

import burp.api.montoya.BurpExtension;
import burp.api.montoya.MontoyaApi;
import burp.api.montoya.logging.Logging;

/**
 * Hello World Extension
 * 
 * A simple extension that demonstrates basic Burp Suite extension functionality.
 */
public class HelloWorld implements BurpExtension {
    @Override
    public void initialize(MontoyaApi api) {
        // Set extension name
        api.extension().setName("Hello World Extension");

        Logging logging = api.logging();

        // Write messages to different streams
        logging.logToOutput("Hello output.");
        logging.logToError("Hello error.");

        // Write messages to the Burp alerts tab
        logging.raiseInfoEvent("Hello info event.");
        logging.raiseDebugEvent("Hello debug event.");
        logging.raiseErrorEvent("Hello error event.");
        logging.raiseCriticalEvent("Hello critical event.");

        // Handle exceptions
        try {
            throw new RuntimeException("Hello exception.");
        } catch (RuntimeException e) {
            logging.logToError("Hello thrown exception.", e);
        }
    }
}`;
    }

    private getHttpHandlerExample(): string {
        return `package example.httphandler;

import burp.api.montoya.BurpExtension;
import burp.api.montoya.MontoyaApi;
import burp.api.montoya.http.handler.HttpHandler;
import burp.api.montoya.http.handler.HttpRequestToBeSent;
import burp.api.montoya.http.handler.HttpResponseReceived;
import burp.api.montoya.http.handler.RequestToBeSentAction;
import burp.api.montoya.http.handler.ResponseReceivedAction;

/**
 * HTTP Handler Extension
 * 
 * Demonstrates how to handle HTTP requests and responses.
 */
public class HttpHandlerExample implements BurpExtension, HttpHandler {
    private MontoyaApi api;

    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        api.extension().setName("HTTP Handler Example");
        api.http().registerHttpHandler(this);
        
        api.logging().logToOutput("HTTP Handler extension loaded.");
    }

    @Override
    public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent requestToBeSent) {
        // Log the request
        api.logging().logToOutput("Request to: " + requestToBeSent.url());
        
        // You can modify the request here
        // For example, add a custom header:
        // HttpRequest modifiedRequest = requestToBeSent.withAddedHeader("X-Custom-Header", "BXEditor");
        // return RequestToBeSentAction.continueWith(modifiedRequest);
        
        return RequestToBeSentAction.continueWith(requestToBeSent);
    }

    @Override
    public ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived responseReceived) {
        // Log the response
        api.logging().logToOutput("Response from: " + responseReceived.initiatingRequest().url() + 
                                 " - Status: " + responseReceived.statusCode());
        
        // You can analyze or modify the response here
        
        return ResponseReceivedAction.continueWith(responseReceived);
    }
}`;
    }

    private getProxyHandlerExample(): string {
        return `package example.proxyhandler;

import burp.api.montoya.BurpExtension;
import burp.api.montoya.MontoyaApi;
import burp.api.montoya.proxy.http.InterceptedRequest;
import burp.api.montoya.proxy.http.InterceptedResponse;
import burp.api.montoya.proxy.http.ProxyRequestHandler;
import burp.api.montoya.proxy.http.ProxyRequestReceivedAction;
import burp.api.montoya.proxy.http.ProxyRequestToBeSentAction;
import burp.api.montoya.proxy.http.ProxyResponseHandler;
import burp.api.montoya.proxy.http.ProxyResponseReceivedAction;
import burp.api.montoya.proxy.http.ProxyResponseToBeSentAction;

/**
 * Proxy Handler Extension
 * 
 * Demonstrates how to intercept and modify proxy traffic.
 */
public class ProxyHandlerExample implements BurpExtension, ProxyRequestHandler, ProxyResponseHandler {
    private MontoyaApi api;

    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        api.extension().setName("Proxy Handler Example");
        api.proxy().registerRequestHandler(this);
        api.proxy().registerResponseHandler(this);
        
        api.logging().logToOutput("Proxy Handler extension loaded.");
    }

    @Override
    public ProxyRequestReceivedAction handleRequestReceived(InterceptedRequest interceptedRequest) {
        api.logging().logToOutput("Intercepted request to: " + interceptedRequest.url());
        
        // You can modify the request or decide to drop it
        return ProxyRequestReceivedAction.continueWith(interceptedRequest);
    }

    @Override
    public ProxyRequestToBeSentAction handleRequestToBeSent(InterceptedRequest interceptedRequest) {
        api.logging().logToOutput("Sending request to: " + interceptedRequest.url());
        
        return ProxyRequestToBeSentAction.continueWith(interceptedRequest);
    }

    @Override
    public ProxyResponseReceivedAction handleResponseReceived(InterceptedResponse interceptedResponse) {
        api.logging().logToOutput("Intercepted response from: " + 
                                 interceptedResponse.initiatingRequest().url());
        
        return ProxyResponseReceivedAction.continueWith(interceptedResponse);
    }

    @Override
    public ProxyResponseToBeSentAction handleResponseToBeSent(InterceptedResponse interceptedResponse) {
        api.logging().logToOutput("Sending response from: " + 
                                 interceptedResponse.initiatingRequest().url());
        
        return ProxyResponseToBeSentAction.continueWith(interceptedResponse);
    }
}`;
    }

    private getScannerExample(): string {
        return `package example.scanner;

import burp.api.montoya.BurpExtension;
import burp.api.montoya.MontoyaApi;
import burp.api.montoya.scanner.ScanCheck;
import burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPoint;
import burp.api.montoya.scanner.audit.issues.AuditIssue;
import burp.api.montoya.scanner.audit.issues.AuditIssueConfidence;
import burp.api.montoya.scanner.audit.issues.AuditIssueSeverity;
import burp.api.montoya.http.message.HttpRequestResponse;
import burp.api.montoya.http.message.requests.HttpRequest;

import java.util.List;
import java.util.ArrayList;

/**
 * Scanner Extension
 * 
 * Demonstrates how to create custom vulnerability checks.
 */
public class ScannerExample implements BurpExtension, ScanCheck {
    private MontoyaApi api;

    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        api.extension().setName("Scanner Example");
        api.scanner().registerScanCheck(this);
        
        api.logging().logToOutput("Scanner extension loaded.");
    }

    @Override
    public List<AuditIssue> audit(HttpRequestResponse baseRequestResponse, AuditInsertionPoint auditInsertionPoint) {
        List<AuditIssue> issues = new ArrayList<>();
        
        // Example: Check for a simple vulnerability pattern
        String payload = "test_payload";
        HttpRequest requestWithPayload = auditInsertionPoint.buildHttpRequestWithPayload(payload);
        
        // Send the request and analyze the response
        HttpRequestResponse requestResponse = api.http().sendRequest(requestWithPayload);
        
        if (requestResponse.response() != null) {
            String responseBody = requestResponse.response().bodyToString();
            
            // Check if the payload is reflected in the response
            if (responseBody.contains(payload)) {
                // Create an audit issue
                AuditIssue issue = AuditIssue.auditIssue(
                    "Custom Vulnerability Found",
                    "The application reflects user input without proper validation.",
                    "Consider implementing proper input validation and output encoding.",
                    baseRequestResponse.request().url(),
                    AuditIssueSeverity.MEDIUM,
                    AuditIssueConfidence.CERTAIN,
                    "Detailed explanation of the vulnerability...",
                    "Remediation advice...",
                    requestResponse
                );
                
                issues.add(issue);
            }
        }
        
        return issues;
    }
}`;
    }

    private getUIExample(): string {
        return `package example.ui;

import burp.api.montoya.BurpExtension;
import burp.api.montoya.MontoyaApi;
import burp.api.montoya.ui.UserInterface;
import burp.api.montoya.ui.editor.HttpRequestEditor;
import burp.api.montoya.ui.editor.HttpResponseEditor;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import static burp.api.montoya.ui.editor.EditorOptions.READ_ONLY;

/**
 * UI Extension
 * 
 * Demonstrates how to create custom user interface components.
 */
public class UIExample implements BurpExtension {
    private MontoyaApi api;

    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        api.extension().setName("UI Example");
        
        // Create and register custom UI tab
        JPanel mainPanel = createMainPanel();
        api.userInterface().registerSuiteTab("Custom Tab", mainPanel);
        
        api.logging().logToOutput("UI extension loaded.");
    }

    private JPanel createMainPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        
        // Create title
        JLabel titleLabel = new JLabel("Custom Extension UI", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 16));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        panel.add(titleLabel, BorderLayout.NORTH);
        
        // Create main content area
        JSplitPane splitPane = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT);
        
        // Left panel with controls
        JPanel controlPanel = createControlPanel();
        splitPane.setLeftComponent(controlPanel);
        
        // Right panel with editors
        JPanel editorPanel = createEditorPanel();
        splitPane.setRightComponent(editorPanel);
        
        splitPane.setDividerLocation(300);
        panel.add(splitPane, BorderLayout.CENTER);
        
        return panel;
    }

    private JPanel createControlPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBorder(BorderFactory.createTitledBorder("Controls"));
        
        JTextArea logArea = new JTextArea(10, 20);
        logArea.setEditable(false);
        logArea.setFont(new Font(Font.MONOSPACED, Font.PLAIN, 12));
        
        JScrollPane scrollPane = new JScrollPane(logArea);
        panel.add(scrollPane, BorderLayout.CENTER);
        
        JButton actionButton = new JButton("Perform Action");
        actionButton.addActionListener(e -> {
            logArea.append("Action performed at " + new java.util.Date() + "\\n");
            logArea.setCaretPosition(logArea.getDocument().getLength());
            api.logging().logToOutput("UI action performed");
        });
        
        JPanel buttonPanel = new JPanel();
        buttonPanel.add(actionButton);
        panel.add(buttonPanel, BorderLayout.SOUTH);
        
        return panel;
    }

    private JPanel createEditorPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBorder(BorderFactory.createTitledBorder("HTTP Editors"));
        
        JTabbedPane tabbedPane = new JTabbedPane();
        
        // Create HTTP request editor
        HttpRequestEditor requestEditor = api.userInterface().createHttpRequestEditor(READ_ONLY);
        tabbedPane.addTab("Request", requestEditor.uiComponent());
        
        // Create HTTP response editor
        HttpResponseEditor responseEditor = api.userInterface().createHttpResponseEditor(READ_ONLY);
        tabbedPane.addTab("Response", responseEditor.uiComponent());
        
        panel.add(tabbedPane, BorderLayout.CENTER);
        
        return panel;
    }
}`;
    }

    private getContextMenuExample(): string {
        return `package example.contextmenu;

import burp.api.montoya.BurpExtension;
import burp.api.montoya.MontoyaApi;
import burp.api.montoya.ui.contextmenu.ContextMenuEvent;
import burp.api.montoya.ui.contextmenu.ContextMenuItemsProvider;
import burp.api.montoya.http.message.HttpRequestResponse;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

/**
 * Context Menu Extension
 * 
 * Demonstrates how to add custom context menu items.
 */
public class ContextMenuExample implements BurpExtension, ContextMenuItemsProvider {
    private MontoyaApi api;

    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        api.extension().setName("Context Menu Example");
        api.userInterface().registerContextMenuItemsProvider(this);
        
        api.logging().logToOutput("Context Menu extension loaded.");
    }

    @Override
    public List<JMenuItem> provideMenuItems(ContextMenuEvent event) {
        List<JMenuItem> menuItems = new ArrayList<>();
        
        // Add menu item for analyzing requests
        JMenuItem analyzeItem = new JMenuItem("Analyze with Custom Tool");
        analyzeItem.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                analyzeSelectedItems(event);
            }
        });
        menuItems.add(analyzeItem);
        
        // Add menu item for exporting data
        JMenuItem exportItem = new JMenuItem("Export Selected Items");
        exportItem.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                exportSelectedItems(event);
            }
        });
        menuItems.add(exportItem);
        
        // Add separator
        menuItems.add(new JSeparator());
        
        // Add submenu
        JMenu submenu = new JMenu("Custom Actions");
        
        JMenuItem action1 = new JMenuItem("Action 1");
        action1.addActionListener(e -> performCustomAction1(event));
        submenu.add(action1);
        
        JMenuItem action2 = new JMenuItem("Action 2");
        action2.addActionListener(e -> performCustomAction2(event));
        submenu.add(action2);
        
        menuItems.add(submenu);
        
        return menuItems;
    }

    private void analyzeSelectedItems(ContextMenuEvent event) {
        api.logging().logToOutput("Analyzing selected items...");
        
        // Get selected request/response pairs
        if (event.messageEditorRequestResponse().isPresent()) {
            HttpRequestResponse requestResponse = event.messageEditorRequestResponse().get().requestResponse();
            api.logging().logToOutput("Analyzing: " + requestResponse.request().url());
            
            // Perform custom analysis
            analyzeRequestResponse(requestResponse);
        }
        
        // Handle multiple selected items
        for (HttpRequestResponse requestResponse : event.selectedRequestResponses()) {
            api.logging().logToOutput("Batch analyzing: " + requestResponse.request().url());
            analyzeRequestResponse(requestResponse);
        }
    }

    private void exportSelectedItems(ContextMenuEvent event) {
        api.logging().logToOutput("Exporting selected items...");
        
        // Implementation for exporting data
        JOptionPane.showMessageDialog(null, "Export functionality would be implemented here.");
    }

    private void performCustomAction1(ContextMenuEvent event) {
        api.logging().logToOutput("Performing custom action 1");
        // Custom action implementation
    }

    private void performCustomAction2(ContextMenuEvent event) {
        api.logging().logToOutput("Performing custom action 2");
        // Custom action implementation
    }

    private void analyzeRequestResponse(HttpRequestResponse requestResponse) {
        // Example analysis logic
        String url = requestResponse.request().url();
        int paramCount = requestResponse.request().parameters().size();
        
        api.logging().logToOutput("URL: " + url + ", Parameters: " + paramCount);
        
        if (requestResponse.response() != null) {
            int statusCode = requestResponse.response().statusCode();
            api.logging().logToOutput("Status Code: " + statusCode);
        }
    }
}`;
    }
}