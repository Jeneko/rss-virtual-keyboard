const buttonRow1 = [
  { key: { en: '`', ru: 'ё' }, code: 'Backquote', altkey: { en: '~', ru: null } },
  { key: '1', code: 'Digit1', altkey: { en: '!' } },
  { key: '2', code: 'Digit2', altkey: { en: '@', ru: '"' } },
  { key: '3', code: 'Digit3', altkey: { en: '#', ru: '№' } },
  { key: '4', code: 'Digit4', altkey: { en: '$', ru: ';' } },
  { key: '5', code: 'Digit5', altkey: { en: '%' } },
  { key: '6', code: 'Digit6', altkey: { en: '^', ru: ':' } },
  { key: '7', code: 'Digit7', altkey: { en: '&', ru: '?' } },
  { key: '8', code: 'Digit8', altkey: { en: '*' } },
  { key: '9', code: 'Digit9', altkey: { en: '(' } },
  { key: '0', code: 'Digit0', altkey: { en: ')' } },
  { key: '-', code: 'Minus', altkey: { en: '_' } },
  { key: '=', code: 'Equal', altkey: { en: '+' } },
  {
    key: 'Backspace', code: 'Backspace', color: 'mod', size: 'auto', icon: 'backspace', system: true,
  },
];
const buttonRow2 = [
  {
    key: '\t', code: 'Tab', color: 'mod', size: '1_5u', icon: 'keyboard_tab', system: true,
  },
  { key: { en: 'q', ru: 'й' }, code: 'KeyQ' },
  { key: { en: 'w', ru: 'ц' }, code: 'KeyW' },
  { key: { en: 'e', ru: 'у' }, code: 'KeyE' },
  { key: { en: 'r', ru: 'к' }, code: 'KeyR' },
  { key: { en: 't', ru: 'е' }, code: 'KeyT' },
  { key: { en: 'y', ru: 'н' }, code: 'KeyY' },
  { key: { en: 'u', ru: 'г' }, code: 'KeyU' },
  { key: { en: 'i', ru: 'ш' }, code: 'KeyI' },
  { key: { en: 'o', ru: 'щ' }, code: 'KeyO' },
  { key: { en: 'p', ru: 'з' }, code: 'KeyP' },
  { key: { en: '[', ru: 'х' }, code: 'BracketLeft', altkey: { en: '{', ru: null } },
  { key: { en: ']', ru: 'ъ' }, code: 'BracketRight', altkey: { en: '}', ru: null } },
  {
    key: '\\', code: 'Backslash', altkey: { en: '|' }, color: 'mod', size: 'auto',
  },
];

const buttonRow3 = [
  {
    key: 'Caps', code: 'CapsLock', color: 'mod', size: '1_75u', hasLed: true, icon: 'keyboard_capslock', system: true,
  },
  { key: { en: 'a', ru: 'ф' }, code: 'KeyA' },
  { key: { en: 's', ru: 'ы' }, code: 'KeyS' },
  { key: { en: 'd', ru: 'в' }, code: 'KeyD' },
  { key: { en: 'f', ru: 'а' }, code: 'KeyF' },
  { key: { en: 'g', ru: 'п' }, code: 'KeyG' },
  { key: { en: 'h', ru: 'р' }, code: 'KeyH' },
  { key: { en: 'j', ru: 'о' }, code: 'KeyJ' },
  { key: { en: 'k', ru: 'л' }, code: 'KeyK' },
  { key: { en: 'l', ru: 'д' }, code: 'KeyL' },
  { key: { en: ';', ru: 'ж' }, code: 'Semicolon', altkey: { en: ':', ru: null } },
  { key: { en: '\'', ru: 'э' }, code: 'Quote', altkey: { en: '"', ru: null } },
  {
    key: '\n', code: 'Enter', color: 'mod', size: 'auto', icon: 'keyboard_return', system: true,
  },
];

const buttonRow4 = [
  {
    key: 'Shift', code: 'ShiftLeft', color: 'mod', size: '2_25u', system: true,
  },
  { key: { en: 'z', ru: 'я' }, code: 'KeyZ' },
  { key: { en: 'x', ru: 'ч' }, code: 'KeyX' },
  { key: { en: 'c', ru: 'с' }, code: 'KeyC' },
  { key: { en: 'v', ru: 'м' }, code: 'KeyV' },
  { key: { en: 'b', ru: 'и' }, code: 'KeyB' },
  { key: { en: 'n', ru: 'т' }, code: 'KeyN' },
  { key: { en: 'm', ru: 'ь' }, code: 'KeyM' },
  { key: { en: ',', ru: 'б' }, code: 'Comma', altkey: { en: '<', ru: null } },
  { key: { en: '.', ru: 'ю' }, code: 'Period', altkey: { en: '>', ru: null } },
  { key: { en: '/', ru: '.' }, code: 'Slash', altkey: { en: '?', ru: ',' } },
  {
    key: 'Shift', code: 'ShiftRight', color: 'mod', size: 'auto', system: true,
  },
  {
    key: '↑', code: 'ArrowUp', color: 'mod', icon: 'keyboard_arrow_up', system: true,
  },
  {
    key: 'Del', code: 'Delete', color: 'mod', system: true,
  },
];

const buttonRow5 = [
  {
    key: 'Ctrl', code: 'ControlLeft', color: 'mod', size: '1_25u', system: true, noAction: true,
  },
  {
    key: 'Win', code: 'MetaLeft', color: 'mod', size: '1_25u', system: true, noAction: true,
  },
  {
    key: 'Alt', code: 'AltLeft', color: 'mod', size: '1_25u', system: true, noAction: true,
  },
  {
    key: ' ', code: 'Space', size: 'auto', icon: 'space_bar', system: true,
  },
  {
    key: 'Alt', code: 'AltRight', color: 'mod', size: '1_25u', system: true, noAction: true,
  },
  {
    key: 'Ctrl', code: 'ControlRight', color: 'mod', size: '1_25u', system: true, noAction: true,
  },
  {
    key: '←', code: 'ArrowLeft', color: 'mod', icon: 'keyboard_arrow_left', system: true,
  },
  {
    key: '↓', code: 'ArrowDown', color: 'mod', icon: 'keyboard_arrow_down', system: true,
  },
  {
    key: '→', code: 'ArrowRight', color: 'mod', icon: 'keyboard_arrow_right', system: true,
  },
];

export default [buttonRow1, buttonRow2, buttonRow3, buttonRow4, buttonRow5];
