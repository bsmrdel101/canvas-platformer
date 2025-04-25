export let entities: GameObject[] = [];

export const loadEntity = (entity: GameObject) => {
  entities.push(entity);
};

export const dumpEntityList = () => {
  entities = [];
}
