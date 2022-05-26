import * as vscode from 'vscode';

import { oi } from './commands/oi';
import { createComponente } from './commands/createComponente';

export function activate(context: vscode.ExtensionContext) {
  console.log('Obrigado por instalar a extensão do marlon!');

  const disposable = [
    vscode.commands.registerCommand('easy-component.marlon', (arg)=> {
			console.log('arg',arg);
			oi();
	
		}),
    vscode.commands.registerCommand('easy-component.create-componente', (arg) => {
			createComponente(arg);
		}),
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
