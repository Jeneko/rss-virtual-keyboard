export default class Button {
  constructor({
    key, color = 'default', size = '1u', alt = '',
  }) {
    this.key = key;
    this.color = color;
    this.size = size;
    this.alt = alt;
  }

  getElement() {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add(`btn--${this.color}`);
    btn.classList.add(`btn--${this.size}`);
    btn.value = this.key;
    if (this.alt) {
      const alt = document.createElement('span');
      alt.className = 'btn__alt';
      alt.innerHTML = this.alt;
      btn.append(alt);
    }
    btn.append(this.key);
    return btn;
  }
}
