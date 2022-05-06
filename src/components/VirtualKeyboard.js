import createButton from './Button';

function getObjFromButtonSet(buttonSet) {
  const result = {};

  buttonSet.forEach((buttonRowSet) => {
    buttonRowSet.forEach((keyData) => {
      const keyObj = { [keyData.code]: keyData };
      Object.assign(result, keyObj);
    });
  });

  return result;
}

function getKeyboardFromButtonSet(buttonSet) {
  const keyboard = document.createElement('div');
  keyboard.className = 'virtual-keyboard';

  for (let i = 0; i < buttonSet.length; i += 1) {
    const buttonRowSet = buttonSet[i];
    const keyboardRow = document.createElement('div');

    keyboardRow.className = 'virtual-keyboard__row';

    for (let j = 0; j < buttonRowSet.length; j += 1) {
      const curBtn = createButton(buttonRowSet[j]);
      keyboardRow.append(curBtn);
    }

    keyboard.append(keyboardRow);
  }

  return keyboard;
}

function getCursorPosition(input) {
  return input.selectionEnd;
}

function setCursorPosition(input, cursorPosition) {
  if (cursorPosition < 0) {
    input.setSelectionRange(0, 0);
    return;
  }

  if (cursorPosition > input.value.length) {
    input.setSelectionRange(input.value.length, input.value.length);
    return;
  }

  input.setSelectionRange(cursorPosition, cursorPosition);
}

function insertStringInString(str1, str2, pos) {
  return str1.slice(0, pos) + str2 + str1.slice(pos);
}

function deleteCharByPos(str, pos) {
  if (pos < 0 || pos > str.length) {
    return str;
  }
  return str.slice(0, pos) + str.slice(pos + 1);
}

export default class VirtualKeyboard {
  constructor(buttonSet) {
    this.keyboard = getKeyboardFromButtonSet(buttonSet);
    this.buttonSet = getObjFromButtonSet(buttonSet);
    this.state = {
      caps: false,
      shift: false,
      lang: 'en',
    };

    this.keyboard.addEventListener('mousedown', this.virtualKeyboardClickHandler.bind(this));
    this.keyboard.addEventListener('mouseup', this.virtualKeyboardClickHandler.bind(this));

    window.addEventListener('keydown', this.realKeyboardKeyHandler.bind(this));
    window.addEventListener('keyup', this.realKeyboardKeyHandler.bind(this));
  }

  setInput(input) {
    this.input = input;
  }

  virtualKeyboardClickHandler(e) {
    // If click not on a button
    const curBtn = e.target.closest('button');
    if (!curBtn) {
      return;
    }

    this.processButton(curBtn.value, e);
  }

  realKeyboardKeyHandler(e) {
    // If key is not in the virtual keyboard
    if (!this.buttonSet[e.code]) {
      return;
    }

    e.preventDefault();
    this.processButton(e.code, e);
  }

  updateVirtualKeyboard() {
    if (this.state.caps) {
      this.keyboard.classList.add('virtual-keyboard--caps');
    } else {
      this.keyboard.classList.remove('virtual-keyboard--caps');
    }
    if (this.state.shift) {
      this.keyboard.classList.add('virtual-keyboard--shift');
    } else {
      this.keyboard.classList.remove('virtual-keyboard--shift');
    }
  }

  switchLang(lang) {
    const buttons = this.keyboard.querySelectorAll('button');
    localStorage.setItem('lang', lang);
    this.state.lang = lang;

    for (let i = 0; i < buttons.length; i += 1) {
      // Set stdkey
      if (typeof this.buttonSet[buttons[i].value].key === 'object'
        && this.buttonSet[buttons[i].value].key[lang]) {
        buttons[i].querySelector('.btn__stdkey').textContent = this.buttonSet[buttons[i].value].key[lang];
      }
      // Set altkey
      if (this.buttonSet[buttons[i].value].altkey) {
        // If there is no altkey for current lang
        if (this.buttonSet[buttons[i].value].altkey[lang] === null) {
          buttons[i].querySelector('.btn__altkey')?.remove();
        } else {
          // If altkey span was removed
          if (!buttons[i].querySelector('.btn__altkey')) {
            buttons[i].insertAdjacentHTML('afterbegin', '<span class="btn__altkey"></span>');
          }
          // Set altkey
          let altkey = this.buttonSet[buttons[i].value].altkey.en;
          if (this.buttonSet[buttons[i].value].altkey[lang]) {
            altkey = this.buttonSet[buttons[i].value].altkey[lang];
          }
          buttons[i].querySelector('.btn__altkey').textContent = altkey;
        }
      }
    }
  }

