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

document.addEventListener('DOMContentLoaded', function() {
    // Capturar todos os produtos
    const produtos = document.querySelectorAll('.produto');

    // Capturar elementos do detalhe do produto ampliado
    const detalheProduto = document.getElementById('detalhe-produto');
    const produtoAmpliadoImg = document.getElementById('produto-ampliado-img');
    const coresSelect = document.getElementById('cor');
    const tamanhosSelect = document.getElementById('tamanho');

    // Adicionar evento de clique a cada produto
    produtos.forEach(produto => {
        produto.addEventListener('click', function() {
            // Atualizar a imagem do produto ampliado com a imagem do produto clicado
            const imgSrc = produto.querySelector('img').getAttribute('src');
            produtoAmpliadoImg.setAttribute('src', imgSrc);

            // Mostrar o detalhe do produto ampliado
            detalheProduto.style.display = 'flex'; // mostrar o detalhe do produto
        });
    });

    // Fechar o detalhe do produto ampliado ao clicar fora dele
    detalheProduto.addEventListener('click', function(event) {
        if (event.target === this) {
            this.style.display = 'none'; // esconder o detalhe do produto
        }
    });
});
