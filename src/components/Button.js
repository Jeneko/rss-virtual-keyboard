export default function createButton(data) {
  const buttonColor = data.color || 'default';
  const buttonSize = data.size || '1u';
  const buttonKey = (typeof data.key === 'object') ? data.key.en : data.key;

  const button = document.createElement('button');

  button.classList.add('btn');
  button.classList.add(`btn--${buttonColor}`);
  button.classList.add(`btn--${buttonSize}`);

  button.setAttribute('tabindex', '-1');
  button.value = data.code;

  // If key is a system key
  if (data.system) {
    button.insertAdjacentHTML('beforeend', `<span class="btn__syskey">${buttonKey}</span>`);
  }

  // If key is a standard key and has alt Key
  // ATTENTION: btn__altkey must stands prior to btn__stdkey for correct css style
  if (data.altkey) {
    button.insertAdjacentHTML('beforeend', `<span class="btn__altkey">${data.altkey.en}</span>`);
  }

  // If key is a standard key
  if (!data.system) {
    button.insertAdjacentHTML('beforeend', `<span class="btn__stdkey">${buttonKey}</span>`);
  }

  // If key has an icon
  if (data.icon) {
    button.innerHTML = `<i class="material-icons">${data.icon}</i>`;
  }

  // If key has led indicator
  if (data.hasLed) {
    button.insertAdjacentHTML('beforeend', '<div class="btn__led"></div>');
  }

  return button;
}
