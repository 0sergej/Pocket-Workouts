class chooseTemplateView {
	#chooseTemplateButtons = Array.from(document.querySelectorAll(`#chooseTemplateBtn`));
	#chooseTemplateImages = Array.from(document.querySelectorAll(`#chooseTemplateImg`));
	#changeImageBound;
	#cilckImageBound;
	#buttonClickBound;
	#changeButtonBound;

	addHandlerBtn() {
        this.#changeButtonBound = this.#changeButton.bind(this);
		this.#buttonClickBound = this.#buttonClick.bind(this);
		this.#chooseTemplateButtons.forEach((button) => {
			button.addEventListener('mouseenter', this.#changeButtonBound);
			button.addEventListener('mouseleave', this.#changeButtonBound);
			button.addEventListener('click', this.#buttonClickBound);
		});
	}

	#buttonClick(event: PointerEvent) {
		const button: Element = event.target as Element;

		this.#changeButtonBound(event);
		this.#buttonRemoveEventListener(button);

		const image: Element = button.parentElement?.querySelector(`[data-btn='${button.getAttribute('data-btn')}']`) as Element;

		this.#changeImageBound({ target: image, type: 'mouseover' });
	}

	#buttonRemoveEventListener(btn: Element) {

		btn.removeEventListener('mouseenter', this.#changeButtonBound);
		btn.removeEventListener('mouseleave', this.#changeButtonBound);
	}

	#changeButton(event: Event) {
		const btn: Element = event.target as Element;
		const type: string = event.type as string;

		if (type === 'mouseenter') {
			btn.classList.toggle('stretch-in', false);
			btn.classList.toggle('stretch-out', true);
		}
		if (type === 'mouseleave') {
			btn.classList.toggle('stretch-in', true);
			btn.classList.toggle('stretch-out', false);
		}

		this.#reset(btn);
	}

	addHandlerImageHover() {
		this.#changeImageBound = this.#changeImage.bind(this);

		this.#chooseTemplateImages.forEach((image) => (image.classList.contains('hidden') ? image.addEventListener('mouseleave', this.#changeImageBound) : image.addEventListener('mouseover', this.#changeImageBound)));
	}

	// HACK: any
	#changeImage(event: any) {
		const image = event.target;
		const type = event.type;
		const i: number = Number(image.getAttribute('data-image'));
		image.classList.toggle('hidden', true);
		type === 'mouseover' && this.#chooseTemplateImages[i - 1].classList.toggle('hidden', false);
		type === 'mouseleave' && this.#chooseTemplateImages[i + 1].classList.toggle('hidden', false);
	}

	addHandlerImageClick() {
		this.#cilckImageBound = this.#imageClick.bind(this);
		this.#chooseTemplateImages.forEach((image) => image.addEventListener('click', this.#cilckImageBound));
	}

	#imageClick(e) {
		const image = e.target;
		const btn = image.parentElement?.lastElementChild;
		const event = new Event(`mouseenter`);
		Object.defineProperty(event, 'target', { writable: false, value: btn });
		this.#changeButtonBound(event);
		this.#swapImages(image);
	}

	#swapImages(img) {
		img.classList.toggle('hidden', false);
		img.nextElementSibling.classList.toggle('hidden', true);
	}

	#reset(clickedButton) {
		this.#checkResetButton(clickedButton);
		this.#chooseTemplateImages.forEach((image) => {
			this.#removeImageEventListeners(image);
			if (Number(image.getAttribute('data-image')) % 2 === 0) {
				this.#changeImageBound({ target: image, type: 'mouseleave' });
			}
		});
	}

	#removeImageEventListeners(img: Element) {
		img.removeEventListener('mouseleave', this.#changeImageBound);
		img.removeEventListener('mouseover', this.#changeImageBound);
		img.removeEventListener('click', this.#cilckImageBound);
	}

	#checkResetButton(clickedButton) {
		this.#chooseTemplateButtons.forEach((btn) => {
			if (clickedButton !== btn) {
				btn.classList.toggle('stretch-out', false);
				btn.classList.toggle('stretch-in', true);
			}
		});
	}
}

export default new chooseTemplateView();
