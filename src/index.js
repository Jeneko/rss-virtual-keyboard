import './sass/index.scss';
import buttonSet from './components/ButtonSet';
import VirtualKeyboard from './components/VirtualKeyboard';

// Keyboard Init
const virtualKeyboard = new VirtualKeyboard(buttonSet);

// Additional Elements
const textArea = document.createElement('textarea');
const container = document.createElement('div');
const info = document.createElement('div');

textArea.className = 'virtual-keyboard__textarea';
textArea.spellcheck = false;
container.className = 'container';
info.className = 'info';
info.innerHTML = `<p>Клавиатура создана в операционной системе <b>Windows</b><br>
Для переключения языка комбинация: <kbd>ctrl + alt</kbd></p>
<a href="https://github.com/Jeneko/rss-virtual-keyboard/tree/dev" class="github-link">Link to Github</a>`;

// Place everything on page
container.append(textArea);
container.append(virtualKeyboard.keyboard);
container.append(info);
document.body.append(container);

// Bind textarea to keyboard
virtualKeyboard.setInput(textArea);
// Set initial lang
const lang = localStorage.getItem('lang') || 'en';
virtualKeyboard.switchLang(lang);

textArea.focus();
