
const menuButton    = document.querySelector('.menuToggler')
const menuButtonIcon    = menuButton.querySelector('i')
const sidebar       = document.querySelector('.sidebar')

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('opened')
    menuButton.classList.toggle('toggle')
    menuButtonIcon.classList.replace('fa-bars', 'fa-times')
})


const subLinkOpener = document.querySelector('.subLinkOpener')
const subLink = subLinkOpener.nextElementSibling
const arrow = subLinkOpener.querySelector('.arrow')

console.log(arrow)

subLinkOpener.addEventListener('click', () => {
    subLink.classList.toggle('opened')
    arrow.classList.toggle('opened')
})
