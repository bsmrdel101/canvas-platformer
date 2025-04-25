import { dumpEntityList } from "./entities/entities";
import { handleInputs, inputSetup } from "./input";
import { currentScene } from "./scenes/scenes";
import { renderer } from "./systems/renderer";

let bgCanvas: HTMLCanvasElement;
let pxCanvas: HTMLCanvasElement;
export let bgCtx: Ctx;
export let pxCtx: Ctx;

const BACKGROUND_COLOR = '#499DBC';
const CANVAS_SIZE = 1;


export const setup = () => {
  bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  pxCanvas = document.getElementById('px-canvas') as HTMLCanvasElement;
  if (!bgCanvas || !pxCanvas) return;
  bgCanvas.width = 1920 * (CANVAS_SIZE / 2);
  bgCanvas.height = 1080 * (CANVAS_SIZE / 2);
  pxCanvas.width = 1920 * (CANVAS_SIZE / 2);
  pxCanvas.height = 1080 * (CANVAS_SIZE / 2);
  bgCtx = bgCanvas.getContext('2d')!;
  pxCtx = pxCanvas.getContext('2d')!;

  inputSetup();
  
  requestAnimationFrame(drawFrame);
};

const drawFrame = () => {
  changeBackground(BACKGROUND_COLOR);
  pxCtx.clearRect(0, 0, pxCanvas.width, pxCanvas.height);
  handleInputs();
  if (currentScene.frame) currentScene.frame();
  renderer();
  dumpEntityList();
  requestAnimationFrame(drawFrame);
};

const changeBackground = (bg: string) => {
  bgCtx.fillStyle = bg;
  bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
};
