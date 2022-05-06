import './sass/index.scss';
import VirtualKeyboard from './components/VirtualKeyboard';

// Keyboard Init
const textArea = document.createElement('textarea');
const virtualKeyboard = new VirtualKeyboard(textArea).keyboard;
const vkContainer = document.createElement('div');

textArea.className = 'vk-textarea';
vkContainer.className = 'vk-container';

document.body.append(vkContainer);
vkContainer.append(textArea);
vkContainer.append(virtualKeyboard);

textArea.focus();
