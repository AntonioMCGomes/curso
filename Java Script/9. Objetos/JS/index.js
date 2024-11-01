/*

Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca: "ford", modelo: "Ka", ano: 2015}

Objetos também podem ter métodos. Um método é uma função colocada dentro de uma propriedade. 

Nas definições do objeto, temos a propriedade e o seu respectivo valor. 

É comum, em JavaScript, usar o const para definir objetos.

Quando o objeto já possui todas as suas propriedades definidas, diz-se que é um objeto literal.

Entretanto, há objetos não literais, para os quais os valores são gerados de forma dinâmica. 

Os métodos do objeto são definidos dentro do bloco de código em que ele está.
*/

const carro = {
    marca: "ford", 
    modelo: "Ka", 
    ano: 2015, 
    placa: "ABC-1234",
    buzina: function() {alert("Biiiiiiiiiii")},
    completo: function() {
        return "A marca é " +this.marca+ " e o modelo é "+this.modelo;
    }
};

console.log(carro.completo());
carro.buzina(); //Para chamar o método