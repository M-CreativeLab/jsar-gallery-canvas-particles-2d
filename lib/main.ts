import { init, step } from './particles';

const canvasPanel = spatialDocument.getSpatialObjectById('canvas');
const canvas = canvasPanel.attachCanvasTexture(512, 512);
const ctx = canvas.getContext();

init(ctx, 512, 512);
setInterval(() => {
  step(ctx);
  canvas.update();
}, 16);
