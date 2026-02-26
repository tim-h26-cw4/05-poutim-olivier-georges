import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }
    const btnOrder = this.element.querySelector('.button-secondary');
    btnOrder.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerText = ' ';
    const nbPoutines = this.element.querySelectorAll(
      '.poutine__image.is-active'
    );
    const nbTotal = nbPoutines.length;
    const texte = document.createElement('p');
    texte.innerText = `Nombre total de poutine(s) : ${nbTotal}`;
    this.container.appendChild(texte);
  }
}
