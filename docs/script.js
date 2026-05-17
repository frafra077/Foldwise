const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const languageButtons = document.querySelectorAll(".language-switcher button");
const siteHeader = document.querySelector(".site-header");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const headerActions = document.querySelector(".header-actions");
let progressTicking = false;

const pageCopy = {
  it: {
    title: "Foldwise - Organizza il tuo Mac automaticamente",
    description:
      "Foldwise e' l'app premium per macOS che monitora le cartelle, applica regole intelligenti e mantiene file, download e desktop sempre ordinati.",
    text: {
      ".nav a:nth-child(1)": "Funzioni",
      ".nav a:nth-child(2)": "Privacy",
      ".nav a:nth-child(3)": "Gallery",
      ".nav-download": "Download",
      ".nav a:nth-child(5)": "Contatti",
      ".nav a:nth-child(6)": "FAQ",
      ".nav-cta": "Acquista Licenza",
      ".mobile-menu-toggle span": "Menu",
      ".hero-lead": "Il sistema elegante per macOS che riordina Desktop, Download e cartelle di lavoro mentre tu pensi ad altro.",
      ".hero-actions .primary": "Acquista Licenza",
      ".hero-actions .secondary": "Scarica gratis",
      ".hero-points li:nth-child(1)": "Regole visuali per spostare, rinominare e taggare file.",
      ".hero-points li:nth-child(2)": "Anteprima, log e annullamento per automazioni piu' tranquille.",
      ".hero-points li:nth-child(3)": "Analisi locale privata per suggerire regole utili.",
      ".hero-metrics div:nth-child(1) span": "Cartelle e regole con Pro",
      ".hero-metrics div:nth-child(2) span": "Upload dei tuoi file",
      ".hero-metrics div:nth-child(3) span": "Licenza, fino a 2 Mac",
      ".hero-proof span:nth-child(2)": "Locale e privata",
      ".chip-preview strong": "Anteprima sicura",
      ".chip-preview span": "Controlla ogni azione prima di eseguirla",
      ".chip-ai strong": "AI locale",
      ".chip-ai span": "Suggerimenti privati sul tuo Mac",
      ".menu-popover strong": "Monitoraggio attivo",
      ".menu-popover span": "Cartelle ordinate in tempo reale",
      ".problem-intro h2": "La tua scrivania non deve diventare un secondo lavoro.",
      ".problem-intro p":
        "Ogni download, screenshot, PDF o allegato crea una piccola decisione. Foldwise trasforma quelle decisioni in un sistema ordinato, verificabile e sempre sotto controllo.",
      ".before h3": "Senza Foldwise",
      ".before li:nth-child(1)": "Download accumulati per giorni.",
      ".before li:nth-child(2)": "File rinominati a mano, quando ti ricordi.",
      ".before li:nth-child(3)": "Nessuna traccia chiara di cosa e' cambiato.",
      ".after h3": "Con Foldwise",
      ".after li:nth-child(1)": "Regole attive appena arriva un file.",
      ".after li:nth-child(2)": "Preview prima di applicare modifiche.",
      ".after li:nth-child(3)": "Log e undo per lavorare senza ansia.",
      ".automation-core strong": "Regole Foldwise",
      ".automation-core small": "tipo, nome, data, contenuto",
      ".incoming-stack small": "File in arrivo",
      ".organized-stack span:nth-child(1)": "Fatture",
      ".organized-stack small": "Destinazioni ordinate",
      ".organized-stack span:nth-child(4)": "Archivio",
      ".control-rail div:nth-child(1) strong": "Anteprima",
      ".control-rail div:nth-child(1) span": "Vedi ogni azione prima di eseguirla.",
      ".control-rail div:nth-child(2) strong": "Cronologia",
      ".control-rail div:nth-child(2) span": "Ogni spostamento resta tracciabile.",
      ".control-rail div:nth-child(3) strong": "Annulla",
      ".control-rail div:nth-child(3) span": "Torna indietro dove l'azione lo consente.",
      "#funzioni .section-heading h2": "Automazioni potenti, controllo da professionista.",
      "#funzioni .section-heading p":
        "Foldwise copre il ciclo completo: monitoraggio, regole, anteprima, azioni, storico e recupero. Disponibile in italiano, inglese e francese.",
      ".feature-card-copy h3": "Un motore di regole pensato per flussi reali.",
      ".feature-card-copy p":
        "Combina condizioni, priorita' e azioni per descrivere come vuoi che il Mac organizzi i file. Foldwise lavora in background, ma ogni passaggio resta leggibile.",
      ".builder-row.active span": "Se",
      ".builder-row.active strong": "estensione e' PDF",
      ".builder-row:nth-child(2) span": "e",
      ".builder-row:nth-child(2) strong": "nome contiene fattura",
      ".builder-row.action span": "allora",
      ".builder-row.action strong": "sposta in Fatture / 2026",
      ".builder-status": "Preview pronta · Undo disponibile",
      ".feature-grid article:nth-child(1) h3": "Monitoraggio in tempo reale",
      ".feature-grid article:nth-child(1) p":
        "Le cartelle scelte vengono osservate continuamente. Puoi mettere in pausa una cartella, tutto il sistema o eseguire le regole manualmente.",
      ".feature-grid article:nth-child(2) h3": "Regole precise",
      ".feature-grid article:nth-child(2) p":
        "Combina tipo, estensione, nome, testo leggibile, dimensione, eta' e data di creazione con logica tutte o qualsiasi.",
      ".feature-grid article:nth-child(3) h3": "Azioni avanzate",
      ".feature-grid article:nth-child(3) p":
        "Sposta, copia, rinomina, cestina, applica tag Finder oppure esegui Shell e AppleScript per flussi su misura.",
      ".workflow-panel h2": "Dalla cartella disordinata al flusso pulito.",
      ".steps div:nth-child(1) strong": "Scegli le cartelle",
      ".steps div:nth-child(1) p": "Downloads, Desktop, progetti, fatture o archivi ricorrenti.",
      ".steps div:nth-child(2) strong": "Crea le regole",
      ".steps div:nth-child(2) p": "Usa condizioni leggibili e priorita' per descrivere il tuo modo di lavorare.",
      ".steps div:nth-child(3) strong": "Lascia agire Foldwise",
      ".steps div:nth-child(3) p": "Le azioni vengono eseguite con log chiari, gestione conflitti e undo.",
      ".privacy-panel-head strong": "Privacy architecture",
      ".privacy-panel-head span": "Foldwise lavora sul tuo Mac",
      ".privacy-callout strong": "Nessun upload dei documenti",
      ".privacy-callout span": "Internet viene usato solo per licenza e aggiornamenti.",
      ".privacy-copy h2": "Privacy locale, per davvero.",
      ".privacy-copy > p":
        "I tuoi file restano sul Mac. Le regole sono salvate localmente, l'accesso alle cartelle segue i permessi di macOS e l'analisi intelligente e' pensata per suggerire automazioni senza caricare documenti online.",
      ".privacy-grid article:nth-child(1) h3": "Nessun upload dei documenti",
      ".privacy-grid article:nth-child(1) p": "Foldwise organizza file e cartelle localmente; internet serve solo per licenza e aggiornamenti.",
      ".privacy-grid article:nth-child(2) h3": "Accesso controllato da macOS",
      ".privacy-grid article:nth-child(2) p": "Le cartelle vengono gestite tramite i permessi del sistema, non con accesso nascosto.",
      ".privacy-grid article:nth-child(3) h3": "Automazioni reversibili",
      ".privacy-grid article:nth-child(3) p": "Anteprima, cronologia e undo rendono le azioni delicate più facili da verificare.",
      ".privacy-grid article:nth-child(4) h3": "Workflow trasferibile",
      ".privacy-grid article:nth-child(4) p": "Backup e ripristino permettono di salvare o spostare la configurazione su un altro Mac.",
      ".gallery-heading h2": "Foldwise, visto da vicino.",
      ".gallery-heading p":
        "Una gallery essenziale e reale: dashboard completa, analisi AI, regole e cronologia. Premi una schermata per aprirla a piena dimensione.",
      ".gallery-main .gallery-caption strong": "Dashboard completa",
      ".gallery-main .gallery-caption span": "Cartelle, regole e cronologia in un unico spazio operativo.",
      ".shot-folders strong": "Analisi AI",
      ".shot-rules strong": "Regole",
      ".shot-activity strong": "Activity log",
      "#download h2": "Scarica Foldwise. Sblocca Pro quando vuoi.",
      "#download .download-heading p": "Parti subito con la versione gratuita, poi acquista la licenza quando vuoi automatizzare tutto il tuo flusso di lavoro.",
      ".download-trust span:nth-child(3)": "Licenza una tantum",
      ".download-trust span:nth-child(4)": "Fino a 2 Mac",
      ".plan.free .price": "Gratis",
      ".plan.free li:nth-child(1)": "1 cartella monitorata per iniziare",
      ".plan.free li:nth-child(2)": "Fino a 3 regole per cartella",
      ".plan.free li:nth-child(3)": "Azioni essenziali: sposta e cestina",
      ".plan.free li:nth-child(4)": "Perfetta per provare il workflow reale",
      ".download-button": "Download gratuito",
      ".offer-banner": "Offerta lancio",
      ".plan.pro .plan-label": "Consigliato",
      ".price-note": "Licenza una tantum",
      ".plan.pro li:nth-child(1)": "Cartelle e regole senza limiti",
      ".plan.pro li:nth-child(2)": "Copia, rinomina, tag, script e azioni avanzate",
      ".plan.pro li:nth-child(3)": "AI locale privata e log completo",
      ".plan.pro li:nth-child(4)": "Interfaccia multilingue: italiano, inglese e francese",
      ".plan.pro li:nth-child(5)": "Aggiornamenti futuri inclusi, fino a 2 Mac",
      ".plan.pro .button": "Acquista Licenza",
      ".download-footer div:nth-child(1) span": "Scarica Foldwise",
      ".download-footer div:nth-child(2) span": "Prova le automazioni Free",
      ".download-footer div:nth-child(3) span": "Sblocca Pro con la licenza",
      ".purchase-after h2": "Dopo l'acquisto.",
      ".purchase-row div:nth-child(1) strong": "Ricevi la licenza",
      ".purchase-row div:nth-child(1) p": "La chiave arriva dopo il checkout.",
      ".purchase-row div:nth-child(2) strong": "La inserisci nell'app",
      ".purchase-row div:nth-child(2) p": "Foldwise Pro si sblocca in pochi secondi.",
      ".purchase-row div:nth-child(3) strong": "Usi Pro su 2 Mac",
      ".purchase-row div:nth-child(3) p": "Cartelle, regole e azioni avanzate senza limiti.",
      ".faq-intro h2": "Domande frequenti.",
      ".faq-intro p": "Le risposte essenziali prima di scaricare Foldwise o sbloccare la licenza Pro.",
      ".faq-list details:nth-child(1) summary": "Posso usare Foldwise gratis?",
      ".faq-list details:nth-child(1) p": "Si. Foldwise Free ti permette di provare il workflow reale con 1 cartella monitorata, fino a 3 regole e le azioni essenziali.",
      ".faq-list details:nth-child(2) summary": "Che cosa sblocca Foldwise Pro?",
      ".faq-list details:nth-child(2) p": "Pro rimuove i limiti su cartelle e regole, abilita azioni avanzate come copia, rinomina, tag e script, include AI locale privata e log completo.",
      ".faq-list details:nth-child(3) summary": "La licenza e' un abbonamento?",
      ".faq-list details:nth-child(3) p": "No. Foldwise Pro e' una licenza una tantum. Paghi una volta e sblocchi le funzioni Pro sui Mac supportati dalla licenza.",
      ".faq-list details:nth-child(4) summary": "Su quanti Mac posso usare la licenza?",
      ".faq-list details:nth-child(4) p": "La licenza Pro puo' essere usata fino a 2 Mac, ideale per computer principale e portatile.",
      ".faq-list details:nth-child(5) summary": "Foldwise carica i miei file online?",
      ".faq-list details:nth-child(5) p": "No. Foldwise e' progettata per lavorare localmente sul Mac. Internet puo' essere usato per licenza e aggiornamenti.",
      ".faq-list details:nth-child(6) summary": "Cosa succede dopo l'acquisto?",
      ".faq-list details:nth-child(6) p": "Ricevi la licenza, la inserisci nell'app e Foldwise Pro viene sbloccato in pochi secondi.",
      ".faq-card strong": "Pronto a provarla?",
      ".faq-card p": "Scarica Foldwise Free e passa a Pro quando vuoi automatizzare senza limiti.",
      ".faq-card .button": "Download gratuito",
      ".contact-kicker": "Supporto diretto",
      ".contact-copy h2": "Hai bisogno di aiuto?",
      ".contact-copy > p": "Scrivimi dal canale più comodo. Per bug tecnici GitHub è ideale; per domande su licenza, installazione o Pro, meglio email.",
      ".response-note strong": "Risposta rapida",
      ".response-note small": "Di solito entro 24 ore lavorative.",
      ".contact-card:nth-child(1) p": "Licenze, installazione e domande generali.",
      ".contact-card:nth-child(1) em": "Scrivimi via email",
      ".contact-card:nth-child(2) p": "Segnala problemi con dettagli e screenshot.",
      ".contact-card:nth-child(2) em": "Apri una issue",
      ".contact-card:nth-child(3) p": "Aggiornamenti rapidi e messaggi brevi.",
      ".final-cta h2": "Un Mac piu' ordinato, senza rituali quotidiani.",
      ".final-cta .button": "Acquista Licenza",
      ".footer-tagline": "Il sistema elegante per macOS che organizza i tuoi file mentre pensi ad altro.",
      ".footer-rights": "© 2026 Foldwise · Tutti i diritti riservati",
      ".footer-col:nth-child(1) .footer-col-title": "Prodotto",
      ".footer-col:nth-child(1) a:nth-child(2)": "Funzioni",
      ".footer-col:nth-child(1) a:nth-child(5)": "Privacy",
      ".footer-col:nth-child(2) .footer-col-title": "Supporto",
      ".footer-col:nth-child(2) a:nth-child(3)": "Contatti"
    },
    attrs: {
      ".site-header .nav": { "aria-label": "Navigazione principale" },
      ".language-switcher": { "aria-label": "Seleziona lingua" },
      ".shot-folders": {
        "data-gallery-title": "Analisi AI locale",
        "data-gallery-caption": "Foldwise analizza la cartella sul Mac e suggerisce azioni trasformabili in regole automatiche."
      },
      ".shot-folders img": {
        alt: "Analisi AI locale di Foldwise con suggerimenti per creare regole automatiche"
      }
    }
  },
  en: {
    title: "Foldwise - Organize your Mac automatically",
    description:
      "Foldwise is the premium macOS app that watches folders, applies intelligent rules, and keeps files, downloads, and desktops organized.",
    text: {
      ".nav a:nth-child(1)": "Features",
      ".nav a:nth-child(2)": "Privacy",
      ".nav a:nth-child(3)": "Gallery",
      ".nav-download": "Download",
      ".nav a:nth-child(5)": "Contact",
      ".nav a:nth-child(6)": "FAQ",
      ".nav-cta": "Buy License",
      ".mobile-menu-toggle span": "Menu",
      ".hero-lead": "The elegant macOS system that organizes Desktop, Downloads, and work folders while you focus on everything else.",
      ".hero-actions .primary": "Buy License",
      ".hero-actions .secondary": "Download free",
      ".hero-points li:nth-child(1)": "Visual rules to move, rename, and tag files.",
      ".hero-points li:nth-child(2)": "Preview, logs, and undo for calmer automations.",
      ".hero-points li:nth-child(3)": "Private local analysis to suggest useful rules.",
      ".hero-metrics div:nth-child(1) span": "Folders and rules with Pro",
      ".hero-metrics div:nth-child(2) span": "Your files uploaded",
      ".hero-metrics div:nth-child(3) span": "License, up to 2 Macs",
      ".hero-proof span:nth-child(2)": "Local and private",
      ".chip-preview strong": "Safe preview",
      ".chip-preview span": "Review every action before running it",
      ".chip-ai strong": "Local AI",
      ".chip-ai span": "Private suggestions on your Mac",
      ".menu-popover strong": "Monitoring active",
      ".menu-popover span": "Folders organized in real time",
      ".problem-intro h2": "Your desktop should not become a second job.",
      ".problem-intro p":
        "Every download, screenshot, PDF, or attachment creates a small decision. Foldwise turns those decisions into an organized, verifiable system that stays under control.",
      ".before h3": "Without Foldwise",
      ".before li:nth-child(1)": "Downloads pile up for days.",
      ".before li:nth-child(2)": "Files get renamed manually, if you remember.",
      ".before li:nth-child(3)": "No clear trace of what changed.",
      ".after h3": "With Foldwise",
      ".after li:nth-child(1)": "Rules run as soon as a file arrives.",
      ".after li:nth-child(2)": "Preview changes before applying them.",
      ".after li:nth-child(3)": "Logs and undo help you work with confidence.",
      ".automation-core strong": "Foldwise rules",
      ".automation-core small": "type, name, date, content",
      ".incoming-stack small": "Incoming files",
      ".organized-stack span:nth-child(1)": "Invoices",
      ".organized-stack small": "Organized destinations",
      ".organized-stack span:nth-child(4)": "Archive",
      ".control-rail div:nth-child(1) strong": "Preview",
      ".control-rail div:nth-child(1) span": "See every action before running it.",
      ".control-rail div:nth-child(2) strong": "History",
      ".control-rail div:nth-child(2) span": "Every move stays traceable.",
      ".control-rail div:nth-child(3) strong": "Undo",
      ".control-rail div:nth-child(3) span": "Go back when the action allows it.",
      "#funzioni .section-heading h2": "Powerful automations, professional control.",
      "#funzioni .section-heading p":
        "Foldwise covers the full cycle: monitoring, rules, preview, actions, history, and recovery. Available in Italian, English, and French.",
      ".feature-card-copy h3": "A rule engine built for real workflows.",
      ".feature-card-copy p":
        "Combine conditions, priorities, and actions to describe how you want your Mac to organize files. Foldwise works in the background, while every step stays readable.",
      ".builder-row.active span": "If",
      ".builder-row.active strong": "extension is PDF",
      ".builder-row:nth-child(2) span": "and",
      ".builder-row:nth-child(2) strong": "name contains invoice",
      ".builder-row.action span": "then",
      ".builder-row.action strong": "move to Invoices / 2026",
      ".builder-status": "Preview ready · Undo available",
      ".feature-grid article:nth-child(1) h3": "Real-time monitoring",
      ".feature-grid article:nth-child(1) p":
        "Chosen folders are watched continuously. Pause a folder, pause the whole system, or run rules manually.",
      ".feature-grid article:nth-child(2) h3": "Precise rules",
      ".feature-grid article:nth-child(2) p":
        "Combine type, extension, name, readable text, size, age, and creation date with all or any logic.",
      ".feature-grid article:nth-child(3) h3": "Advanced actions",
      ".feature-grid article:nth-child(3) p":
        "Move, copy, rename, trash, apply Finder tags, or run Shell and AppleScript for custom workflows.",
      ".workflow-panel h2": "From messy folder to clean workflow.",
      ".steps div:nth-child(1) strong": "Choose folders",
      ".steps div:nth-child(1) p": "Downloads, Desktop, projects, invoices, or recurring archives.",
      ".steps div:nth-child(2) strong": "Create rules",
      ".steps div:nth-child(2) p": "Use readable conditions and priorities to describe how you work.",
      ".steps div:nth-child(3) strong": "Let Foldwise act",
      ".steps div:nth-child(3) p": "Actions run with clear logs, conflict handling, and undo.",
      ".privacy-panel-head strong": "Privacy architecture",
      ".privacy-panel-head span": "Foldwise works on your Mac",
      ".privacy-callout strong": "No document uploads",
      ".privacy-callout span": "Internet is used only for licensing and updates.",
      ".privacy-copy h2": "Local privacy, for real.",
      ".privacy-copy > p":
        "Your files stay on your Mac. Rules are saved locally, folder access follows macOS permissions, and intelligent analysis is designed to suggest automations without uploading documents online.",
      ".privacy-grid article:nth-child(1) h3": "No document uploads",
      ".privacy-grid article:nth-child(1) p": "Foldwise organizes files and folders locally; internet is used only for licensing and updates.",
      ".privacy-grid article:nth-child(2) h3": "Access controlled by macOS",
      ".privacy-grid article:nth-child(2) p": "Folders are handled through system permissions, not hidden access.",
      ".privacy-grid article:nth-child(3) h3": "Reversible automations",
      ".privacy-grid article:nth-child(3) p": "Preview, history, and undo make delicate actions easier to verify.",
      ".privacy-grid article:nth-child(4) h3": "Transferable workflows",
      ".privacy-grid article:nth-child(4) p": "Backup and restore let you save or move your configuration to another Mac.",
      ".gallery-heading h2": "Foldwise, up close.",
      ".gallery-heading p":
        "A real, focused gallery: full dashboard, AI analysis, rules, and history. Press a screenshot to open it full size.",
      ".gallery-main .gallery-caption strong": "Full dashboard",
      ".gallery-main .gallery-caption span": "Folders, rules, and history in one operational space.",
      ".shot-folders strong": "AI analysis",
      ".shot-rules strong": "Rules",
      ".shot-activity strong": "Activity log",
      "#download h2": "Download Foldwise. Unlock Pro whenever you are ready.",
      "#download .download-heading p": "Start with the free version, then buy a license when you want to automate your full workflow.",
      ".download-trust span:nth-child(3)": "One-time license",
      ".download-trust span:nth-child(4)": "Up to 2 Macs",
      ".plan.free .price": "Free",
      ".plan.free li:nth-child(1)": "1 monitored folder to get started",
      ".plan.free li:nth-child(2)": "Up to 3 rules per folder",
      ".plan.free li:nth-child(3)": "Essential actions: move and trash",
      ".plan.free li:nth-child(4)": "Perfect for trying the real workflow",
      ".download-button": "Free download",
      ".offer-banner": "Launch offer",
      ".plan.pro .plan-label": "Recommended",
      ".price-note": "One-time license",
      ".plan.pro li:nth-child(1)": "Unlimited folders and rules",
      ".plan.pro li:nth-child(2)": "Copy, rename, tag, scripts, and advanced actions",
      ".plan.pro li:nth-child(3)": "Private local AI and complete logs",
      ".plan.pro li:nth-child(4)": "Multilingual interface: Italian, English, and French",
      ".plan.pro li:nth-child(5)": "Future updates included, up to 2 Macs",
      ".plan.pro .button": "Buy License",
      ".download-footer div:nth-child(1) span": "Download Foldwise",
      ".download-footer div:nth-child(2) span": "Try Free automations",
      ".download-footer div:nth-child(3) span": "Unlock Pro with your license",
      ".purchase-after h2": "After purchase.",
      ".purchase-row div:nth-child(1) strong": "Receive your license",
      ".purchase-row div:nth-child(1) p": "Your key arrives after checkout.",
      ".purchase-row div:nth-child(2) strong": "Enter it in the app",
      ".purchase-row div:nth-child(2) p": "Foldwise Pro unlocks in seconds.",
      ".purchase-row div:nth-child(3) strong": "Use Pro on 2 Macs",
      ".purchase-row div:nth-child(3) p": "Unlimited folders, rules, and advanced actions.",
      ".faq-intro h2": "Frequently asked questions.",
      ".faq-intro p": "The essential answers before downloading Foldwise or unlocking Pro.",
      ".faq-list details:nth-child(1) summary": "Can I use Foldwise for free?",
      ".faq-list details:nth-child(1) p": "Yes. Foldwise Free lets you try the real workflow with 1 monitored folder, up to 3 rules, and essential actions.",
      ".faq-list details:nth-child(2) summary": "What does Foldwise Pro unlock?",
      ".faq-list details:nth-child(2) p": "Pro removes folder and rule limits, enables advanced actions like copy, rename, tags, and scripts, and includes private local AI plus complete logs.",
      ".faq-list details:nth-child(3) summary": "Is the license a subscription?",
      ".faq-list details:nth-child(3) p": "No. Foldwise Pro is a one-time license. Pay once and unlock Pro features on the Macs supported by your license.",
      ".faq-list details:nth-child(4) summary": "How many Macs can I use it on?",
      ".faq-list details:nth-child(4) p": "The Pro license can be used on up to 2 Macs, ideal for a main computer and a laptop.",
      ".faq-list details:nth-child(5) summary": "Does Foldwise upload my files online?",
      ".faq-list details:nth-child(5) p": "No. Foldwise is designed to work locally on your Mac. Internet may be used for licensing and updates.",
      ".faq-list details:nth-child(6) summary": "What happens after purchase?",
      ".faq-list details:nth-child(6) p": "You receive the license, enter it in the app, and Foldwise Pro unlocks in seconds.",
      ".faq-card strong": "Ready to try it?",
      ".faq-card p": "Download Foldwise Free and move to Pro when you want unlimited automation.",
      ".faq-card .button": "Free download",
      ".contact-kicker": "Direct support",
      ".contact-copy h2": "Need help?",
      ".contact-copy > p": "Use the channel that fits best. GitHub is ideal for technical bugs; for license, installation, or Pro questions, email is better.",
      ".response-note strong": "Fast reply",
      ".response-note small": "Usually within 24 business hours.",
      ".contact-card:nth-child(1) p": "Licenses, installation, and general questions.",
      ".contact-card:nth-child(1) em": "Email me",
      ".contact-card:nth-child(2) p": "Report issues with details and screenshots.",
      ".contact-card:nth-child(2) em": "Open an issue",
      ".contact-card:nth-child(3) p": "Quick updates and short messages.",
      ".final-cta h2": "A cleaner Mac, without daily rituals.",
      ".final-cta .button": "Buy License",
      ".footer-tagline": "The elegant macOS system that organizes your files while you focus on everything else.",
      ".footer-rights": "© 2026 Foldwise · All rights reserved",
      ".footer-col:nth-child(1) .footer-col-title": "Product",
      ".footer-col:nth-child(1) a:nth-child(2)": "Features",
      ".footer-col:nth-child(1) a:nth-child(5)": "Privacy",
      ".footer-col:nth-child(2) .footer-col-title": "Support",
      ".footer-col:nth-child(2) a:nth-child(3)": "Contact"
    },
    attrs: {
      ".site-header .nav": { "aria-label": "Main navigation" },
      ".language-switcher": { "aria-label": "Select language" },
      ".shot-folders": {
        "data-gallery-title": "Local AI analysis",
        "data-gallery-caption": "Foldwise analyzes the folder on your Mac and suggests actions that can become automatic rules."
      },
      ".shot-folders img": {
        alt: "Foldwise local AI analysis with suggestions for creating automatic rules"
      }
    }
  }
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const setAttributes = (selector, attrs) => {
  const element = document.querySelector(selector);
  if (!element) return;

  Object.entries(attrs).forEach(([name, value]) => element.setAttribute(name, value));
};

const applyLanguage = (lang) => {
  const copy = pageCopy[lang] || pageCopy.it;

  document.documentElement.lang = lang;
  document.title = copy.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);

  Object.entries(copy.text).forEach(([selector, value]) => setText(selector, value));
  Object.entries(copy.attrs).forEach(([selector, attrs]) => setAttributes(selector, attrs));

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("foldwise-language", lang);
};

