
let menuToogle = document.getElementById('menu-toogle')
let menuList = document.getElementById('menu-list')

menuToogle.addEventListener('click', () => {
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none'
    } else {
        menuList.style.display = 'block'
    }
})

menuToogle.addEventListener('click', (event) => {
    if (event.target.Tagname === 'A') {
        menuList.style.display = 'none'
    }    
})

