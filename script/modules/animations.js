export { animations };
const animations = { flip: flip };

function flip(element) {
	if (element.getAnimations({ subtree: true }).length === 0) {
		element.addEventListener('mouseover', (e) => {
			e.currentTarget.animate(
				[{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
				{
					duration: 500,
					iterations: 1,
					endDelay: 2000,
				}
			);
		});
	}
}
