import type { SimObject } from '../utils/types.js';
import { CONFIG } from '../utils/config.js';

export class Wave implements SimObject {
  constructor(
    public cx: number, 
    public cy: number, 
    public rad: number = CONFIG.WAVE_START_RADIUS
  ) {}

  update() {
    this.rad += CONFIG.WAVE_SPEED;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = CONFIG.COLORS.WAVE;
    ctx.arc(this.cx, this.cy, this.rad, 0, 2 * Math.PI);
    ctx.stroke();
  }

  isOutOfBounds(width: number, height: number): boolean {
    return this.rad > Math.max(width, height);
  }
}
