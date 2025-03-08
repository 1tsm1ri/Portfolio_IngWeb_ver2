document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-list');
    const navButtons = document.querySelectorAll('.nav-btn');
    const navContainer = document.getElementById('navMenu');

    // Toggle del menú hamburguesa
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target) && window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Event listeners para los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover clase active de todos los botones
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la sección objetivo
            const targetSection = document.getElementById(button.dataset.section);
            
            // Scroll suave
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Cerrar menú en móvil
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Actualizar botón activo al hacer scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.page-section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        
        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.section === current) {
                button.classList.add('active');
            }
        });
    });

    // Manejar redimensionamiento de ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Smooth scroll para enlaces externos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});


// Añade esto al código JavaScript existente
window.addEventListener('scroll', () => {
    const navMenu = document.getElementById('navMenu');
    const scrollPosition = window.scrollY;
    const colorChangeThreshold = 100; // Cambia este valor para ajustar cuando ocurre el cambio

    if (scrollPosition > colorChangeThreshold) {
        navMenu.style.backgroundColor = 'var(--dark-purple)';
        navMenu.style.boxShadow = '0 2px 15px rgba(38, 5, 25, 0.2)';
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.style.color = 'var(--white)';
        });
    } else {
        navMenu.style.backgroundColor = 'var(--dark-purple)';
        navMenu.style.boxShadow = 'none';
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.style.color = 'var(--white)';
        });
    }
});

