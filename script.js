const hamburgerMenu = document.querySelector('.open')

const mobileNav = document.querySelector('.mobile-buttons')

const closeMenu = document.querySelector('.close')
const navBar = document.querySelector('.nav-bar')


const activePage = window.location.pathname
const navLinks = Array.from(document.querySelectorAll('.nav-links'))


// // Controlling the open and close menu for mobile phone devices
    mobileNav.addEventListener('click', () => {

    navBar.classList.toggle('open-menu')

    if (navBar.classList.contains('open-menu') ) {
        //Toggle the menu options
        navBar.classList.remove('close-menu')

        //Toggle between the close and hamburger button
        hamburgerMenu.classList.add('closed')
        closeMenu.classList.add('opened')

    } else {
        navBar.classList.add('close-menu')

        
        //Toggle between the close and hamburger button
        hamburgerMenu.classList.add('opened')
        closeMenu.classList.add('closed')
    }
    })


navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
})