//Navbar Scroll Position Sticky
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    nav.classList.toggle ("sticky", window.scrollY > 0); 
});