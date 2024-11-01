/*
Uma função JavaScript é um bloco de código projetado para ezecutar uma tarefa específica.

É como uma pequena "fábrica" onde se pode inserir uma entrada e uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo o código.

Uma função JavaScript é executada quando "algo"
a invoca (chama-a). 
*/

//Função de soma
function soma(valor1, valor2){
    return valor1 + valor2;
}

//Fução de cotação
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

alert("O valor em real é R$: " +valorReal+". O valor em dólar é: U$ "+total);

// Função evento

function alertHello(){
    alert("VOCÊ FOI HAQUEADO");
}

//Função com variável

function paraCelsius(fahrenheit, ){
    return (5/9) * (fahrenheit - 32);
}

var temperatura = paraCelsius(77);

alert("A temperatura é de " + temperatura + " graus celsius")