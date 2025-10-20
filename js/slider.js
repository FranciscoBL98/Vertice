const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderTrack = document.querySelector('.slider-track');
const slides = Array.from(sliderTrack.children);

// Duplicar los logos para lograr continuidad visual
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
});

let speed = 3; // 🔧 Velocidad de movimiento (más alto = más rápido)
let position = 0;
let paused = false;

// Función que mueve el slider de manera continua
function animate() {
    if (!paused) {
        position -= speed;
        // Cuando se haya desplazado más allá de la mitad, reinicia el punto sin que se note
        if (Math.abs(position) >= sliderTrack.scrollWidth / 2) {
            position = 0;
        }
        sliderTrack.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
}

// Iniciar animación
animate();

// Pausa al pasar el mouse
sliderWrapper.addEventListener('mouseenter', () => (paused = true));
sliderWrapper.addEventListener('mouseleave', () => (paused = false));
