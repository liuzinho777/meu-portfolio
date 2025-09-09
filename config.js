/**
 * ARQUIVO DE CONFIGURAÇÃO DO PORTFÓLIO
 * ====================================
 * 
 * Este é o ÚNICO arquivo que você precisa editar para personalizar seu portfólio!
 * Altere apenas as informações entre aspas, mantendo a estrutura do código.
 * 
 * Dicas:
 * - Para adicionar mais projetos, copie um objeto projeto e cole após o último
 * - Para adicionar mais habilidades, adicione itens no array skills
 * - URLs devem começar com https:// 
 * - Para ícones, use Font Awesome (https://fontawesome.com/icons)
 */

const portfolioConfig = {
    // ===== INFORMAÇÕES PESSOAIS =====
    pessoal: {
        nome: "Seu Nome Completo",
        titulo: "Desenvolvedor Frontend", // Ex: "Desenvolvedor Full Stack", "Designer UX/UI"
        descricao: "Apaixonado por tecnologia e sempre em busca de novos desafios. Especializado em criar experiências digitais incríveis.",
        
        // Sua foto de perfil (coloque na pasta 'assets/images/')
        foto: "assets/images/perfil.jpg",
        
        // Localização
        localizacao: "São Paulo, Brasil",
        
        // Status atual
        disponivel: true, // true = disponível para trabalho, false = indisponível
    },

    // ===== CONTATOS E REDES SOCIAIS =====
    contatos: {
        email: "seuemail@exemplo.com",
        telefone: "+55 (11) 99999-9999",
        linkedin: "https://linkedin.com/in/seuperfil",
        github: "https://github.com/seuusuario",
        instagram: "https://instagram.com/seuusuario", // Opcional
        twitter: "https://twitter.com/seuusuario", // Opcional
        website: "https://seusite.com", // Opcional
    },

    // ===== SOBRE VOCÊ =====
    sobre: {
        resumo: `
            Olá! Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras. 
            Com experiência em desenvolvimento web, busco sempre aprender novas tecnologias 
            e contribuir para projetos que fazem a diferença.
        `, 
        
        // Suas principais qualidades/características
        qualidades: [
            "Criativo e inovador",
            "Trabalho em equipe",
            "Resolução de problemas",
            "Aprendizado contínuo",
            "Comunicação eficaz"
        ]
    },

    // ===== SUAS HABILIDADES =====
    habilidades: [
        // Tecnologias que você domina
        { nome: "HTML5", experiencia: "2 anos", nivel: "Avançado", icone: "fab fa-html5", cor: "#E34F26" },
        { nome: "CSS3", experiencia: "2 anos", nivel: "Avançado", icone: "fab fa-css3-alt", cor: "#1572B6" },
        { nome: "JavaScript", experiencia: "1.5 anos", nivel: "Intermediário", icone: "fab fa-js-square", cor: "#F7DF1E" },
        { nome: "React", experiencia: "1 ano", nivel: "Intermediário", icone: "fab fa-react", cor: "#61DAFB" },
        { nome: "Node.js", experiencia: "8 meses", nivel: "Iniciante", icone: "fab fa-node-js", cor: "#339933" },
        { nome: "Git", experiencia: "1.5 anos", nivel: "Intermediário", icone: "fab fa-git-alt", cor: "#F05032" },
        
        // Adicione mais habilidades copiando a estrutura acima
        // { nome: "Python", experiencia: "6 meses", nivel: "Iniciante", icone: "fab fa-python", cor: "#3776AB" },
    ],

    // ===== SEUS PROJETOS =====
    projetos: [
        {
            titulo: "Sistema de Gerenciamento",
            descricao: "Aplicação web para gerenciar tarefas e projetos com interface moderna e intuitiva.",
            imagem: "assets/images/foto_projeto1.png", // Coloque a imagem na pasta assets/images/
            tecnologias: ["HTML", "CSS", "JavaScript", "Firebase"],
            linkDemo: "https://seusite.vercel.app", // Link para ver o projeto funcionando
            linkCodigo: "https://github.com/seuusuario/projeto1", // Link do GitHub
            destaque: true // true = aparece em destaque, false = projeto normal
        },
        {
            titulo: "Landing Page Responsiva",
            descricao: "Página de apresentação totalmente responsiva para uma empresa fictícia.",
            imagem: "assets/images/foto_projeto1.png",
            tecnologias: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            linkDemo: "https://seusite2.vercel.app",
            linkCodigo: "https://github.com/seuusuario/projeto2",
            destaque: false
        },
        {
            titulo: "Calculadora Avançada",
            descricao: "Calculadora com operações básicas e avançadas, histórico e temas personalizáveis.",
            imagem: "assets/images/foto_projeto1.png",
            tecnologias: ["JavaScript", "CSS Grid", "Local Storage"],
            linkDemo: "https://seusite3.vercel.app",
            linkCodigo: "https://github.com/seuusuario/projeto3",
            destaque: true
        }
        
        // Para adicionar mais projetos, copie a estrutura acima
    ],

    // ===== EXPERIÊNCIAS/TIMELINE =====
    experiencias: [
        {
            periodo: "2024 - Presente",
            cargo: "Desenvolvedor Frontend",
            empresa: "Empresa Exemplo",
            descricao: "Desenvolvimento de interfaces modernas e responsivas usando React e TypeScript.",
            tipo: "trabalho" // "trabalho", "educacao", "projeto"
        },
        {
            periodo: "2023 - 2024",
            cargo: "Estudante de Programação",
            empresa: "Curso Online",
            descricao: "Aprendizado intensivo em desenvolvimento web full stack.",
            tipo: "educacao"
        },
        {
            periodo: "2023",
            cargo: "Freelancer",
            empresa: "Projetos Pessoais",
            descricao: "Desenvolvimento de sites e aplicações para pequenos negócios.",
            tipo: "projeto"
        }
    ],

    // ===== CONFIGURAÇÕES DO SITE =====
    configuracoes: {
        // Cores do tema (você pode alterar para personalizar)
        tema: {
            corPrimaria: "#3498db",     // Azul
            corSecundaria: "#2c3e50",  // Azul escuro
            corDestaque: "#e74c3c",    // Vermelho
            corTexto: "#333333",       // Cinza escuro
            corFundo: "#ffffff"        // Branco
        },
        
        // Animações (true = ativadas, false = desativadas)
        animacoes: true,
        
        // Modo escuro disponível (true = sim, false = não)
        modoEscuro: true,
        
        // Mostrar seções (true = mostrar, false = ocultar)
        mostrarSecoes: {
            sobre: true,
            habilidades: true,
            projetos: true,
            experiencias: true,
            contato: true
        }
    }
};

// ===== NÃO ALTERE NADA ABAIXO DESTA LINHA =====
// Esta linha torna as configurações disponíveis para os outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
