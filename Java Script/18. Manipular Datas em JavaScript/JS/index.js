/* Manipular Datas em JavaScript*/

//Comando base para utilizar a data

let data = new Date();
//console.log(data);

//Usar o ano atual
let ano = data.getFullYear();
//console.log(ano);

//Usa o mês atual -  a conta de 0 até 11;
let mes = data.getMonth();
//console.log(mes+1);

const mesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesDoAno[data.getMonth()];
//console.log(mesEscrito);

//Dia do mês

let diaMes = data.getDate();
//console.log(diaMes);

//Dia da semana

let diaSemana = data.getDay();
//console.log(diaSemana+1)

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let dia = diasDaSemana[data.getDay()];
//console.log(dia)

//Hora - De 0 às 23

let hora = data.getHours();
//console.log(hora)

let minutos = data.getMinutes();
//console.log(minutos)

//Segundos - 0 a 59

let segundos = data.getSeconds();
//console.log(segundos)

//Milissegundos - 0 a 999

let milissegundos = data.getMilliseconds();
//console.log(milissegundos)


//Data em padrão brasileiro - Dia/Mês/Ano

let  = dataBR = data.toLocaleString('pt-BR'); //Apenas a data ('pt-BR, {dateStyle: 'short'}'); Apenas a hora('pt-BR, {timeStyle: 'short'}')
//console.log(dataBR)

//Outra forma de mostrar data padrão Brasil - usar os valores de forma separada

d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {return x < 10 ? '0' + x : '' + x;};

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

//Comparar Datas - Maior ou Menor, ex: Vencimentos.

var hoje = new Date();
var vencimento = new Date(2023, 11, 25);

if (hoje > vencimento){
    console.log('Sua conta está vencida.');
} else {
    console.log('A conta ainda não venceu')
}

//Diferença entre duas datas em dias

var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 25);
//Diferença em milissegundos
diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 *1000));
console.log(diferencaDias + " dias para o Natal");
