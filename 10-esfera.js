/* Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). 
A fórmula para calcular o volume é: (4/3) * pi * R 3 . Considere (atribua) para pi o valor 3,14159.

Dica: Use (4/3.0) ou (4.0/3) em sua fórmula, pois algumas linguagens (incluindo C++) assumem que o resultado da divisão 
entre dois inteiros é outro inteiro. :)

Entrada
A entrada contém um valor de ponto flutuante (precisão dupla).

Resultado
A saída deve ser uma mensagem "VOLUME" como no exemplo a seguir com um espaço antes e depois do sinal igual. 
O valor deve ser apresentado com 3 dígitos após a vírgula. 

Amostras de entrada: 3
Amostras de saída: VOLUME = 113,097

*/

var pi = 3.14159;
var volume;
const raio = 3;

volume = ((4/3) * pi * (Math.pow(raio, 3))).toFixed(3);

console.log(`VOLUME = ${volume}`);