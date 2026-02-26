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
    event.target.classList.toggle('is-active');
    this.selectedType = event.target.innerText;
    this.updatePhoto();
  }

  updatePhoto() {
    const imgPoutine = this.element.querySelector('img');

    if (imgPoutine.classList.contains('is-active')) {
      imgPoutine.src = `assets/images/poutine.png`;
      imgPoutine.classList.remove('is-active');
    } else {
      imgPoutine.classList.add('is-active');
      imgPoutine.src = `assets/images/${this.selectedType}.png`;
    }
  }
}
