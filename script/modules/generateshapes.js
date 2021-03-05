import { canvas, ctx } from './animateshapes.js';
export { Circle, Square };

const colors = ['#ffa200ff', '#4fa91bff', '#a15e49ff', '#4e3822ff'];

let mouse = {
	x: undefined,
	y: undefined,
};
window.addEventListener('mousemove', function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

let maxDia = 100;
let minDia = 10;

function Circle(x, y, dx, dy, dia) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = dia;
	this.minRadius = dia;
	this.color = colors[Math.floor(Math.random() * colors.length)];

	this.draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	};

	this.update = function () {
		if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		// mouse interaction
		if (
			mouse.x - this.x < 80 &&
			mouse.x - this.x > -80 &&
			mouse.y - this.y < 80 &&
			mouse.y - this.y > -80
		) {
			if (this.radius < maxDia) {
				this.radius += 0.5;
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 0.5;
		}

		this.draw();
	};
}

function Square(x, y, dx, dy, dia) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.dia = dia;
	this.minDia = dia;
	this.color = colors[Math.floor(Math.random() * colors.length)];

	this.draw = function () {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.dia, this.dia);
		ctx.fillStyle = this.color;
		ctx.fill();
	};

	this.update = function () {
		if (this.x + this.dia > canvas.width || this.x < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.dia > canvas.height || this.y < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		// mouse interaction
		if (
			mouse.x - this.x < 80 &&
			mouse.x - this.x > -80 &&
			mouse.y - this.y < 80 &&
			mouse.y - this.y > -80
		) {
			if (this.dia < maxDia) {
				this.dia += 0.5;
			}
		} else if (this.dia > this.minDia) {
			this.dia -= 0.5;
		}

		this.draw();
	};
}
