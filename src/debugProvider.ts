import * as vscode from 'vscode';

export class BurpDebugConfigurationProvider implements vscode.DebugConfigurationProvider {

    resolveDebugConfiguration(
        folder: vscode.WorkspaceFolder | undefined,
        config: vscode.DebugConfiguration,
        token?: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.DebugConfiguration> {

        // If launch.json is missing or empty
        if (!config.type && !config.request && !config.name) {
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document.languageId === 'java') {
                config.type = 'burp-java';
                config.name = 'Debug Burp Extension';
                config.request = 'launch';
                config.program = '${workspaceFolder}/build/libs/${workspaceFolderBasename}.jar';
                config.burpPath = '/path/to/burpsuite.jar';
            }
        }

        if (!config.program) {
            return vscode.window.showInformationMessage("Cannot find a program to debug").then(_ => {
                return undefined; // abort launch
            });
        }

        return config;
    }

    provideDebugConfigurations(
        folder: vscode.WorkspaceFolder | undefined,
        token?: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.DebugConfiguration[]> {
        
        return [
            {
                name: 'Debug Burp Extension',
                request: 'launch',
                type: 'burp-java',
                program: '${workspaceFolder}/build/libs/${workspaceFolderBasename}.jar',
                burpPath: '/path/to/burpsuite.jar',
                args: [],
                preLaunchTask: 'build'
            },
            {
                name: 'Debug Burp Extension (Custom JAR)',
                request: 'launch',
                type: 'burp-java',
                program: '${workspaceFolder}/build/libs/custom-extension.jar',
                burpPath: '/Applications/Burp Suite Professional.app/Contents/java/app/burpsuite_pro.jar',
                args: ['--disable-extensions'],
                preLaunchTask: 'buildExtension'
            },
            {
                name: 'Debug Burp Extension (Community)',
                request: 'launch',
                type: 'burp-java',
                program: '${workspaceFolder}/build/libs/${workspaceFolderBasename}.jar',
                burpPath: '/Applications/Burp Suite Community Edition.app/Contents/java/app/burpsuite_community.jar',
                args: [],
                preLaunchTask: 'build'
            }
        ];
    }
}

export class BurpDebugAdapterDescriptorFactory implements vscode.DebugAdapterDescriptorFactory {
    
    createDebugAdapterDescriptor(
        session: vscode.DebugSession,
        executable: vscode.DebugAdapterExecutable | undefined
    ): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
        
        // Return the debug adapter executable
        return new vscode.DebugAdapterExecutable('java', [
            '-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005',
            '-jar',
            session.configuration.burpPath,
            '--extension-jar',
            session.configuration.program,
            ...(session.configuration.args || [])
        ]);
    }
}