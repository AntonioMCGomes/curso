let adicionar = document.getElementById('num')
let list = document.getElementById('list')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}


function add(){
    if (isNumero(num.value) && !inLista(num.value, valores)) { //! Não
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado em lista.')
    }
    num.value = ''
    num.focus()
}



function end(){
    if (valores.length == 0){
        alert(`Adicione valores antes de finalizar!`)
    } else{
        res.innerHTML = ''
        maior = valores[0]
        menor = valores[0]
        c = 0
        soma = 0
        for(let v in valores){
            c += 1
            soma += valores[v]
            if (valores[v] > maior){
                maior = valores[v]
            } if (valores[v] < menor){
                menor = valores[v]
            }
        }
    }   res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${c} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${soma/c}</p>`
}

