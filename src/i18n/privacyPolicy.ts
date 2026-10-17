export const privacyPolicyUpdated = "2026-10-17";
export const gmailScope = "https://www.googleapis.com/auth/gmail.readonly";
export const googleConnectionsUrl = "https://myaccount.google.com/connections";

export const privacyPolicy = {
  en: {
    title: "Privacy Policy",
    description:
      "Hermes Personal Assistant’s current read-only Gmail access, planned approval-based email service, data processing, retention, and access controls.",
    updated: "Last updated",
    date: "October 17, 2026",
    contents: "On this page",
    summary:
      "Current: read-only Gmail access. Planned: a separate email service with an approval workflow.",
    scopeLabel: "Only Gmail scope authorized for the current Hermes connection",
    revokeLink: "Manage connections in your Google Account",
    contactLabel: "Contact Marc Antoni Mas",
    sections: [
      {
        id: "hermes",
        title: "Hermes Personal Assistant",
        paragraphs: [
          "Hermes Personal Assistant is a self-hosted assistant operated by Marc Antoni Mas for my personal use. It runs inside an Ubuntu virtual machine on my Windows computer and connects to my own Gmail account using Google OAuth. I control it through a private Telegram bot.",
          "This policy covers the current Hermes Gmail integration and a planned separate email service. This website only publishes the policy; it is not an email-processing backend and does not store OAuth credentials. Publishing this policy does not grant Google permissions or activate the planned service.",
        ],
      },
      {
        id: "gmail-access",
        title: "Current Gmail access and use",
        paragraphs: [
          "The assistant can read email content and relevant metadata, including sender, recipients, subject, and timestamps, to find emails, summarize them, and prepare suggested reply text at my request.",
          "Hermes’s existing Google OAuth token is restricted to gmail.readonly. This current read-only connection cannot send or schedule email, create Gmail drafts, modify messages, or delete messages. Suggested replies are currently text that I manually copy and send.",
        ],
      },
      {
        id: "planned-email-service",
        title: "Planned draft and sending service — not yet implemented",
        paragraphs: [
          "A separately operated email service is planned but has not been implemented or verified. Hermes would submit proposed emails to it. The service would hold its own Google OAuth credentials with permissions supporting Gmail draft creation and sending; its exact permissions will be documented when implemented. This would be separate from Hermes’s current read-only token.",
          "The planned service would create a Gmail draft and present a preview of To, CC, BCC, subject, body, and attachments for my explicit approval. The design requires approval of that exact version before sending: changes would invalidate approval, and rejected or expired requests would not be sent.",
          "The service’s Google permissions would permit sending. Requiring my approval would be enforced by the service, not by a draft-only Google permission. The design calls for isolating its credentials and approval mechanism from Hermes, but neither approval enforcement nor credential isolation has been implemented or verified. Prevention of unauthorized sending is not guaranteed.",
          "If implemented, the service would process proposed email content, recipients, relevant metadata, attachments when provided, and approval records to manage drafts, previews, approval decisions, and sending.",
        ],
      },
      {
        id: "processing",
        title: "Processing and services involved",
        paragraphs: [
          "Google handles OAuth authorization and provides the authorized Gmail data through its API.",
          "Selected email content may be sent to OpenAI through my configured ChatGPT/Codex subscription connection to process requests and prepare summaries or suggested reply text. Processing is therefore not limited to the local virtual machine.",
          "Telegram carries my requests to the assistant through the private bot. Requested summaries and suggested replies may appear in Telegram and may contain email-derived content. Read-only Gmail access does not prevent this content from being processed by OpenAI or appearing in Telegram.",
          "If implemented, the separate email service would receive proposals from Hermes and exchange draft and sending data with Google. OpenAI and Telegram would remain involved where selected content is processed or displayed through the configured workflow; the planned service’s preview and approval channel is not yet specified here.",
          "These providers handle the data they receive under their applicable terms and privacy policies. This policy makes no guarantees about their retention or other data-handling practices.",
        ],
      },
      {
        id: "storage",
        title: "Local storage and retention",
        paragraphs: [
          "OAuth credentials are stored locally in the Ubuntu virtual machine, separately from this website. Local conversation history, logs, or backups may retain email-derived content, including summaries and suggested replies.",
          "If implemented, the email service could also retain credentials, proposed messages, recipient details, metadata, attachments when provided, and approval records in its storage, service records, logs, or backups. Its storage locations and removal procedures have not yet been established here.",
          "There is no fixed retention period stated here. Content is not necessarily deleted immediately after a request, and removing one local copy does not automatically remove other copies in histories, logs, or backups, or data already received by providers.",
        ],
      },
      {
        id: "revoke-access",
        title: "Revoking Google access",
        paragraphs: [
          "I can revoke the assistant’s access from my Google Account connections page by selecting Hermes Personal Assistant and removing its access. If the separate service is implemented and authorized, I would also need to revoke any separate Google authorization it uses; revoking Hermes’s current token would not necessarily revoke the service’s access.",
          "Revocation stops future authorized access under the revoked authorization, including draft creation and sending where applicable. It does not automatically delete existing copies, Gmail drafts or sent messages, local or service records, or content already sent to OpenAI or Telegram.",
        ],
      },
      {
        id: "remove-local-data",
        title: "Removing locally stored data",
        paragraphs: [
          "As the owner, I can stop the assistant in the Ubuntu virtual machine, remove its locally stored OAuth credentials and tokens, and delete email-derived conversation history and logs from the assistant’s configured storage locations. I can also review and remove backups containing those credentials or email-derived content, including copies stored outside the virtual machine.",
          "If the separate service is implemented, I would also need to stop it and remove its credentials and retained data, including proposals, attachments, approval records, logs, and backups, from its actual storage locations. Concrete removal instructions must be documented with that implementation; no deletion commands are specified for the unbuilt service.",
          "Revoking Google access and removing local data are separate steps. Deleting local files does not delete messages in Gmail or copies held by OpenAI or Telegram; any available provider-side deletion controls must be used separately.",
        ],
      },
      {
        id: "policy-contact",
        title: "Questions about this policy",
        paragraphs: [
          "For questions about Hermes Personal Assistant or this policy, contact Marc Antoni Mas at the public address below.",
        ],
      },
    ],
  },
  es: {
    title: "Política de privacidad",
    description:
      "Acceso actual de solo lectura a Gmail de Hermes Personal Assistant, servicio de correo previsto con aprobación, tratamiento de datos, conservación y controles de acceso.",
    updated: "Última actualización",
    date: "17 de octubre de 2026",
    contents: "En esta página",
    summary:
      "Actual: acceso de solo lectura a Gmail. Previsto: un servicio de correo separado con un proceso de aprobación.",
    scopeLabel: "Único permiso de Gmail autorizado para la conexión actual de Hermes",
    revokeLink: "Gestionar las conexiones de tu cuenta de Google",
    contactLabel: "Contactar con Marc Antoni Mas",
    sections: [
      {
        id: "hermes",
        title: "Hermes Personal Assistant",
        paragraphs: [
          "Hermes Personal Assistant es un asistente autoalojado que yo, Marc Antoni Mas, utilizo para uso personal. Se ejecuta en una máquina virtual Ubuntu en mi ordenador Windows y se conecta a mi propia cuenta de Gmail mediante Google OAuth. Lo controlo a través de un bot privado de Telegram.",
          "Esta política cubre la integración actual de Hermes con Gmail y un servicio de correo separado previsto. Este sitio web solo publica la política; no es un servidor de procesamiento de correo ni almacena credenciales de OAuth. Publicar esta política no concede permisos de Google ni activa el servicio previsto.",
        ],
      },
      {
        id: "gmail-access",
        title: "Acceso y uso actuales de Gmail",
        paragraphs: [
          "El asistente puede leer el contenido de los correos y los metadatos pertinentes, como remitente, destinatarios, asunto y marcas de tiempo, para buscar correos, resumirlos y preparar textos de respuesta sugeridos cuando se lo solicito.",
          "El token existente de Google OAuth de Hermes está restringido a gmail.readonly. Esta conexión actual de solo lectura no permite enviar ni programar correos, crear borradores en Gmail, modificar mensajes ni eliminarlos. Actualmente, las respuestas sugeridas son textos que copio y envío manualmente.",
        ],
      },
      {
        id: "planned-email-service",
        title: "Servicio previsto de borradores y envío — aún sin implementar",
        paragraphs: [
          "Está previsto un servicio de correo operado por separado, pero aún no se ha implementado ni verificado. Hermes le enviaría propuestas de correo. El servicio tendría sus propias credenciales de Google OAuth con permisos para crear borradores en Gmail y enviar correos; los permisos exactos se documentarán cuando se implemente. Sería independiente del token actual de solo lectura de Hermes.",
          "El servicio previsto crearía un borrador en Gmail y mostraría una vista previa de Para, CC, CCO, asunto, cuerpo y archivos adjuntos para mi aprobación explícita. El diseño exige aprobar esa versión exacta antes del envío: cualquier cambio invalidaría la aprobación y las solicitudes rechazadas o caducadas no se enviarían.",
          "Los permisos de Google del servicio permitirían enviar correos. El requisito de mi aprobación lo aplicaría el servicio, no un permiso de Google limitado a borradores. El diseño prevé aislar sus credenciales y su mecanismo de aprobación de Hermes, pero ni la aplicación de la aprobación ni el aislamiento de credenciales se han implementado o verificado. No se garantiza la prevención de envíos no autorizados.",
          "Si se implementa, el servicio trataría el contenido de las propuestas de correo, destinatarios, metadatos pertinentes, archivos adjuntos cuando se proporcionen y registros de aprobación para gestionar borradores, vistas previas, decisiones de aprobación y envíos.",
        ],
      },
      {
        id: "processing",
        title: "Procesamiento y servicios implicados",
        paragraphs: [
          "Google gestiona la autorización de OAuth y proporciona los datos autorizados de Gmail a través de su API.",
          "Parte del contenido seleccionado de los correos puede enviarse a OpenAI mediante mi conexión configurada con la suscripción de ChatGPT/Codex para procesar solicitudes y preparar resúmenes o textos de respuesta sugeridos. Por tanto, el procesamiento no se limita a la máquina virtual local.",
          "Telegram transmite mis solicitudes al asistente a través del bot privado. Los resúmenes y las respuestas sugeridas que solicito pueden aparecer en Telegram e incluir contenido derivado de los correos. El acceso de solo lectura a Gmail no impide que OpenAI procese este contenido o que aparezca en Telegram.",
          "Si se implementa, el servicio de correo separado recibiría propuestas de Hermes e intercambiaría datos de borradores y envíos con Google. OpenAI y Telegram seguirían interviniendo cuando se procese o muestre contenido seleccionado mediante el flujo configurado; el canal de vista previa y aprobación del servicio previsto aún no se especifica aquí.",
          "Estos proveedores tratan los datos que reciben según sus condiciones y políticas de privacidad aplicables. Esta política no garantiza sus plazos de conservación ni sus demás prácticas de tratamiento de datos.",
        ],
      },
      {
        id: "storage",
        title: "Almacenamiento local y conservación",
        paragraphs: [
          "Las credenciales de OAuth se almacenan localmente en la máquina virtual Ubuntu, por separado de este sitio web. El historial local de conversaciones, los registros o las copias de seguridad pueden conservar contenido derivado de los correos, incluidos resúmenes y respuestas sugeridas.",
          "Si se implementa, el servicio de correo también podría conservar credenciales, propuestas de mensajes, destinatarios, metadatos, archivos adjuntos cuando se proporcionen y registros de aprobación en su almacenamiento, registros del servicio, registros de actividad o copias de seguridad. Sus ubicaciones de almacenamiento y procedimientos de eliminación aún no se han establecido aquí.",
          "Esta política no establece un plazo fijo de conservación. El contenido no se elimina necesariamente justo después de una solicitud, y eliminar una copia local no elimina automáticamente otras copias en historiales, registros o copias de seguridad, ni los datos que ya hayan recibido los proveedores.",
        ],
      },
      {
        id: "revoke-access",
        title: "Revocar el acceso de Google",
        paragraphs: [
          "Puedo revocar el acceso del asistente desde la página de conexiones de mi cuenta de Google, seleccionando Hermes Personal Assistant y retirando su acceso. Si el servicio separado se implementa y autoriza, también tendría que revocar cualquier autorización de Google independiente que utilice; revocar el token actual de Hermes no revocaría necesariamente el acceso del servicio.",
          "La revocación detiene el acceso autorizado futuro con la autorización revocada, incluida la creación de borradores y el envío cuando corresponda. No elimina automáticamente las copias existentes, los borradores o mensajes enviados de Gmail, los registros locales o del servicio ni el contenido ya enviado a OpenAI o Telegram.",
        ],
      },
      {
        id: "remove-local-data",
        title: "Eliminar los datos almacenados localmente",
        paragraphs: [
          "Como propietario, puedo detener el asistente en la máquina virtual Ubuntu, eliminar sus credenciales y tokens de OAuth locales y borrar el historial de conversaciones y los registros derivados del correo en las ubicaciones de almacenamiento configuradas del asistente. También puedo revisar y eliminar las copias de seguridad que contengan esas credenciales o contenido derivado de los correos, incluidas las copias guardadas fuera de la máquina virtual.",
          "Si se implementa el servicio separado, también tendría que detenerlo y eliminar sus credenciales y datos conservados, incluidas propuestas, archivos adjuntos, registros de aprobación, registros de actividad y copias de seguridad, de sus ubicaciones reales de almacenamiento. Las instrucciones concretas de eliminación deberán documentarse con esa implementación; no se especifican comandos de eliminación para el servicio aún no construido.",
          "Revocar el acceso de Google y eliminar los datos locales son pasos distintos. Borrar archivos locales no elimina los mensajes de Gmail ni las copias en poder de OpenAI o Telegram; los controles de eliminación que ofrezcan esos proveedores deben utilizarse por separado.",
        ],
      },
      {
        id: "policy-contact",
        title: "Preguntas sobre esta política",
        paragraphs: [
          "Para cualquier pregunta sobre Hermes Personal Assistant o esta política, contacta con Marc Antoni Mas en la dirección pública que aparece a continuación.",
        ],
      },
    ],
  },
};
