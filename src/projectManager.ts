import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class BurpProjectManager {
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    public async createNewProject(): Promise<void> {
        // Get project details from user
        const projectName = await vscode.window.showInputBox({
            prompt: 'Enter project name',
            placeHolder: 'my-burp-extension',
            validateInput: (value) => {
                if (!value || value.trim().length === 0) {
                    return 'Project name is required';
                }
                if (!/^[a-zA-Z0-9-_]+$/.test(value)) {
                    return 'Project name can only contain letters, numbers, hyphens, and underscores';
                }
                return null;
            }
        });

        if (!projectName) {
            return;
        }

        const packageName = await vscode.window.showInputBox({
            prompt: 'Enter package name',
            placeHolder: 'com.example.burp',
            value: vscode.workspace.getConfiguration('bxeditor').get('defaultPackageName', 'com.example.burp'),
            validateInput: (value) => {
                if (!value || value.trim().length === 0) {
                    return 'Package name is required';
                }
                if (!/^[a-zA-Z][a-zA-Z0-9]*(\.[a-zA-Z][a-zA-Z0-9]*)*$/.test(value)) {
                    return 'Invalid package name format';
                }
                return null;
            }
        });

        if (!packageName) {
            return;
        }

        const extensionTypes = [
            'Basic Extension',
            'HTTP Handler',
            'Proxy Handler',
            'Scanner Extension',
            'UI Extension',
            'Context Menu Extension'
        ];

        const extensionType = await vscode.window.showQuickPick(extensionTypes, {
            placeHolder: 'Select extension type'
        });

        if (!extensionType) {
            return;
        }

        // Select folder for project
        const folderUri = await vscode.window.showOpenDialog({
            canSelectFolders: true,
            canSelectFiles: false,
            canSelectMany: false,
            openLabel: 'Select Project Location'
        });

        if (!folderUri || folderUri.length === 0) {
            return;
        }

        const projectPath = path.join(folderUri[0].fsPath, projectName);

        try {
            await this.createProjectStructure(projectPath, projectName, packageName, extensionType);
            
            // Open the new project
            const projectUri = vscode.Uri.file(projectPath);
            await vscode.commands.executeCommand('vscode.openFolder', projectUri);
            
            vscode.window.showInformationMessage(`Burp extension project '${projectName}' created successfully!`);
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to create project: ${error}`);
        }
    }

    private async createProjectStructure(
        projectPath: string,
        projectName: string,
        packageName: string,
        extensionType: string
    ): Promise<void> {
        // Create project directory
        if (!fs.existsSync(projectPath)) {
            fs.mkdirSync(projectPath, { recursive: true });
        }

        // Create source directory structure
        const srcPath = path.join(projectPath, 'src', 'main', 'java', ...packageName.split('.'));
        fs.mkdirSync(srcPath, { recursive: true });

        // Create test directory structure
        const testPath = path.join(projectPath, 'src', 'test', 'java', ...packageName.split('.'));
        fs.mkdirSync(testPath, { recursive: true });

        // Create resources directory
        const resourcesPath = path.join(projectPath, 'src', 'main', 'resources');
        fs.mkdirSync(resourcesPath, { recursive: true });

        // Generate files
        const className = this.toPascalCase(projectName.replace(/-/g, '_')) + 'Extension';
        
        // Generate build.gradle
        const buildGradle = this.generateBuildGradle(projectName, packageName);
        fs.writeFileSync(path.join(projectPath, 'build.gradle'), buildGradle);

        // Generate main class
        const mainClass = this.generateMainClass(packageName, className, extensionType);
        fs.writeFileSync(path.join(srcPath, `${className}.java`), mainClass);

        // Generate README
        const readme = this.generateReadme(projectName, packageName, className);
        fs.writeFileSync(path.join(projectPath, 'README.md'), readme);

        // Generate .gitignore
        const gitignore = this.generateGitignore();
        fs.writeFileSync(path.join(projectPath, '.gitignore'), gitignore);

        // Generate gradle wrapper
        await this.generateGradleWrapper(projectPath);

        // Generate VS Code configuration
        await this.generateVSCodeConfig(projectPath, projectName);
    }

    private generateBuildGradle(projectName: string, packageName: string): string {
        const config = vscode.workspace.getConfiguration('bxeditor');
        const montoyaVersion = config.get('montoyaApiVersion', '2025.7');
        const javaVersion = config.get('javaVersion', '17');

        return `plugins {
    id 'java'
}

group '${packageName}'
version '1.0.0'

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    compileOnly 'net.portswigger.burp.extensions:montoya-api:${montoyaVersion}'
    testImplementation 'org.junit.jupiter:junit-jupiter:5.9.2'
    testImplementation 'org.mockito:mockito-core:5.1.1'
}

java {
    sourceCompatibility = JavaVersion.VERSION_${javaVersion}
    targetCompatibility = JavaVersion.VERSION_${javaVersion}
}

compileJava {
    options.encoding = 'UTF-8'
}

test {
    useJUnitPlatform()
}

jar {
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
    
    manifest {
        attributes(
            'Implementation-Title': '${projectName}',
            'Implementation-Version': project.version,
            'Built-Date': new Date(),
            'Built-JDK': System.getProperty('java.version'),
            'Built-Gradle': gradle.gradleVersion
        )
    }
}

task buildExtension(type: Copy, dependsOn: jar) {
    from jar.archiveFile
    into 'build/extension'
    rename { String fileName ->
        fileName.replace(jar.archiveFileName.get(), '${projectName}.jar')
    }
}`;
    }

    private generateMainClass(packageName: string, className: string, extensionType: string): string {
        const baseTemplate = `package ${packageName};

import burp.api.montoya.BurpExtension;
import burp.api.montoya.MontoyaApi;`;

        switch (extensionType) {
            case 'HTTP Handler':
                return baseTemplate + `
import burp.api.montoya.http.handler.HttpHandler;
import burp.api.montoya.http.handler.HttpRequestToBeSent;
import burp.api.montoya.http.handler.HttpResponseReceived;
import burp.api.montoya.http.handler.RequestToBeSentAction;
import burp.api.montoya.http.handler.ResponseReceivedAction;

/**
 * ${className} - HTTP Handler Extension
 * 
 * This extension demonstrates how to handle HTTP requests and responses
 * using the Montoya API.
 */
public class ${className} implements BurpExtension, HttpHandler {
    
    private MontoyaApi api;
    
    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        // Set extension name
        api.extension().setName("${className}");
        
        // Register HTTP handler
        api.http().registerHttpHandler(this);
        
        // Log initialization
        api.logging().logToOutput("${className} loaded successfully!");
    }
    
    @Override
    public RequestToBeSentAction handleHttpRequestToBeSent(HttpRequestToBeSent requestToBeSent) {
        // Handle requests about to be sent
        api.logging().logToOutput("Sending request to: " + requestToBeSent.url());
        
        // Return the request unchanged (or modify as needed)
        return RequestToBeSentAction.continueWith(requestToBeSent);
    }
    
    @Override
    public ResponseReceivedAction handleHttpResponseReceived(HttpResponseReceived responseReceived) {
        // Handle responses received
        api.logging().logToOutput("Received response from: " + responseReceived.initiatingRequest().url());
        
        // Return the response unchanged (or modify as needed)
        return ResponseReceivedAction.continueWith(responseReceived);
    }
}`;

            case 'Proxy Handler':
                return baseTemplate + `
import burp.api.montoya.proxy.http.InterceptedRequest;
import burp.api.montoya.proxy.http.InterceptedResponse;
import burp.api.montoya.proxy.http.ProxyRequestHandler;
import burp.api.montoya.proxy.http.ProxyRequestReceivedAction;
import burp.api.montoya.proxy.http.ProxyRequestToBeSentAction;
import burp.api.montoya.proxy.http.ProxyResponseHandler;
import burp.api.montoya.proxy.http.ProxyResponseReceivedAction;
import burp.api.montoya.proxy.http.ProxyResponseToBeSentAction;

/**
 * ${className} - Proxy Handler Extension
 * 
 * This extension demonstrates how to intercept and modify proxy traffic
 * using the Montoya API.
 */
public class ${className} implements BurpExtension, ProxyRequestHandler, ProxyResponseHandler {
    
    private MontoyaApi api;
    
    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        // Set extension name
        api.extension().setName("${className}");
        
        // Register proxy handlers
        api.proxy().registerRequestHandler(this);
        api.proxy().registerResponseHandler(this);
        
        // Log initialization
        api.logging().logToOutput("${className} loaded successfully!");
    }
    
    @Override
    public ProxyRequestReceivedAction handleRequestReceived(InterceptedRequest interceptedRequest) {
        // Handle requests received by proxy
        api.logging().logToOutput("Proxy received request to: " + interceptedRequest.url());
        
        return ProxyRequestReceivedAction.continueWith(interceptedRequest);
    }
    
    @Override
    public ProxyRequestToBeSentAction handleRequestToBeSent(InterceptedRequest interceptedRequest) {
        // Handle requests about to be sent by proxy
        api.logging().logToOutput("Proxy sending request to: " + interceptedRequest.url());
        
        return ProxyRequestToBeSentAction.continueWith(interceptedRequest);
    }
    
    @Override
    public ProxyResponseReceivedAction handleResponseReceived(InterceptedResponse interceptedResponse) {
        // Handle responses received by proxy
        api.logging().logToOutput("Proxy received response from: " + interceptedResponse.initiatingRequest().url());
        
        return ProxyResponseReceivedAction.continueWith(interceptedResponse);
    }
    
    @Override
    public ProxyResponseToBeSentAction handleResponseToBeSent(InterceptedResponse interceptedResponse) {
        // Handle responses about to be sent
        api.logging().logToOutput("Sending response from: " + interceptedResponse.initiatingRequest().url());
        
        return ProxyResponseToBeSentAction.continueWith(interceptedResponse);
    }
}`;

            case 'Scanner Extension':
                return baseTemplate + `
