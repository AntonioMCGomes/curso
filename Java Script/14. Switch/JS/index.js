/*
Switch

É utilizado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condiçao não seja compatível, não haverá execução da condição e o valor padrão será acionado.

E Switch, os argumentos são literais, porque o comando usa "===" como operador. Assim, se uma variável contiver "0"(string) e o argumento dela um 0(inteiro), haverá erro no resultado desejado.  

*/

function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase()


    switch (cor){
        case "azul":
            //o que acontece
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            //o que acontece
            break;
        default:
        // o que acontece
            document.getElementById("teste").innerHTML = "Nenuma ação disponível para:" + cor;
    }
}