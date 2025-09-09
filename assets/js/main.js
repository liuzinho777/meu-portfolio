/**
 * ARQUIVO JAVASCRIPT PRINCIPAL
 * ============================
 * 
 * Este arquivo contém toda a funcionalidade interativa do portfólio.
 * Está organizado em seções para facilitar o entendimento:
 * 
 * 1. Carregamento das configurações
 * 2. Menu mobile e navegação
 * 3. Tema escuro/claro
 * 4. Scroll e animações
 * 5. Preenchimento dinâmico do conteúdo
 * 6. Formulário de contato
 */

/* ===== AGUARDAR CARREGAMENTO DA PÁGINA ===== */
/*
   O evento DOMContentLoaded garante que o JavaScript só execute
   depois que todo o HTML foi carregado
*/
document.addEventListener('DOMContentLoaded', function() {
    
    /* ===== INICIALIZAÇÃO ===== */
    initializePortfolio();
    
    /* ===== MENU MOBILE ===== */
    setupMobileMenu();
    
    /* ===== TEMA ESCURO/CLARO ===== */
    setupThemeToggle();
    
    /* ===== SCROLL E NAVEGAÇÃO ===== */
    setupScrollEffects();
    
    /* ===== FORMULÁRIO DE CONTATO ===== */
    setupContactForm();
});

/**
 * FUNÇÃO PRINCIPAL DE INICIALIZAÇÃO
 * =================================
 * Carrega todas as configurações do config.js e preenche o site
 */
function initializePortfolio() {
    // Verifica se as configurações foram carregadas
    if (typeof portfolioConfig === 'undefined') {
        console.error('Erro: Arquivo config.js não foi carregado!');
        return;
    }
    
    console.log('✅ Configurações carregadas com sucesso!');
    
    // Preenche todas as seções do site
    fillPersonalInfo();
    fillAboutSection();
    fillSkillsSection();
    fillProjectsSection();
    fillContactSection();
    fillSocialLinks();
    
    // Aplica tema personalizado se configurado
    applyCustomTheme();
}

/**
 * PREENCHIMENTO DE INFORMAÇÕES PESSOAIS
 * =====================================
 * Preenche nome, título, descrição e foto de perfil
 */
function fillPersonalInfo() {
    const config = portfolioConfig.pessoal;
    
    // Nome principal na seção home
    const homeName = document.getElementById('home-name');
    if (homeName) {
        homeName.textContent = `Olá, eu sou ${config.nome}`;
    }
    
    // Título/profissão
    const homeTitle = document.getElementById('home-title');
    if (homeTitle) {
        homeTitle.textContent = config.titulo;
    }
    
    // Descrição
    const homeDescription = document.getElementById('home-description');
    if (homeDescription) {
        homeDescription.textContent = config.descricao;
    }
    
    // Foto de perfil
    const profileImage = document.getElementById('profile-image');
    if (profileImage) {
        profileImage.setAttribute('href', config.foto);
    }
    
    // Nome no footer
    const footerName = document.getElementById('footer-name');
    if (footerName) {
        footerName.textContent = config.nome.split(' ')[0]; // Primeiro nome apenas
    }
    
    console.log('✅ Informações pessoais preenchidas');
}

/**
 * PREENCHIMENTO DA SEÇÃO SOBRE
 * ============================
 * Preenche a descrição e informações da seção "Sobre"
 */
function fillAboutSection() {
    const config = portfolioConfig.sobre;
    
    // Descrição sobre
    const aboutDescription = document.getElementById('about-description');
    if (aboutDescription) {
        aboutDescription.textContent = config.resumo.trim();
    }
    
    // Imagem sobre (usa a mesma foto de perfil)
    const aboutImage = document.getElementById('about-image');
    if (aboutImage) {
        aboutImage.src = portfolioConfig.pessoal.foto;
        aboutImage.alt = `Foto de ${portfolioConfig.pessoal.nome}`;
    }
    
    console.log('✅ Seção sobre preenchida');
}

/**
 * PREENCHIMENTO DA SEÇÃO HABILIDADES
 * ==================================
 * Cria dinamicamente as barras de habilidades
 */
