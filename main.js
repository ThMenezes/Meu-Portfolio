const menu = document.querySelector('#menu-mobile')
const logo_menu = document.querySelector('.logo-menu')
const menux = document.querySelector('#menu-x')

function abrirMenuMobile() {
    menu.classList.remove('display-menu')
}

function fecharMenuMobile() {
    menu.classList.add('display-menu')
}

logo_menu.onclick = abrirMenuMobile
menux.onclick = fecharMenuMobile