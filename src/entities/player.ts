export const Player = (): Player => {
  return {
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
}
