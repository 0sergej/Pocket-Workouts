import logInModalsView from './logInModalsView';

class logInDetailsView {
    #logInUsername = <HTMLInputElement>document.querySelector('#log__in--username');
    #logInPassword = <HTMLInputElement>document.querySelector('#log__in--password');
    #signUpUsername = <HTMLInputElement>document.querySelector('#sign__up--username');
    #signUpPassword = <HTMLInputElement>document.querySelector('#sign__up--password');
    #signUpPasswordRepeat = <HTMLInputElement>document.querySelector('#sign__up--password__repeat');

    addLogInHandler(handler: Function) {
		logInModalsView.logInButtons[1].addEventListener('click', () => {
			//HACK any
			const logInData: any = this.#getData(true);

			this.#clearData();

			console.log(logInData);

			handler(logInData);
		});

		logInModalsView.signUpButtons[1].addEventListener('click', () => {
			//HACK any
			const logInData: any = this.#getData(false);

			this.#clearData();

			handler(logInData);
		});
    }

	#returnLogInData() {
		logInModalsView.logInButtons[1].addEventListener('click', () => {
			//HACK any
			const logInData: any = this.#getData(true);

            this.#clearData();

            console.log(logInData);

			return logInData;
		});

		logInModalsView.signUpButtons[1].addEventListener('click', () => {
			//HACK any
			const logInData: any = this.#getData(false);

			this.#clearData();

			return logInData;
		});
	}

	#getData(existingUser: boolean): Object {
        return {
            existingUser,
			username: existingUser ? this.#logInUsername.value : this.#signUpUsername.value,
			password: existingUser ? this.#logInPassword.value : this.#signUpPassword.value,
            passwordRepeat: this.#signUpPasswordRepeat.value,
		};
	}

	#clearData(): void {
		this.#logInUsername.value = '';
		this.#logInPassword.value = '';
		this.#signUpUsername.value = '';
		this.#signUpPassword.value = '';
		this.#signUpPasswordRepeat.value = '';
	}
}

export default new logInDetailsView();
