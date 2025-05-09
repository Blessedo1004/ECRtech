window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.style.backgroundColor= "#0451b1"; 
   }
    else {
    navbar.style.backgroundColor = "transparent"; 
     
  }
});

window.addEventListener("load", () => {

  setTimeout(() => {
    const preloader = document.querySelector(".pre-con");
    preloader.classList.add("hidden");

    const content = document.querySelector(".content");
    content.style.display = "block";
  }, 2000);
});