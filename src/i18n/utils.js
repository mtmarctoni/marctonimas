import { MY_GITHUB, MY_LINKEDIN, MY_NAME_LOGO, MY_WEB } from "@/utils/constants";

// Get the language from the URL
export function getLangFromUrl(url) {
  const pathname = url.pathname;
  const langMatch = pathname.match(/^\/(es)\//);
  return langMatch ? langMatch[1] : "en";
}

// Dictionary of translations
const translations = {
  en: {
    "site.cvLink": "/transcripts/CV_MarcToniMas.pdf",
    "site.title": MY_NAME_LOGO,
    "site.description": "Web3 Developer Portfolio",
    "site.keywords": "web3, blockchain, full stack developer, software engineer, portfolio",

    "person.name": MY_NAME_LOGO,
    "person.url": MY_WEB,
    "person.jobTitle": "Full Stack Developer & Blockchain Enthusiast",
    "person.sameAs.linkedin": `https://www.linkedin.com/in/${MY_LINKEDIN}/`,
    "person.sameAs.github": `https://github.com/${MY_GITHUB}`,

    // Navigation
    "nav.name": MY_NAME_LOGO,
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.background": "Background",
    "nav.contact": "Contact",
    "nav.connect": "Find me on",
    "nav.mobile_menu_footer": `${MY_NAME_LOGO}. All rights reserved.`,

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",

    // Hero
    "hero.title": [
      { text: "Full Stack Developer & " },
      {
        text: "Blockchain",
        className: "bg-gradient-to-r from-accent to-tertiary bg-clip-text text-transparent",
      },
      { text: " Enthusiast" },
    ],
    "hero.subtitle": [
      { text: "Bridging the gap between traditional web and " },
      {
        text: "decentralized technologies",
        className:
          "font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl md:text-3xl",
      },
    ],
    "hero.cta_primary": "View Projects",
    "hero.cta_secondary": "Contact Me",

    // Wallet
    "wallet.connect": "Connect Wallet",
    "wallet.connected": "Connected!",
    "wallet.disconnect": "Disconnect",
    "wallet.chainId": "Chain ID",
    "wallet.balance": "Balance",
    "wallet.network": "Network",
    "wallet.no_ethereum_provider":
      "No Ethereum provider detected. Please install a wallet extension like MetaMask.",

    // About
    "about.title": "About Me",
    "about.name": "Marc Antoni Mas",
    "about.CV": "Resume",
    "about.view_CV": "View",
    "about.download_CV": "Download",
    "about.attribute.innovator": "Innovator",
    "about.attribute.developer": "Developer",
    "about.attribute.web3": "Web3",
    "about.attribute.blockchain": "Blockchain",
    "about.short_bio": [
      { text: "Passionate about " },
      {
        text: "AI-driven development",
        className: "text-primary font-semibold text-2xl",
      },
      { text: ", " },
      { text: "blockchain", className: "text-primary font-semibold text-2xl" },
      { text: " technology, and cutting-edge " },
      { text: "Web3", className: "text-primary font-semibold text-2xl" },
      { text: " applications." },
    ],
    "about.what_i_do_title": "What I Do",
    "about.what_i_do_description": [
      {
        text: "I design and build robust, scalable applications on the full stack, integrating ",
      },
      { text: "AI solutions", className: "font-semibold text-secondary" },
      { text: " and " },
      {
        text: "blockchain technologies",
        className: "font-semibold text-secondary",
      },
      {
        text: " into smart, secure, and intuitive experiences. My background includes the development of smart contracts, ",
      },
      {
        text: "decentralized applications",
        className: "font-semibold text-secondary",
      },
      { text: ", and the utilization of AI for " },
      {
        text: "process automation",
        className: "font-semibold text-secondary",
      },
      { text: " and feature augmentation." },
    ],
    "about.looking_for_title": "What I'm Looking For",
    "about.looking_for_description": [
      { text: "I am looking forward to joining an " },
      { text: "innovative team", className: "font-semibold text-secondary" },
      { text: " that develops projects that harness the power of " },
      { text: "AI, Web3,", className: "font-semibold text-secondary" },
      { text: " and " },
      { text: "blockchain", className: "font-semibold text-secondary" },
      {
        text: ". I'm seeking an open culture that allows me to ",
      },
      {
        text: "collaborate, learn,",
        className: "font-semibold text-secondary",
      },
      { text: " and " },
      { text: "work", className: "font-semibold text-secondary" },
      { text: " towards providing next-generation digital solutions." },
    ],
    "about.learn_more_background": [
      { text: "Learn more about my " },
      {
        text: "professional journey and background",
        href: "/background",
        className: "text-accent hover:underline",
      },
      { text: "." },
    ],

    // Skills
    "skills.title": "Technical Skills & Expertise",
    "skills.blockchain_title": "Blockchain",
    "skills.languages_title": "Languages",
    "skills.frontend_title": "Frontend",
    "skills.backend_title": "Backend",
    "skills.tools_title": "Tools & Infrastructure",
    "skills.all": "All",
    "skills.advanced_title": "Advanced",
    "skills.intermediate_title": "Intermediate",
    "skills.basic_title": "Basic",

    // Projects
    "projects.all_title": "All",
    "projects.full_stack_title": "Full Stack",
    "projects.blockchain_title": "Blockchain",
    "projects.automation_title": "Automation",
    "projects.button_code": "View Code",
    "projects.button_demo": "View Demo",
    "projects.button_show": "Show More",

    // Background
    "background.title": "Professional Background",
    "background.pageTitle": "My Professional Background & Journey",
    "background.pageDescription":
      "Explore the professional background, work experience, and education of Marc Toni Mas, a Full Stack Developer & Blockchain Enthusiast.",

    // Certifications

    // Contact
    "contact.title": "Get In Touch",
    "contact.get_in_touch": "Let's Talk",
    "contact.invite":
      "Whether you have questions, ideas, or just want to chat, I'd love to hear from you. Let's start a conversation and see where it leads!",
    "contact.quote":
      "To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.",
    "contact.description":
      "Interested in working together? Have a project in mind? Feel free to reach out!",
    "contact.cta": "Contact Me",

    // Footer
    "footer.copyright": "All rights reserved.",
    "footer.github": "GitHub profile",
    "footer.linkedin": "LinkedIn profile",
    "footer.email": "Email",

    // languages
    "languages.title": "Languages",
    "languages.description": "Speak, Code and Design",
    "languages.spanish": "Spanish",
    "languages.spanish_level": "Native",
    "languages.catalan": "Catalan",
    "languages.catalan_level": "Native",
    "languages.english": "English",
    "languages.english_level": "Professional",
    "languages.german": "German",
    "languages.german_level": "Basic",
  },

  es: {
    "site.cvLink": "/transcripts/CV_MarcToniMas_ES.pdf",
    "site.title": "Portafolio de Desarrollador Web3",
    "site.keywords":
      "web3, blockchain, desarrollador full stack, ingeniero de software, portafolio",

    "person.name": MY_NAME_LOGO,
    "person.url": `${MY_WEB}/es`,
    "person.jobTitle": "Desarrollador Full Stack y Entusiasta de Blockchain",
    "person.sameAs.linkedin": `https://www.linkedin.com/in/${MY_LINKEDIN}/`,
    "person.sameAs.github": `https://github.com/${MY_GITHUB}`,

    // Navigation
    "nav.name": MY_NAME_LOGO,
    "nav.about": "Sobre Mí",
    "nav.skills": "Aptitudes",
    "nav.projects": "Proyectos",
    "nav.background": "Experiencia",
    "nav.contact": "Contacto",
    "nav.connect": "Contáctame en",
    "nav.mobile_menu_footer": `${MY_NAME_LOGO}. Todos los derechos reservados.`,

    // Theme
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.system": "Sistema",

    // Hero
    "hero.title": [
      { text: "Desarrollador Full Stack orientado a " },
      {
        text: "Blockchain",
        className: "bg-gradient-to-r from-accent to-tertiary bg-clip-text text-transparent",
      },
    ],
    "hero.subtitle": [
      { text: "Integrando " },
      {
        text: "web3",
        className:
          "font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl md:text-3xl",
      },
      { text: " y tecnologías " },
      {
        text: "descentralizadas",
        className:
          "font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl md:text-3xl",
      },
      { text: " en la web tradicional " },
    ],
    "hero.cta_primary": "Ver Proyectos",
    "hero.cta_secondary": "Contacto",

    // Wallet
    "wallet.connect": "Conectar Billetera",
    "wallet.connected": "¡Conectado!",
    "wallet.disconnect": "Desconectar",
    "wallet.chainId": "ID de cadena",
    "wallet.balance": "Saldo",
    "wallet.network": "Red",
    "wallet.no_ethereum_provider":
      "No se detectó un proveedor de Ethereum. Instala una extensión de billetera como MetaMask.",

    // About
    "about.title": "Sobre Mí",
    "about.name": "Marc Antoni Mas",
    "about.CV": "Currículo",
    "about.view_CV": "Ver",
    "about.download_CV": "Descargar",
    "about.attribute.innovator": "Inovador",
    "about.attribute.developer": "Desarrollador",
    "about.attribute.web3": "Web3",
    "about.attribute.blockchain": "Blockchain",
    "about.short_bio": [
      { text: "Apasionado por el " },
      {
        text: "desarrollo impulsado por IA",
        className: "text-primary font-semibold text-2xl",
      },
      { text: ", la tecnología " },
      {
        text: "blockchain",
        className: "text-primary font-semibold text-2xl",
      },
      { text: " y las aplicaciones " },
      {
        text: "Web3",
        className: "text-primary font-semibold text-2xl",
      },
      { text: " más innovadoras." },
    ],
    "about.what_i_do_title": "Lo que hago",
    "about.what_i_do_description": [
      { text: "Desarrollo aplicaciones robustas y escalables en todo el stack, integrando " },
      {
        text: "soluciones de IA",
        className: "font-semibold text-secondary",
      },
      { text: " y " },
      {
        text: "blockchain",
        className: "font-semibold text-secondary",
      },
      {
        text: " para crear experiencias inteligentes, seguras e intuitivas. Mi experiencia incluye el desarrollo de smart contracts, ",
      },
      {
        text: "aplicaciones descentralizadas",
        className: "font-semibold text-secondary",
      },
      { text: " y el uso de IA para la " },
      {
        text: "automatización de procesos",
        className: "font-semibold text-secondary",
      },
      { text: "." },
    ],
    "about.looking_for_title": "Qué busco",
    "about.looking_for_description": [
      { text: "Estoy deseando unirme a un " },
      {
        text: "equipo innovador",
        className: "font-semibold text-secondary",
      },
      { text: " que desarrolle proyectos que aprovechen el potencial de la " },
      {
        text: "IA, Web3",
        className: "font-semibold text-secondary",
      },
      { text: " y la " },
      {
        text: "blockchain",
        className: "font-semibold text-secondary",
      },
      { text: ". Busco una cultura abierta que me permita " },
      {
        text: "colaborar, aprender",
        className: "font-semibold text-secondary",
      },
      { text: " y " },
      {
        text: "trabajar",
        className: "font-semibold text-secondary",
      },
      { text: " para ofrecer soluciones digitales de próxima generación." },
    ],
    "about.learn_more_background": [
      { text: "Conoce más sobre mi " },
      {
        text: "trayectoria y experiencia profesional",
        href: "/es/background",
        className: "text-accent hover:underline",
      },
      { text: "." },
    ],

    // Skills
    "skills.title": "Habilidades Técnicas y Conocimientos",
    "skills.blockchain_title": "Blockchain",
    "skills.languages_title": "Lenguajes",
    "skills.frontend_title": "Frontend",
    "skills.backend_title": "Backend",
    "skills.tools_title": "Herramientas & Infraestructura",
    "skills.all": "Todas",
    "skills.advanced_title": "Avanzado",
    "skills.intermediate_title": "Intermedio",
    "skills.basic_title": "Básico",

    // Projects
    "projects.all_title": "Todos",
    "projects.full_stack_title": "Full Stack",
    "projects.blockchain_title": "Blockchain",
    "projects.automation_title": "Automatización",
    "projects.button_code": "Ver Código",
    "projects.button_demo": "Ver Demo",
    "projects.button_show": "Mostrar Más",

    // Background
    "background.title": "Experiencia Profesional",
    "background.pageTitle": "Mi Trayectoria y Experiencia Profesional",
    "background.pageDescription":
      "Explora la trayectoria profesional, experiencia laboral y educación de Marc Toni Mas, Desarrollador Full Stack y Entusiasta de Blockchain.",

    // Certificados

    // Contact
    "contact.title": "Contacto",
    "contact.get_in_touch": "Hablemos",
    "contact.invite":
      "Siempre es emocionante conectar con otros profesionales y discutir posibles colaboraciones. Si tienes preguntas, ideas o simplemente quieres charlar, me encantaría saber de ti. ¡Empecemos y a ver hasta dónde llegamos!",
    "contact.quote":
      "Para ofrecer un servicio genuino, hay que agregar algo que no se compra ni se mide con dinero, y eso es sinceridad e integridad.",
    "contact.description":
      "¿Interesado en trabajar juntos? ¿Tienes un proyecto en mente? ¡No dudes en contactarme!",
    "contact.social_media": "Encuéntrame en",
    "contact.cta": "Contáctame",

    // Footer
    "footer.copyright": "Todos los derechos reservados.",
    "footer.github": "Perfil de GitHub",
    "footer.linkedin": "Perfil de LinkedIn",
    "footer.email": "Correo electrónico",

    // languages
    "languages.title": "Idiomas",
    "languages.description": "que Hablo, Programo y Diseño",
    "languages.spanish": "Castellano",
    "languages.spanish_level": "Nativo",
    "languages.catalan": "Catalán",
    "languages.catalan_level": "Nativo",
    "languages.english": "Inglés",
    "languages.english_level": "Profesional",
    "languages.german": "Alemán",
    "languages.german_level": "Básico",
  },
};

// Return the translation function
export function useTranslations(lang) {
  return function t(key) {
    return translations[lang][key] || key;
  };
}
