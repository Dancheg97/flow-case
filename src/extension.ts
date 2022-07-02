import * as vscode from "vscode";
import { CaseTransformer } from "./transformer";

export function activate(context: vscode.ExtensionContext) {
  const caseTransormer = new CaseTransformer();

  let cmd = vscode.commands.registerCommand("flow-case.transform", async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor === undefined) {
      return;
    }
    const text = editor.document.getText(editor.selection);

    let picked = await vscode.window.showQuickPick(caseTransormer.cases, {
      canPickMany: false,
    });
    if (picked === undefined) {
      return;
    }

    let transformed = caseTransormer.transform(text, picked);
	
  });

  context.subscriptions.push(cmd);
}

export function deactivate() {}
