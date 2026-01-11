const canvas = document.getElementById("aurora");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext("2d");

let gradientOffset = 0;

function drawAurora() {
  ctx.clearRect(0,0,canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, gradientOffset, canvas.width, canvas.height + gradientOffset);
  gradient.addColorStop(0, '#001f3f');
  gradient.addColorStop(0.3, '#004080');
  gradient.addColorStop(0.6, '#00bfff');
  gradient.addColorStop(1, '#001f3f');

  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  gradientOffset += 0.5;
  if(gradientOffset > canvas.height) gradientOffset = 0;

  requestAnimationFrame(drawAurora);
}

drawAurora();
