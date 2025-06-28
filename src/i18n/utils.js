import {MY_NAME, MY_NAME_LOGO, MY_LINKEDIN, MY_GITHUB, MY_EMAIL, MY_LOCATION, MY_WEB} from "@/utils/constants"

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
    "hero.title":
      "<h1 class='text-6xl font-bold'>Full Stack Developer & <span class='bg-gradient-to-r from-accent to-tertiary bg-clip-text text-transparent'>Blockchain</span> Enthusiast</h1>",
    "hero.subtitle":
      "<p class=''>Bridging the gap between traditional web and <span class='font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl md:text-3xl'>decentralized technologies</span></p>",
    "hero.cta_primary": "View Projects",
    "hero.cta_secondary": "Contact Me",

    // Wallet
    "wallet.connect": "Connect Wallet",
    "wallet.connected": "Connected!",
    "wallet.disconnect": "Disconnect",
    "wallet.chainId": "Chain ID",
    "wallet.balance": "Balance",
    "wallet.network": "Network",

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
    // "about.short_bio":
    //   "I'm a <span class='text-primary font-semibold underline'>full stack developer</span> and <span class='text-primary font-semibold underline'>software engineer</span> with a passion for <span class='text-primary font-semibold text-2xl'>blockchain</span> technology and innovative <span class='text-primary font-semibold text-2xl'>web3</span> applications.",
    // "about.what_i_do_title": "What I Do",
    // "about.what_i_do_description":
    //   "I'm skilled in developing applications using blockchain technology, including smart contracts and decentralized systems. My knowledge spans both public and private blockchains, and I'm eager to apply my skills in real-world projects.",
    // "about.looking_for_title": "What I'm Looking For",
    // "about.looking_for_description":
    //   "I'm excited to join a team working on innovative Web3 projects that push the boundaries of what's possible in the decentralized space. I'm looking for a collaborative environment where I can grow professionally and contribute to the development of cutting-edge Web3 applications.",
    // "about.learn_more_background": "Learn more about my <a href='/background' class='text-accent hover:underline'>professional journey and background</a>.",
    "about.short_bio":
      "Passionate about <span class='text-primary font-semibold text-2xl'>AI-driven development</span>, <span class='text-primary font-semibold text-2xl'>blockchain</span> technology, and cutting-edge <span class='text-primary font-semibold text-2xl'>Web3</span> applications.",
    "about.what_i_do_title": "What I Do",
    "about.what_i_do_description":
      "I design and build robust, scalable applications on the full stack, integrating <span class='font-semibold text-secondary'>AI solutions</span> and <span class='font-semibold text-secondary'>blockchain technologies</span> into smart, secure, and intuitive experiences. My background includes the development of smart contracts, <span class='font-semibold text-secondary'>decentralized applications</span>, and the utilization of AI for <span class='font-semibold text-secondary'>process automation</span> and feature augmentation.",
    "about.looking_for_title": "What I'm Looking For",
    "about.looking_for_description":
      "I am looking forward to joining an <span class='font-semibold text-secondary'>innovative team</span> that develops projects that harness the power of <span class='font-semibold text-secondary'>AI, Web3,</span> and <span class='font-semibold text-secondary'>blockchain</span>. I'm seeking an open culture that allows me to <span class='font-semibold text-secondary'>collaborate, learn,</span> and <span class='font-semibold text-secondary'>work</span> towards providing next-generation digital solutions.",
    "about.learn_more_background": "Learn more about my <a href='/background' class='text-accent hover:underline'>professional journey and background</a>.",



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
   
    // Background
    "background.title": "Professional Background",
    "background.pageTitle": "My Professional Background & Journey",
    "background.pageDescription": "Explore the professional background, work experience, and education of Marc Toni Mas, a Full Stack Developer & Blockchain Enthusiast.",

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
    "site.keywords": "web3, blockchain, desarrollador full stack, ingeniero de software, portafolio",

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
    "hero.title":
      "<h1 class='text-6xl font-bold'>Desarrollador Full Stack orientado a <span class='bg-gradient-to-r from-accent to-tertiary bg-clip-text text-transparent'>Blockchain</span></h1>",
    "hero.subtitle":
      "<p class=''>Integrando <span class='font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl md:text-3xl'>web3</span> y tecnologías <span class='font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl md:text-3xl'>descentralizadas</span> en la web tradicional </p>",
    "hero.cta_primary": "Ver Proyectos",
    "hero.cta_secondary": "Contacto",

    // Wallet
    "wallet.connect": "Conectar Billetera",
    "wallet.connected": "¡Conectado!",
    "wallet.disconnect": "Desconectar",
    "wallet.chainId": "ID de cadena",
    "wallet.balance": "Saldo",
    "wallet.network": "Red",

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
    // "about.short_bio":
    //   "Soy un <span class='text-primary font-semibold underline'>desarrollador full stack</span> e <span class='text-primary font-semibold underline'>ingeniero de software</span> apasionado por la tecnología <span class='text-primary font-semibold text-2xl'>blockchain</span> y las innovadoras aplicaciones <span class='text-primary font-semibold text-2xl'>web3</span>.",

    // "about.what_i_do_title": "Lo Que Hago",
    // "about.what_i_do_description":
    //   "Desarrollo de aplicaciones utilizando tecnología blockchain, incluyendo contratos inteligentes y sistemas descentralizados. Mi conocimiento abarca tanto blockchains públicas como privadas, y estoy ansioso por aplicar mis habilidades en proyectos del mundo real.",
    // "about.looking_for_title": "Lo Que Busco",
    // "about.looking_for_description":
    //   "Unirme a un equipo que trabaje en proyectos innovadores de Web3 que amplíen los límites de lo posible en el espacio descentralizado. Busco un entorno colaborativo donde pueda crecer profesionalmente y contribuir al desarrollo de aplicaciones Web3 de vanguardia.",
    // "about.learn_more_background": "Conoce más sobre mi <a href='/es/background' class='text-accent hover:underline'>trayectoria y experiencia profesional</a>.",
