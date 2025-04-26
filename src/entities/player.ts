import { Input } from "../input";


export const Player = (): Player => {
  const components: Player = {
    name: 'Player',
    tag: 'player',
    transform: {
      pos: { x: 200, y: 200 },
      scale: { x: 20, y: 50 },
      rotation: 0
    },
    shapeRenderer: {
      layer: 'px',
      type: 'Rect',
      brush: 'fill',
      color: 'black'
    }
  };

  const moveSpeed = 2;
    
  Input.onKeyPressed((key) => {
    if (key === 'a' || key === 'd') handleMovement(key);
  });

  const handleMovement = (key: 'a' | 'd') => {
    components.transform.pos.x += key === 'a' ? -moveSpeed : moveSpeed;
  };


  return components;
}
