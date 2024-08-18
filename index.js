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

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    document.querySelector('.dropdown-btn').addEventListener('click', function() {
        var content = document.querySelector('.dropdown-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

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
    const speed = 600; // You can adjust the speed as needed
    
    counts.forEach((count) => {
        function update() {
            const target = Number(count.getAttribute("data-target"));
            const counter = Number(count.innerText);
            const inc = target / speed;

            if (counter < target) {
                count.innerText = Math.ceil(counter + inc);
                requestAnimationFrame(update); 
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
                    }, 10); 
                } else {
                    photo.classList.remove('show');
                    setTimeout(() => {
                        photo.classList.add('hide');
                    }, 500); 
                }
            });
        });
    });

    filters[0].click();
});

      
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');
    
    // Function to toggle FAQ answer
    const toggleAnswer = () => {
        item.classList.toggle('active');
        
        const answer = item.querySelector('.faq-answer');
        if (item.classList.contains('active')) {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(180deg)'; // Rotate the icon when active
        } else {
            answer.style.display = 'none';
            icon.style.transform = 'rotate(0deg)'; // Rotate icon back when inactive
        }
    };

    // Add click event listeners to both the question and the icon
    question.addEventListener('click', toggleAnswer);
    icon.addEventListener('click', toggleAnswer);
});



let mybutton = document.getElementById("scrollBtn");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }