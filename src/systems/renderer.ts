import { entities } from "../entities/entities";
import { bgCtx, pxCtx } from "../main";


export const renderer = () => {
  entities.forEach((entity: GameObject) => {
    if (entity.shapeRenderer) {
      const renderer = entity.shapeRenderer;
      const transform = entity.transform;
      const ctx: Ctx = getCtxFromLayerName(renderer.layer);

      ctx.fillStyle = renderer.color;
      ctx.strokeStyle = renderer.color;
      if (renderer.type === 'Rect') {
        if (renderer.brush === 'stroke') {
          ctx.strokeRect(transform.pos.x, transform.pos.y, transform.scale.x, transform.scale.y);
        } else {
          ctx.fillRect(transform.pos.x, transform.pos.y, transform.scale.x, transform.scale.y);
        }
      } else if (renderer.type === 'Circle') {
        ctx.beginPath();
        ctx.arc(transform.pos.x, transform.pos.y, renderer.radius ?? 10, 0, 2 * Math.PI);
        if (renderer.brush === 'stroke') {
          ctx.stroke();
        } else {
          ctx.fill();
        }
      }
    } else if (entity.spriteRenderer) {
      const renderer = entity.spriteRenderer;
      const ctx: Ctx = getCtxFromLayerName(renderer.layer);
    }
  });
};

const getCtxFromLayerName = (layer: string): Ctx => {
  switch(layer) {
    case 'px':
      return pxCtx;
    case 'bg':
      return bgCtx;
    default:
      return pxCtx
  }
};
