/**
 * @description
 * Converte a primeira letra de uma string para maiúscula
 * 
 * @example
 * fristLetterUpperCase("componenteRapido") => "ComponenteRapido"
 */
export function fristLetterUpperCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
