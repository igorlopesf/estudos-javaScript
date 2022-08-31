/* Calcule o consumo médio de um carro, fornecendo a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total (em Km) 
e o segundo é um número de ponto flutuante Y  representando o total de combustível irradiado, com um dígito após o ponto decimal.

Resultado
Apresente um valor que represente o consumo médio de um carro com 3 dígitos após a vírgula, seguido da mensagem "km/l".

Amostra de entrada:	
500
35,0

Amostra de saída:
14.286km/l */

var x = 500 // var x = parseInt(prompt("Informe a distância:"));
var y = 35.0 // var y = parseFlout(prompt("Informe o total de combustível"));

var consumo = (x / y).toFixed(3);

console.log(consumo,'Km/L');