const savedLanguage = localStorage.getItem("foldwise-language");
const initialLanguage = savedLanguage && pageCopy[savedLanguage] ? savedLanguage : "it";

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(initialLanguage);

const closeMobileMenu = () => {
  if (!siteHeader || !mobileMenuToggle) return;

  siteHeader.classList.remove("is-menu-open");
  mobileMenuToggle.setAttribute("aria-expanded", "false");
};

if (siteHeader && mobileMenuToggle && headerActions) {
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-menu-open");
    mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  headerActions.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.classList.contains("is-menu-open")) return;
    if (!siteHeader.contains(event.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}

const updateScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;

  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
  progressTicking = false;
};

window.addEventListener(
  "scroll",
  () => {
    if (!progressTicking) {
      window.requestAnimationFrame(updateScrollProgress);
      progressTicking = true;
    }
  },
  { passive: true }
);

updateScrollProgress();

const revealSelectors = [
  ".section",
  ".workflow-panel",
  ".compare-card",
  ".file-pipeline",
  ".control-rail > div",
  ".feature-hero-card",
  ".feature-grid article",
  ".capability-strip > div",
  ".privacy-panel",
  ".privacy-grid article",
  ".gallery-item",
  ".plan",
  ".purchase-row > div",
  ".download-footer > div",
  ".faq-card",
  ".contact-copy",
  ".contact-card",
  ".final-cta",
  ".footer",
  ".footer-col"
];

const revealItems = [...new Set(document.querySelectorAll(revealSelectors.join(",")))];

if (revealItems.length && !motionQuery.matches) {
  revealItems.forEach((item, index) => {
    item.classList.add("reveal-on-scroll");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  document.body.classList.add("reveal-ready");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (galleryItems.length && lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector("figcaption");
  const closeButton = lightbox.querySelector(".lightbox-close");

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lightboxImage.removeAttribute("src");
    lightboxImage.removeAttribute("alt");
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const title = item.dataset.galleryTitle || "";
      const caption = item.dataset.galleryCaption || "";

      lightboxImage.src = item.dataset.gallerySrc;
      lightboxImage.alt = title;
      lightboxCaption.innerHTML = `<strong>${title}</strong><span>${caption}</span>`;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
