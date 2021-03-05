import { canvas } from './modules/canvasinit.js';
import { animate } from './modules/animateshapes.js';
import { animations } from './modules/animations.js';

const boxes = document.querySelectorAll('.maincontainer__body__boxes__box');

document.addEventListener('DOMContentLoaded', (e) => {
	animate();

	Array.from(boxes).forEach((box) => animations.flip(box));
});
