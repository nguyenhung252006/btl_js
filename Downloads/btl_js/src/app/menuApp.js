const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('#menu')
const selectMenu = $('.select')


document.addEventListener('DOMContentLoaded', () => {
    menu.addEventListener('mouseenter', () => {
        selectMenu.classList.add('show')
    })
    menu.addEventListener('mouseleave', () => {
        selectMenu.classList.remove('show')
    })
})