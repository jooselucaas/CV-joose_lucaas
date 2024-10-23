// Função para alternar o menu
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menuIcon');
    const welcomeMessage = document.querySelector('.welcome-message');
    const hrElement = document.querySelector('.header-line');
    const body = document.body; // Adiciona a referência ao body

    navbar.classList.toggle('open');

    // Alterna a classe 'no-scroll' no body
    body.classList.toggle('no-scroll', navbar.classList.contains('open'));

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

// Função para alternar o tema
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

// Executa ao carregar a página
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    const navbar = document.getElementById('navbar');
    const welcomeMessage = document.querySelector('.welcome-message');
    const hrElement = document.querySelector('.header-line');

    // Configuração inicial da navbar
    if (navbar.classList.contains('open')) {
        welcomeMessage.style.display = 'block';
        hrElement.classList.add('hidden');
    } else {
        welcomeMessage.style.display = 'none';
        hrElement.classList.remove('hidden');
    }
};


const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.ver-mais').forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
        const project = button.dataset.project;
        if (project === 'movieGuide') {
            modal.querySelector('h1').textContent = 'The Movie Guide';
            modal.querySelector('h3').textContent = '17 de Março de 2022';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