"about.short_bio":
  "Apasionado por el <span class='text-primary font-semibold text-2xl'>desarrollo impulsado por IA</span>, la tecnología <span class='text-primary font-semibold text-2xl'>blockchain</span> y las aplicaciones <span class='text-primary font-semibold text-2xl'>Web3</span> más innovadoras.",
"about.what_i_do_title": "Lo que hago",
"about.what_i_do_description":
  "Desarrollo aplicaciones robustas y escalables en todo el stack, integrando <span class='font-semibold text-secondary'>soluciones de IA</span> y <span class='font-semibold text-secondary'>blockchain</span> para crear experiencias inteligentes, seguras e intuitivas. Mi experiencia incluye el desarrollo de smart contracts, <span class='font-semibold text-secondary'>aplicaciones descentralizadas</span> y el uso de IA para la <span class='font-semibold text-secondary'>automatización de procesos</span>.",
"about.looking_for_title": "Qué busco",
"about.looking_for_description":
  "Estoy deseando unirme a un <span class='font-semibold text-secondary'>equipo innovador</span> que desarrolle proyectos que aprovechen el potencial de la <span class='font-semibold text-secondary'>IA, Web3</span> y la <span class='font-semibold text-secondary'>blockchain</span>. Busco una cultura abierta que me permita <span class='font-semibold text-secondary'>colaborar, aprender</span> y <span class='font-semibold text-secondary'>trabajar</span> para ofrecer soluciones digitales de próxima generación.",
"about.learn_more_background": "Conoce más sobre mi <a href='/background' class='text-accent hover:underline'>trayectoria y experiencia profesional</a>.",



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

    // Background
    "background.title": "Experiencia Profesional",
    "background.pageTitle": "Mi Trayectoria y Experiencia Profesional",
    "background.pageDescription": "Explora la trayectoria profesional, experiencia laboral y educación de Marc Toni Mas, Desarrollador Full Stack y Entusiasta de Blockchain.",
   
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
