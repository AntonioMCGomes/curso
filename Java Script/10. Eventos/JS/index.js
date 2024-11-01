/*
Eventos são ações disparadas pela interação dos usuários na página. É o correto manejo desses eventos que tornam as páginas interativa e dinâmicas. 

Existem muitos eventos. Veja os mais utilizados.

    onclick -> Disparado quando recebe um click;
    ondblclick -> Disparado quando clique duplo;
    onmouseover -> Disparado quando o mouse está sobre o elemento.
    onmouseout -> Disparado quando o mouse é movido para fora do elemento
    onmousemmove;
    onmousemove -> Disparado quando mouse é movido no elemento;
    onmousedown -> Disparado quando o clique do botaão foi pressionado;
    onmouseup -> Disparado quando clique do botão é liberado;
    onfocus -> Disparado quando o elemento recebe o foco. Vaálido para input, 
    onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar";
    onblur -> Disparado quando o elemento perde o foco;
    onkeydown -> Disparado quando uma tecla é pressionada;
    onkeypress -> Disparado quando um tecla é pressionada e solta;
    onkeyup -> Disparado quando uma tecla é solta sobre um elemento;
    onload -> Disparado quando a página terminou de ser carregada. Body;
    onresize -> Disparado quando há um redimencionamento da janela.
*/


function eventoClick() {
    //alert('Um evento click foi acionado');
    document.body.style.backgroundColor = "yellow";
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('O mouse moveu<br>');

}

function limpaTexto() {
    document.getElementById("campoTexto").value = "";
}

function mudou() {
    console.log('Mudou')
}

function teclaPressionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input)
}