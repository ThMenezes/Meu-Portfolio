const MENU = document.querySelector('#menu-mobile')
const LOGO_MENU = document.querySelector('.logo-menu')
const EXIT = document.querySelector('#menu-x')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

LOGO_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

