class makeTemplateView {
	#makeTemplateBtn = document.getElementById(`template--btn`);

	addHandlerMakeTamplate() {
		this.#makeTemplateBtn?.addEventListener('click', () => {
			prompt();
		});
	}
}

export default new makeTemplateView();
