

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/dia.png'
        document.body.style.background = '#f1f1de'
    } else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#eda592'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#2c2c5b'
    }
        
}
