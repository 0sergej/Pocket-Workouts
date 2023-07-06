import logInModalsView from './logInModalsView';

class logInDetailsView {
	#logInUsername = <HTMLInputElement>document.querySelector('#log__in--username');
	#logInPassword = <HTMLInputElement>document.querySelector('#log__in--password');
	#signUpUsername = <HTMLInputElement>document.querySelector('#sign__up--username');
	#signUpPassword = <HTMLInputElement>document.querySelector('#sign__up--password');
	#signUpPasswordRepeat = <HTMLInputElement>document.querySelector('#sign__up--password__repeat');

	returnLogInData() {
		logInModalsView.logInButtons[1].addEventListener('click', () => {
			const logInData = this.getData(true);

			this.clearData();

			return logInData;
		});
	}

	returnSignUpData() {
		logInModalsView.signUpButtons[1].addEventListener('click', () => {
            //HACK
            const signUpData: any = this.getData(false);

            this.clearData();

            return signUpData.password === signUpData.passwordRepeat ? signUpData : new Error('Passwords do not match')

		});
	}

	getData(newUser: boolean): Object {
		return {
			username: newUser ? this.#logInUsername.value : this.#signUpUsername.value,
			password: newUser ? this.#logInPassword.value : this.#signUpPassword.value,
			passwordRepeat: this.#signUpPasswordRepeat.value,
		};
	}

	clearData(): void {
		this.#logInUsername.value = '';
		this.#logInPassword.value = '';
		this.#signUpUsername.value = '';
		this.#signUpPassword.value = '';
		this.#signUpPasswordRepeat.value = '';
	}
}

export default new logInDetailsView();
