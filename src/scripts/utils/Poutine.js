export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    event.target.classList.add('is-active');
    this.selectedType = event.target.innerText;
    this.updatePhoto();
  }

  updatePhoto() {
    const imgPoutine = this.element.querySelector('img');
    imgPoutine.classList.add('is-active');
    imgPoutine.innerHTML = `assets/images/${this.selectedType}.png`;
  }
}
