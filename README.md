# 🚀 Template de Portfólio Profissional - Semana Técnica Etec

## 📚 Sobre o Evento

Este projeto faz parte da **Semana Técnica da Etec de Taboão da Serra** que acontece nos dias **10/09/2025 e 11/09/2025**.

A **Semana Técnica** é um evento anual que conecta os alunos ao universo da tecnologia e da inovação, trazendo palestras, oficinas práticas, maratonas e mostras de projetos. É uma oportunidade única para ampliar conhecimentos, desenvolver novas habilidades e trocar experiências com profissionais da área.

## 🎯 Objetivo da Oficina

**Aprenda a criar e organizar um portfólio profissional para exibir seus projetos, valorizar suas habilidades e se destacar no mercado de trabalho.**

Nesta oficina você aprenderá:
- ✅ Como fazer fork do projeto no GitHub
- ✅ Personalizar seu portfólio com suas informações
- ✅ Fazer deploy gratuito na Vercel
- ✅ Organizar e apresentar seus projetos profissionalmente
- ✅ Otimizar seu portfólio para recrutadores

## 📋 Sobre Este Template

Este template foi desenvolvido com foco na **educação** e **aplicação prática**. Ele permite que você:

- ✅ Personalize facilmente suas informações
- ✅ Aprenda HTML, CSS e JavaScript na prática
- ✅ Entenda como fazer deploy na Vercel
- ✅ Pratique o uso do Git e GitHub
- ✅ Tenha um portfólio profissional em minutos

## 🎯 Como Usar Este Template

### Passo 1: Fork do Repositório
1. Clique no botão **"Fork"** no GitHub
2. Isso criará uma cópia do template na sua conta

### Passo 2: Clone para Seu Computador
```bash
git clone https://github.com/SEU-USUARIO/template-portfolio.git
cd template-portfolio
```

### Passo 3: Personalize Suas Informações
**⚠️ IMPORTANTE: Você só precisa editar o arquivo `config.js`!**

Abra o arquivo `config.js` e altere:
- ✏️ Seu nome e título profissional
- ✏️ Descrição pessoal
- ✏️ Informações de contato
- ✏️ Links das redes sociais
- ✏️ Suas habilidades e níveis
- ✏️ Seus projetos
- ✏️ Experiências profissionais

### Passo 4: Adicione Suas Imagens
Coloque suas imagens na pasta `assets/images/`:
- `perfil.jpg` - Sua foto de perfil
- `about.jpg` - Foto para seção "Sobre"
- `projeto1.jpg`, `projeto2.jpg`, etc. - Screenshots dos seus projetos

### Passo 5: Teste Localmente
Abra o arquivo `index.html` no seu navegador para ver como ficou!

### Passo 6: Faça Deploy na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta do GitHub
3. Importe seu repositório
4. Clique em "Deploy"
5. Pronto! Seu portfólio estará online

## 📁 Estrutura do Projeto

```
template-portfolio/
├── 📄 index.html          # Página principal (HTML estruturado)
├── 📄 config.js           # ⭐ ÚNICO arquivo que você precisa editar
├── 📄 README.md           # Este arquivo com instruções
├── 📄 .gitignore          # Arquivos ignorados pelo Git
└── assets/
    ├── css/
    │   └── 📄 style.css   # Estilos CSS responsivos
    ├── js/
    │   └── 📄 main.js     # JavaScript interativo
    └── images/
        ├── 🖼️ perfil.jpg     # Sua foto de perfil
        ├── 🖼️ about.jpg      # Foto da seção sobre
        └── 🖼️ projeto*.jpg   # Screenshots dos projetos
```

## 🎨 Características do Template

### ✨ Design Moderno
- Interface limpa e profissional
- Animações suaves
- Ícones Font Awesome
- Tipografia Google Fonts (Poppins)

### 📱 Totalmente Responsivo
- Funciona perfeitamente em celular
- Adaptado para tablet
- Otimizado para desktop
- Menu mobile interativo

### 🌙 Tema Escuro/Claro
- Toggle para alternar temas
- Preferência salva no navegador
- Cores personalizáveis

### ⚡ Performance
- Código otimizado
- Carregamento rápido
- SEO básico implementado

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos e responsivos
- **JavaScript** - Interatividade e dinamismo
- **Font Awesome** - Ícones vetoriais
- **Google Fonts** - Tipografia profissional

## 📚 O Que Você Vai Aprender

