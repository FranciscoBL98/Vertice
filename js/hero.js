// Efecto simple de fade al cargar el texto
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = 0;
    heroContent.style.transform = "translateY(20px)";

    setTimeout(() => {
        heroContent.style.transition = "all 1s ease";
        heroContent.style.opacity = 1;
        heroContent.style.transform = "translateY(0)";
    }, 300);
});
