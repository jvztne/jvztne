// Function to handle scroll animations
const revealOnScroll = () => {
  const cards = document.querySelectorAll('.card, .member');
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

// Initial setup for the animation
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card, .member');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
  });

  // Run on load and on scroll
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

console.log("ISSAMOVIe Site Loaded Successfully.");