import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "flow-case.transform",
    () => {
      vscode.window.showInformationMessage("Hello World from flow-case!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
