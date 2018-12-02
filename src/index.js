
import { oi }  from './scripts/oi';
// import image from './images/download.png';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = oi;
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());