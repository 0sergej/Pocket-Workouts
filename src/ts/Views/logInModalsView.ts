class logInModalsView {
	logInButtons = Array.from(document.querySelectorAll('#log__in--btn'));
	signUpButtons = Array.from(document.querySelectorAll('#sign__up--btn'));
	signOutButton = document.querySelector('#sign__out--btn');
	logInModal = document.querySelector('#log__in--modal');
	signUpModal = document.querySelector('#sign__up--modal');
	logInHeaderContainter = document.querySelector('#log__in--header');
	#closingXLogIn = document.getElementById('log__in--closing__X');
	#closingXSignUp = document.getElementById('sign__up--closing__X');

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

	addHandlerCloseLogIn() {
		this.#closingXLogIn?.addEventListener('click', () => {
			this.#closeModal(this.logInModal);
		});
	}

	addHandlerCloseSignUp() {
		this.#closingXSignUp?.addEventListener('click', () => {
			this.#closeModal(this.signUpModal);
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
		showModal?.classList.toggle('fade-out-element');
		showModal?.classList.toggle('fade-in-element');
		hideModal?.classList.toggle('fade-in-element', false);
		hideModal?.classList.toggle('fade-out-element', true);
	}

	#bindButtons(btnType: Element[], modalType: any) {
		btnType.map((btn) => btn.addEventListener('click', modalType?.bind(this)));
	}

	#closeModal(modal: Element | null) {
		modal?.classList.toggle('fade-in-element', false);
		modal?.classList.toggle('fade-out-element', true);
}
}

export default new logInModalsView();
