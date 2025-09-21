const btnTop = document.querySelector(".top");

// Mostrar u ocultar el botón al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});
btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Puedes descomentar esto si quieres que se anime solo una vez:
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1  // Empieza la animación cuando se ve el 10% de la sección
  });

  document.querySelectorAll('.pantalla-completa').forEach(section => {
    observer.observe(section);
  });
