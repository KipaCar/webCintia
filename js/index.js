//Top bar

window.addEventListener("scroll", function () {
  const prueba = document.getElementsByClassName("prueba");
  if (window.scrollY > 50) {
    console.log(prueba);
    console.log("Scrolled more than 50px");
    document.getElementsByClassName("top")[0].style.display = "block";
  } else {
    document.getElementsByClassName("top")[0].style.display = "none";
  }
});
