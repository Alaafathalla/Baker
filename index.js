document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar");
    var header = document.querySelector(".header");

    window.addEventListener("scroll", function() {
        if (window.scrollY >= header.offsetHeight) {
            navbar.classList.add("navbar-default");
            navbar.classList.remove("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-default");
            navbar.classList.add("navbar-scrolled");
        }

        if (window.scrollY > 0) {
            navbar.classList.add("navbar-sticky");
        } else {
            navbar.classList.remove("navbar-sticky");
        }
    });
});