import burp.api.montoya.scanner.ScanCheck;
import burp.api.montoya.scanner.audit.insertionpoint.AuditInsertionPoint;
import burp.api.montoya.scanner.audit.issues.AuditIssue;
import burp.api.montoya.http.message.HttpRequestResponse;
import java.util.List;
import java.util.ArrayList;

/**
 * ${className} - Scanner Extension
 * 
 * This extension demonstrates how to create custom vulnerability checks
 * using the Montoya API. Note: This requires Burp Suite Professional.
 */
public class ${className} implements BurpExtension, ScanCheck {
    
    private MontoyaApi api;
    
    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        // Set extension name
        api.extension().setName("${className}");
        
        // Register scan check
        api.scanner().registerScanCheck(this);
        
        // Log initialization
        api.logging().logToOutput("${className} loaded successfully!");
    }
    
    @Override
    public List<AuditIssue> audit(HttpRequestResponse baseRequestResponse, 
                                  AuditInsertionPoint auditInsertionPoint) {
        List<AuditIssue> issues = new ArrayList<>();
        
        // Implement your custom vulnerability detection logic here
        api.logging().logToOutput("Scanning: " + baseRequestResponse.request().url());
        
        // Example: Check for a specific vulnerability pattern
        // Add your scan logic and create AuditIssue objects for findings
        
        return issues;
    }
}`;

            case 'UI Extension':
                return baseTemplate + `
