const words = [
  " Ralph Clemente",
  " Creative Thinker 🎨",
  " Code Craftsman 🔧",
  " Front-End Developer 💻"
];

const typewriter = document.querySelector('.typewriter');
const typedText = typewriter.querySelector('.typed-text');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  typedText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    typewriter.classList.remove('typing-end');
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typewriter.classList.remove('typing-end');
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting) {
      typewriter.classList.add('typing-end');
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

// Constellation Background
const canvas = document.getElementById('constellation');
const ctx = canvas.getContext('2d');

let w, h;
let stars = [];
const numStars = 100;
const maxDistance = 120;

function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#00ffcc';
    ctx.fill();

    for (let j = i + 1; j < stars.length; j++) {
      const s2 = stars[j];
      const dx = s.x - s2.x;
      const dy = s.y - s2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 255, 204,' + (1 - dist / maxDistance) + ')';
        ctx.lineWidth = 0.5;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s2.x, s2.y);
        ctx.stroke();
      }
    }

    s.x += s.vx;
    s.y += s.vy;

    if (s.x < 0 || s.x > w) s.vx *= -1;
    if (s.y < 0 || s.y > h) s.vy *= -1;
  }

  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});

resizeCanvas();
createStars();
drawStars();


// Animate counters when in view
const counters = document.querySelectorAll('.counter');
let statsPlayed = false;

function animateCounters() {
  if (statsPlayed) return;

  const statsSection = document.getElementById('stats');
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    statsPlayed = true;

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const isPercent = counter.textContent.includes('%');
      let count = 0;

      // Customize speed based on the number size
      const increment = target > 500 ? Math.ceil(target / 60) : 1;
      const stepTime = 20;

      const updateCount = () => {
        count += increment;
        if (count >= target) {
          counter.textContent = isPercent ? `${target}%` : target;
        } else {
          counter.textContent = isPercent ? `${count}%` : count;
          setTimeout(updateCount, stepTime);
        }
      };

      updateCount();
    });
  }
}

window.addEventListener('scroll', animateCounters);