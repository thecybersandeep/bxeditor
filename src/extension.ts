import * as vscode from 'vscode';
import { BurpProjectManager } from './projectManager';
import { BurpCompletionProvider } from './completionProvider';
import { BurpHoverProvider } from './hoverProvider';
import { BurpDefinitionProvider } from './definitionProvider';
import { BurpDocumentationProvider } from './documentationProvider';
import { BurpTaskProvider } from './taskProvider';
import { BurpDebugConfigurationProvider } from './debugProvider';
import { BurpDiagnosticProvider } from './diagnosticProvider';
import { BurpCodeActionProvider } from './codeActionProvider';
import { BurpDocumentSymbolProvider, BurpWorkspaceSymbolProvider } from './symbolProvider';
import { BurpReferenceProvider, BurpImplementationProvider } from './referenceProvider';
import { BurpSignatureHelpProvider } from './signatureHelpProvider';
import { BurpWorkspaceConfigProvider } from './workspaceConfigProvider';

export function activate(context: vscode.ExtensionContext): void {
    try {
        const providers = initializeProviders(context);
        registerCommands(context, providers);
        registerLanguageProviders(context, providers);
        detectBurpProjects().catch(error => {
            console.error('BXEditor: Error detecting Burp projects:', error);
        });
    } catch (error) {
        console.error('BXEditor: Failed to activate extension:', error);
        vscode.window.showErrorMessage('BXEditor: Failed to activate extension. Please check the logs.');
    }
}

function initializeProviders(context: vscode.ExtensionContext): {
    projectManager: BurpProjectManager;
    completionProvider: BurpCompletionProvider;
    hoverProvider: BurpHoverProvider;
    definitionProvider: BurpDefinitionProvider;
    documentationProvider: BurpDocumentationProvider;
    taskProvider: BurpTaskProvider;
    debugProvider: BurpDebugConfigurationProvider;
    diagnosticProvider: BurpDiagnosticProvider;
    codeActionProvider: BurpCodeActionProvider;
    documentSymbolProvider: BurpDocumentSymbolProvider;
    workspaceSymbolProvider: BurpWorkspaceSymbolProvider;
    referenceProvider: BurpReferenceProvider;
    implementationProvider: BurpImplementationProvider;
    signatureHelpProvider: BurpSignatureHelpProvider;
    workspaceConfigProvider: BurpWorkspaceConfigProvider;
} {
    return {
        projectManager: new BurpProjectManager(context),
        completionProvider: new BurpCompletionProvider(context),
        hoverProvider: new BurpHoverProvider(context),
        definitionProvider: new BurpDefinitionProvider(context),
        documentationProvider: new BurpDocumentationProvider(context),
        taskProvider: new BurpTaskProvider(),
        debugProvider: new BurpDebugConfigurationProvider(),
        diagnosticProvider: new BurpDiagnosticProvider(context),
        codeActionProvider: new BurpCodeActionProvider(context),
        documentSymbolProvider: new BurpDocumentSymbolProvider(context),
        workspaceSymbolProvider: new BurpWorkspaceSymbolProvider(context),
        referenceProvider: new BurpReferenceProvider(context),
        implementationProvider: new BurpImplementationProvider(context),
        signatureHelpProvider: new BurpSignatureHelpProvider(context),
        workspaceConfigProvider: new BurpWorkspaceConfigProvider(context)
    };
}