  processButton(code, event) {
    // If real keyboard button is pressed down
    if (event.type === 'keydown') {
      document.querySelector(`button[value=${code}`).classList.remove('btn--default');
      document.querySelector(`button[value=${code}`).classList.add('btn--pressed');
    }

    // If real keyboard button is pressed up
    if (event.type === 'keyup') {
      document.querySelector(`button[value=${code}`).classList.add('btn--default');
      document.querySelector(`button[value=${code}`).classList.remove('btn--pressed');
    }

    // If click on caps
    if (code === 'CapsLock') {
      if (event.type === 'mouseup' || event.type === 'keyup') {
        this.state.caps = !this.state.caps;
        this.updateVirtualKeyboard();
      }
      return;
    }

    // If click on shift
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      // If event is mouseup
      if (event.type === 'mouseup' || event.type === 'keyup') {
        if (this.state.shift) {
          this.state.shift = false;
          this.updateVirtualKeyboard();
          return;
        }
      }
      if (this.state.shift) {
        return;
      }
      // If event is mousedown
      if (event.type === 'mousedown' || event.type === 'keydown') {
        this.state.shift = true;
        this.updateVirtualKeyboard();
      }
      return;
    }

    // If click on Backspace
    if (code === 'Backspace') {
      if (event.type === 'mousedown' || event.type === 'keydown') {
        const currentCursorPosition = getCursorPosition(this.input);
        this.input.value = deleteCharByPos(this.input.value, currentCursorPosition - 1);
        setCursorPosition(this.input, currentCursorPosition - 1);
      }
      this.input.focus();
      return;
    }

    // If click on Delete
    if (code === 'Delete') {
      if (event.type === 'mousedown' || event.type === 'keydown') {
        const currentCursorPosition = getCursorPosition(this.input);
        this.input.value = deleteCharByPos(this.input.value, currentCursorPosition);
        setCursorPosition(this.input, currentCursorPosition);
      }
      this.input.focus();
      return;
    }

    // If Ctrl + Alt (Switch Language shortcut)
    if (((code === 'ControlLeft' || code === 'ControlRight') && event.altKey)
      || ((code === 'AltLeft' || code === 'AltRight') && event.ctrlKey)) {
      // If event is mousedown
      if ((event.type === 'mousedown' || event.type === 'keydown') && event.repeat !== true) {
        this.state.lang = this.state.lang === 'ru' ? 'en' : 'ru';
        this.switchLang(this.state.lang);
      }
      return;
    }

    // If click on button with "no action"
    if (this.buttonSet[code].noAction) {
      return;
    }

    // Print symbol to input element
    if (event.type === 'mousedown' || event.type === 'keydown') {
      let symbol = '';
      const currentCursorPosition = getCursorPosition(this.input);

      // Get button key
      if (typeof this.buttonSet[code].key === 'object') {
        symbol = this.buttonSet[code].key[this.state.lang];
      } else {
        symbol = this.buttonSet[code].key;
      }

      // If button has altkey and shift is pressed
      if (this.state.shift && this.buttonSet[code].altkey) {
        if (this.buttonSet[code].altkey[this.state.lang] === undefined) {
          symbol = this.buttonSet[code].altkey.en;
        }
        if (this.buttonSet[code].altkey[this.state.lang]) {
          symbol = this.buttonSet[code].altkey[this.state.lang];
        }
      }

      // If caps or shift is active
      symbol = ((this.state.caps && !this.state.shift) || (!this.state.caps && this.state.shift))
        ? symbol.toUpperCase()
        : symbol;

      // Add symbol to input and update cursor position
      this.input.value = insertStringInString(this.input.value, symbol, currentCursorPosition);
      setCursorPosition(this.input, currentCursorPosition + 1);
    }

    this.input.focus();
  }
}
