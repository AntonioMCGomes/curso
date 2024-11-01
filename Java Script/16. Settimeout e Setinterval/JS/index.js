/* Eventos de Tempo com JavaScript

Os eventos de tempo permite a execução do código em intervalos de temop especificados. Esses intervalos de tempo são chamados de enventos de cronometragem.

Os dois métodos-chave para usar com Java-script são:

setTimeout (function, tempo em milissegundos)
    -> Executa uma função depois de esperar um número especificado de milissegundos.

setInterval(function, milissegundos)
    -> É o mesmo que setTimeout(), mas repete a execução da função continuamente. 

            SetTimeout

function ativarContagem(){
    document.getElementById('tempo').innerHTML = 
    "Começou a contagem";
    //Ativa a função uma vez no tempo especificado.
    tempo = setTimeout(function(){document.getElementById('tempo').innerHTML = "Executou o setTimeout";}, 5000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "A contagem parou"
}

*/

            //SetInterval

function ativarContagem() {
    tempo = setInterval(function() {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000)

}

function pararContagem() {
    clearInterval(tempo)
}


