import * as vscode from 'vscode';
import { IArgs } from '../types/IArgs';

export async function getPath(args?: IArgs): Promise<string> {
  let path: string | undefined;
  // pegue o path do componente 
  if (!args) {
      const userPath =  await vscode.window.showInputBox({
      placeHolder: 'ex: src/components',
      title: 'Digite o caminho onde deseja criar o componente',
      ignoreFocusOut: true,
    });
    const projectRoot = (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;
    path = `${projectRoot}/${userPath}`;
  } else {
    // remove a primeira letra do path
    path = args.path.substring(1);
  }

  // substitua '/' por '//'
  path = path.replace(/\//g, '\\\\');
  return path ?? '';
}

