import { SLIDING_IMAGE_TIMER } from '../Helper';

class slidingImagesView {
	#slidingImage = document.querySelector('#slidingImg');
	#dots = Array.from(document.querySelectorAll('#dot'));

	#activeDot: Element | null | undefined = this.#dots[0];
	#oldActiveDot: Element | null | undefined;
	#interval: any;

	addHanhlerDotClick() {
		this.#dots.forEach((dot) =>
			dot.addEventListener('click', () => {
				this.#activateClickedDot(dot);
			}),
		);
	}

	addHandlerStarsInterval() {
		this.#interval = setInterval(this.#setInterval.bind(this), 2000); // FIXME helper import
	}

	#activateClickedDot(newActiveDot: Element) {
		// Stop interval timer
		clearInterval(this.#interval)
		// Start clickedTimer
		this.#interval = setTimeout(this.#clickedTimer.bind(this), 5000); // FIXME helper import

		// Check if the dot is not active
		if (newActiveDot.classList.contains(`cursor-pointer`)) {
			// Set active dot to this dot
			this.#activeDot = newActiveDot;
			// Find old active dot
			this.#oldActiveDot = this.#dots.find((dot) => dot.classList.contains(`cursor-default`));

			// Deactivate the dot
			this.#changeSlidingImage();
		}
	}

	#changeSlidingImage() {
		// Remove active styles and add passive styles[
		this.#deactivateDot();

		// Add active styles and remove passive styles
		this.#activateDot();

		// Change Image
		this.#changeImage();
	}
	#deactivateDot() {
		this.#oldActiveDot?.classList.replace('cursor-default', 'cursor-pointer');
		this.#oldActiveDot?.classList.replace('bg-[var(--accent)]', 'bg-[var(--primary)]');
	}
	#activateDot() {
		this.#activeDot?.classList.replace('bg-[var(--primary)]', 'bg-[var(--accent)]');
		this.#activeDot?.classList.replace('cursor-pointer', 'cursor-default');
	}

	#changeImage() {
		const slidingImageURL = this.#slidingImage?.getAttribute(`src`)?.replace(`_${this.#oldActiveDot?.getAttribute('data-dot')}`, `_${this.#activeDot?.getAttribute('data-dot')}`);

		this.#slidingImage?.setAttribute('src', `${slidingImageURL}`);
	}

	#setInterval() {
		// Change currently active dot to an old deactivated dot
		this.#oldActiveDot = this.#activeDot;

		// Find new active dot
		this.#activeDot = this.#activeDot?.nextElementSibling;

		// If it's last dot, then go back to the beginning
		if (this.#oldActiveDot?.nextElementSibling === null) this.#activeDot = this.#dots[0];

		// Chonge dot every X seconds
		this.#changeSlidingImage();
	}

	#clickedTimer() {
		this.addHandlerStarsInterval();
	}
}

export default new slidingImagesView();