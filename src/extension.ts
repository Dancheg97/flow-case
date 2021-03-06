import * as vscode from "vscode";
import { CaseTransformer } from "./transformer";

export function activate(context: vscode.ExtensionContext) {
  const caseTransormer = new CaseTransformer();

  let cmd = vscode.commands.registerCommand("flow-case.transform", async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor === undefined) {
      return;
    }

    let picked = await vscode.window.showQuickPick(caseTransormer.cases, {
      canPickMany: false,
    });
    if (picked === undefined) {
      return;
    }

    let selections = editor.selections;
    for (const selection of selections) {
      let text = editor.document.getText(selection);
      let transformed = caseTransormer.transform(text, picked ?? ``);
      await editor.edit((edit) => {
        edit.replace(selection, transformed);
      });
    }
  });

  context.subscriptions.push(cmd);
}

export function deactivate() {}
