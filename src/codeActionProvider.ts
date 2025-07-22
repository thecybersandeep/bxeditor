import * as vscode from 'vscode';
import { BurpApiKnowledgeBase } from './apiKnowledgeBase';

export class BurpCodeActionProvider implements vscode.CodeActionProvider {
    private context: vscode.ExtensionContext;
    private apiKnowledgeBase: BurpApiKnowledgeBase;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.apiKnowledgeBase = BurpApiKnowledgeBase.getInstance();
    }

    provideCodeActions(
        document: vscode.TextDocument,
        range: vscode.Range | vscode.Selection,
        context: vscode.CodeActionContext,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<(vscode.CodeAction | vscode.Command)[]> {
        
        const actions: vscode.CodeAction[] = [];

        // Handle diagnostics
        for (const diagnostic of context.diagnostics) {
            if (diagnostic.source === 'BXEditor') {
                actions.push(...this.createFixesForDiagnostic(document, diagnostic));
            }
        }

        // Add general code actions
        actions.push(...this.createGeneralCodeActions(document, range));

        return actions;
    }

    private createFixesForDiagnostic(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction[] {
        const actions: vscode.CodeAction[] = [];

        switch (diagnostic.code) {
            case 'missing-initialize-method':
                actions.push(this.createAddInitializeMethodAction(document, diagnostic));
                break;
            
            case 'missing-extension-name':
                actions.push(this.createAddExtensionNameAction(document, diagnostic));
                break;
            
            case 'missing-import':
                actions.push(this.createAddImportAction(document, diagnostic));
                break;
            
            case 'empty-method-body':
                actions.push(this.createAddTodoCommentAction(document, diagnostic));
                break;
            
            case 'missing-return-statement':
                actions.push(this.createAddReturnStatementAction(document, diagnostic));
                break;
        }

        return actions;
    }

    private createAddInitializeMethodAction(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const action = new vscode.CodeAction('Add initialize method', vscode.CodeActionKind.QuickFix);
        action.diagnostics = [diagnostic];
        
        const edit = new vscode.WorkspaceEdit();
        const line = document.lineAt(diagnostic.range.start.line);
        const insertPosition = new vscode.Position(line.lineNumber + 1, 0);
        
        const initializeMethod = `
    @Override
    public void initialize(MontoyaApi api) {
        // Set extension name
        api.extension().setName("My Extension");
        
        // Log initialization
        api.logging().logToOutput("Extension loaded successfully!");
        
        // TODO: Add your extension logic here
    }`;

        edit.insert(document.uri, insertPosition, initializeMethod);
        action.edit = edit;
        
        return action;
    }

    private createAddExtensionNameAction(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const action = new vscode.CodeAction('Add extension name', vscode.CodeActionKind.QuickFix);
        action.diagnostics = [diagnostic];
        
        const edit = new vscode.WorkspaceEdit();
        const line = document.lineAt(diagnostic.range.start.line);
        const insertPosition = new vscode.Position(line.lineNumber + 1, 0);
        
        const setNameCall = `        // Set extension name\n        api.extension().setName("My Extension");\n`;
        
        edit.insert(document.uri, insertPosition, setNameCall);
        action.edit = edit;
        
        return action;
    }

    private createAddImportAction(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const action = new vscode.CodeAction('Add missing import', vscode.CodeActionKind.QuickFix);
        action.diagnostics = [diagnostic];
        
        const importStatement = diagnostic.message.replace('Missing import: ', '');
        
        const edit = new vscode.WorkspaceEdit();
        
        // Find the position to insert the import
        const lines = document.getText().split('\n');
        let insertLine = 0;
        
        // Find the last import statement or package declaration
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('import ') || lines[i].startsWith('package ')) {
                insertLine = i + 1;
            } else if (lines[i].trim() === '' && insertLine > 0) {
                // Found empty line after imports
                break;
            } else if (!lines[i].startsWith('import ') && !lines[i].startsWith('package ') && lines[i].trim() !== '' && insertLine > 0) {
                // Found first non-import, non-package line
                break;
            }
        }
        
        const insertPosition = new vscode.Position(insertLine, 0);
        edit.insert(document.uri, insertPosition, importStatement + '\n');
        action.edit = edit;
        
        return action;
    }

    private createAddTodoCommentAction(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const action = new vscode.CodeAction('Add TODO comment', vscode.CodeActionKind.QuickFix);
        action.diagnostics = [diagnostic];
        
        const edit = new vscode.WorkspaceEdit();
        const startLine = diagnostic.range.start.line;
        const endLine = diagnostic.range.end.line;
        
        // Find the opening brace line
        const lines = document.getText().split('\n');
        let braceLineIndex = startLine;
        for (let i = startLine; i <= endLine; i++) {
            if (lines[i].includes('{')) {
                braceLineIndex = i;
                break;
            }
        }
        
        const insertPosition = new vscode.Position(braceLineIndex + 1, 0);
        const todoComment = '        // TODO: Implement method\n';
        
        edit.insert(document.uri, insertPosition, todoComment);
        action.edit = edit;
        
        return action;
    }

    private createAddReturnStatementAction(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const action = new vscode.CodeAction('Add return statement', vscode.CodeActionKind.QuickFix);
        action.diagnostics = [diagnostic];
        
        const edit = new vscode.WorkspaceEdit();
        const line = document.lineAt(diagnostic.range.start.line);
        
        // Extract return type from the method signature
        const methodMatch = line.text.match(/public\s+(\w+)\s+(\w+)\s*\(/);
        if (methodMatch) {
            const returnType = methodMatch[1];
            let returnValue = 'null';
            
            // Provide better default return values
            switch (returnType) {
                case 'boolean':
                    returnValue = 'false';
                    break;
                case 'int':
                case 'long':
                case 'double':
                case 'float':
                    returnValue = '0';
                    break;
                case 'String':
                    returnValue = '""';
                    break;
                case 'List':
                    returnValue = 'new ArrayList<>()';
                    break;
                case 'RequestToBeSentAction':
                    returnValue = 'RequestToBeSentAction.continueWith(requestToBeSent)';
                    break;
                case 'ResponseReceivedAction':
                    returnValue = 'ResponseReceivedAction.continueWith(responseReceived)';
                    break;
            }
            
            // Find method end to insert return statement
            const methodEndLine = this.findMethodEndLine(document, diagnostic.range.start.line);
            const insertPosition = new vscode.Position(methodEndLine, 0);
            const returnStatement = `        return ${returnValue};\n`;
            
            edit.insert(document.uri, insertPosition, returnStatement);
            action.edit = edit;
        }
        
        return action;
    }

    private createGeneralCodeActions(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction[] {
        const actions: vscode.CodeAction[] = [];
        
        // Add action to implement interface methods
        const line = document.lineAt(range.start.line);
        if (line.text.includes('implements ')) {
            actions.push(this.createImplementInterfaceMethodsAction(document, range));
        }
        
        // Add action to generate extension template
        if (line.text.includes('class ') && line.text.includes('BurpExtension')) {
            actions.push(this.createGenerateExtensionTemplateAction(document, range));
        }
        
        return actions;
    }

    private createImplementInterfaceMethodsAction(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction {
        const action = new vscode.CodeAction('Implement interface methods', vscode.CodeActionKind.Refactor);
        
        const line = document.lineAt(range.start.line);
        const interfaceMatch = line.text.match(/implements\s+(\w+)/);
        
        if (interfaceMatch) {
            const interfaceName = interfaceMatch[1];
            const apiClass = this.apiKnowledgeBase.getApiClass(interfaceName);
            
            if (apiClass) {
                const edit = new vscode.WorkspaceEdit();
                const insertPosition = this.findClassEndPosition(document, range.start.line);
                
                let methodsCode = '\n';
                for (const method of apiClass.methods) {
                    const params = method.parameters.map(p => `${p.type} ${p.name}`).join(', ');
                    methodsCode += `    @Override\n`;
                    methodsCode += `    public ${method.returnType} ${method.name}(${params}) {\n`;
                    methodsCode += `        // TODO: Implement ${method.name}\n`;
                    
                    if (method.returnType !== 'void') {
                        let returnValue = 'null';
                        if (method.returnType === 'boolean') {
                            returnValue = 'false';
                        } else if (method.returnType.includes('Action')) {
                            returnValue = `${method.returnType}.continueWith(${method.parameters[0]?.name || 'request'})`;
                        } else if (method.returnType.startsWith('List')) {
                            returnValue = 'new ArrayList<>()';
                        }
                        
                        methodsCode += `        return ${returnValue};\n`;
                    }
                    methodsCode += `    }\n\n`;
                }
                
                edit.insert(document.uri, insertPosition, methodsCode);
                action.edit = edit;
            }
        }
        
        return action;
    }

    private createGenerateExtensionTemplateAction(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction {
        const action = new vscode.CodeAction('Generate extension template', vscode.CodeActionKind.Source);
        
        const edit = new vscode.WorkspaceEdit();
        const insertPosition = this.findClassEndPosition(document, range.start.line);
        
        const template = `
    private MontoyaApi api;

    @Override
    public void initialize(MontoyaApi api) {
        this.api = api;
        
        // Set extension name
        api.extension().setName("My Extension");
        
        // Log initialization
        api.logging().logToOutput("Extension loaded successfully!");
        
        // TODO: Add your extension logic here
    }
`;
        
        edit.insert(document.uri, insertPosition, template);
        action.edit = edit;
        
        return action;
    }

    private findMethodEndLine(document: vscode.TextDocument, startLine: number): number {
        const lines = document.getText().split('\n');
        let braceCount = 0;
        let foundOpenBrace = false;

        for (let i = startLine; i < lines.length; i++) {
            const line = lines[i];
            for (const char of line) {
                if (char === '{') {
                    braceCount++;
                    foundOpenBrace = true;
                } else if (char === '}') {
                    braceCount--;
                    if (foundOpenBrace && braceCount === 0) {
                        return i;
                    }
                }
            }
        }

        return lines.length - 1;
    }

    private findClassEndPosition(document: vscode.TextDocument, startLine: number): vscode.Position {
        const lines = document.getText().split('\n');
        
        // Find the last line of the class (before the closing brace)
        let braceCount = 0;
        let foundOpenBrace = false;
        
        for (let i = startLine; i < lines.length; i++) {
            const line = lines[i];
            for (const char of line) {
                if (char === '{') {
                    braceCount++;
                    foundOpenBrace = true;
                } else if (char === '}') {
                    braceCount--;
                    if (foundOpenBrace && braceCount === 0) {
                        return new vscode.Position(i, 0);
                    }
                }
            }
        }
        
        return new vscode.Position(lines.length - 1, 0);
    }
}