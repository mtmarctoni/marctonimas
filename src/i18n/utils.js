"use client"

// Get the language from the URL
export function getLangFromUrl(url) {
  const pathname = url.pathname
  const langMatch = pathname.match(/^\/(es)\//)
  return langMatch ? langMatch[1] : "en"
}

// Dictionary of translations
const translations = {
  en: {
    "site.cvLink":"/transcripts/CV_MarcToniMas.pdf",
    "site.title": "Web3 Developer Portfolio",

    // Navigation
    "nav.name": "Marc Antoni Mas",
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
    "hero.title": "Web3 Developer & Blockchain Enthusiast",
    "hero.subtitle": "Building the decentralized future with smart contracts, DeFi, and blockchain technology",
    "hero.cta_primary": "View Projects",
    "hero.cta_secondary": "Contact Me",

    // Wallet
    "wallet.connect": "Connect Wallet",
    "wallet.connected_with": "Connected with",
    "wallet.modal_title": "Connect Wallet",
    "wallet.modal_description": "Connect with one of our available wallet providers or create a new one.",
    "wallet.cancel": "Cancel",

    // About
    "about.title": "About Me",
    "about.name": "Marc Antoni Mas",
    "about.CV": "Resume",
    "about.bio":
      "I'm a motivated developer with a strong interest in Web3 and blockchain technology. With a solid foundation in both frontend and backend development, I'm well-equipped to build comprehensive decentralized applications (dApps) that leverage blockchain technology for secure, scalable, and user-friendly solutions.",
      //  "I'm a passionate Web3 developer with expertise in blockchain technology, smart contracts, and decentralized applications. With a strong foundation in both frontend and backend development, I specialize in building secure, scalable, and user-friendly blockchain solutions.",
    "about.what_i_do_title": "What I Do",
    "about.what_i_do_description":
      "I'm skilled in developing applications using blockchain technology, including smart contracts and decentralized systems. My knowledge spans both public and private blockchains, and I'm eager to apply my skills in real-world projects.",
      // "I develop smart contracts, build decentralized applications (dApps), and create innovative solutions using blockchain technology. My expertise spans across DeFi protocols, NFT marketplaces, DAOs, and custom blockchain implementations.",
    "about.looking_for_title": "What I'm Looking For",
    "about.looking_for_description":
      "I'm excited to join a team working on innovative Web3 projects that push the boundaries of what's possible in the decentralized space. I'm looking for a collaborative environment where I can grow professionally and contribute to the development of cutting-edge Web3 applications.",
      // "I'm seeking opportunities to work on challenging blockchain projects that push the boundaries of what's possible in the Web3 space. I'm particularly interested in DeFi innovations, cross-chain solutions, and projects focused on improving blockchain scalability and user experience.",

    // Skills
    "skills.title": "My Skills",
    "skills.blockchain_title": "Blockchain",
    "skills.frontend_title": "Frontend",
    "skills.tools_title": "Tools & Infrastructure",

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
    "projects.project3.description": "A generative art NFT collection with on-chain metadata and interactive features.",
    "projects.project4.title": "DAO Governance Platform",
    "projects.project4.description":
      "A decentralized governance platform for DAOs with proposal creation, voting, and execution.",
    "projects.project5.title": "Smart Contract Audit Tool",
    "projects.project5.description":
      "An automated tool for auditing Solidity smart contracts and identifying security vulnerabilities.",
    "projects.project6.title": "Layer 2 Bridge",
    "projects.project6.description": "A bridge for transferring assets between Ethereum and Layer 2 scaling solutions.",

    // Background
    "background.title": "Background & Education",
    "background.education_title": "Education",
    "background.certifications_title": "Certifications",
    "background.education.degree1": "Master of Science in Computer Science",
    "background.education.institution1": "Stanford University",
    "background.education.description1":
      "Specialized in blockchain technology and distributed systems. Thesis on scalable consensus mechanisms for public blockchains.",
    "background.education.degree2": "Bachelor of Science in Computer Engineering",
    "background.education.institution2": "MIT",
    "background.education.description2": "Focused on cryptography, algorithms, and software engineering fundamentals.",
    "background.certifications.cert1.name": "Certified Blockchain Developer",
    "background.certifications.cert1.issuer": "Blockchain Council",
    "background.certifications.cert1.date": "January 2023",
    "background.certifications.cert2.name": "Ethereum Developer Certification",
    "background.certifications.cert2.issuer": "ConsenSys Academy",
    "background.certifications.cert2.date": "August 2022",
    "background.certifications.cert3.name": "Smart Contract Security Professional",
    "background.certifications.cert3.issuer": "OpenZeppelin",
    "background.certifications.cert3.date": "March 2022",
    "background.certifications.cert4.name": "DeFi Developer Certification",
    "background.certifications.cert4.issuer": "Chainlink",
    "background.certifications.cert4.date": "November 2021",

    // Contact
    "contact.title": "Get In Touch",
    "contact.get_in_touch": "Let's Talk",
    "contact.description": "Interested in working together? Have a project in mind? Feel free to reach out!",
    "contact.social_media": "Find me on",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Your message has been sent successfully! I'll get back to you soon.",

    // Footer
    "footer.description": "Building the decentralized future with blockchain technology and Web3 development.",
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
  },

  es: {
    "site.cvLink":"/transcripts/CV_MarcToniMas_ES.pdf",
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
    "hero.subtitle": "Construyendo el futuro descentralizado con contratos inteligentes, DeFi y tecnología blockchain",
    "hero.cta_primary": "Ver Proyectos",
    "hero.cta_secondary": "Contáctame",

    // Wallet
    "wallet.connect": "Conectar Wallet",
    "wallet.connected_with": "Conectado con",
    "wallet.modal_title": "Conectar Wallet",
    "wallet.modal_description": "Conecta con uno de nuestros proveedores de wallet disponibles o crea uno nuevo.",
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
    "skills.frontend_title": "Frontend",
    "skills.tools_title": "Herramientas & Infraestructura",

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
    "background.certifications.cert1.name": "Desarrollador Blockchain Certificado",
    "background.certifications.cert1.issuer": "Blockchain Council",
    "background.certifications.cert1.date": "Enero 2023",
    "background.certifications.cert2.name": "Certificación de Desarrollador Ethereum",
    "background.certifications.cert2.issuer": "ConsenSys Academy",
    "background.certifications.cert2.date": "Agosto 2022",
    "background.certifications.cert3.name": "Profesional de Seguridad en Contratos Inteligentes",
    "background.certifications.cert3.issuer": "OpenZeppelin",
    "background.certifications.cert3.date": "Marzo 2022",
    "background.certifications.cert4.name": "Certificación de Desarrollador DeFi",
    "background.certifications.cert4.issuer": "Chainlink",
    "background.certifications.cert4.date": "Noviembre 2021",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.get_in_touch": "Hablemos",
    "contact.description": "¿Interesado en trabajar juntos? ¿Tienes un proyecto en mente? ¡No dudes en contactarme!",
    "contact.social_media": "Encuéntrame en",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo Electrónico",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo pronto.",

    // Footer
    "footer.description": "Construyendo el futuro descentralizado con tecnología blockchain y desarrollo Web3.",
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
  },
}

// Return the translation function
export function useTranslations(lang) {
  return function t(key) {
    return translations[lang][key] || key
  }
}