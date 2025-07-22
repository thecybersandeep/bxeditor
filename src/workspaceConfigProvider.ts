import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class BurpWorkspaceConfigProvider {
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    public async configureWorkspaceForBurpDevelopment(workspaceFolder: string): Promise<void> {
        await this.createVSCodeSettings(workspaceFolder);
        await this.createLaunchConfiguration(workspaceFolder);
        await this.createTasksConfiguration(workspaceFolder);
        await this.createExtensionsRecommendations(workspaceFolder);
    }

    private async createVSCodeSettings(workspaceFolder: string): Promise<void> {
        const vscodeDir = path.join(workspaceFolder, '.vscode');
        if (!fs.existsSync(vscodeDir)) {
            fs.mkdirSync(vscodeDir, { recursive: true });
        }

        const settingsPath = path.join(vscodeDir, 'settings.json');
        const settings = {
            "java.configuration.updateBuildConfiguration": "automatic",
            "java.compile.nullAnalysis.mode": "automatic",
            "java.debug.settings.enableRunDebugCodeLens": true,
            "java.debug.settings.hotCodeReplace": "auto",
            "java.format.settings.url": "${workspaceFolder}/.vscode/java-formatter.xml",
            "java.saveActions.organizeImports": true,
            "java.sources.organizeImports.starThreshold": 99,
            "java.sources.organizeImports.staticStarThreshold": 99,
            "files.exclude": {
                "**/.gradle": true,
                "**/build": true,
                "**/.classpath": true,
                "**/.project": true,
                "**/.settings": true,
                "**/.factorypath": true
            },
            "java.project.sourcePaths": [
                "src/main/java"
            ],
            "java.project.outputPath": "build/classes",
            "java.project.referencedLibraries": [
                "lib/**/*.jar",
                "build/libs/**/*.jar"
            ],
            "bxeditor.autoDetectProjects": true,
            "bxeditor.showWelcomeMessage": true,
            "editor.formatOnSave": true,
            "editor.codeActionsOnSave": {
                "source.organizeImports": true,
                "source.fixAll": true
            }
        };

        fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    }

    private async createLaunchConfiguration(workspaceFolder: string): Promise<void> {
        const vscodeDir = path.join(workspaceFolder, '.vscode');
        const launchPath = path.join(vscodeDir, 'launch.json');
        
        const projectName = path.basename(workspaceFolder);
        
        const launchConfig = {
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "java",
                    "name": "Debug Burp Extension",
                    "request": "launch",
                    "mainClass": "burp.StartBurp",
                    "projectName": projectName,
                    "args": [
                        "--config-file=${workspaceFolder}/burp-config.json"
                    ],
                    "vmArgs": [
                        "-Xmx2g",
                        "-Djava.awt.headless=false",
                        "-Dburp.extensions.dir=${workspaceFolder}/build/libs"
                    ],
                    "classpath": [
                        "${workspaceFolder}/build/libs/*.jar",
                        "/path/to/burpsuite.jar"
                    ],
                    "console": "integratedTerminal",
                    "preLaunchTask": "build"
                },
                {
                    "type": "java",
                    "name": "Test Extension",
                    "request": "launch",
                    "mainClass": "TestRunner",
                    "projectName": projectName,
                    "args": [],
                    "console": "integratedTerminal",
                    "preLaunchTask": "build"
                },
                {
                    "type": "burp-java",
                    "name": "Debug with BXEditor",
                    "request": "launch",
                    "program": "${workspaceFolder}/build/libs/${workspaceFolderBasename}.jar",
                    "burpPath": "${config:bxeditor.burpSuitePath}",
                    "preLaunchTask": "build",
                    "console": "integratedTerminal"
                }
            ]
        };

        fs.writeFileSync(launchPath, JSON.stringify(launchConfig, null, 2));
    }

    private async createTasksConfiguration(workspaceFolder: string): Promise<void> {
        const vscodeDir = path.join(workspaceFolder, '.vscode');
        const tasksPath = path.join(vscodeDir, 'tasks.json');
        
        const tasksConfig = {
            "version": "2.0.0",
            "tasks": [
                {
                    "label": "build",
                    "type": "shell",
                    "command": "./gradlew",
                    "args": ["build"],
                    "group": {
                        "kind": "build",
                        "isDefault": true
                    },
                    "presentation": {
                        "echo": true,
                        "reveal": "always",
                        "focus": false,
                        "panel": "shared",
                        "showReuseMessage": true,
                        "clear": false
                    },
                    "problemMatcher": [
                        "$gradle"
                    ],
                    "options": {
                        "cwd": "${workspaceFolder}"
                    }
                },
                {
                    "label": "clean",
                    "type": "shell",
                    "command": "./gradlew",
                    "args": ["clean"],
                    "group": "build",
                    "presentation": {
                        "echo": true,
                        "reveal": "always",
                        "focus": false,
                        "panel": "shared"
                    },
                    "problemMatcher": []
                },
                {
                    "label": "test",
                    "type": "shell",
                    "command": "./gradlew",
                    "args": ["test"],
                    "group": "test",
                    "presentation": {
                        "echo": true,
                        "reveal": "always",
                        "focus": false,
                        "panel": "shared"
                    },
                    "problemMatcher": [
                        "$gradle"
                    ]
                },
                {
                    "label": "install-extension",
                    "type": "shell",
                    "command": "cp",
                    "args": [
                        "${workspaceFolder}/build/libs/*.jar",
                        "${config:bxeditor.burpExtensionsDir}"
                    ],
                    "group": "build",
                    "dependsOn": "build",
                    "presentation": {
                        "echo": true,
                        "reveal": "always",
                        "focus": false,
                        "panel": "shared"
                    },
                    "problemMatcher": []
                },
                {
                    "label": "run-burp-with-extension",
                    "type": "shell",
                    "command": "java",
                    "args": [
                        "-jar",
                        "${config:bxeditor.burpSuitePath}",
                        "--config-file=${workspaceFolder}/burp-config.json"
                    ],
                    "group": "build",
                    "dependsOn": "install-extension",
                    "presentation": {
                        "echo": true,
                        "reveal": "always",
                        "focus": false,
                        "panel": "shared"
                    },
                    "problemMatcher": []
                }
            ]
        };

        fs.writeFileSync(tasksPath, JSON.stringify(tasksConfig, null, 2));
    }

    private async createExtensionsRecommendations(workspaceFolder: string): Promise<void> {
        const vscodeDir = path.join(workspaceFolder, '.vscode');
        const extensionsPath = path.join(vscodeDir, 'extensions.json');
        
        const extensionsConfig = {
            "recommendations": [
                "vscjava.vscode-java-pack",
                "vscjava.vscode-gradle",
                "redhat.java",
                "vscjava.vscode-java-debug",
                "vscjava.vscode-java-test",
                "vscjava.vscode-maven",
                "sandeepwawdane.bxeditor"
            ],
            "unwantedRecommendations": []
        };

        fs.writeFileSync(extensionsPath, JSON.stringify(extensionsConfig, null, 2));
    }

    public async createJavaFormatterConfig(workspaceFolder: string): Promise<void> {
        const vscodeDir = path.join(workspaceFolder, '.vscode');
        const formatterPath = path.join(vscodeDir, 'java-formatter.xml');
        
        const formatterXml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<profiles version="13">
    <profile kind="CodeFormatterProfile" name="BurpExtension" version="13">
        <setting id="org.eclipse.jdt.core.formatter.indent_statements_compare_to_body" value="true"/>
        <setting id="org.eclipse.jdt.core.formatter.indent_statements_compare_to_block" value="true"/>
        <setting id="org.eclipse.jdt.core.formatter.tabulation.char" value="space"/>
        <setting id="org.eclipse.jdt.core.formatter.tabulation.size" value="4"/>
        <setting id="org.eclipse.jdt.core.formatter.indentation.size" value="4"/>
        <setting id="org.eclipse.jdt.core.formatter.lineSplit" value="120"/>
        <setting id="org.eclipse.jdt.core.formatter.comment.line_length" value="120"/>
        <setting id="org.eclipse.jdt.core.formatter.brace_position_for_type_declaration" value="end_of_line"/>
        <setting id="org.eclipse.jdt.core.formatter.brace_position_for_method_declaration" value="end_of_line"/>
        <setting id="org.eclipse.jdt.core.formatter.brace_position_for_constructor_declaration" value="end_of_line"/>
        <setting id="org.eclipse.jdt.core.formatter.brace_position_for_block" value="end_of_line"/>
        <setting id="org.eclipse.jdt.core.formatter.brace_position_for_switch" value="end_of_line"/>
        <setting id="org.eclipse.jdt.core.formatter.insert_space_after_comma_in_method_invocation_arguments" value="insert"/>
        <setting id="org.eclipse.jdt.core.formatter.insert_space_after_comma_in_method_declaration_parameters" value="insert"/>
        <setting id="org.eclipse.jdt.core.formatter.insert_space_before_opening_paren_in_method_invocation" value="do not insert"/>
        <setting id="org.eclipse.jdt.core.formatter.insert_space_before_opening_paren_in_method_declaration" value="do not insert"/>
    </profile>
</profiles>`;

        fs.writeFileSync(formatterPath, formatterXml);
    }

    public async createBurpConfig(workspaceFolder: string): Promise<void> {
        const configPath = path.join(workspaceFolder, 'burp-config.json');
        
        const burpConfig = {
            "user_options": {
                "display": {
                    "user_interface": {
                        "look_and_feel": "system"
                    }
                },
                "misc": {
                    "automatic_project_backup": {
                        "enabled": false
                    },
                    "show_learn_tab": false
                }
            },
            "project_options": {
                "connections": {
                    "platform_authentication": {
                        "do_platform_authentication": false
                    }
                }
            }
        };

        if (!fs.existsSync(configPath)) {
            fs.writeFileSync(configPath, JSON.stringify(burpConfig, null, 2));
        }
    }

    public async createGitIgnore(workspaceFolder: string): Promise<void> {
        const gitignorePath = path.join(workspaceFolder, '.gitignore');
        
        const gitignoreContent = `# Gradle
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
burp-config.json
*.burp
*.log

# Java
*.class
*.jar
!gradle/wrapper/gradle-wrapper.jar
hs_err_pid*

# Temporary files
*.tmp
*.temp
*~

# Extension specific
extension-output.txt
debug.log
`;

        if (!fs.existsSync(gitignorePath)) {
            fs.writeFileSync(gitignorePath, gitignoreContent);
        }
    }
}