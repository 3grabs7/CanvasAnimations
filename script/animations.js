const boxes = document.querySelectorAll('.maincontainer__body__boxes__box');

//* $redwood: #a15e49ff; $dark-purple: #2f1b25ff;
const boxAnimationDuration = 500;
let boxAnimationHovered = false;
let boxAnimationWaiting = false;

Array.from(boxes).forEach((box) => {
	box.addEventListener('mouseenter', (e) => {
		if (!boxAnimationHovered) {
			boxAnimationHovered = true;
			boxAnimationWaiting = true;
			e.currentTarget.animate(
				[{ opacity: 0 }, { opacity: 1, transform: 'rotateX(180deg)' }],
				{ duration: boxAnimationDuration, fill: 'forwards' }
			);
			setTimeout(() => {
				box.style.backgroundColor = '#a15e49ff';
			}, boxAnimationDuration / 2);
			setTimeout(() => {
				boxAnimationHovered = false;
				boxAnimationWaiting = false;
			}, boxAnimationDuration);
		}
	});
	box.addEventListener('mouseleave', (e) => {
		if (!boxAnimationWaiting) {
			boxAnimationHovered = true;
			boxAnimationWaiting = true;
			e.currentTarget.animate(
				[
					{ opacity: 0, transform: 'rotateX(180deg)' },
					{ opacity: 1, transform: 'rotateX(0deg)' },
				],
				{ duration: boxAnimationDuration, fill: 'forwards' }
			);
			setTimeout(() => {
				box.style.backgroundColor = '#2f1b25ff';
			}, boxAnimationDuration / 2);
			setTimeout(() => {
				boxAnimationWaiting = false;
				boxAnimationHovered = false;
			}, boxAnimationDuration);
		}
	});
});
