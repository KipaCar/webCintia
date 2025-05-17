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