import burp.api.montoya.ui.UserInterface;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * ${className} - UI Extension
 * 
 * This extension demonstrates how to create custom user interface components
 * using the Montoya API.
 */
public class ${className} implements BurpExtension {
    
    private MontoyaApi api;
    
    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        // Set extension name
        api.extension().setName("${className}");
        
        // Create and register UI tab
        JPanel mainPanel = createMainPanel();
        api.userInterface().registerSuiteTab("${className}", mainPanel);
        
        // Log initialization
        api.logging().logToOutput("${className} loaded successfully!");
    }
    
    private JPanel createMainPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        
        // Add title
        JLabel titleLabel = new JLabel("${className}", SwingConstants.CENTER);
        titleLabel.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 16));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        panel.add(titleLabel, BorderLayout.NORTH);
        
        // Add content area
        JTextArea textArea = new JTextArea();
        textArea.setText("Welcome to ${className}!\\n\\nThis is a custom UI extension.");
        textArea.setEditable(false);
        textArea.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        
        JScrollPane scrollPane = new JScrollPane(textArea);
        panel.add(scrollPane, BorderLayout.CENTER);
        
        // Add action button
        JPanel buttonPanel = new JPanel(new FlowLayout());
        JButton actionButton = new JButton("Perform Action");
        actionButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                api.logging().logToOutput("Action button clicked!");
                JOptionPane.showMessageDialog(panel, "Action performed!", "Info", JOptionPane.INFORMATION_MESSAGE);
            }
        });
        buttonPanel.add(actionButton);
        panel.add(buttonPanel, BorderLayout.SOUTH);
        
        return panel;
    }
}`;

            case 'Context Menu Extension':
                return baseTemplate + `
import burp.api.montoya.ui.contextmenu.ContextMenuEvent;
import burp.api.montoya.ui.contextmenu.ContextMenuItemsProvider;
import burp.api.montoya.ui.contextmenu.MenuItem;
import java.util.List;
import java.util.ArrayList;

/**
 * ${className} - Context Menu Extension
 * 
 * This extension demonstrates how to add custom context menu items
 * using the Montoya API.
 */
public class ${className} implements BurpExtension, ContextMenuItemsProvider {
    
    private MontoyaApi api;
    
    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        // Set extension name
        api.extension().setName("${className}");
        
