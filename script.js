 // Initialize Swiper
 var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

  function enviarMensagem(e) {
e.preventDefault();
const form = e.target;
fetch(form.action, {
method: 'POST',
body: new FormData(form),
headers: { 'Accept': 'application/json' }
}).then(response => {
if (response.ok) {
Swal.fire({
  icon: 'success',
  title: 'Mensagem enviada!',
  text: 'Obrigado por entrar em contato. Retornarei em breve.',
  confirmButtonColor: '#6247ea'
});
form.reset();
} else {
Swal.fire({
  icon: 'error',
  title: 'Erro ao enviar',
  text: 'Por favor, tente novamente mais tarde.',
  confirmButtonColor: '#e94584'
});
}
}).catch(() => {
Swal.fire({
icon: 'error',
title: 'Erro de conexão',
text: 'Não foi possível enviar a mensagem.',
confirmButtonColor: '#e94584'
});
});
}
// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Add hover effects for links and buttons
const hoverElements = document.querySelectorAll('a, button, .tech-icon, .card, .swiper-slide');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('button.md\\:hidden');
const mobileMenu = document.querySelector('.fixed.inset-0.bg-black');
const mobileMenuCloseBtn = document.querySelector('.fixed.inset-0.bg-black button');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    document.body.style.overflow = 'hidden';
});

mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    document.body.style.overflow = 'auto';
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-nav');
        }
    });
});