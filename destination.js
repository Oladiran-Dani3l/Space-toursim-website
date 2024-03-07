const activeDestinationPage = window.location.pathname
const planetLinks = Array.from(document.querySelectorAll('.location'))

console.log(planetLinks)

planetLinks.forEach(link => {
    if (link.href.includes(`${activeDestinationPage}`)) {
        link.classList.add('active')
    }
})