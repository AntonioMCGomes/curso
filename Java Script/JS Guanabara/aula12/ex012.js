var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são ${hora}.`)


if (hora >= 1 && hora < 6){
    console.log(`A essa hora, todos os gatos são pretos.`)
} else if (hora < 12) {
    console.log(`bom dia!`)
} else if (hora <= 18){
    console.log(`Boa tarde!`)
} else{
    console.log(`Boa noite!`)
}