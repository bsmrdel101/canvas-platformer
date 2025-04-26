import { entities } from "../entities/entities";


export const physics = () => {
  entities.forEach((entity: GameObject) => {
    if (!entity.physics) return;
    const transform = entity.transform;
    const physics = entity.physics;
    const vel = physics.velocity;
    vel.y += vel.y >= physics.maxVelocity.y ? 0 : physics.gravity;
    transform.pos.y = transform.pos.y + vel.y;
  });
};
