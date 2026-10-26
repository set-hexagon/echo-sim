import { SimulationCanvas } from './Canvas.js';
import { Speaker } from '../entities/Speaker.js';
import { Wave } from '../entities/Wave.js';
import { CONFIG } from '../utils/config.js';
import type { SimObject } from '../utils/types.js';

export class Engine {
  private objects: SimObject[] = [];
  private waves: Wave[] = [];
  private speaker: Speaker;

  constructor(private simCanvas: SimulationCanvas) {
    this.speaker = new Speaker(
      this.simCanvas.canvas.width / 2, 
      this.simCanvas.canvas.height / 2
    );
    this.objects.push(this.speaker);
  }

  start() {
    setInterval(() => {
      const wave = new Wave(this.speaker.x, this.speaker.y);
      this.waves.push(wave);
      this.objects.push(wave);
    }, CONFIG.WAVE_INTERVAL);

    this.animate();
  }

  private animate = () => {
    this.simCanvas.clear();

    // Update and Draw
    for (let i = this.objects.length - 1; i >= 0; i--) {
      const obj = this.objects[i];
      if (!obj) continue;
      
      obj.update();
      obj.draw(this.simCanvas.ctx);

      // Cleanup waves that are too big
      if (obj instanceof Wave && obj.isOutOfBounds(this.simCanvas.canvas.width, this.simCanvas.canvas.height)) {
        this.objects.splice(i, 1);
        this.waves = this.waves.filter(w => w !== obj);
      }
    }

    requestAnimationFrame(this.animate);
  }
}