        // Register context menu provider
        api.userInterface().registerContextMenuItemsProvider(this);
        
        // Log initialization
        api.logging().logToOutput("${className} loaded successfully!");
    }
    
    @Override
    public List<MenuItem> provideMenuItems(ContextMenuEvent event) {
        List<MenuItem> menuItems = new ArrayList<>();
        
        // Add custom menu item
        MenuItem customItem = MenuItem.menuItem("${className} Action", 
            actionEvent -> performCustomAction(event));
        menuItems.add(customItem);
        
        return menuItems;
    }
    
    private void performCustomAction(ContextMenuEvent event) {
        api.logging().logToOutput("Custom context menu action triggered!");
        
        // Perform your custom action here
        // You can access the selected request/response through the event
        if (event.messageEditorRequestResponse().isPresent()) {
            var requestResponse = event.messageEditorRequestResponse().get().requestResponse();
            api.logging().logToOutput("Processing request to: " + requestResponse.request().url());
        }
    }
}`;

            default: // Basic Extension
                return baseTemplate + `

/**
 * ${className} - Basic Burp Extension
 * 
 * This is a basic Burp Suite extension template using the Montoya API.
 * It demonstrates the minimal setup required for a Burp extension.
 * 
 * Features:
 * - Extension initialization
 * - Logging capabilities
 * - Configuration management
 * 
 * To extend this extension:
 * 1. Implement additional interfaces (HttpHandler, ProxyRequestHandler, etc.)
 * 2. Register handlers and listeners
 * 3. Add custom functionality
 * 
 * @author Your Name
 * @version 1.0.0
 */
public class ${className} implements BurpExtension {
    
    private MontoyaApi api;
    
    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        // Set extension name
        api.extension().setName("${className}");
        
        // Log successful initialization
        api.logging().logToOutput("${className} initialized successfully!");
        api.logging().logToOutput("Extension is ready to use.");
        
        // Example: Register event listeners, handlers, etc.
        // api.http().registerHttpHandler(new MyHttpHandler());
        // api.proxy().registerRequestHandler(new MyProxyHandler());
    }
}`;
        }
    }

    private generateReadme(projectName: string, packageName: string, className: string): string {
        return `# ${projectName}

A Burp Suite extension built with the Montoya API.

## Description

