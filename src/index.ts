import { SimulationCanvas } from './core/Canvas.js';
import { Engine } from './core/Engine.js';

function main() {
  try {
    const simCanvas = new SimulationCanvas("echoSimCanvas");
    const engine = new Engine(simCanvas);
    engine.start();
  } catch (e) {
    console.error("Simulation failed to start:", e);
  }
}

main();
