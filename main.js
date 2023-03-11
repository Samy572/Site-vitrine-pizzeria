import './src/sass/main.scss';
import './slider';
const link = document.querySelectorAll('.link-menu');
const menu = document.querySelector('.menu');
const hide = document.querySelector('.hide');
const body = document.querySelector('body');
const closeBtn = document.getElementById('close');
let toggle = false;

menu.addEventListener('click', function () {
	toggle = !toggle;
	inverse();
});

closeBtn.addEventListener('click', function () {
	if (toggle === true) {
		toggle = !toggle;
		hide.style.display = 'none';
		body.style.overflow = 'auto';
	}
});

link.forEach((el) => {
	el.addEventListener('click', function () {
		if (toggle === true) {
			console.log(toggle)
			toggle = !toggle;
			inverse();
		}
	});
});

function inverse() {
	if (toggle === true) {
		hide.style.display = 'flex';
		body.style.overflow = 'hidden';
	} else {
		hide.style.display = 'none';
		body.style.overflow = 'auto';
	}
}
