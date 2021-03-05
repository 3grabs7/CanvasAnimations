import { canvas } from './modules/canvasinit.js';
import { animate } from './modules/animateshapes.js';

document.addEventListener('DOMContentLoaded', (e) => {
	animate();
});

// this.animate(
// 	[{ transform: 'rotate(0deg)' }, { transform: 'rotate(350deg)' }],
// 	{
// 		duration: 1,
// 		iterations: 'Infinity',
// 	}
// );
