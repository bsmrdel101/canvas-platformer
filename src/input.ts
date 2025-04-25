const inputs = {
  keyDown: '',
  key: '',
  keyUp: '',
};

const eventListeners: { name: string, fn: (key: string) => void }[] = [];
let isKeyDown = false;


export const inputSetup = () => {
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (inputs.keyDown || inputs.key) return;
    isKeyDown = true;
    inputs.keyUp = '';
    inputs.keyDown = e.key;
    inputs.key = e.key;
  });
  document.addEventListener('keyup', (e: KeyboardEvent) => {
    if (inputs.keyUp) return;
    isKeyDown = false;
    inputs.keyDown = '';
    inputs.key = '';
    inputs.keyUp = e.key;
  });
};

export const Input = {
  onKeyDown: (fn: (key: string) => void) => {
    eventListeners.push({ name: 'keyDown', fn });
  },
  onKey: (fn: (key: string) => void) => {
    eventListeners.push({ name: 'key', fn });
  },
  onKeyUp: (fn: (key: string) => void) => {
    eventListeners.push({ name: 'keyUp', fn });
  },
};

export const handleInputs = () => {
  eventListeners.forEach((event) => {
    if (event.name === 'keyDown' && inputs.keyDown) {
      event.fn(inputs.keyDown);
    } else if (event.name === 'key' && isKeyDown) {
      event.fn(inputs.key);
    } else if (event.name === 'keyUp' && inputs.keyUp) {
      event.fn(inputs.keyUp);
    }
  });

  inputs.keyUp = '';
  inputs.keyDown = '';
};
