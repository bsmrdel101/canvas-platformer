import { loadEntity } from "../entities/entities";
import { Player } from "../entities/player";
import { Input } from "../input";


export const Level1 = (): Scene => {
  const player = Player();
  const moveSpeed = 2;

  Input.onKey((key) => {
    if (key === 'a' || key === 'd') handleMovement(key);
  });

  const handleMovement = (key: 'a' | 'd') => {
    player.transform.pos.x += key === 'a' ? -moveSpeed : moveSpeed;
  };
  

  return {
    name: 'Level 1',
    frame() {
      loadEntity(player);
    }
  }
};
