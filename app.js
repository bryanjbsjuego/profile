// ==================== TRANSLATIONS ====================
const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.tech": "Tecnologías",
        "nav.contact": "Contacto",
        "hero.title": "Desarrollador Full Stack",
        "hero.description": "Especializado en desarrollo backend y frontend, creando soluciones tecnológicas innovadoras.",
        "hero.contact": "Contáctame",
        "hero.projects": "Ver Proyectos",
        "hero.follow": "Sígueme",
        "hero.location": "Nezahualcóyotl, México",
        "hero.available": "Disponible para trabajar",
        "about.title": "Sobre Mí",
        "about.p1": "Mi perfil va enfocado en el desarrollo full stack, diseño e implementación de soluciones tecnológicas innovadoras. Poseo habilidades sólidas en backend y frontend, trabajando con diversas tecnologías para desarrollar soluciones robustas y funcionales.",
        "about.p2": "Comprometido con la innovación y la entrega de soluciones tecnológicas que optimizan el manejo de datos y mejoran la toma de decisiones de alto impacto.",
        "experience.title": "Experiencia Laboral",
        "experience.infotec.title": "Desarrollador Full Stack Semi Senior",
        "experience.infotec.date": "Marzo 2022 - Presente",
        "experience.infotec.location": "Ciudad de México",
        "experience.infotec.project1.title": "💰 Sistema Administrativo de Pagos SADER",
        "experience.infotec.project1.desc": "Sistema integral en desarrollo para la gestión y administración de pagos y solicitudes de apoyo a beneficiarios de diversos programas de la Secretaría de Agricultura. Desarrollado con Spring Boot, React, JPA, Hibernate y Maven, bajo una arquitectura basada en microservicios.",
        "experience.infotec.project2.title": "📋 Sistema Integral de Almacén e Inventario (nivel nacional)",
        "experience.infotec.project2.desc": "Sistema integral a nivel nacional para la gestión y control de almacenes e inventarios. Desarrollado con Laravel 10 (PHP) en el backend y JavaScript con Bootstrap en el frontend, utilizando colas, APIs y servicios REST con MySQL.",
        "experience.infotec.project3.title": "📄 Visor de Recibos de Nómina (CFDI)",
        "experience.infotec.project3.desc": "Sistema de consulta y descarga de recibos de nómina (CFDI). Desarrollado con Laravel 10 y Livewire 3, permite la generación automatizada de archivos CFDI y la visualización interactiva de recibos.",
        "experience.infotec.project4.title": "📰 Plataforma SICRE - Administración de Notas Informativas",
        "experience.infotec.project4.desc": "Sistema web a nivel nacional para la gestión y administración de notas. Desarrollado con Laravel 11, Vue.js 3 y Tailwind CSS, implementando una arquitectura moderna y componentes dinámicos para una interfaz eficiente y responsiva.",
        "experience.infotec.project5.title": "📁 Sistema de Control Documental (SICOD)",
        "experience.infotec.project5.desc": "Plataforma para la gestión integral de oficios y documentos, desarrollada con Laravel 12, Vue.js 3 y Tailwind CSS. Incluye comunicación en tiempo real mediante WebSocket con Laravel Reverb, gestión de estado con Pinia, visualización de datos con Chart.js y ejecución de tareas programadas para automatización de procesos.",
        "experience.infotec.project6.title": "🎫 Sistema de Tickets y Atención a Usuarios",
        "experience.infotec.project6.desc": "Plataforma integral desarrollada con .NET 8, Razor Pages y el patrón MVC. Implementa Entity Framework para el manejo de datos y notificaciones automáticas por correo electrónico y WhatsApp, optimizando la gestión y seguimiento de solicitudes de soporte.",
        "experience.infotec.project7.title": "💡 Plataforma de Base de Conocimientos",
        "experience.infotec.project7.desc": "Sistema desarrollado con .NET 8, Razor Pages y el patrón MVC, utilizando Entity Framework y el Repository Pattern para el manejo eficiente de datos. Permite la gestión de preguntas y respuestas, votaciones, reputación de usuarios y administración de contenido, facilitando el intercambio y la organización del conocimiento institucional.",
        "experience.valvid.title": "Becario en Programación Web y Móvil",
        "experience.valvid.date": "Sep 2021 - Dic 2021",
        "experience.valvid.location": "Nezahualcóyotl, Estado de México",
        "experience.valvid.project.title": "Proyecto ARROW",
        "experience.valvid.project.desc": "Sistema web multitenancy con Laravel 8 para API REST. Consumo de servicios con Kotlin y Retrofit. Administración de obras públicas con registro de avances, control y generación de reportes.",
        "experience.praxis.title": "Becario en Infraestructura - Programador",
        "experience.praxis.date": "Sep 2019 - Dic 2019",
        "experience.praxis.location": "Ciudad de México",
        "experience.praxis.project.title": "Actualización y Mantenimiento de Sistemas de Inventario TI",
        "experience.praxis.project.desc": "Creación del módulo de administrador para procesos de renta de equipos, nuevas adquisiciones y control de hardware/software.",
        "projects.title": "Proyectos Destacados",
        "projects.inProgress": "En Desarrollo",
        "projects.sader.title": "Sistema Administrativo de Pagos SADER",
        "projects.sader.desc": "Sistema integral para la gestión y administración de pagos de apoyos a beneficiarios de diferentes programas de la Secretaría de Agricultura.",
        "projects.sicod.title": "Sistema de Control Documental",
        "projects.sicod.desc": "Gestión completa de oficios y documentos oficiales con chat en tiempo real usando websockets.",
        "projects.tickets.title": "Sistema de Tickets",
        "projects.tickets.desc": "Plataforma completa de atención a usuarios con notificaciones por correo y WhatsApp.",
        "projects.sicre.title": "Plataforma SICRE",
        "projects.sicre.desc": "Administración de notas informativas a nivel nacional con sistema completo de publicación y edición.",
        "projects.inventory.title": "Sistema de Inventario Nacional",
        "projects.inventory.desc": "Gestión integral de almacén e inventario a nivel nacional con APIs REST y sistema de colas.",
        "projects.arrow.title": "Proyecto ARROW",
        "projects.arrow.desc": "Sistema multitenancy para administración de obras públicas con app móvil Android.",
        "tech.title": "Stack Tecnológico",
        "tech.database": "Bases de Datos & ORM",
        "tech.tools": "Herramientas",
        "tech.patterns": "⚙️ Patrones de Diseño y Arquitectura Aplicados en Proyectos",
        "tech.patterns.repository": "Abstracción de datos (incluye Entity Framework)",
        "tech.patterns.service": "Lógica de negocio",
        "tech.patterns.micro": "Microservicios",
        "tech.patterns.microDesc": "Arquitectura distribuida",
        "education.title": "Educación",
        "education.degree1.title": "Ingeniero en TIC",
        "education.degree1.date": "Abril 2020 - Diciembre 2021",
        "education.degree2.title": "TSU en TIC",
        "education.degree2.date": "Enero 2018 - Diciembre 2019",
        "education.degree3.title": "Profesional Técnico-Bachiller",
        "education.degree3.date": "Agosto 2011 - Julio 2014",
        "education.degree3.specialty": "Especialidad: Autotrónica",
        "education.courses.title": "Cursos Especializados",
        "education.courses.course1": "✓ Desarrollo Web en PHP, MVC, POO y MySQL",
        "education.courses.course2": "✓ Laravel y Android con JWT y Kotlin",
        "education.courses.course3": "✓ Sistema con Laravel 11 y Vue 3",
        "education.courses.course4": "✓ React & Spring Boot Full Stack",
        "contact.title": "¿Listo para trabajar juntos?",
        "contact.subtitle": "Estoy disponible para proyectos freelance o tiempo completo",
        "contact.phone": "Teléfono",
        "contact.location": "Ubicación",
        "contact.locationValue": "Nezahualcóyotl, Estado de México",
        "contact.availability": "Disponibilidad",
        "contact.availabilityValue": "Disponible para trabajar",
        "contact.form.name": "Nombre",
        "contact.form.subject": "Asunto",
        "contact.form.message": "Mensaje",
        "contact.form.submit": "Enviar Mensaje",
        "contact.form.alert": "¡Gracias por tu mensaje! Te contactaré pronto.\n\nNota: Para recibir mensajes reales, integra un servicio como Formspree o EmailJS.",
        "footer.rights": "© 2025 José Bryan Solis Jiménez. Todos los derechos reservados."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.tech": "Technologies",
        "nav.contact": "Contact",
        "hero.title": "Full Stack Developer",
        "hero.description": "Specialized in backend and frontend development, creating innovative technological solutions.",
        "hero.contact": "Contact Me",
        "hero.projects": "View Projects",
        "hero.follow": "Follow Me",
        "hero.location": "Nezahualcóyotl, Mexico",
        "hero.available": "Available for work",
        "about.title": "About Me",
        "about.p1": "My profile focuses on full stack development, design and implementation of innovative technological solutions. I possess solid skills in backend and frontend, working with various technologies to develop robust and functional solutions.",
        "about.p2": "Committed to innovation and delivering technological solutions that optimize data management and improve high-impact decision making.",
        "experience.title": "Work Experience",
        "experience.infotec.title": "Semi Senior Full Stack Developer",
        "experience.infotec.date": "March 2022 - Present",
        "experience.infotec.location": "Mexico City",
        "experience.infotec.project1.title": "💰 SADER Payment Administration System",
        "experience.infotec.project1.desc": "Comprehensive system under development for the management and administration of payments and support requests for beneficiaries of various programs of the Ministry of Agriculture. Developed with Spring Boot, React, JPA, Hibernate and Maven, under a microservices-based architecture.",
        "experience.infotec.project2.title": "📋 Comprehensive Warehouse and Inventory System (national level)",
        "experience.infotec.project2.desc": "Comprehensive national-level system for warehouse and inventory management and control. Developed with Laravel 10 (PHP) on the backend and JavaScript with Bootstrap on the frontend, using queues, APIs and REST services with MySQL.",
        "experience.infotec.project3.title": "📄 Payroll Receipt Viewer (CFDI)",
        "experience.infotec.project3.desc": "Payroll receipt (CFDI) query and download system. Developed with Laravel 10 and Livewire 3, it allows automated CFDI file generation and interactive receipt visualization.",
        "experience.infotec.project4.title": "📰 SICRE Platform - News Management",
        "experience.infotec.project4.desc": "National-level web system for news management and administration. Developed with Laravel 11, Vue.js 3 and Tailwind CSS, implementing a modern architecture and dynamic components for an efficient and responsive interface.",
        "experience.infotec.project5.title": "📁 Document Control System (SICOD)",
        "experience.infotec.project5.desc": "Platform for comprehensive management of official documents, developed with Laravel 12, Vue.js 3 and Tailwind CSS. Includes real-time communication through WebSocket with Laravel Reverb, state management with Pinia, data visualization with Chart.js and scheduled task execution for process automation.",
        "experience.infotec.project6.title": "🎫 Ticketing and User Support System",
        "experience.infotec.project6.desc": "Comprehensive platform developed with .NET 8, Razor Pages and MVC pattern. Implements Entity Framework for data management and automatic notifications via email and WhatsApp, optimizing support request management and tracking.",
        "experience.infotec.project7.title": "💡 Knowledge Base Platform",
        "experience.infotec.project7.desc": "System developed with .NET 8, Razor Pages and MVC pattern, using Entity Framework and Repository Pattern for efficient data management. Allows management of questions and answers, voting, user reputation and content administration, facilitating the exchange and organization of institutional knowledge.",
        "experience.valvid.title": "Web and Mobile Programming Intern",
        "experience.valvid.date": "Sep 2021 - Dec 2021",
        "experience.valvid.location": "Nezahualcóyotl, State of Mexico",
        "experience.valvid.project.title": "ARROW Project",
        "experience.valvid.project.desc": "Multitenancy web system with Laravel 8 for REST API. Service consumption with Kotlin and Retrofit. Public works administration with progress registration, control and report generation.",
        "experience.praxis.title": "Infrastructure Intern - Programmer",
        "experience.praxis.date": "Sep 2019 - Dec 2019",
        "experience.praxis.location": "Mexico City",
        "experience.praxis.project.title": "IT Inventory System Update and Maintenance",
        "experience.praxis.project.desc": "Creation of the administrator module for equipment rental processes, new acquisitions and hardware/software control.",
        "projects.title": "Featured Projects",
        "projects.inProgress": "In Development",
        "projects.sader.title": "SADER Payment Administration System",
        "projects.sader.desc": "Comprehensive system for managing and administering support payments to beneficiaries of different Ministry of Agriculture programs.",
        "projects.sicod.title": "Document Control System",
        "projects.sicod.desc": "Complete management of official documents with real-time chat using websockets.",
        "projects.tickets.title": "Ticketing System",
        "projects.tickets.desc": "Complete user support platform with email and WhatsApp notifications.",
        "projects.sicre.title": "SICRE Platform",
        "projects.sicre.desc": "National-level news administration with complete publication and editing system.",
        "projects.inventory.title": "National Inventory System",
        "projects.inventory.desc": "Comprehensive national warehouse and inventory management with REST APIs and queue system.",
        "projects.arrow.title": "ARROW Project",
        "projects.arrow.desc": "Multitenancy system for public works administration with Android mobile app.",
        "tech.title": "Technology Stack",
        "tech.database": "Databases & ORM",
        "tech.tools": "Tools",
        "tech.patterns": "⚙️ Design Patterns and Architecture Applied in Projects",
        "tech.patterns.repository": "Data abstraction (includes Entity Framework)",
        "tech.patterns.service": "Business logic",
        "tech.patterns.micro": "Microservices",
        "tech.patterns.microDesc": "Distributed architecture",
        "education.title": "Education",
        "education.degree1.title": "ICT Engineer",
        "education.degree1.date": "April 2020 - December 2021",
        "education.degree2.title": "ICT Associate Degree",
        "education.degree2.date": "January 2018 - December 2019",
        "education.degree3.title": "Professional Technician-High School",
        "education.degree3.date": "August 2011 - July 2014",
        "education.degree3.specialty": "Specialty: Autotronics",
        "education.courses.title": "Specialized Courses",
        "education.courses.course1": "✓ Web Development in PHP, MVC, OOP and MySQL",
        "education.courses.course2": "✓ Laravel and Android with JWT and Kotlin",
        "education.courses.course3": "✓ System with Laravel 11 and Vue 3",
        "education.courses.course4": "✓ React & Spring Boot Full Stack",
        "contact.title": "Ready to work together?",
        "contact.subtitle": "I'm available for freelance projects or full-time",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.locationValue": "Nezahualcóyotl, State of Mexico",
        "contact.availability": "Availability",
        "contact.availabilityValue": "Available for work",
        "contact.form.name": "Name",
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",
        "contact.form.alert": "Thank you for your message! I will contact you soon.\n\nNote: To receive real messages, integrate a service like Formspree or EmailJS.",
        "footer.rights": "© 2025 José Bryan Solis Jiménez. All rights reserved."
    }
};

