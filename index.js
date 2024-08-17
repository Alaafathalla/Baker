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

        navbar.classList.toggle("navbar-sticky", window.scrollY > 0);
    }

    // Initial check to set the navbar state correctly on page load
    handleScroll();

    // Update the navbar state on scroll
    window.addEventListener("scroll", handleScroll);
    
    // Dropdown toggle functionality
    document.querySelector('.dropdown-btn').addEventListener('click', function() {
        var content = document.querySelector('.dropdown-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.querySelectorAll(".dropdown-content");
            dropdowns.forEach(function(dropdown) {
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                }
            });
        }
    });

    // Counter animation
    const counts = document.querySelectorAll(".count");
    const speed = 397; // You can adjust the speed as needed
    
    counts.forEach((count) => {
        function update() {
            const target = Number(count.getAttribute("data-target"));
            const counter = Number(count.innerText);
            const inc = target / speed;

            if (counter < target) {
                count.innerText = Math.ceil(counter + inc);
                requestAnimationFrame(update); // Use requestAnimationFrame for smoother animation
            } else {
                count.innerText = target;
            }
        }
        update();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('input[name="filter"]');
    const photos = document.querySelectorAll('.photo');

    filters.forEach(filter => {
        filter.addEventListener('change', function () {
            const filterType = this.id;

            photos.forEach(photo => {
                if (filterType === 'all' || photo.classList.contains(filterType)) {
                    photo.classList.remove('hide');
                    setTimeout(() => {
                        photo.classList.add('show');
                    }, 10); // Small delay to allow the 'hide' class to be removed before applying 'show'
                } else {
                    photo.classList.remove('show');
                    setTimeout(() => {
                        photo.classList.add('hide');
                    }, 500); // Delay matches the CSS transition duration
                }
            });
        });
    });

    // Trigger the 'All' filter by default, showing all photos
    filters[0].click();
});

      
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');

        const answer = parent.querySelector('.faq-answer');
        if (parent.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});


