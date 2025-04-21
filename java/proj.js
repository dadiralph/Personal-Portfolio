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


// Scroll reveal for each project item
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".project-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.1,
  });

  items.forEach(item => observer.observe(item));
});