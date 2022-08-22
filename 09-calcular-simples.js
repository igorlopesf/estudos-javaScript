/* Neste problema, a tarefa é ler um código de um produto 1, o número de unidades do produto 1, 
o preço de uma unidade do produto 1, o código de um produto 2, o número de unidades do produto 2 
e o preço. para uma unidade de produto 2. Após isso, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores: dois inteiros e um valor 
flutuante com 2 dígitos após o ponto decimal.

Resultado
O arquivo de saída deve ser uma mensagem como no exemplo a seguir onde "Valor a pagar" significa Valor a Pagar . 
Lembre-se do espaço após o símbolo ":" e após o símbolo "R$". O valor deve ser apresentado com 2 dígitos após o ponto. */

var produto1= parseInt(prompt("Código produto 1:"));
var unidadesProduto1 = parseInt(prompt("Unidades produto 1:"));
var precoProduto1 = parseFloat(prompt("Preço produto 1: ")).toFixed(2);

var produto2= parseInt(prompt("Código produto 2:"));
var unidadesProduto2 = parseInt(prompt("Unidades produto 2:"));
var precoProduto2 = parseFloat(prompt("Preço produto 2: ")).toFixed(2);

var valorAPagar= ((unidadesProduto1 * precoProduto1) + (unidadesProduto2 * precoProduto2)).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${valorAPagar}`);