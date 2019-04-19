// Open Sidebar
const menuButton = document.querySelector('.menuToggler')
const menuButtonIcon = menuButton.querySelector('i')
const sidebar = document.querySelector('.sidebar')

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('opened')
    menuButton.classList.toggle('toggle')
    menuButtonIcon.classList.replace('fa-bars', 'fa-times')
})


// open Menu
const subLinkOpener = document.querySelector('.subLinkOpener')
const subLink = subLinkOpener.nextElementSibling
const arrow = subLinkOpener.querySelector('.arrow')

subLinkOpener.addEventListener('click', () => {
    subLink.classList.toggle('opened')
    arrow.classList.toggle('opened')
})


const checkEmpty = (el) => {
    if (el.value == "") {
        console.log("this input is empty")
        el.classList.add('is-invalid')
        el.classList.remove('is-valid')
    } else {
        console.log("this input is full")
        el.classList.remove('is-invalid')
        el.classList.add('is-valid')
    }
}

const checkEmail = (el) => {

    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (el.value == "") {
        console.log("this input is empty")
        el.classList.add('is-invalid')
        el.classList.remove('is-valid')
    } else if (!regex.test(el.value)) {
        console.log('TEST FAILED')
        el.classList.add('is-invalid')
        el.classList.remove('is-valid')
    } else {
        console.log("DONE !")
        el.classList.remove('is-invalid')
        el.classList.add('is-valid')
    }

}

const passLaws = document.querySelector('.passLaws')
const law1 = passLaws.querySelector('.one')
const law2 = passLaws.querySelector('.two')
const law3 = passLaws.querySelector('.three')
const law4 = passLaws.querySelector('.four')

const checkPass = (el) => {

    if (el.value == "") {
        console.log("this input is empty")
        el.classList.add('is-invalid')
        el.classList.remove('is-valid')
    } else {
        console.log("this input is full")
        el.classList.remove('is-invalid')
    } 
    
    if ( /[a-z]/.test(el.value) ) {
        law1.classList.add('passed')
        console.log('lowercase')
    } else {
        law1.classList.remove('passed')
        console.log('NO lowercase')
    }

    if ( /[A-Z]/.test(el.value) ) {
        law2.classList.add('passed')
        console.log('Uppercase')
    } else {
        law2.classList.remove('passed')
        console.log('NO Uppercase')
    }

    if ( /[0-9]/.test(el.value) ) {
        law3.classList.add('passed')
        console.log('Number')
    } else {
        law3.classList.remove('passed')
        console.log('NO Number')
    }

    if(el.value.length >= 6) {
        law4.classList.add('passed')
        console.log('More Than 6')
    }else {
        law4.classList.remove('passed')
        console.log('less than 6')
    }
}