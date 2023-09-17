class usernameView {
	#newUsernameForm = document.getElementById('new__username--form');
	#newUsername = <HTMLInputElement>document.getElementById('new__username');
	#usernameSpan = document.getElementById('username');
	#welcomeMessage = document.getElementById('welcome__message');

	addHandlerUsernameChange(handler) {
		this.#newUsernameForm?.addEventListener('submit', (event) => {
			event.preventDefault();
			handler(this.#newUsername.value);
			this.#showInput();
		});
	}

	addHandlerUsernameForm(): void {
		this.#welcomeMessage?.addEventListener('click', this.#showInput.bind(this));
	}

	#showInput() {
		this.#newUsernameForm?.classList.toggle('hidden');
		this.#newUsernameForm?.classList.toggle(`disable--fade`);
		this.#newUsernameForm?.classList.toggle(`enable--fade`);
		this.#newUsername.value = ``;
	}

	handleWelcomeMessage(username) {
		const logInMessage = this.#usernameSpan as HTMLElement;
		logInMessage.textContent = `${this.#usernameFormating(username)}`;
	}

	#usernameFormating(username: string) {
		if (username.length < 10) return username;
		if (username.length > 7) return (username = username.slice(0, 12) + `...`);
	}
}

export default new usernameView();
