class logInModalsView {
	logInButtons = Array.from(document.querySelectorAll('#log__in--btn'));
	signUpButtons = Array.from(document.querySelectorAll('#sign__up--btn'));
	signOutButton = document.querySelector('#sign__out--btn');
	logInModal = document.querySelector('#log__in--modal');
	signUpModal = document.querySelector('#sign__up--modal');
	logInHeaderContainter = document.querySelector('#log__in---header');

	addHandlerLogIn() {
		this.#bindButtons(this.logInButtons, () => this.#showModal(this.logInModal, this.signUpModal));
	}

	addHandlerSignUp() {
		this.#bindButtons(this.signUpButtons, () => this.#showModal(this.signUpModal, this.logInModal));
	}

	addHandlerSignOut() {
		this.signOutButton?.addEventListener('click', () => {
			this.#logOut();
			this.logInHeaderContainter?.classList.add('hidden');
		});
	}

	login() {
		this.logInButtons[0].classList.add('hidden');
		this.signUpButtons[0].classList.add('hidden');
		this.signOutButton?.classList.remove('hidden');
	}

	#logOut() {
		this.logInButtons[0].classList.remove('hidden');
		this.signUpButtons[0].classList.remove('hidden');
		this.signOutButton?.classList.add('hidden');
		this.#logOutHeader();
	}

	//HACK any
	logInHeader(logInData: any) {
		this.logInHeaderContainter?.classList.remove('hidden');
		const logInMessage = this.logInHeaderContainter?.children[0] as HTMLElement;
		logInMessage.textContent = `Welcome ${logInData.username}`;
	}

	#logOutHeader() {
		this.logInHeaderContainter?.classList.add('hidden');
	}

	#showModal(showModal: Element | null, hideModal: Element | null) {
		hideModal?.classList.remove('modal');
		showModal?.classList.toggle('modal');
	}

	#bindButtons(btnType: Element[], modalType: any) {
		btnType.map((btn) => btn.addEventListener('click', modalType?.bind(this)));
	}
}

export default new logInModalsView();
