
  const words = [
    "Hello, I'm Ralph 👋",
    "Front-End Developer 💻",
    "Creative Thinker 🎨",
    "Code Craftsman 🔧",
    "Welcome to my Portfolio 🚀"
  ];

  const typewriter = document.querySelector('.typewriter');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);

    typewriter.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // pause before deleting
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 300);
      }
    }
  }

  window.addEventListener('DOMContentLoaded', typeEffect);



  // about page
  const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.style.animationPlayState = 'paused';
  observer.observe(section);
});
  
