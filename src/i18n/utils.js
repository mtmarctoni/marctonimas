"use client";

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
    "site.title": "Web3 Developer Portfolio",

    // Navigation
    "nav.name": "Marc Toni Mas",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.background": "Background",
    "nav.contact": "Contact",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",

    // Hero
    "hero.title":
      "<h1 class='text-6xl font-bold'>Full Stack Developer & <span class='text-accent'>Blockchain</span> Enthusiast</h1>",
    "hero.subtitle":
      "Building the decentralized future with smart contracts, DeFi, and blockchain technology",
    "hero.cta_primary": "View Projects",
    "hero.cta_secondary": "Contact Me",

    // Wallet
    "wallet.connect": "Connect Wallet",
    "wallet.connected": "Connected!",
    "wallet.modal_title": "Connect Wallet",
    "wallet.modal_description":
      "Connect with one of our available wallet providers or create a new one.",
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
    "about.bio":
      "I'm a motivated developer with a strong interest in <strong>Web3</strong> and blockchain technology. With a solid foundation in both frontend and backend development, I'm well-equipped to build comprehensive decentralized applications (dApps) that leverage blockchain technology for secure, scalable, and user-friendly solutions.",
    //  "I'm a passionate Web3 developer with expertise in blockchain technology, smart contracts, and decentralized applications. With a strong foundation in both frontend and backend development, I specialize in building secure, scalable, and user-friendly blockchain solutions.",
    "about.short_bio":
      "I'm a <span class='text-primary font-semibold underline'>developer</span> with a passion for <span class='text-primary font-semibold text-2xl'>blockchain</span> technology and <span class='text-primary font-semibold text-2xl'>web3</span> applications.",
    "about.what_i_do_title": "What I Do",
    "about.what_i_do_description":
      "I'm skilled in developing applications using blockchain technology, including smart contracts and decentralized systems. My knowledge spans both public and private blockchains, and I'm eager to apply my skills in real-world projects.",
    // "I develop smart contracts, build decentralized applications (dApps), and create innovative solutions using blockchain technology. My expertise spans across DeFi protocols, NFT marketplaces, DAOs, and custom blockchain implementations.",
    "about.looking_for_title": "What I'm Looking For",
    "about.looking_for_description":
      "I'm excited to join a team working on innovative Web3 projects that push the boundaries of what's possible in the decentralized space. I'm looking for a collaborative environment where I can grow professionally and contribute to the development of cutting-edge Web3 applications.",
    // "I'm seeking opportunities to work on challenging blockchain projects that push the boundaries of what's possible in the Web3 space. I'm particularly interested in DeFi innovations, cross-chain solutions, and projects focused on improving blockchain scalability and user experience.",
    "about.attribute.innovator": "Innovator",
    "about.attribute.developer": "Developer",
    "about.attribute.web3": "Web3",
    "about.attribute.blockchain": "Blockchain",

    // Skills
    "skills.title": "My Skills",
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
    "projects.title": "My Projects",
    "projects.live_demo": "Live Demo",
    "projects.view_code": "View Code",
    "projects.project1.title": "NFT Marketplace",
    "projects.project1.description":
      "A decentralized marketplace for creating, buying, and selling NFTs with support for multiple blockchains.",
    "projects.project2.title": "DeFi Lending Protocol",
    "projects.project2.description":
      "A decentralized lending platform allowing users to lend and borrow crypto assets with dynamic interest rates.",
    "projects.project3.title": "NFT Collection",
    "projects.project3.description":
      "A generative art NFT collection with on-chain metadata and interactive features.",
    "projects.project4.title": "DAO Governance Platform",
    "projects.project4.description":
      "A decentralized governance platform for DAOs with proposal creation, voting, and execution.",
    "projects.project5.title": "Smart Contract Audit Tool",
    "projects.project5.description":
      "An automated tool for auditing Solidity smart contracts and identifying security vulnerabilities.",
    "projects.project6.title": "Layer 2 Bridge",
    "projects.project6.description":
      "A bridge for transferring assets between Ethereum and Layer 2 scaling solutions.",

    // Background
    "background.title": "Background & Education",
    "background.education_title": "Education",
    "background.certifications_title": "Certifications",
    "background.education.degree1": "Master of Science in Computer Science",
    "background.education.institution1": "Stanford University",
    "background.education.description1":
      "Specialized in blockchain technology and distributed systems. Thesis on scalable consensus mechanisms for public blockchains.",
    "background.education.degree2":
      "Bachelor of Science in Computer Engineering",
    "background.education.institution2": "MIT",
    "background.education.description2":
      "Focused on cryptography, algorithms, and software engineering fundamentals.",
    "background.certifications.cert1.name": "Certified Blockchain Developer",
    "background.certifications.cert1.issuer": "Blockchain Council",
    "background.certifications.cert1.date": "January 2023",
    "background.certifications.cert2.name": "Ethereum Developer Certification",
    "background.certifications.cert2.issuer": "ConsenSys Academy",
    "background.certifications.cert2.date": "August 2022",
    "background.certifications.cert3.name":
      "Smart Contract Security Professional",
    "background.certifications.cert3.issuer": "OpenZeppelin",
    "background.certifications.cert3.date": "March 2022",
    "background.certifications.cert4.name": "DeFi Developer Certification",
    "background.certifications.cert4.issuer": "Chainlink",
    "background.certifications.cert4.date": "November 2021",

    "background.title": "Professional Background",
    "background.career_transition_title": "My Journey to Web3",
    "background.career_transition_description":
      "After several years in renewable energy technology, I've transitioned to blockchain development, bringing valuable experience in software development, automation, and technical leadership. My background in creating custom tools and implementing data systems provides a strong foundation for building decentralized applications.",
    "background.relevant_experience_title": "Relevant Technical Experience",
    "background.transferable_skills_title": "Transferable Skills",
    "background.view_full_background": "View My Full Background",

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
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success":
      "Your message has been sent successfully! I'll get back to you soon.",

    // Footer
    "footer.description":
      "Building the decentralized future with blockchain technology and Web3 development.",
    "footer.links": "Quick Links",
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.blog": "Blog",
    "footer.tutorials": "Tutorials",
    "footer.docs": "Documentation",
    "footer.newsletter": "Newsletter",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.copyright": "All rights reserved.",

    // languages
    "languages.title": "Languages",
    "languages.description": "Speak, Code and Design",
    "languages.spanish": "Spanish",
    "languages.spanish_level": "Native",
    "languages.catalan": "Catalan",
    "languages.catalan_level": "Native",
    "languages.english": "English",
    "languages.english_level": "Professional Use",
    "languages.german": "German",
    "languages.german_level": "Basic Level",
  },

  es: {
    "site.cvLink": "/transcripts/CV_MarcToniMas_ES.pdf",
    "site.title": "Portafolio de Desarrollador Web3",

    // Navigation
    "nav.name": "John Doe",
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.background": "Experiencia",
    "nav.contact": "Contacto",

    // Theme
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.system": "Sistema",

    // Hero
    "hero.title": "Desarrollador Web3 & Entusiasta de Blockchain",
    "hero.subtitle":
      "Construyendo el futuro descentralizado con contratos inteligentes, DeFi y tecnología blockchain",
    "hero.cta_primary": "Ver Proyectos",
    "hero.cta_secondary": "Contáctame",

    // Wallet
    "wallet.connect": "Conectar Wallet",
    "wallet.connected_with": "Conectado con",
    "wallet.modal_title": "Conectar Wallet",
    "wallet.modal_description":
      "Conecta con uno de nuestros proveedores de wallet disponibles o crea uno nuevo.",
    "wallet.cancel": "Cancelar",

    // About
    "about.title": "Sobre Mí",
    "about.name": "Marc Antoni Mas",
    "about.CV": "Currículo",

    "about.bio":
      "Soy un desarrollador Web3 apasionado con experiencia en tecnología blockchain, contratos inteligentes y aplicaciones descentralizadas. Con una sólida base en desarrollo frontend y backend, me especializo en construir soluciones blockchain seguras, escalables y fáciles de usar.",
    "about.what_i_do_title": "Lo Que Hago",
    "about.what_i_do_description":
      "Desarrollo contratos inteligentes, construyo aplicaciones descentralizadas (dApps) y creo soluciones innovadoras utilizando tecnología blockchain. Mi experiencia abarca protocolos DeFi, mercados de NFT, DAOs e implementaciones personalizadas de blockchain.",
    "about.looking_for_title": "Lo Que Busco",
    "about.looking_for_description":
      "Busco oportunidades para trabajar en proyectos blockchain desafiantes que amplíen los límites de lo posible en el espacio Web3. Estoy particularmente interesado en innovaciones DeFi, soluciones cross-chain y proyectos enfocados en mejorar la escalabilidad y experiencia de usuario en blockchain.",

    // Skills
    "skills.title": "Mis Habilidades",
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
    "projects.title": "Mis Proyectos",
    "projects.live_demo": "Demo en Vivo",
    "projects.view_code": "Ver Código",
    "projects.project1.title": "Mercado de NFTs",
    "projects.project1.description":
      "Un mercado descentralizado para crear, comprar y vender NFTs con soporte para múltiples blockchains.",
    "projects.project2.title": "Protocolo de Préstamos DeFi",
    "projects.project2.description":
      "Una plataforma de préstamos descentralizada que permite a los usuarios prestar y pedir prestados activos crypto con tasas de interés dinámicas.",
    "projects.project3.title": "Colección de NFTs",
    "projects.project3.description":
      "Una colección de NFTs de arte generativo con metadatos on-chain y características interactivas.",
    "projects.project4.title": "Plataforma de Gobernanza DAO",
    "projects.project4.description":
      "Una plataforma de gobernanza descentralizada para DAOs con creación de propuestas, votación y ejecución.",
    "projects.project5.title": "Herramienta de Auditoría de Contratos",
    "projects.project5.description":
      "Una herramienta automatizada para auditar contratos inteligentes en Solidity e identificar vulnerabilidades de seguridad.",
    "projects.project6.title": "Puente de Capa 2",
    "projects.project6.description":
      "Un puente para transferir activos entre Ethereum y soluciones de escalado de Capa 2.",

    // Background
    "background.title": "Experiencia y Educación",
    "background.education_title": "Educación",
    "background.certifications_title": "Certificaciones",
    "background.education.degree1": "Maestría en Ciencias de la Computación",
    "background.education.institution1": "Universidad de Stanford",
    "background.education.description1":
      "Especializado en tecnología blockchain y sistemas distribuidos. Tesis sobre mecanismos de consenso escalables para blockchains públicas.",
    "background.education.degree2": "Licenciatura en Ingeniería Informática",
    "background.education.institution2": "MIT",
    "background.education.description2":
      "Enfocado en criptografía, algoritmos y fundamentos de ingeniería de software.",
    "background.certifications.cert1.name":
      "Desarrollador Blockchain Certificado",
    "background.certifications.cert1.issuer": "Blockchain Council",
    "background.certifications.cert1.date": "Enero 2023",
    "background.certifications.cert2.name":
      "Certificación de Desarrollador Ethereum",
    "background.certifications.cert2.issuer": "ConsenSys Academy",
    "background.certifications.cert2.date": "Agosto 2022",
    "background.certifications.cert3.name":
      "Profesional de Seguridad en Contratos Inteligentes",
    "background.certifications.cert3.issuer": "OpenZeppelin",
    "background.certifications.cert3.date": "Marzo 2022",
    "background.certifications.cert4.name":
      "Certificación de Desarrollador DeFi",
    "background.certifications.cert4.issuer": "Chainlink",
    "background.certifications.cert4.date": "Noviembre 2021",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.get_in_touch": "Hablemos",
    "contact.invite":
      "I'm always excited to connect with fellow professionals and discuss potential collaborations. Whether you have questions, ideas, or just want to chat, I'd love to hear from you. Let's start a conversation and see where it leads!",
    "contact.quote":
      "To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.",
    "contact.description":
      "¿Interesado en trabajar juntos? ¿Tienes un proyecto en mente? ¡No dudes en contactarme!",
    "contact.social_media": "Encuéntrame en",
    "contact.cta": "Contáctame",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo Electrónico",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success":
      "Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo pronto.",

    // Footer
    "footer.description":
      "Construyendo el futuro descentralizado con tecnología blockchain y desarrollo Web3.",
    "footer.links": "Enlaces Rápidos",
    "footer.resources": "Recursos",
    "footer.legal": "Legal",
    "footer.blog": "Blog",
    "footer.tutorials": "Tutoriales",
    "footer.docs": "Documentación",
    "footer.newsletter": "Boletín",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.cookies": "Política de Cookies",
    "footer.copyright": "Todos los derechos reservados.",

    // languages
    "languages.title": "Idiomas",
    "languages.description": "que Hablo, Programo y Diseño",
    "languages.spanish": "Castellano",
    "languages.spanish_level": "Nativo",
    "languages.catalan": "Catalán",
    "languages.catalan_level": "Nativo",
    "languages.english": "Inglés",
    "languages.english_level": "Uso Profesional",
    "languages.german": "Alemán",
    "languages.german_level": "Nivel Básico",
  },
};

// Return the translation function
export function useTranslations(lang) {
  return function t(key) {
    return translations[lang][key] || key;
  };
}
