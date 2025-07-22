import * as vscode from 'vscode';

export class BurpTaskProvider implements vscode.TaskProvider {
    static readonly taskType = 'burp-build';

    provideTasks(): Thenable<vscode.Task[]> | undefined {
        return this.getBurpTasks();
    }

    resolveTask(task: vscode.Task): vscode.Task | undefined {
        const definition = task.definition as BurpTaskDefinition;
        return this.createTask(definition.task, definition);
    }

    private async getBurpTasks(): Promise<vscode.Task[]> {
        const tasks: vscode.Task[] = [];
        const workspaceFolders = vscode.workspace.workspaceFolders;

        if (!workspaceFolders) {
            return tasks;
        }

        for (const folder of workspaceFolders) {
            // Check if this is a Burp extension project
            const buildGradlePattern = new vscode.RelativePattern(folder, 'build.gradle');
            const buildGradleFiles = await vscode.workspace.findFiles(buildGradlePattern);

            for (const buildFile of buildGradleFiles) {
                const content = await vscode.workspace.fs.readFile(buildFile);
                const contentStr = Buffer.from(content).toString('utf8');

                if (contentStr.includes('montoya-api') || contentStr.includes('burp')) {
                    // This is a Burp extension project, add tasks
                    tasks.push(...this.createBurpTasks(folder));
                    break;
                }
            }
        }

        return tasks;
    }

    private createBurpTasks(workspaceFolder: vscode.WorkspaceFolder): vscode.Task[] {
        const tasks: vscode.Task[] = [];

        // Build task
        tasks.push(this.createTask('build', {
            type: BurpTaskProvider.taskType,
            task: 'build'
        }, workspaceFolder, 'Build the extension'));

        // Clean task
        tasks.push(this.createTask('clean', {
            type: BurpTaskProvider.taskType,
            task: 'clean'
        }, workspaceFolder, 'Clean build artifacts'));

        // Build extension JAR task
        tasks.push(this.createTask('buildExtension', {
            type: BurpTaskProvider.taskType,
            task: 'buildExtension'
        }, workspaceFolder, 'Build extension JAR file'));

        // Test task
        tasks.push(this.createTask('test', {
            type: BurpTaskProvider.taskType,
            task: 'test'
        }, workspaceFolder, 'Run tests'));

        // Dependencies task
        tasks.push(this.createTask('dependencies', {
            type: BurpTaskProvider.taskType,
            task: 'dependencies'
        }, workspaceFolder, 'Show project dependencies'));

        return tasks;
    }

    private createTask(
        taskName: string,
        definition: BurpTaskDefinition,
        workspaceFolder?: vscode.WorkspaceFolder,
        description?: string
    ): vscode.Task {
        const scope = workspaceFolder || vscode.TaskScope.Workspace;
        
        // Determine the command based on the platform
        const isWindows = process.platform === 'win32';
        const gradleCommand = isWindows ? 'gradlew.bat' : './gradlew';

        const execution = new vscode.ShellExecution(gradleCommand, [definition.task], {
            cwd: workspaceFolder?.uri.fsPath
        });

        const task = new vscode.Task(
            definition,
            scope,
            taskName,
            'burp-extension',
            execution,
            ['$gradle']
        );

        if (description) {
            task.detail = description;
        }

        // Set task group
        switch (taskName) {
            case 'build':
            case 'buildExtension':
                task.group = vscode.TaskGroup.Build;
                break;
            case 'clean':
                task.group = vscode.TaskGroup.Clean;
                break;
            case 'test':
                task.group = vscode.TaskGroup.Test;
                break;
        }

        // Set presentation options
        task.presentationOptions = {
            echo: true,
            reveal: vscode.TaskRevealKind.Always,
            focus: false,
            panel: vscode.TaskPanelKind.Shared,
            showReuseMessage: true,
            clear: false
        };

        return task;
    }
}

interface BurpTaskDefinition extends vscode.TaskDefinition {
    task: string;
}