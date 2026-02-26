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

    this.createHeader();
    this.createListItem();
    this.createFooter();
  }

  createHeader() {
    const texte = document.createElement('h2');
    texte.innerText = `Voici le résumé de votre commande : `;
    this.container.appendChild(texte);
  }

  createListItem() {
    const nbPoutines = this.element.querySelectorAll(
      '.poutine__image.is-active'
    );
    const nbTotal = nbPoutines.length;
    const btnPoutines = this.element.querySelectorAll('.button.is-active');
    for (let i = 0; i < btnPoutines.length; i++) {
      const btnPoutine = btnPoutines[i];
      const type = btnPoutine.innerText;
      const texte = document.createElement('p');
      texte.innerText = `Poutine #${[i + 1]} - ${type}`;
      this.container.appendChild(texte);
    }
  }

  createFooter() {
    const nbPoutines = this.element.querySelectorAll(
      '.poutine__image.is-active'
    );
    const nbTotal = nbPoutines.length;
    const texte = document.createElement('p');
    texte.innerText = `Nombre total de poutine(s) : ${nbTotal}`;
    this.container.appendChild(texte);
  }
}
