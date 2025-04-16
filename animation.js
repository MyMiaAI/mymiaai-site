document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.feature-card, .service-card, .faq-item, .cta-button');

  fadeEls.forEach(el => {
    el.classList.remove('visible'); // in case styles already applied
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));
});
