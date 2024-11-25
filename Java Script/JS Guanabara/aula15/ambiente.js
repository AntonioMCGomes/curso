let num = [3, 4, 9, 14, 1, 5]
num.push(9) //adiciona ao fim da fila
num.sort() //organiza o vetor em ordem númerica
console.log(`Nosso vetor é o ${num}`)
num.length  //tamanho do vetor

for (var i = 0; i < num.length; i++){
    console.log(num[i])
}

num.indexOf(8) // para procurar valores pelo índice