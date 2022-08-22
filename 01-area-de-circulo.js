/* 
        A fórmula para calcular a área de uma circunferência é definida como A = π . R 2 . Considerando para este problema que π = 3,14159 :

        Calcule a área usando a fórmula dada na descrição do problema.

        Entrada
        A entrada contém um valor de ponto flutuante (precisão dupla), que é a variável R .

        Resultado
        Apresente a mensagem "A=" seguida do valor da variável, como no exemplo abaixo, com quatro casas após a vírgula. 
        Use todas as variáveis ​​de precisão dupla. Como todos os problemas, não se esqueça de imprimir o final de linha após o resultado, 
        caso contrário você receberá "Erro de apresentação".
    */

var entrada = prompt("Informe o valor do raio: ");
var r = Number(entrada);
r = ((r * 100) / 100).toFixed(2);
console.log("A=", 3.14159 * (r * r));
