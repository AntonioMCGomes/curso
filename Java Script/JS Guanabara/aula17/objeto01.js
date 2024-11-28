let amigo = {nome: 'José', 
    peso: 96, 
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
    }

amigo.engordar(2)
for (c in amigo){
    console.log(c, amigo[c])
}
