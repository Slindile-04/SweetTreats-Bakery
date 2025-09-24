// ================================
// Swiper Initialization (Optimized + Smooth Easing)
// ================================
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: false,
  grabCursor: true,
  freeMode: true,       // Enable free scrolling for natural feel
  freeModeMomentum: true,  // Momentum easing effect
  freeModeMomentumVelocityRatio: 0.5, // Adjust speed of glide
  freeModeMomentumRatio: 0.8, // Smooth deceleration

  // Speed for slide transition when using arrows
  speed: 600,           // 0.6s easing transition

  // Autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Keyboard navigation
  keyboard: {
    enabled: true,
  },

  // Mousewheel support (trackpad & wheel)
  mousewheel: {
    forceToAxis: true,
    invert: false,
    sensitivity: 0.5,
    releaseOnEdges: true,
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 15 },
    576: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 20 },
    992: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 30 }
  }
});


// ================================
// Pause Autoplay on Hover
// ================================
const swiperEl = document.querySelector('.mySwiper');
swiperEl.addEventListener('mouseenter', () => swiper.autoplay.stop());
swiperEl.addEventListener('mouseleave', () => swiper.autoplay.start());

// ================================
// Smooth Scroll for Anchor Links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ================================
// Back to Top Button
// ================================
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
      backToTopBtn.classList.remove('hide');
    } else {
      backToTopBtn.classList.remove('show');
      backToTopBtn.classList.add('hide');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================================
// Fade-in Drop Animation on Scroll
// ================================
const buttons = document.querySelectorAll('.bTn');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // Remove if you want re-trigger on scroll
    }
  });
}, { threshold: 0.2 });

buttons.forEach(btn => observer.observe(btn));
