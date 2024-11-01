/*                  Classes

Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito antigo em programação e várias linguagens utilizam-nas. Mas no JavaScript isso é relativamente novo, por isso mesmo programadores expedientes não sabem bem como usá-la.

Basicamente, as classes são como "fábricas" para criar objetos. Pode-se dizer que são "funções especiais" para criar objetos.

Assim como um fábrica da vida real precisa das máquinas para construir os objetos, as Classes no JavaScript usam um método chamado constructor() para fabricar os objetos.


*/

class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " Buzinou: Biiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const astra = new Carro("Opel", "Astra", 2004);

console.log(uno)
astra.ano = 2015
console.log(astra);
