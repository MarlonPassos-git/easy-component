// por algum motivo se eu quebrasse a linha com template string 
// acontecias incosistencias na hora de gerar o arquivo

import { fristLetterUpperCase } from "./fristLetterUpperCase";

export async function getReact(componentName: string) {
  const componentNameCapitalized = fristLetterUpperCase(componentName);
  return `function ${componentNameCapitalized}() {\r\n\r\n\r\n\treturn (<>\r\n\r\n\t</>)\r\n}\r\n\r\nexport default ${componentNameCapitalized}\r\n`;
}

export async function getStyles(componentName: string) {
  return `@import "src/styles/scaffold";\r\n`;
}

export async function getIndex(componentName: string) {
  const componentNameCapitalized = fristLetterUpperCase(componentName);
  return `export { default } from './${componentNameCapitalized}\r\n'`;
}