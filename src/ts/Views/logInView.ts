class logInView {

    #logInButtons = document.querySelectorAll('#log__in--btn');
    #signUpButtons = document.querySelectorAll('#sign__up--btn');
    logInModal = document.querySelector('#log__in--modal');
    signUpModal = document.querySelector('#sign__up--modal');

    addHandlerLogIn() {
        this.#logInButtons[0]?.addEventListener('click', this.#showLogInModal.bind(this));
        this.#logInButtons[1]?.addEventListener('click', this.#showLogInModal.bind(this));

    }

    addHandlerSignUp() {
        this.#signUpButtons[0]?.addEventListener('click', this.#showSignUpModal.bind(this));
        this.#signUpButtons[1]?.addEventListener('click', this.#showSignUpModal.bind(this));
    }

    #showLogInModal() {
        this.signUpModal?.classList.remove('modal')

        this.logInModal?.classList.toggle('modal')
    }

    #showSignUpModal() {
        this.logInModal?.classList.remove('modal')
        this.signUpModal?.classList.toggle('modal')
    }

}

export default new logInView();