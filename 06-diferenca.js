/* Leia quatro valores inteiros chamados A, B, C e D. Calcule e imprima a diferença do produto A e B pelo produto de C e D (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Resultado
Imprima DIFERENCA com todas as letras maiúsculas, conforme exemplo a seguir, com um espaço em branco antes e depois do sinal de igual. */

var a = parseInt(prompt("Informe o valor A:"));
var b = parseInt(prompt("Informe o valor B:"));
var c = parseInt(prompt("Informe o valor C:"));
var d = parseInt(prompt("Informe o valor D:"));

console.log("DIFERENÇA = ",((a*b) - (c*d)));
