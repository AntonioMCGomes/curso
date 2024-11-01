/*

var interruptor = "on";

if (interruptor == "on"){
    alert('A lâmpada está ligada');

} else{
    alert('A lâmpada está desligada');
}

var hora = new Date().gethour();
alert(hora);

Em JavaScritp, as condições são informada entre parênteses. O "elif" em Python é escrito em sua forma não contraída "else if".

if (hora < 12){
    alert('Bom dia');
} else if(hora < 18){
    alert('Boa tarde');
} else{
    alert('Boa noite');
}

As condições em JavaScript são importantes para a criação de formulários.

*/

function verificar(){
    let nome = document.getElementById("nome").value;
    
    if (nome == "" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Informções enviadas";
        p.style.color = "green";
    }
}