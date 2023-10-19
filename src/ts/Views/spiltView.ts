class splitView {
	#mainSection = <HTMLElement>document.querySelector('#main--section');

	#sliders: Array<HTMLInputElement> = [];
	#sliderParagraphs: Array<HTMLParagraphElement> = [];
	#sliderValueArray: Array<string> = [];

	handleSliders() {
		this.#getSliders();
		this.#getSliderParagraphs();
		this.#getSliderValues();
		this.#setParagraphValues();
        this.#updateSliderParagraphValues();
	}

	#updateSliderParagraphValues() {
		this.#sliders.forEach((slider, i) => {
			slider.addEventListener('input', () => {
				this.#sliderValueArray[i] = slider.value;
				this.#setParagraphValues();
			});
		});
	}

	#getSliders() {
		Array.from(this.#mainSection.children).forEach((child) => this.#sliders.push(<HTMLInputElement>child.querySelector('input')));
	}

	#getSliderParagraphs() {
		Array.from(this.#mainSection.children).forEach((child) => this.#sliderParagraphs.push(<HTMLParagraphElement>child.querySelector('p')));
	}

	#getSliderValues() {
		Array.from(this.#mainSection.children).forEach((child) => this.#sliderValueArray.push(String(child.querySelector(`input`)?.value)));
	}

	#setParagraphValues() {
		this.#sliderParagraphs.forEach((paragraph, i) => (paragraph.textContent = this.#sliderValueArray[i]));
	}
}
export default new splitView();
