import type { SimObject } from '../utils/types.js';
import { CONFIG } from '../utils/config.js';

export class Speaker implements SimObject {
  constructor(public x: number, public y: number) {}

  update() {
    // Speaker is static in this simulation
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = CONFIG.COLORS.SPEAKER;
    ctx.arc(this.x, this.y, CONFIG.SPEAKER_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
  }
}
