const canvas = document.getElementById("echoSimCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvasHeight: number = canvas.height;
const canvasWidth: number = canvas.width;

let soundWaves: soundWave[] = [];
function init() {
  setInterval(() => soundWaves.push({
    cx: canvasWidth / 2,
    cy: canvasHeight / 2,
    rad: 30
  }), 2000)

  animate();
}

function drawSpeaker() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(canvasWidth / 2, canvasHeight / 2, 30, 0, 2 * Math.PI);
  ctx.fill();
}

interface soundWave {
  cx: number;
  cy: number;
  rad: number;
}

function drawSoundWave(sw:soundWave) {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.arc(sw.cx, sw.cy, sw.rad, 0, 2 * Math.PI);
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasWidth);

  drawSpeaker();

  for (let sw of soundWaves) {
    drawSoundWave(sw);
    if (sw.rad > canvasWidth && sw.rad > canvasHeight) {
      soundWaves.shift();
    } else {
      sw.rad++;
    }
  }


  requestAnimationFrame(animate);
}


init();
