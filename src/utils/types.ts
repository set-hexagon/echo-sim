export interface Vector2D {
  x: number;
  y: number;
}

export interface SimObject {
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}
