/* JSON


JSON significa JavaScript Object Notation, que traduzido ao Português fica algo como notação de objeto JavaScript. 

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto; e o contrátio também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por, praticamente, toda linguagem de programação.

Para trabalhar com JSON no JavaScript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos;

JSON.stringfy() -> Converte objetos em texto padrão JSON;


const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2024,
    motor: ["1.6", "1.4", "1.0"]
};
//Converteu para texto JSON
let texto = JSON.stringify(carro);

//Inseriu o texto no HTML
document.getElementById('area').innerHTML = texto;

//Converteu texto em Objeto
let obj = JSON.parse(texto);

//Pegou-se um valor do objeto
console.log(obj.marca);
console.log(obj.motor[2])


const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/15500-004/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('area').innerHTML = this.responseText;
    let objeto = JSON.parse(this.responseText);
    //alert(objeto.ddd); 
}

*/


function buscarCep(){
    let input = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ input +'/json/');
    ajax.send();

    ajax.onload = function(){
        //document.getElementById('texto').innerHTML = this.responseText;

        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "logradouro:" + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
        
    }

}
