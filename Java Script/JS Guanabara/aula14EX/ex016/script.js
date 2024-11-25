
function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = `Impossível contar`
        alert('Erro! Faltam dados.')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0){
            alert('Passo inválido! Será atribuído 1 como passo.')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for (let c = i; c <= f; c+=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        
        } else{
            //Contagem regressiva
            for (c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML +=`\u{1F3C1}`
        
    }
}


