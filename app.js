// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.querySelector(".navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

var navBtn = document.querySelector("#menu-click")
var navMenu = document.querySelector(".nav-menu")
var menuClose = document.querySelector("#menu-close-click")

navBtn.addEventListener("click", () => {
    navMenu.classList.add("nav-open")
})
menuClose.addEventListener("click", () => {
    navMenu.classList.remove("nav-open")
})