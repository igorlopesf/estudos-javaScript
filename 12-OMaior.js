/* Faça um programa que leia 3 valores inteiros e apresente o maior seguido da mensagem "eh o maior".

Entrada
O arquivo de entrada contém 3 valores inteiros.

Resultado
Imprima o maior desses três valores seguido de um espaço e a mensagem “eh o maior”.

Amostras de entrada:
7 14 106

Amostras de saída:
106 eh o maior */

var valor1 = 7; // var valor1 = parseInt(prompt("Informe o valor 1:"));
var valor2 = 14; // var valor2 = parseInt(prompt("Informe o valor 2:"));
var valor3 = 106; // var valor3 = parseInt(prompt("Informe o valor 3:"));

var maior = Math.max(valor1, valor2, valor3);

console.log(`${maior} é o maior`);