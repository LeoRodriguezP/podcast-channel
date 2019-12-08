let menuIcon = document.getElementById('menu-icon');
let ulMenu = document.querySelector(".nav-container ul");

// Evento para abrir y cerrar el menú de navegación
menuIcon.addEventListener('click', e => {
    if ([...menuIcon.classList].includes('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        ulMenu.style.display = 'block';
    } else if ([...menuIcon.classList].includes('fa-times')) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        ulMenu.style.display = '';
    }
});

// Ocultar el menú de navegación cuando se da click en algún enlace
ulMenu.addEventListener('click', e => {
    if (e.target.nodeName === "A") {
        ulMenu.style.display = '';
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});