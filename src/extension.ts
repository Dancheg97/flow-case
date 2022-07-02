import * as vscode from "vscode";
import { CaseTransformer } from "./transformer";

export function activate(context: vscode.ExtensionContext) {
  const caseTransormer = new CaseTransformer();

  let cmd = vscode.commands.registerCommand("flow-case.transform", async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor === undefined) {
      return;
    }
    let texts: string[] = [];
    for (const selection of editor.selections) {
      texts.push(editor.document.getText(selection));
    }

    let picked = await vscode.window.showQuickPick(caseTransormer.cases, {
      canPickMany: false,
    });
    if (picked === undefined) {
      return;
    }

    for (const text of texts) {
      let transformed = caseTransormer.transform(text, picked);
      editor.edit((edit) => {
        edit.replace(editor.selection, transformed);
      });
    }
  });

  context.subscriptions.push(cmd);
}

export function deactivate() {}