let currentLang = 'es';

// ==================== LANGUAGE CHANGE FUNCTION ====================
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language buttons
    document.getElementById('lang-es').classList.toggle('bg-primary', lang === 'es');
    document.getElementById('lang-es').classList.toggle('text-white', lang === 'es');
    document.getElementById('lang-es').classList.toggle('bg-gray-200', lang !== 'es');
    document.getElementById('lang-es').classList.toggle('text-gray-700', lang !== 'es');
    
    document.getElementById('lang-en').classList.toggle('bg-primary', lang === 'en');
    document.getElementById('lang-en').classList.toggle('text-white', lang === 'en');
    document.getElementById('lang-en').classList.toggle('bg-gray-200', lang !== 'en');
    document.getElementById('lang-en').classList.toggle('text-gray-700', lang !== 'en');
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// ==================== LOAD SAVED LANGUAGE ====================
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    if (savedLang !== 'es') {
        changeLanguage(savedLang);
    }
});

// ==================== MOBILE MENU TOGGLE ====================
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ==================== CLOSE MOBILE MENU ====================
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ==================== FORM SUBMISSION ====================
function handleSubmit(e) {
  e.preventDefault();
  
  // Get translated alert message
  const alertMessage = translations[currentLang]["contact.form.alert"];
  alert(alertMessage);
  
  e.target.reset();
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// ==================== SCROLL TO TOP BUTTON ====================
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollToTopBtn.classList.add("opacity-0", "invisible");
    scrollToTopBtn.classList.remove("opacity-100", "visible");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});