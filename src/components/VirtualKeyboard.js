import Button from './Button';
import btnRows from './ButtonRows';

export default class VirtualKeyboard {
  constructor(textArea) {
    const vKeyboard = document.createElement('div');
    vKeyboard.className = 'virtual-keyboard';

    for (let j = 0; j < btnRows.length; j += 1) {
      const btnList = btnRows[j];
      const keyRow = document.createElement('div');
      keyRow.className = 'virtual-keyboard__row';

      for (let i = 0; i < btnList.length; i += 1) {
        const curBtn = new Button(btnList[i]).getElement();
        keyRow.append(curBtn);
      }

      vKeyboard.append(keyRow);
    }

    this.textArea = textArea;
    this.keyboard = vKeyboard;

    // this.textArea.addEventListener('focusout', () => {
    //   this.textArea.focus();
    // });

    this.keyboard.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') {
        return;
      }
      this.textArea.focus();
      this.textArea.value += e.target.value;
    });

    window.addEventListener('keydown', (e) => {
      console.log(e.key);
      e.preventDefault();
      this.textArea.value += e.key;
      document.querySelector(`button[value=${e.key}`).classList.remove('btn--default');
      document.querySelector(`button[value=${e.key}`).classList.add('btn--pressed');
    });

    window.addEventListener('keyup', (e) => {
      document.querySelector(`button[value=${e.key}`).classList.add('btn--default');
      document.querySelector(`button[value=${e.key}`).classList.remove('btn--pressed');
    });
  }
}
