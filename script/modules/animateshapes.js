import { Circle, Square, Triangle } from './generateshapes.js';
import { canvas } from './canvasinit.js';
let ctx = canvas.getContext('2d');
export { canvas, ctx };
export { animate };

const shapeCollection = {
	circle: [],
	square: [],
	triangle: [],
};

const shapes = {
	circle: Circle,
	square: Square,
	//triangle: Triangle,
};

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
		let dx = (Math.random() - 0.5) * 1;
		let dy = (Math.random() - 0.5) * 1;

		let newShape = new shapes[shape](x, y, dx, dy, dia);
		shapeCollection[shape].push(newShape);
	}
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
