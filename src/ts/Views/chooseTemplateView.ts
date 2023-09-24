class chooseTemplateView {
	#chooseTemplateButtons = Array.from(document.querySelectorAll(`#chooseTemplateBtn`));
	#chooseTemplateImages = Array.from(document.querySelectorAll(`#chooseTemplateImg`));
	addHandlerBtnClick() {
		this.#chooseTemplateButtons.forEach((btn) => {
			btn.addEventListener('mouseenter', () => {
				btn.classList.toggle('stretch-in', false);
				btn.classList.toggle('stretch-out', true);
			});
			btn.addEventListener('mouseleave', () => {
				btn.classList.toggle('stretch-out', false);
				btn.classList.toggle('stretch-in', true);
			});
		});
	}

	addHandlerChangeToActiveImage() {
		this.#chooseTemplateImages.forEach((image, i) => {
			if (image.classList.contains('hidden') === false) {
				image.addEventListener('mouseover', () => {
					image.classList.toggle('hidden', true);
					this.#chooseTemplateImages[i - 1].classList.remove('hidden');
				});
			}
			if (image.classList.contains('hidden') === true) {
				image.addEventListener('mouseleave', () => {
					image.classList.toggle('hidden', true);
					this.#chooseTemplateImages[i + 1].classList.remove('hidden');
				});
			}
		});
	}

	addHandlerImageClick() {
		this.#chooseTemplateImages.forEach((image) => {
            image.addEventListener('click', () => {
                console.log(image);
				console.log(1);
			});
		});
	}
}
export default new chooseTemplateView();
