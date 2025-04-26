import { loadEntity } from "../entities/entities";
import { Ground } from "../entities/ground";
import { Player } from "../entities/player";


export const Level1 = (): Scene => {
  const player = Player();
  const ground = Ground();

  return {
    name: 'Level 1',
    frame() {
      loadEntity(ground);
      loadEntity(player);
    }
  }
};
