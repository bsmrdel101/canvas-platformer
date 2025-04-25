interface Ctx extends CanvasRenderingContext2D {}

type Vec = {
  x: number,
  y: number
};

type GameObject = {
  name: string
  tag?: string
  transform: Transform
  shapeRenderer?: ShapeRenderer
  spriteRenderer?: SpriteRenderer
};

type Scene = {
  name: string
  frame?: () => void
};


/* ENTITIES */

interface Player extends GameObject {
  
}

/* COMPONENTS */

type Transform = {
  pos: Vec,
  scale: Vec,
  rotation: number
};

type ShapeRenderer = {
  layer: 'px' | 'sm' | 'bg',
  type: 'Rect' | 'Circle' | 'Poly'
  color: string,
  brush: 'stroke' | 'fill'
  radius?: number
};

type SpriteRenderer = {
  layer: 'px' | 'sm' | 'bg',
  sprite: string
};
