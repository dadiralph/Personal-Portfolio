function showTab(evt, tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const katakana = "アァイィウヴエカキクケコサシスセソタチツテトナニヌネノハバパヒビピフブプヘベペホマミムメモヤユヨラリルレロワヲン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }, () => 1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

// Responsive canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



function showTab(evt, tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab-button');

  tabContents.forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });

  tabButtons.forEach(button => {
    button.classList.remove('active');
  });

  const activeTab = document.getElementById(tabId);
  activeTab.style.display = 'block';
  activeTab.classList.add('active');

  // Reset animation
  activeTab.style.animation = 'none';
  void activeTab.offsetWidth; // Trigger reflow
  activeTab.style.animation = null;

  evt.currentTarget.classList.add('active');
}