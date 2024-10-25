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


// Modal e botão de fechar
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close');

// Dados dos projetos
const projects = {
    movieGuide: {
        title: 'Site para Advogados',
        date: '17 de Março de 2022',
        description: 'Este site foi criado para advogados que desejam uma presença digital moderna e profissional. Com design responsivo, inclui um Formulário de Contato para consultas rápidas, Integração com Google Maps para fácil localização do escritório e uma Seção de Serviços detalhada. É uma solução prática para destacar serviços jurídicos e atrair novos clientes.',
        video: 'img/Site para Advogados.mp4',
        projectLink: '#',
        repoLink: '#',
        linkedinLink: '#'
    },
    dailyWeather: {
        title: 'Agência de Desenvolvimento Web',
        date: '28 de Outubro de 2021',
        description: 'Este site da Zone of Tech apresenta a agência de desenvolvimento web com um design moderno e intuitivo. Criado para exibir trabalhos realizados e atrair novos clientes, o site inclui um portfólio detalhado de projetos e uma seção de contato direto, oferecendo soluções inovadoras e de alta qualidade em desenvolvimento web.',
        video: 'img/Agência Zot.mp4',
        projectLink: '#',
        repoLink: '#',
        linkedinLink: '#'
    },
    calculadora: {
        title: 'Site para Fotógrafo',
        date: '19 de Outubro de 2024',
        description: 'Este site destaca o portfólio do fotógrafo Romário, com um design visualmente atraente e elegante. Apresentando seus melhores trabalhos e uma seção de contato direto, o site é ideal para clientes que buscam serviços fotográficos profissionais e de alta qualidade.',
        video: 'img/Site para Fotógrafo.mp4',
        projectLink: '#',
        repoLink: '#',
        linkedinLink: '#'
    }
};

// Função para abrir o modal e preencher os dados do projeto
document.querySelectorAll('.ver-mais').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.dataset.project;
        const project = projects[projectId];
        
        if (project) {
            // Preencher o conteúdo do modal
            modal.querySelector('h1').textContent = project.title;
            modal.querySelector('h3').textContent = project.date;
            modal.querySelector('p').textContent = project.description;

            // Atualizar vídeo
            modal.querySelector('#video-source').src = project.video;
            modal.querySelector('video').load(); // Para recarregar o vídeo no modal

            // Atualizar links
            modal.querySelector('#project-link').href = project.projectLink;
            modal.querySelector('#repo-link').href = project.repoLink;
            modal.querySelector('#linkedin-link').href = project.linkedinLink;

            // Abrir o modal
            modal.style.display = 'block';
            document.body.classList.add('modal-open'); // Desabilitar o scroll
        }
    });
});

// Fechar o modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Reativar o scroll
});

// Fechar modal clicando fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Reativar o scroll ao fechar clicando fora
    }
});
