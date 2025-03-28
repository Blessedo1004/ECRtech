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