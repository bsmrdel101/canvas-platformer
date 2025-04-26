import { Input } from "../input";


export const Player = (): GameObject => {
  const components: GameObject = {
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
    },
    boxCol: {
      x: 200,
      y: 200,
      width: 20,
      height: 50,
      isTrigger: false
    },
    physics: {
      gravity: 1,
      velocity: { x: 0, y: 0 },
      maxVelocity: { x: 10, y: 10 }
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
