import { Circle, Square } from './generateshapes.js';
export { init, canvas, ctx };

const canvas = document.querySelector('.backgroundcanvas');
let ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let shapeCollection = {
	circle: [],
	square: [],
};
const shapes = {
	circle: Circle,
	square: Square,
};

function init() {
	resetShapeCollection();
	for (const shape in shapes) {
		for (let i = 0; i < 300; i++) {
			let dia = 0;
			if (shape === 'circle') {
				dia = Math.random() * 6 + 2;
			} else {
				dia = Math.random() * 6 + 2;
			}

			let x = Math.random() * (canvas.width - dia * 2) + dia;
			let y = Math.random() * (canvas.height - dia * 2) + dia;
			let dx = (Math.random() - 0.5) * 0.3;
			let dy = (Math.random() - 0.5) * 0.3;

			let newShape = new shapes[shape](x, y, dx, dy, dia);
			shapeCollection[shape].push(newShape);
		}
	}
	animate();
}

function resetShapeCollection() {
	shapeCollection = {
		circle: [],
		square: [],
		triangle: [],
	};
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	for (const shape in shapeCollection) {
		for (let i = 0; i < shapeCollection[shape].length; i++) {
			shapeCollection[shape][i].update();
		}
	}
}

window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});
