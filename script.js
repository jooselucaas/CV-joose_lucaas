function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menuIcon');
    const welcomeMessage = document.querySelector('.welcome-message');
    const hrElement = document.querySelector('.header-line');

    navbar.classList.toggle('open');

    if (navbar.classList.contains('open')) {
        menuIcon.innerHTML = '✖';
        welcomeMessage.style.display = 'block';
        hrElement.classList.add('hidden');
    } else {
        menuIcon.innerHTML = '&#9776;';
        welcomeMessage.style.display = 'none';
        hrElement.classList.remove('hidden');
    }
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    const navbar = document.getElementById('navbar');
    const welcomeMessage = document.querySelector('.welcome-message');
    const hrElement = document.querySelector('.header-line');

    if (navbar.classList.contains('open')) {
        welcomeMessage.style.display = 'block';
        hrElement.classList.add('hidden');
    } else {
        welcomeMessage.style.display = 'none';
        hrElement.classList.remove('hidden');
    }
};

// Adiciona o evento de clique ao botão de troca de tema
document.getElementById('themeToggleButton').addEventListener('click', toggleTheme);
