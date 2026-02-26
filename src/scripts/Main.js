import Chef from './utils/Chef.js';
import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    const chefs = document.querySelectorAll('.chef');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];

      new Chef(chef);
    }
  }
}
new Main();
