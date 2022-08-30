/* Faça um programa que leia três valores de ponto flutuante: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem base A e altura C.
b) a área do círculo do raio C. (pi = 3,14159)
c) a área do trapézio que tem A e B por base e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

Entrada
O arquivo de entrada contém três valores duplos com um dígito após o ponto decimal.

Resultado
O arquivo de saída deve conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, 
sempre com uma mensagem correspondente (em português) e um espaço entre os dois pontos e o valor. 
O valor calculado deve ser apresentado com 3 dígitos após a vírgula.

Amostras de entrada:
3,0 4,0 5,2

Amostras de saída:
TRIÂNGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000 */

var a = 3.0; //parseFloat()
var b = 4.0; //parseFloat()
var c = 5.2; //parseFloat()

var triangulo = ((a * c)/ 2).toFixed(3);
var circulo = (3.14159 * Math.pow(c, 2)).toFixed(3);
var trapezio = (((a + b) * c) /2).toFixed(3);
var quadrado = Math.pow(b,2).toFixed(3);
var retangulo = (a * b).toFixed(3);

console.log(`TRIÂNGULO ${triangulo}`);
console.log(`CIRCULO ${circulo}`);
console.log(`TRAPEZIO ${trapezio}`);
console.log(`QUADRADO ${quadrado}`);
console.log(`RETANGULO ${retangulo}`);