function registerCommands(context: vscode.ExtensionContext, providers: ReturnType<typeof initializeProviders>): void {
    
    const commands = [
        vscode.commands.registerCommand('bxeditor.createProject', async () => {
            try {
                await providers.projectManager.createNewProject();
            } catch (error) {
                console.error('BXEditor: Error creating project:', error);
                vscode.window.showErrorMessage('Failed to create project. Please try again.');
            }
        }),
        
        vscode.commands.registerCommand('bxeditor.generateExtension', async () => {
            try {
                await providers.projectManager.generateExtensionTemplate();
            } catch (error) {
                console.error('BXEditor: Error generating extension:', error);
                vscode.window.showErrorMessage('Failed to generate extension template.');
            }
        }),
        
        vscode.commands.registerCommand('bxeditor.openDocumentation', async () => {
            try {
                await providers.documentationProvider.openDocumentation();
            } catch (error) {
                console.error('BXEditor: Error opening documentation:', error);
                vscode.window.showErrorMessage('Failed to open documentation.');
            }
        }),
        
        vscode.commands.registerCommand('bxeditor.showExamples', async () => {
            try {
                await providers.documentationProvider.showExamples();
            } catch (error) {
                console.error('BXEditor: Error showing examples:', error);
                vscode.window.showErrorMessage('Failed to show examples.');
            }
        })
    ];
    
    context.subscriptions.push(...commands);
}

function registerLanguageProviders(context: vscode.ExtensionContext, providers: ReturnType<typeof initializeProviders>): void {
    const javaSelector: vscode.DocumentSelector = { language: 'java', scheme: 'file' };
    
    const disposables = [
        vscode.languages.registerCompletionItemProvider(
            javaSelector,
            providers.completionProvider,
            '.', '(', ' '
        ),
        vscode.languages.registerHoverProvider(
            javaSelector,
            providers.hoverProvider
        ),
        vscode.languages.registerDefinitionProvider(
            javaSelector,
            providers.definitionProvider
        ),
        vscode.tasks.registerTaskProvider('burp-build', providers.taskProvider),
        vscode.debug.registerDebugConfigurationProvider('burp-java', providers.debugProvider),
        vscode.languages.registerCodeActionsProvider(
            javaSelector,
            providers.codeActionProvider
        ),
        vscode.languages.registerDocumentSymbolProvider(
            javaSelector,
            providers.documentSymbolProvider
        ),
        vscode.languages.registerWorkspaceSymbolProvider(
            providers.workspaceSymbolProvider
        ),
        vscode.languages.registerReferenceProvider(
            javaSelector,
            providers.referenceProvider
        ),
        vscode.languages.registerImplementationProvider(
            javaSelector,
            providers.implementationProvider
        ),
        vscode.languages.registerSignatureHelpProvider(
            javaSelector,
            providers.signatureHelpProvider,
            '(', ','
        ),
        providers.diagnosticProvider
    ];
    
    context.subscriptions.push(...disposables);
}

async function detectBurpProjects(): Promise<void> {
    try {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            return;
        }

        for (const folder of workspaceFolders) {
            if (await isBurpProject(folder)) {
                const selection = await vscode.window.showInformationMessage(
                    `Detected Burp extension project in ${folder.name}`,
                    'Open Documentation',
                    'Show Examples'
                );
                
                if (selection === 'Open Documentation') {
                    await vscode.commands.executeCommand('bxeditor.openDocumentation');
                } else if (selection === 'Show Examples') {
                    await vscode.commands.executeCommand('bxeditor.showExamples');
                }
                break;
            }
        }
    } catch (error) {
        console.error('BXEditor: Error detecting Burp projects:', error);
    }
}

async function isBurpProject(folder: vscode.WorkspaceFolder): Promise<boolean> {
    try {
        const buildFiles = [
            new vscode.RelativePattern(folder, '**/build.gradle'),
            new vscode.RelativePattern(folder, '**/pom.xml')
        ];
        
        for (const pattern of buildFiles) {
            const files = await vscode.workspace.findFiles(pattern, null, 10);
            
            for (const file of files) {
                const content = await vscode.workspace.fs.readFile(file);
                const contentStr = Buffer.from(content).toString('utf8');
                
                if (contentStr.includes('montoya-api') || 
                    contentStr.includes('burp-extender-api') ||
                    contentStr.includes('burp.api.montoya')) {
                    return true;
                }
            }
        }
        
        return false;
    } catch (error) {
        console.error('BXEditor: Error checking if folder is Burp project:', error);
        return false;
    }
}

export function deactivate(): void {
    // Extension cleanup if needed
}