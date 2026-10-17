export const hermes = {
  en: {
    description:
      "Hermes Personal Assistant is Marc Antoni Mas’s private, self-hosted Google integration. Learn about current Gmail capabilities, access controls, and privacy.",
    back: "Back to website",
    label: "Private integration · Personal use",
    introduction:
      "Hermes Personal Assistant is a private, self-hosted assistant for working with the Google services I explicitly connect. It helps retrieve information, summarize content, and prepare work for review. Access is limited to the permissions granted through Google authorization.",
    context:
      "I’m Marc Antoni Mas, its owner and sole user. I run the assistant in an Ubuntu virtual machine and interact with it through a private Telegram bot.",
    currentLabel: "Currently enabled",
    sections: [
      {
        id: "capabilities",
        title: "What it currently does",
        paragraphs: [
          "The integration currently connects only to my own Gmail account. It can search and read email, summarize messages, and prepare suggested reply text. Requested summaries and suggested replies may appear in my private Telegram chat.",
          "I currently copy suggested reply text into Gmail and send it myself.",
        ],
      },
      {
        id: "access",
        title: "Access and control",
        paragraphs: [
          "The current Gmail authorization is read-only (gmail.readonly). This connection cannot create Gmail drafts, send or schedule emails, modify messages, or delete messages.",
          "Additional Google services may be connected later, but none are currently enabled. Any additional access requires the appropriate Google authorization; the current authorization does not cover future services. Material changes to data access or processing will require updated disclosures.",
          "I can revoke access through my Google Account connections. Revocation stops future authorized access but does not automatically delete previously retained copies.",
        ],
      },
      {
        id: "privacy",
        title: "Data processing and privacy",
        paragraphs: [
          "Selected email content may be processed by OpenAI through my configured connection. Requested summaries and suggested replies may appear in Telegram. Processing is not exclusively local.",
          "Credentials are stored in the self-hosted environment, separately from this public website. Email-derived content may remain in local conversation history, logs, or backups.",
          "This website provides information and privacy disclosures. It is not the backend that accesses or processes my email. The Privacy Policy contains the full disclosures and details of a separate draft and sending service that is not currently enabled.",
        ],
      },
      {
        id: "contact",
        title: "Personal use and contact",
        paragraphs: [
          "Hermes Personal Assistant is not a public SaaS product and is not available to visitors. There is no public registration, customer onboarding, or Google connection flow on this website. For questions about this private integration, contact me at the public address below.",
        ],
      },
    ],
    connections: "Manage Google Account connections",
    privacy: "Read the full Privacy Policy",
    contact: "Contact Marc Antoni Mas",
  },
  es: {
    description:
      "Hermes Personal Assistant es la integración privada y autoalojada de Marc Antoni Mas con Google. Consulta sus funciones actuales de Gmail, permisos y privacidad.",
    back: "Volver al sitio web",
    label: "Integración privada · Uso personal",
    introduction:
      "Hermes Personal Assistant es un asistente privado y autoalojado para trabajar con los servicios de Google que conecto explícitamente. Me ayuda a recuperar información, resumir contenido y preparar trabajo para su revisión. El acceso se limita a los permisos concedidos mediante la autorización de Google.",
    context:
      "Soy Marc Antoni Mas, su propietario y único usuario. Ejecuto el asistente en una máquina virtual Ubuntu e interactúo con él mediante un bot privado de Telegram.",
    currentLabel: "Disponible actualmente",
    sections: [
      {
        id: "capabilities",
        title: "Qué hace actualmente",
        paragraphs: [
          "La integración solo se conecta actualmente a mi propia cuenta de Gmail. Puede buscar y leer correos, resumir mensajes y preparar textos de respuesta sugeridos. Los resúmenes y las respuestas sugeridas que solicito pueden aparecer en mi chat privado de Telegram.",
          "Actualmente copio el texto de las respuestas sugeridas en Gmail y lo envío yo mismo.",
        ],
      },
      {
        id: "access",
        title: "Acceso y control",
        paragraphs: [
          "La autorización actual de Gmail es de solo lectura (gmail.readonly). Esta conexión no permite crear borradores en Gmail, enviar ni programar correos, modificar mensajes ni eliminarlos.",
          "Más adelante podría conectar otros servicios de Google, pero ninguno está habilitado actualmente. Cualquier acceso adicional requiere la autorización de Google correspondiente; la autorización actual no cubre servicios futuros. Los cambios sustanciales en el acceso o tratamiento de datos requerirán actualizar la información publicada.",
          "Puedo revocar el acceso desde las conexiones de mi cuenta de Google. La revocación detiene el acceso autorizado futuro, pero no elimina automáticamente las copias conservadas anteriormente.",
        ],
      },
      {
        id: "privacy",
        title: "Tratamiento de datos y privacidad",
        paragraphs: [
          "OpenAI puede procesar contenido seleccionado de los correos mediante mi conexión configurada. Los resúmenes y las respuestas sugeridas que solicito pueden aparecer en Telegram. El procesamiento no es exclusivamente local.",
          "Las credenciales se almacenan en el entorno autoalojado, por separado de este sitio web público. El contenido derivado del correo puede permanecer en el historial local de conversaciones, registros o copias de seguridad.",
          "Este sitio web proporciona información y declaraciones de privacidad. No es el servidor que accede a mis correos ni los procesa. La Política de privacidad contiene la información completa y los detalles de un servicio separado de borradores y envío que no está habilitado actualmente.",
        ],
      },
      {
        id: "contact",
        title: "Uso personal y contacto",
        paragraphs: [
          "Hermes Personal Assistant no es un producto SaaS público ni está disponible para los visitantes. Este sitio web no ofrece registro público, incorporación de clientes ni conexión con Google. Si tienes preguntas sobre esta integración privada, puedes escribirme a la dirección pública que aparece a continuación.",
        ],
      },
    ],
    connections: "Gestionar las conexiones de la cuenta de Google",
    privacy: "Leer la Política de privacidad completa",
    contact: "Contactar con Marc Antoni Mas",
  },
};
