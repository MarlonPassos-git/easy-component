import * as fs from "fs";
import * as vscode from "vscode";

export async function createFile (filePath: string, content: string) {
  vscode.window.showInformationMessage(`👻 ${content} `);

  if (!fs.existsSync(filePath)) {
    await fs.writeFile(filePath, content, err => {
      if (err) {
        vscode.window.showErrorMessage("Maker cant write to file.");
      }
    });
  } else {
    vscode.window.showWarningMessage("File already exists.");
  }
}; 
