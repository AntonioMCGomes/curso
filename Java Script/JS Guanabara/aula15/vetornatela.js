let valores = [1, 4, 8 , 3, 34, 12]

/*for (var c = 0; c < valores.length; c++){
    console.log(`A posição ${c} tem o valor ${valores[c]}.`)
}
*/

for (let c in valores){
    console.log(`A posição ${c} tem o valor ${valores[c]}.`)
}

//Só funciona para arrays e objetos.

