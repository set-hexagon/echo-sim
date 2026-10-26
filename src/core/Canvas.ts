export class SimulationCanvas {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  constructor(canvasId: string) {
    const el = document.getElementById(canvasId);
    if (!(el instanceof HTMLCanvasElement)) {
      throw new Error(`Canvas element with id ${canvasId} not found`);
    }
    this.canvas = el;
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Could not get 2D context");
    }
    this.ctx = context;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
