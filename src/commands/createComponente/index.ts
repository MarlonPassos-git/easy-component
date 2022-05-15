import * as vscode from 'vscode';
import { IArgs } from './types/IArgs';
import { createDir } from './utils/createDir';
import { createFile } from './utils/createFile';
import { getComponetName } from './utils/getComponetName';
import { getPath } from './utils/getPath';

export async function createComponente(args?: IArgs) {
  const path =  await getPath(args);
  const componentName = await getComponetName();
  const content = 'teste';


  if (!componentName) return;

  createDir(`${path}/${componentName}`);

  const filePath = `${path}\\\\${componentName}/index.tsx`;
  console.log("path",filePath);

  vscode.window.showInformationMessage(`voce digitou: ${path}`);
  await createFile(filePath, content);
  
}
