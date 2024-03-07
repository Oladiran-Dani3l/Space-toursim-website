const activeCrewPage = window.location.pathname
const crewMembers = Array.from(document.querySelectorAll('.switch-btn'))

console.log(crewMembers)

crewMembers.forEach(link => {
    if (link.href.includes(`${activeCrewPage}`)) {
        link.classList.add('active')
    }
})