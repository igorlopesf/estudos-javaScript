/* Leia dois valores inteiros, neste caso, as variáveis ​​A e B. Após isso, calcule a soma entre eles e atribua-a à variável SOMA . Escreva o valor desta variável.

Entrada
O arquivo de entrada contém 2 números inteiros.

Resultado
Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois do sinal 
de igual seguido do valor correspondente à soma de A e B. Como todos os problemas, não esqueça de imprimir o final da linha , 
caso contrário, você receberá "Erro de apresentação" */

var a = parseInt(prompt("valor A:"));
var b = parseInt(prompt("valor B:"));

var soma = (a + b);
console.log(`SOMA = ${soma}`);