### HTML
- Estrutura semântica
- Meta tags para SEO
- Acessibilidade básica
- Organização de conteúdo

### CSS
- Flexbox e Grid Layout
- Variáveis CSS (Custom Properties)
- Media queries para responsividade
- Animações e transições
- Metodologia de organização

### JavaScript
- Manipulação do DOM
- Event listeners
- Local Storage
- Funções modulares
- Boas práticas de código

### Git & GitHub
- Comandos básicos do Git
- Como fazer fork de repositórios
- Commits e push
- Colaboração em projetos

### Deploy
- Como usar a Vercel
- Configuração de domínio
- Deploy automático
- Variáveis de ambiente

## 🎯 Seções do Portfólio

1. **🏠 Home** - Apresentação inicial com foto e links sociais
2. **👤 Sobre** - Sua história e informações pessoais
3. **💻 Habilidades** - Suas competências técnicas com barras de progresso
4. **📁 Projetos** - Showcase dos seus trabalhos com links
5. **📞 Contato** - Formulário e informações de contato

## 🔧 Personalização Avançada

### Alterando Cores
No arquivo `config.js`, seção `configuracoes.tema`:
```javascript
tema: {
    corPrimaria: "#3498db",     // Cor principal
    corSecundaria: "#2c3e50",  // Cor secundária
    corDestaque: "#e74c3c",    // Cor de destaque
    // ...
}
```

### Adicionando Mais Projetos
No arquivo `config.js`, seção `projetos`, adicione:
```javascript
{
    titulo: "Meu Novo Projeto",
    descricao: "Descrição do projeto...",
    imagem: "assets/images/projeto4.jpg",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkDemo: "https://meusite.vercel.app",
    linkCodigo: "https://github.com/usuario/projeto",
    destaque: true
}
```

### Adicionando Mais Habilidades
No arquivo `config.js`, seção `habilidades`, adicione:
```javascript
{ 
    nome: "Python", 
    nivel: 75, 
    icone: "fab fa-python", 
    cor: "#3776AB" 
}
```

## 🚨 Dicas Importantes

### ✅ Boas Práticas
- Sempre teste localmente antes de fazer deploy
- Use imagens otimizadas (máximo 500KB cada)
- Mantenha descrições concisas e claras
- Atualize regularmente com novos projetos

### ❌ Evite
- Não edite diretamente os arquivos HTML, CSS ou JS
- Não use imagens muito grandes (deixa o site lento)
- Não esqueça de testar em diferentes dispositivos
- Não coloque informações pessoais sensíveis

## 🆘 Problemas Comuns e Soluções

### Problema: Imagens não aparecem
**Solução:** Verifique se os nomes dos arquivos no `config.js` coincidem exatamente com os arquivos na pasta `assets/images/`

### Problema: Site não carrega corretamente
**Solução:** Abra o Console do navegador (F12) e verifique se há erros. Geralmente é erro de sintaxe no `config.js`

### Problema: Deploy falhou na Vercel
**Solução:** Certifique-se de que todos os arquivos foram commitados e enviados para o GitHub

### Problema: Formulário não funciona
**Solução:** O formulário é apenas demonstrativo. Para funcionar, integre com serviços como Formspree ou EmailJS

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. **Verifique este README** - A maioria das dúvidas está aqui
2. **Consulte o código** - Está todo comentado em português
3. **Teste passo a passo** - Siga as instruções na ordem
4. **Peça ajuda** - Abra uma issue no GitHub

## 🏆 Próximos Passos

Depois de criar seu portfólio:

1. **Compartilhe** - Mostre para amigos e colegas
2. **Atualize** - Adicione novos projetos regularmente
3. **Customize** - Experimente cores e layouts diferentes
4. **Aprenda mais** - Explore React, Vue.js, ou outras tecnologias
5. **Contribua** - Ajude a melhorar este template

## 📜 Licença

Este projeto é livre para uso educacional e pessoal. Sinta-se à vontade para modificar e distribuir.

---

## 👨‍💻 Desenvolvedor

**Template desenvolvido por Henrique Rezende Chagas**

Criado especialmente para a Semana Técnica da Etec de Taboão da Serra, com foco em ensinar os alunos a criarem portfólios profissionais de qualidade.

**🎓 Criado para fins educativos - Bons estudos!**

*Template desenvolvido com ❤️ para ajudar estudantes a criarem seus primeiros portfólios profissionais e se destacarem no mercado de trabalho.*
