import { Level1 } from "./level1";


const scenes: Scene[] = [];

export let currentScene: Scene | null = null;

export const setupScenes = () => {
  scenes.push(Level1());
  currentScene = scenes[0];
};

export const changeScene = (name: string) => {
  const scene = scenes.find((s) => s.name === name);
  if (!scene) {
    console.error(`Couldn\'t find scene: ${name}`);
    return;
  }
  currentScene = scene;
};
