import { Level1 } from "./level1";

const scenes: Scene[] = [
  Level1(),
];

export let currentScene: Scene = scenes[0];

export const changeScene = (name: string) => {
  const scene = scenes.find((s) => s.name === name);
  if (!scene) {
    console.error(`Couldn\'t find scene: ${name}`);
    return;
  }
  currentScene = scene;
};
