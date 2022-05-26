import * as vscode from 'vscode';
import { QuickPickItem, ViewColumn } from 'vscode';

export function oi() {
  const texto = "Primeiro teste do marlon";

  vscode.window.showQuickPick(['pdp-components/react/components', 'custom/react'], {
    placeHolder: texto
  });
}


