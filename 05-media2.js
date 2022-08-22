/* Leia três valores (variáveis ​​A, B e C), que são as notas dos três alunos. 
Em seguida, calcule a média, considerando que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
Considere que cada nota pode ir de 0 a 10,0, sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 3 valores de pontos flutuantes (duplos) com um dígito após o ponto decimal.

Resultado
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo a seguir, com um espaço em branco antes e depois do sinal de igual. */

var a = parseFloat(prompt("Valor A:"));
var b = parseFloat(prompt("Valor B:"));
var c = parseFloat(prompt("Valor C:"));
const pesoA = 2;
const pesoB = 3;
const pesoC = 5;

/*  = ((a* 100) / 100).toFixed(1);
        b = ((b* 100) / 100).toFixed(1); */
var media = (
  (a * pesoA + b * pesoB + c * pesoC) /
  (pesoA + pesoB + pesoC)
).toFixed(1);

console.log(`MEDIA = ${media}`);
