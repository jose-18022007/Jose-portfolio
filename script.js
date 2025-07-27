// ===== NAVBAR HIGHLIGHT ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    // Active link highlighting
    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', top > 100);

    // Close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// ===== TOGGLE MENU ICON =====
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== ACADEMICS CARD TOGGLE =====
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.academics-box');
        card.classList.toggle('expanded');
        btn.textContent = card.classList.contains('expanded') ? 'Show Less' : 'Get Info';
    });
});

// ===== SCROLLREVEAL ANIMATIONS =====
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.homedesign, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .academics-container, .project-box, .certificate-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homedesign h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.homedesign p, .about-content', { origin: 'right' });

// ===== TYPED TEXT ANIMATION =====
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Python Developer', 'AI Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// email js
  // Initialize EmailJS with your public API key
  (function() {
    emailjs.init("5QQACvSQe3-5qwT99");
  })();



  // Form submission handler
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_x5t6vxy', 'template_390ggkw', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('✅ Message sent successfully!');
        document.getElementById('contact-form').reset(); // Reset form
      }, function(error) {
        console.log('FAILED...', error);
        alert('❌ Failed to send message. Please try again later.');
      });
  });

