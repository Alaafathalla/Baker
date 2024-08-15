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
const duration = 1000; // Duration of each animation loop in milliseconds

function easeOutQuad(t) {
    return t * (2 - t);
}

function animateNumber(id, start, end, duration, callback) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        obj.textContent = Math.floor(easedProgress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else if (callback) {
            callback();
        }
    };
    window.requestAnimationFrame(step);
}

function loopNumber(id, startValue, increment, duration) {
    const endValue = startValue + increment;
    animateNumber(id, startValue, endValue, duration, () => {
        // After reaching the end value, loop back to the original value
        animateNumber(id, endValue, startValue, duration, () => {
            loopNumber(id, startValue, increment, duration);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loopNumber("clients", 232, increment, duration);
    loopNumber("projects", 521, increment, duration);
    loopNumber("support", 1453, increment, duration);
    loopNumber("workers", 32, increment, duration);
});




