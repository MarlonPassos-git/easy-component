import * as vscode from 'vscode';
import { IArgs } from './types/IArgs';
import { createDir } from './utils/createDir';
import { createFile } from './utils/createFile';
import { fristLetterUpperCase } from './utils/fristLetterUpperCase';
import { getComponetName } from './utils/getComponetName';
import { getReact, getStyles, getIndex } from './utils/getContent';
import { getPath } from './utils/getPath';
// Recebe um nome capitalizado e retorna ele com "-"
// Ex: "ComponenteRapido" => "componente-rapido"
function formataStyles (str: string) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export async function createComponente(args?: IArgs) {
  const path =  await getPath(args);
  const componentName = await getComponetName();
  
  if (!componentName) return;

  const componentNameCapitalized = fristLetterUpperCase(componentName);
  const contentReact = await getReact(componentName);
  const contentStyles = await getStyles(componentName);
  const contentIndex = await getIndex(componentName);

  createDir(`${path}/${componentNameCapitalized}`);

  const fileReactPath = `${path}\\\\${componentNameCapitalized}/${componentNameCapitalized}.tsx`;
  const fileStylePath = `${path}\\\\${componentName}/${formataStyles(componentName)}.scss`;
  const fileIndexPath = `${path}\\\\${componentName}/index.ts`;

  await createFile(fileIndexPath, contentIndex);
  await createFile(fileReactPath, contentReact);
  await createFile(fileStylePath, contentStyles);
  vscode.window.showInformationMessage(`📦 ${componentName} criado com sucesso!`);
}
