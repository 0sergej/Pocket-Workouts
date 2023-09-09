import { ERROR_MESSAGE_TIMER } from '../Helper';

class errorMessageView {
	#errorMessageDiv = document.getElementById('error__message--div');
	#errorMessageParagragh = document.getElementById('error__message--paragragh');
	#closingXErrorMesageDiv = document.getElementById('error__message--closing__X');

	addHandlerCloseErrorMessage() {
		this.#closingXErrorMesageDiv?.addEventListener('click', this.#closeErrorMessage.bind(this));
	}

	showErrorMessageBox(errMessage: string) {
		this.#errorMessageDiv?.classList.add('fade-in-element');
		this.#errorMessageDiv?.classList.remove('fade-out-element');
		this.#addErrorMessage(errMessage);
		setTimeout(this.#hideErrorMessageBox.bind(this), ERROR_MESSAGE_TIMER);
	}

	#hideErrorMessageBox() {
		this.#errorMessageDiv?.classList.remove('fade-in-element');
		this.#errorMessageDiv?.classList.add('fade-out-element');
	}

	#addErrorMessage(errMessage: string) {
		// Guard Clause
		if (errMessage && this.#errorMessageParagragh)
			// Adding error message
			this.#errorMessageParagragh.innerHTML = errMessage;
	}

	#closeErrorMessage() {
		this.#errorMessageDiv?.classList.toggle('fade-in-element', false);
		this.#errorMessageDiv?.classList.toggle('fade-out-element', true);
	}
}

export default new errorMessageView();
