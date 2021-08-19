let openBtn = document.querySelector('.open')
let openMenu = document.querySelector('.player-full')
let closeMenu = document.querySelector('.close')

function open()  {
        openBtn.classList.add('_active')
        openMenu.classList.add('_active')
}

openBtn.addEventListener("click", open)

function close() {
        if (openMenu.classList.contains('_active')) {
                closeMenu.parentElement.classList.remove('_active')
        }
}

closeMenu.addEventListener('click', close)

