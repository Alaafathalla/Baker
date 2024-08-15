document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar");
    var header = document.querySelector(".header");

    function handleScroll() {
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
    }

    // Initial check to set the navbar state correctly on page load
    handleScroll();

    // Update the navbar state on scroll
    window.addEventListener("scroll", handleScroll);
});


document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var content = document.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}


const increment = 60;

function updateNumber(id, initialValue) {
    const previousValue = parseInt(localStorage.getItem(id)) || initialValue;
    const newValue = previousValue + increment;
    document.getElementById(id).setAttribute('data-target', newValue);
    localStorage.setItem(id, newValue);
}

document.addEventListener("DOMContentLoaded", () => {
    // Update the values in localStorage and set them as targets
    updateNumber("clients", 232);
    updateNumber("projects", 521);
    updateNumber("support", 1453);
    updateNumber("workers", 32);

    // Initialize Counter-Up
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        CounterUp(counter, {
            duration: 2000, // duration in milliseconds
            delay: 16, // delay in milliseconds
        });
    });
});




