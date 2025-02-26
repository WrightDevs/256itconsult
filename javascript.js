document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const typingText = document.getElementById('typing-text');
    const phrases = [
        'Transforming IT Infrastructure for Business Success',
        'Empowering Digital Innovation',
        'Securing Your Digital Future',
        'Optimizing Business Operations with IT'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    typeEffect();

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');

    mobileMenuToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

      document.addEventListener("DOMContentLoaded", () => {


  const hamburger = document.getElementById("hamburger")
  const sideNavbar = document.getElementById("sideNavbar")
  const closeBtn = document.getElementById("closeBtn")
  const overlay = document.getElementById("overlay")
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

  function toggleSideNavbar() {
    sideNavbar.classList.toggle("open")
    overlay.style.display = sideNavbar.classList.contains("open") ? "block" : "none"
  }

  hamburger.addEventListener("click", toggleSideNavbar)
  closeBtn.addEventListener("click", toggleSideNavbar)
  overlay.addEventListener("click", toggleSideNavbar)

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault()
      const dropdownMenu = this.nextElementSibling
      dropdownMenu.classList.toggle("show")
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
        menu.classList.remove("show")
      })
    }
  })

  // Adjust for mobile/desktop view
  function adjustForViewport() {
    if (window.innerWidth >= 768) {
      sideNavbar.classList.remove("open")
      overlay.style.display = "none"
    }
  }

  window.addEventListener("resize", adjustForViewport)
  adjustForViewport() // Initial call
})