function fillSkillsSection() {
    const skills = portfolioConfig.habilidades;
    const container = document.getElementById('skills-container');
    
    if (!container || !skills.length) return;
    
    // Limpa o container
    container.innerHTML = '';
    
    // Cria uma seção de habilidades
    const skillsContent = document.createElement('div');
    skillsContent.className = 'skills__content skills__open';
    
    // Cabeçalho da seção
    const skillsHeader = document.createElement('div');
    skillsHeader.className = 'skills__header';
    skillsHeader.innerHTML = `
        <i class="fas fa-code skills__icon"></i>
        <div>
            <h1 class="skills__title">Tecnologias</h1>
            <span class="skills__subtitle">Minhas habilidades técnicas</span>
        </div>
        <i class="fas fa-angle-down skills__arrow"></i>
    `;
    
    // Lista de habilidades
    const skillsList = document.createElement('div');
    skillsList.className = 'skills__list grid';
    
    // Adiciona cada habilidade
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skills__data';
        skillItem.innerHTML = `
            <div class="skills__card">
                <div class="skills__icon-wrapper">
                    <i class="${skill.icone}" style="color: ${skill.cor};"></i>
                </div>
                <div class="skills__info">
                    <h3 class="skills__name">${skill.nome}</h3>
                    <div class="skills__experience-info">
                        <span class="skills__experience-label">Experiência</span>
                        <span class="skills__experience-time">${skill.experiencia}</span>
                    </div>
                    <span class="skills__level skills__level--${skill.nivel.toLowerCase().replace('ç', 'c').replace('á', 'a')}">${skill.nivel}</span>
                </div>
            </div>
        `;
        skillsList.appendChild(skillItem);
    });
    
    // Monta a estrutura completa
    skillsContent.appendChild(skillsHeader);
    skillsContent.appendChild(skillsList);
    container.appendChild(skillsContent);
    
    console.log('✅ Seção habilidades preenchida');
}

/**
 * PREENCHIMENTO DA SEÇÃO PROJETOS
 * ===============================
 * Cria dinamicamente os cards de projetos
 */
function fillProjectsSection() {
    const projects = portfolioConfig.projetos;
    const container = document.getElementById('projects-container');
    
    if (!container || !projects.length) return;
    
    // Limpa o container
    container.innerHTML = '';
    
    // Adiciona cada projeto
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'work__card';
        
        // Adiciona classe especial para projetos em destaque
        if (project.destaque) {
            projectCard.classList.add('work__featured');
        }
        
        // Tecnologias como string
        const techString = project.tecnologias.join(' • ');
        
        projectCard.innerHTML = `
            <img src="${project.imagem}" alt="${project.titulo}" class="work__img">
            <h3 class="work__title">${project.titulo}</h3>
            <p class="work__description">${project.descricao}</p>
            <div class="work__tech">
                <small>${techString}</small>
            </div>
            <div class="work__buttons">
                <a href="${project.linkDemo}" class="work__button" target="_blank">
                    Ver Demo <i class="fas fa-arrow-right work__button-icon"></i>
                </a>
                <a href="${project.linkCodigo}" class="work__button" target="_blank">
                    Código <i class="fab fa-github work__button-icon"></i>
                </a>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
    
    console.log('✅ Seção projetos preenchida');
}

/**
 * PREENCHIMENTO DA SEÇÃO CONTATO
 * ==============================
 * Preenche informações de contato
 */
function fillContactSection() {
    const contacts = portfolioConfig.contatos;
    const personal = portfolioConfig.pessoal;
    
    // Telefone
    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) {
        contactPhone.textContent = contacts.telefone;
    }
    
    // Email
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
        contactEmail.textContent = contacts.email;
    }
    
    // Localização
    const contactLocation = document.getElementById('contact-location');
    if (contactLocation) {
        contactLocation.textContent = personal.localizacao;
    }
    
    console.log('✅ Seção contato preenchida');
}

/**
 * PREENCHIMENTO DOS LINKS SOCIAIS
 * ===============================
 * Preenche todos os links de redes sociais
 */
function fillSocialLinks() {
    const contacts = portfolioConfig.contatos;
    
    // Links da seção home
    const socialLinkedin = document.getElementById('social-linkedin');
    const socialGithub = document.getElementById('social-github');
    const socialInstagram = document.getElementById('social-instagram');
    
    if (socialLinkedin) socialLinkedin.href = contacts.linkedin;
    if (socialGithub) socialGithub.href = contacts.github;
    if (socialInstagram) socialInstagram.href = contacts.instagram;
    
    // Links do header/navegação
    const navSocialLinkedin = document.getElementById('nav-social-linkedin');
    const navSocialGithub = document.getElementById('nav-social-github');
    const navSocialInstagram = document.getElementById('nav-social-instagram');
    
    if (navSocialLinkedin) navSocialLinkedin.href = contacts.linkedin;
    if (navSocialGithub) navSocialGithub.href = contacts.github;
    if (navSocialInstagram) navSocialInstagram.href = contacts.instagram;
    
    // Links do footer
    const footerLinkedin = document.getElementById('footer-linkedin');
    const footerGithub = document.getElementById('footer-github');
    const footerInstagram = document.getElementById('footer-instagram');
    
    if (footerLinkedin) footerLinkedin.href = contacts.linkedin;
    if (footerGithub) footerGithub.href = contacts.github;
    if (footerInstagram) footerInstagram.href = contacts.instagram;
    
    console.log('✅ Links sociais preenchidos');
}

/**
 * APLICAÇÃO DE TEMA PERSONALIZADO
 * ===============================
 * Aplica cores personalizadas do config.js
 */
function applyCustomTheme() {
    const theme = portfolioConfig.configuracoes.tema;
    const root = document.documentElement;
    
    // Converte cores hex para HSL se necessário
    // Por simplicidade, vamos aplicar diretamente as cores
    root.style.setProperty('--first-color', theme.corPrimaria);
    root.style.setProperty('--first-color-alt', theme.corSecundaria);
    root.style.setProperty('--title-color', theme.corTexto);
    
    console.log('✅ Tema personalizado aplicado');
}

/**
 * CONFIGURAÇÃO DO MENU MOBILE
 * ===========================
 * Controla abertura e fechamento do menu em dispositivos móveis
 */
function setupMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Abrir menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    
    // Fechar menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
    
    console.log('✅ Menu mobile configurado');
}

/**
 * CONFIGURAÇÃO DO TOGGLE DE TEMA
 * ==============================
 * Permite alternar entre tema claro e escuro
 */
function setupThemeToggle() {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'fas fa-sun';
    
    // Verifica se o modo escuro está habilitado no config
    if (!portfolioConfig.configuracoes.modoEscuro) {
        if (themeButton) themeButton.style.display = 'none';
        return;
    }
    
    // Tema selecionado anteriormente (se houver)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    
    // Obtém o tema atual
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fas fa-moon' : 'fas fa-sun';
    
    // Valida o tema e ícone selecionados anteriormente
    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'fas fa-moon' ? 'add' : 'remove'](iconTheme);
    }
    
    // Ativa/desativa o tema manualmente com o botão
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            // Adiciona ou remove o tema escuro
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            
            // Salva o tema e ícone atuais
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
        });
    }
    
    console.log('✅ Toggle de tema configurado');
}

/**
 * CONFIGURAÇÃO DOS EFEITOS DE SCROLL
 * ==================================
 * Controla navegação ativa, header scroll e botão "voltar ao topo"
 */
function setupScrollEffects() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.getElementById('header');
    const scrollUp = document.getElementById('scroll-up');
    
    // Função para destacar seção ativa na navegação
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove classe ativa de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                });
                
                // Adiciona classe ativa ao link correspondente
                const activeLink = document.querySelector('.nav__link[href*=' + sectionId + ']');
                if (activeLink) {
                    activeLink.classList.add('active-link');
                }
            }
        });
    }
    
    // Função para mudar cor do header no scroll
    function scrollHeader() {
        if (this.scrollY >= 80) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }
    
    // Função para mostrar/esconder botão "voltar ao topo"
    function scrollTop() {
        if (this.scrollY >= 560) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }
    
    // Event listeners para scroll
    window.addEventListener('scroll', scrollActive);
    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('scroll', scrollTop);
    
    console.log('✅ Efeitos de scroll configurados');
}

/**
 * CONFIGURAÇÃO DO FORMULÁRIO DE CONTATO
 * =====================================
 * Adiciona validação e envio do formulário
 */
function setupContactForm() {
    const contactForm = document.querySelector('.contact__form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtém os valores dos campos
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email-form').value.trim();
        const project = document.getElementById('contact-project').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        
        // Validação básica
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Simula envio do formulário
        // Em um projeto real, você enviaria para um servidor
        alert('Mensagem enviada com sucesso! Retornarei em breve.');
        
        // Limpa o formulário
        contactForm.reset();
        
        // Aqui você pode integrar com serviços como:
        // - Formspree (https://formspree.io/)
        // - EmailJS (https://www.emailjs.com/)
        // - Netlify Forms
        
        console.log('📧 Formulário enviado:', { name, email, project, message });
    });
    
    console.log('✅ Formulário de contato configurado');
}

/**
 * FUNÇÕES UTILITÁRIAS
 * ===================
 * Funções auxiliares que podem ser úteis
 */

// Função para scroll suave para uma seção específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para mostrar mensagem de carregamento
function showLoading(message = 'Carregando...') {
    console.log(`⏳ ${message}`);
}

// Função para log de erros
function logError(error, context = '') {
    console.error(`❌ Erro ${context}:`, error);
}

// Função para verificar se um elemento está visível na tela
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * ANIMAÇÕES ADICIONAIS (OPCIONAL)
 * ===============================
 * Adiciona animações quando elementos entram na tela
 */
function setupScrollAnimations() {
    // Só executa se as animações estiverem habilitadas
    if (!portfolioConfig.configuracoes.animacoes) return;
    
    const animatedElements = document.querySelectorAll('.skills__data, .work__card, .about__img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    console.log('✅ Animações de scroll configuradas');
}

// Inicializa animações após carregamento
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(setupScrollAnimations, 1000);
});

console.log('🚀 JavaScript do portfólio carregado com sucesso!');
