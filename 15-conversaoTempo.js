/* Ler um valor inteiro, que é a duração em segundos de um determinado evento em uma fábrica, e informá-lo expresso em horas:minutos:segundos.

Entrada
O arquivo de entrada contém um inteiro N .

Resultado
Imprima o tempo de leitura no arquivo de entrada (segundos) convertido em horas:minutos:segundos como no exemplo a seguir.

Amostra de entrada:	
140153
Amostra de saída:
38:55:53 */

var tempo = 140153 // parseInt(prompt("Duranção do evento em Minutos:"));

var hora = parseInt(tempo / 3600);
var minutos = parseInt((tempo - (hora * 3600)) /60);
var segundos = (tempo % 60);

console.log(`${hora}:${minutos}:${segundos}`);