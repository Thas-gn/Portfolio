//Smooth scroll pour les liens internes

document.querySelectorAll('a[href^="#"]').forEach(a =>{
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView(
            {behavior: 'smooth'}
        )
    });
});


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector('nav ul');
//Ajoute un événement au click

menuToggle.addEventListener('click',() =>{
    navMenu.classList.toggle('active');
});