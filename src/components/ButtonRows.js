const btnRow1 = [
  { key: '`', alt: '~' },
  { key: '1', alt: '!' },
  { key: '2', alt: '@' },
  { key: '3', alt: '#' },
  { key: '4', alt: '$' },
  { key: '5', alt: '%' },
  { key: '6', alt: '^' },
  { key: '7', alt: '&' },
  { key: '8', alt: '*' },
  { key: '9', alt: '(' },
  { key: '0', alt: ')' },
  { key: '-', alt: '_' },
  { key: '=', alt: '+' },
  { key: 'backspace', color: 'mod', size: '2u' },
  { key: 'home', color: 'mod' },
];
const btnRow2 = [
  { key: 'tab', color: 'mod', size: '1_5u' },
  { key: 'q' },
  { key: 'w' },
  { key: 'e' },
  { key: 'r' },
  { key: 't' },
  { key: 'y' },
  { key: 'u' },
  { key: 'i' },
  { key: 'o' },
  { key: 'p' },
  { key: '[', alt: '{' },
  { key: ']', alt: '}' },
  {
    key: '\\', alt: '|', color: 'mod', size: 'auto',
  },
  { key: 'del', color: 'mod' },
];

const btnRow3 = [
  { key: 'caps', color: 'mod', size: '1_75u' },
  { key: 'a' },
  { key: 's' },
  { key: 'd' },
  { key: 'f' },
  { key: 'g' },
  { key: 'h' },
  { key: 'j' },
  { key: 'k' },
  { key: 'l' },
  { key: ';' },
  { key: '\'' },
  { key: 'enter', color: 'mod', size: 'auto' },
  { key: 'pgup', color: 'mod' },
];

const btnRow4 = [
  { key: 'leftshift', color: 'mod', size: '2_25u' },
  { key: 'z' },
  { key: 'x' },
  { key: 'c' },
  { key: 'v' },
  { key: 'b' },
  { key: 'n' },
  { key: 'm' },
  { key: ',' },
  { key: '.' },
  { key: '/' },
  { key: 'rightshift', color: 'mod', size: 'auto' },
  { key: '↑', color: 'mod' },
  { key: 'phdn', color: 'mod' },
];

const btnRow5 = [
  { key: 'leftctrl', color: 'mod', size: '1_25u' },
  { key: 'win', color: 'mod', size: '1_25u' },
  { key: 'leftalt', color: 'mod', size: '1_25u' },
  { key: 'space', size: 'auto' },
  { key: 'rightalt', color: 'mod', size: '1_25u' },
  { key: 'rightctrl', color: 'mod', size: '1_25u' },
  { key: '←', color: 'mod' },
  { key: '↓', color: 'mod' },
  { key: '→', color: 'mod' },
];

export default [btnRow1, btnRow2, btnRow3, btnRow4, btnRow5];
