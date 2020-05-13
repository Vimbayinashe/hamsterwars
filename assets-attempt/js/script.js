

// works
window.addEventListener('load', () => {
    
    console.log('hello')
})

// doesn't work
document.querySelector('h1').addEventListener('DOMContentLoaded', (e) => {

    console.log('hello DOM')
})
