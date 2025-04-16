// MyMiaAI Base Script
document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 MyMiaAI site loaded successfully.");

  // Auto-scroll to top on reload
  window.scrollTo(0, 0);

  // Animate CTA button on hover
  const cta = document.querySelector('.cta-button');
  if (cta) {
    cta.addEventListener('mouseenter', () => {
      cta.style.boxShadow = '0 0 16px #00e5ff';
    });
    cta.addEventListener('mouseleave', () => {
      cta.style.boxShadow = '0 0 12px #00e5ff66';
    });
  }

  // Example: Confirmation after form submission (Netlify)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', () => {
      setTimeout(() => {
        alert('Thanks! Your message has been received by MyMiaAI.');
      }, 800);
    });
  }

  // Future: Add voice trigger, Zapier call, avatar response, etc.
});
