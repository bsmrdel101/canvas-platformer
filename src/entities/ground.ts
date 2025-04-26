import { screenSize } from "../main";

export const Ground = (): GameObject => {
  const components: GameObject = {
    name: 'Ground',
    transform: {
      pos: { x: 50, y: screenSize.y - 100 },
      scale: { x: screenSize.x - 100, y: 100 },
      rotation: 0
    },
    shapeRenderer: {
      layer: 'px',
      type: 'Rect',
      brush: 'fill',
      color: 'green'
    },
    boxCol: {
      x: 50,
      y: screenSize.y - 100,
      width: screenSize.x - 100,
      height: 100,
      isTrigger: false
    }
  };
  return components;
}
