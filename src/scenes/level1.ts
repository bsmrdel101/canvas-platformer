import { loadEntity } from "../entities/entities";
import { Player } from "../entities/player";


export const Level1 = (): Scene => {
  const player = Player();

  return {
    name: 'Level 1',
    frame() {
      loadEntity(player);
    }
  }
};
