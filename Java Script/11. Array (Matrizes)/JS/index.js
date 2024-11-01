/*
Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que se dá aos dentro deles, os arrays não possuem propriedade. O item dentro é encontrado pela posiçção.

Imagine um array com uma lista de itens, com contro, por ordem de posisção dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) conterá o valor "arroz".
A lista[1] (lista na posição 0) conterá o valor "feijão".

*/

var lista = ["arroz", "feijão", "macarrão", "leite"];

//Para add um item usa-se o método push
//Também se usa assim: lista.lenght = "uva"

lista.push("queijo")
console.log(lista)
