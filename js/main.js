// Video Popup
const iframe = document.querySelector('#player-1')
const videoSrc = iframe.getAttribute('src') 
const videoPopup = document.querySelector('.video-popup')
const btnClose = document.querySelector('.video-popup-close')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.nav-link')
const navbarCollapse = document.querySelector('.navbar-collapse')
const toggleTheme = document.querySelector('.toggle-theme')
const body = document.querySelector('body')
const preLoader = document.querySelector('.preloader')

window.addEventListener('load', () => preLoader.remove())

document.querySelector('.video-btn-play').addEventListener('click', () => {
    videoPopup.classList.add('open')
    iframe.src = videoSrc
})

btnClose.addEventListener('click', () => {
    videoPopup.classList.remove('open')
    iframe.src = ""
})

// Scroll Navbar shrink 
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        navbar.classList.add('shrink')
    } else {
        navbar.classList.remove('shrink')
    }
})

//slove nav hiiden when click to nav-link
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        navbarCollapse.classList.remove('show')
    })
})

//Toggle Theme Light Dark
const showIcon = () => {
    if(body.classList.contains('dark')) {
        toggleTheme.querySelector('i').classList.remove('fa-moon')
        toggleTheme.querySelector('i').classList.add('fa-sun')
    } else {
        toggleTheme.querySelector('i').classList.remove('fa-sun')
        toggleTheme.querySelector('i').classList.add('fa-moon')
    }
}

const getLocalStore = () => {
    if(localStorage.getItem("theme-current") !== null) {
        if(localStorage.getItem("theme-current") === "dark") {
            body.classList.add("dark")
        }
    }
}

showIcon()
getLocalStore()

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark')
    if(body.classList.contains('dark')) {
        localStorage.setItem('theme-current', "dark")
    }else {
        localStorage.setItem('theme-current', "light")
    }
    showIcon()
})

