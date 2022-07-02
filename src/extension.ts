import * as vscode from "vscode";
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";

export function activate(context: vscode.ExtensionContext) {
  let cmd = vscode.commands.registerCommand("flow-case.transform", () => {
    const editor = vscode.window.activeTextEditor;
    if (editor === undefined) {
      return;
    }
    const text = editor.document.getText(editor.selection);

  });

  context.subscriptions.push(cmd);
}

export function deactivate() {}
