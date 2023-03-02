import './src/sass/main.scss';
import './slider';

const menu = document.querySelector('.menu');
const hide = document.querySelector('.hide');
const body = document.querySelector('body');
let toggle = false;

menu.addEventListener('click', function () {
	toggle = !toggle;
	if (toggle === true) {
		hide.style.display = 'flex';
    body.style.overflow = 'hidden'; 
	} else if (toggle === false) {
		hide.style.display = 'none';
    body.style.overflow = 'auto'; 
	}
});
