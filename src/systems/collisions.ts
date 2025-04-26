import { entities } from "../entities/entities";


export const collisions = () => {
  entities.forEach((entity: GameObject) => {
    if (entity.boxCol) {
      const col = entity.boxCol;
      const transform = entity.transform;
    } else if (entity.circleCol) {
      const col = entity.circleCol;
      const transform = entity.transform;
    }
  });
};
