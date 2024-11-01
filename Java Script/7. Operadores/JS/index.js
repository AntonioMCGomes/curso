document.getElementById("texto").innerHTML="Operadores em JavaScript"

/*
Operadores:

São estes sinais: +, -, *, /, ++, --, += $$, ||, etc

São separados em 6 categorias: 

1. Operadores aritméticos;
2. Operadores de atribuição;
3. Operadores de sequência;
4. Operadores de comparação;
5. Operador condicional (Ternário);


*/

var valor1, valor2, total;

valor1 = 12;
valor = 4;

total = valor1 + valor2;

/*
Operadores aritméticos:

    O sinal ++ é de incremento: adiona +1 ao valor
    O sinal -- é de decremento: retira -1 ao valor

Operadores de atribuição:

    valor1 = valor1 + valor2
    pode ser representado por valor1 += valor 2
    Para subtração, valor1 -= valor2 
    Para multiplicação, valor1 *= valor2
    Para divisão, valor1 /= valor2

Operador de sequência (concatenação):

    var valor1, valor2, total;

    valor1 = "Marcio ";
    valor2 = "Gomes";

    total = valor1 + valor2;

    Aqui, haverá uma concatenação de strings

Operadores de comparação:

    Para operações lógicas, respondendo True or False;

    var valor1, valor2, total;

    valor1 = 6;
    valor2 = 10; 

    total = (valor1 == valor2); 
    Resposta, nesse caso: False.

    Se os valores das variáveis são de tipos de diferentes, usa-se "===". Por exemplo, um inteiro 9
    e uma string "8". Para o caso de precisar verificar se é diferente, usa-se "!=="

    != diferente;
    < menor;
    > maior;
    >= maior ou igual;
    <= menor ou igual;

Operador Condicional(Ternário):

    var idade, eleitor;
    idade = 18;
    eleitor = (idade<18) ? "Não eleitor" : "Eleitor";

    A condição fica entre parênteses e seguida por um sinal de interrogação "?". Depois, vem a atribuição da condição, separadas por ":".

    O operador ternário serve para analisar apenas uma condição.

Operador lógico:

    var idade, eleitor, resultado;
    idade = 18;
    eleitor = (idade < 18) ? "Não eleitor" : "Eleitor";

    resultado = (idade > 60 && idade < 70); "e"
    resultado = (idade === 60 || idade === 70); "ou"
    resultado = !(idade === 70); "não"

    








*/