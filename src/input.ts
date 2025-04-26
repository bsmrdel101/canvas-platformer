const inputs = {
  keyDown: new Set<string>(),
  keyPressed: new Set<string>(),
  keyUp: new Set<string>(),
};

const eventListeners: { name: string, fn: (key: string) => void }[] = [];

export const inputSetup = () => {
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (!inputs.keyPressed.has(e.key)) {
      inputs.keyDown.add(e.key);
    }
    inputs.keyPressed.add(e.key);
  });

  document.addEventListener('keyup', (e: KeyboardEvent) => {
    inputs.keyPressed.delete(e.key);
    inputs.keyUp.add(e.key);
  });
};

export const Input = {
  onKeyDown: (fn: (key: string) => void) => {
    eventListeners.push({ name: 'keyDown', fn });
  },
  onKeyPressed: (fn: (key: string) => void) => {
    eventListeners.push({ name: 'keyPressed', fn });
  },
  onKeyUp: (fn: (key: string) => void) => {
    eventListeners.push({ name: 'keyUp', fn });
  },
};

export const handleInputs = () => {
  eventListeners.forEach((event) => {
    if (event.name === 'keyDown') {
      inputs.keyDown.forEach((key) => event.fn(key));
    } else if (event.name === 'keyPressed') {
      inputs.keyPressed.forEach((key) => event.fn(key));
    } else if (event.name === 'keyUp') {
      inputs.keyUp.forEach((key) => event.fn(key));
    }
  });

  inputs.keyDown.clear();
  inputs.keyUp.clear();
};
