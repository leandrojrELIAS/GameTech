document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-carousel img'); // Seleciona todas as imagens no carrossel
    let currentIndex = 0; // Índice da imagem atualmente visível
    const totalImages = images.length; // Número total de imagens

    function showNextImage() {
        images[currentIndex].classList.remove('active'); // Remove a classe 'active' da imagem atual
        currentIndex = (currentIndex + 1) % totalImages; // Passa para a próxima imagem, voltando para a primeira ao final
        images[currentIndex].classList.add('active'); // Adiciona a classe 'active' à nova imagem
    }

    // Alterna a imagem a cada 5 segundos
    setInterval(showNextImage, 4000);
});
