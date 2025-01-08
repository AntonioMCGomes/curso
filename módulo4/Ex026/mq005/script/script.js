let menuImagem = document.getElementById('menu');
let menuList = document.getElementById('menuList');

menuImagem.addEventListener('click', () => {
    if(menuList.style.display == 'block') {
        menuList.style.display = 'none'
    } else{
        menuList.style.display = 'block'
    }
})

menuImagem.addEventListener('click', (event) => {
    if(event.target.Tagname === 'A'){
        menuList.style.display === 'none'
    } 
})


