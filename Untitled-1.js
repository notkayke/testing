document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
    });

    // Smooth scroll for sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Smooth scroll for "Ver Produtos" button
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    });
});
