export default class Cell {
  constructor(position, value) {
    this.element = document.createElement('div');
    this.element.classList.add('game-board__cell');
    this.setValue(value);
    this.setPosition(position);
  }

  setValue(value) {
    this.element.classList.remove('game-board__cell--' + this.value);
    this.element.classList.add('game-board__cell--' + value);
    this.element.textContent = value;
    this.value = value;

    this.element.classList.remove('game-board__cell--merge');
    void this.element.offsetWidth;
    this.element.classList.add('game-board__cell--merge');
  }

  setPosition(position) {
    this.element.style.setProperty('--position-x', position[1]);
    this.element.style.setProperty('--position-y', position[0]);
    this.position = [];
  }
}
