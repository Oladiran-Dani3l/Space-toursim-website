const activeTechPage = window.location.pathname
const numberLinks = Array.from(document.querySelectorAll('.num-btn>a'))
const numberButtons = Array.from(document.querySelectorAll('.num-btn'))

console.log(numberButtons)
console.log(numberLinks.parentelement)

numberLinks.forEach(link => {
    if (link.href.includes(`${activeTechPage}`)) {
        link.classList.add('active')
        link.parentElement.classList.add('active')
    }
})
