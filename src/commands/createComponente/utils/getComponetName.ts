import * as vscode from 'vscode';

export async function getComponetName(): Promise<string|undefined> {
  return  await vscode.window.showInputBox({
    placeHolder: 'Digite o nome do componente',
    ignoreFocusOut: true,
  });
}
