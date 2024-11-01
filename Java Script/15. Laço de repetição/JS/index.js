/* Laçoes de repetição

Laços oferecem uma forma fácil e rápida de executar uma ação repetidas vezes.



for (let i=0; i < 10001; i++){
    document.getElementById("teste").innerHTML += i +", ";

}



//Diferente do laço anterior, o iterador do laço abaixo retira um valor (--) a cada laço enquanto a condição for verdadeira.

var ano = new Date().getFullYear();

for (let i = ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

*/

const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];

var tamanho = carros.length;

for (i = 0; i < tamanho; i++){
    document.getElementById("carro").innerHTML += "<option value = '"+carros[i]+"'>"+carros[i]+"</option>";

}
