/*
Métodos ou funções prontas

método "join": troca o separador entre os elementos da array;
Ex: 

const pessoa = ["Antonio", "Marcio", "Canuto", "Gomes"];
document.getElementById("teste")innerHTML = pessoa.join(" - ");

método "pop": para remover o último item de uma matriz.

pessoa.pop();

método "shift": para remover o primeiro item da matriz;

pessoa.shift();

método push: para adicionar um item ao final da lista;

pessoa.push();

método "unshift": para adicionar um item ao começo da lista.

pessoa.unshift();

método "delete": para deletar o primeiro item da lista.

delete pessoa[0];

Obs.: esse método removerá o item, entretanto permanecerá a oposição que o alocava, sendo referida posteriormente como undefined 

método "splice": adiciona múltiplos valores à matriz.

pessoa.splice(1, 0, "Almeida")
obs.: dentro do parêntese, o primeiro argumento requer a posição do item a ser adicionado; depois, a quantidade de itens a serem deletados, pois esse método sobrescreve; e, por último, o valor do item a ser adicionado. 

método "concat": para juntar duas matrizes.

const pessoa1 = ["Antonio", "Marcio", "Canuto", "Gomes"];

const pessoa2 = ["Rose", "Almeida"];

const casado = pessoa1.concat(pessoa2);

método "slice": para fatiar a matriz.

const casal = [
    "Gomes",
    "Marcio",
    "Rose",
    "Almeida",
];

const primeiro_nome = casal.splice(2, 6)
obs.: Dentro do parênteses, o primeiro item aponta o início do fatiamento; e o segundo, o fim, excluindo-se o da posição apontada;

método "sort": para ordenar a lista por ordem alfabética.

const casal = [
    "Gomes",
    "Marcio",
    "Rose",
    "Almeida",
];

casal.sort()

>> Resultado: Almeida, Gomes, Márcio, Rose

casal.reverse()

Obs.: para a ordenação numérica crescente é preciso usar uma função comparativa:

matriz.sort(function (a, b) {return a - b})

método "reverse": para colocar a ordem alfabética em ordem decrescente.

Obs.: para a ordenação numérica decrescente é preciso usar uma função comparativa:

matriz.sort(function (a, b) {return b - a})

Para encontrar o maior número de uma matriz, usa-se, entre outros métodos, esta função:

function MaiorNumero(array){
    return Math.max.apply(null, array);

Para encontrar o menor número de uma matriz, usa-se, entre outros métodos, esta função:

function MenorNumero(array){
    return Math.min.apply(null, array);
}

Para fazer uma filtrage em uma matriz, usa-se, entre outros métodos, esta função:

cria-se uma variável:

const maior20 = numeros.filter(filtragem())

function filtragem(value, index, array) {
    return value > 20;
}





*/

