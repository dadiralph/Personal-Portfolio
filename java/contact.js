const canvas = document.getElementById('cyberpunk-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Hex {
  constructor(x, y, size, speed, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.color = color;
    this.angle = 0;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = Math.PI / 3 * i;
      const x = this.size * Math.cos(angle);
      const y = this.size * Math.sin(angle);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.stroke();
    ctx.restore();
  }

  update() {
    this.y -= this.speed;
    this.angle += 0.002;
    if (this.y + this.size < 0) {
      this.y = canvas.height + this.size;
      this.x = Math.random() * canvas.width;
    }
    this.draw(ctx);
  }
}

const hexes = [];
const colors = ['#00ffff', '#ff00ff', '#8e2de2', '#4a00e0', '#00e5ff'];
for (let i = 0; i < 50; i++) {
  const size = 20 + Math.random() * 20;
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const speed = 0.1 + Math.random() * 0.3;
  const color = colors[Math.floor(Math.random() * colors.length)];
  hexes.push(new Hex(x, y, size, speed, color));
}

function drawScanlines() {
  const spacing = 4;
  ctx.beginPath();
  for (let y = 0; y < canvas.height; y += spacing) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
  }
  ctx.strokeStyle = 'rgba(0, 255, 255, 0.03)';
  ctx.stroke();
}

function drawGrid() {
  const spacing = 100;
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x += spacing) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
  }
  for (let y = 0; y < canvas.height; y += spacing) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
  }
  ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
  ctx.stroke();
}

let mouse = { x: 0, y: 0, radius: 100 };
let pulse = 0;

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  pulse = 1;
});

function drawMouseGlow() {
    const maxRadius = 150;
    if (pulse > 0.01) {
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, maxRadius);
      gradient.addColorStop(0, `rgba(0, 255, 255, ${pulse * 0.6})`);
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(mouse.x, mouse.y, maxRadius, 0, Math.PI * 2);
      ctx.fill();
  
      pulse *= 0.99; // Decay slower
    }
  }

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background grid and scanlines
  drawGrid();
  drawScanlines();

  // Glowing hexagons
  hexes.forEach(hex => hex.update());

  // Mouse interaction glow
  drawMouseGlow();

  requestAnimationFrame(animate);
}
animate();