This extension provides [describe your extension's functionality here].

## Features

- [List key features]
- [Add more features]

## Installation

1. Build the extension:
   \`\`\`bash
   ./gradlew build
   \`\`\`

2. Load the JAR file in Burp Suite:
   - Go to Extensions → Installed
   - Click "Add"
   - Select the JAR file from \`build/libs/\`

## Development

### Prerequisites

- Java 17 or higher
- Gradle 7.0 or higher
- Burp Suite Community or Professional

### Building

\`\`\`bash
# Build the extension
./gradlew build

# Build and copy to extension directory
./gradlew buildExtension
\`\`\`

### Testing

\`\`\`bash
./gradlew test
\`\`\`

## Configuration

[Add any configuration instructions here]

## Usage

[Add usage instructions here]

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

[Add your license information here]

## Author

[Your name and contact information]
`;
    }

    private generateGitignore(): string {
        return `# Gradle
.gradle/
build/
gradle-app.setting
!gradle-wrapper.jar
!gradle-wrapper.properties

# IDE
.idea/
.vscode/settings.json
*.iml
*.ipr
*.iws
.classpath
.project
.settings/
.factorypath

# OS
.DS_Store
Thumbs.db

# Burp
*.burp
*.log

# Java
*.class
hs_err_pid*

# Temporary files
*.tmp
*.temp
*~
`;
    }

    private async generateGradleWrapper(projectPath: string): Promise<void> {
        const gradleDir = path.join(projectPath, 'gradle', 'wrapper');
        fs.mkdirSync(gradleDir, { recursive: true });

        // Generate gradle-wrapper.properties
        const wrapperProperties = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.5-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists`;

        fs.writeFileSync(path.join(gradleDir, 'gradle-wrapper.properties'), wrapperProperties);

        // Generate gradlew script
        const gradlewScript = `#!/bin/sh

# Gradle start up script for UN*X

# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

APP_NAME="Gradle"
APP_BASE_NAME=\`basename "$0"\`

# Use the maximum available, or set MAX_FD != -1 to use that value.
MAX_FD="maximum"

warn () {
    echo "$*"
}

die () {
    echo
    echo "$*"
    echo
    exit 1
}

# Determine the Java command to use to start the JVM.
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
        # IBM's JDK on AIX uses strange locations for the executables
        JAVACMD="$JAVA_HOME/jre/sh/java"
    else
        JAVACMD="$JAVA_HOME/bin/java"
    fi
    if [ ! -x "$JAVACMD" ] ; then
        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
else
    JAVACMD="java"
    which java >/dev/null 2>&1 || die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
fi

# Escape application args
save () {
    for i do printf %s\\\\n "$i" | sed "s/'/'\\\\\\\\''/g;1s/^/'/;\$s/\$/' \\\\\\\\/" ; done
    echo " "
}
APP_ARGS=\`save "$@"\`

# Collect all arguments for the java command; same as above.
eval set -- $DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS \\"-Dorg.gradle.appname=$APP_BASE_NAME\\" -classpath \\"$CLASSPATH\\" org.gradle.wrapper.GradleWrapperMain "$APP_ARGS"

exec "$JAVACMD" "$@"`;

        fs.writeFileSync(path.join(projectPath, 'gradlew'), gradlewScript);
        fs.chmodSync(path.join(projectPath, 'gradlew'), '755');

        // Generate gradlew.bat script
        const gradlewBat = `@rem Gradle startup script for Windows

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto execute

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar

@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%GRADLE_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega`;

        fs.writeFileSync(path.join(projectPath, 'gradlew.bat'), gradlewBat);
    }

    private async generateVSCodeConfig(projectPath: string, projectName: string): Promise<void> {
        const vscodeDir = path.join(projectPath, '.vscode');
        fs.mkdirSync(vscodeDir, { recursive: true });

        // Generate settings.json
        const settings = {
            "java.configuration.updateBuildConfiguration": "automatic",
            "java.compile.nullAnalysis.mode": "automatic",
            "files.exclude": {
                "**/.gradle": true,
                "**/build": true
            }
        };

        fs.writeFileSync(path.join(vscodeDir, 'settings.json'), JSON.stringify(settings, null, 2));

        // Generate launch.json
        const launchConfig = {
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "java",
                    "name": "Debug Extension",
                    "request": "launch",
                    "mainClass": "burp.StartBurp",
                    "projectName": projectName,
                    "args": [],
                    "console": "integratedTerminal"
                }
            ]
        };

        fs.writeFileSync(path.join(vscodeDir, 'launch.json'), JSON.stringify(launchConfig, null, 2));
    }

    public async buildCurrentProject(): Promise<void> {
        if (!vscode.workspace.workspaceFolders) {
            vscode.window.showErrorMessage('No workspace folder open');
            return;
        }

        const workspaceFolder = vscode.workspace.workspaceFolders[0];
        const buildFile = path.join(workspaceFolder.uri.fsPath, 'build.gradle');

        if (!fs.existsSync(buildFile)) {
            vscode.window.showErrorMessage('No build.gradle file found in workspace');
            return;
        }

        const terminal = vscode.window.createTerminal('Burp Extension Build');
        terminal.show();
        terminal.sendText('cd "' + workspaceFolder.uri.fsPath + '"');
        terminal.sendText('./gradlew buildExtension');
        
        vscode.window.showInformationMessage('Building extension... Check terminal for progress.');
    }

    public async generateExtensionTemplate(): Promise<void> {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const extensionTypes = [
            'Basic Extension',
            'HTTP Handler',
            'Proxy Handler', 
            'Scanner Extension',
            'UI Extension',
            'Context Menu Extension'
        ];

        const extensionType = await vscode.window.showQuickPick(extensionTypes, {
            placeHolder: 'Select extension template to generate'
        });

        if (!extensionType) {
            return;
        }

        const className = await vscode.window.showInputBox({
            prompt: 'Enter class name',
            placeHolder: 'MyExtension',
            validateInput: (value) => {
                if (!value || !/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
                    return 'Class name must start with uppercase letter and contain only letters and numbers';
                }
                return null;
            }
        });

        if (!className) {
            return;
        }

        const packageName = await vscode.window.showInputBox({
            prompt: 'Enter package name',
            placeHolder: 'com.example.burp',
            value: 'com.example.burp'
        });

        if (!packageName) {
            return;
        }

        const template = this.generateMainClass(packageName, className, extensionType);
        
        // Insert template at cursor position
        const position = editor.selection.active;
        await editor.edit(editBuilder => {
            editBuilder.insert(position, template);
        });

        vscode.window.showInformationMessage(`${extensionType} template generated successfully!`);
    }

    public async buildExtension(): Promise<void> {
        await this.buildCurrentProject();
    }

    private toPascalCase(str: string): string {
        return str.replace(/(?:^|_)([a-z])/g, (_, char) => char.toUpperCase());
    }
}