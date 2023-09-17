import logInModalsView from './Views/logInModalsView';
import logInDetailsView from './Views/logInDetailsView';
import * as Model from './Model';
import errorMessageView from './Views/errorMessageView';
import slidingImagesView from './Views/slidingImagesView';
import usernameView from './Views/usernameView';

const controlLogIn = function (logInData: any) {
	const logInResult = Model.logInDataCheck(logInData);
    if (logInResult === true) {
		logInModalsView.login();
        logInModalsView.logInHeader();
		usernameView.handleWelcomeMessage(logInData.username);
	}
	if (logInResult !== true && typeof logInResult !== 'boolean') {
		errorMessageView.showErrorMessageBox(logInResult);
	}
};

const controlUsernameChange = function (newUsername: string) {
	newUsername = Model.changeUsername(newUsername);

	usernameView.handleWelcomeMessage(newUsername);
};

const init = function () {
	logInModalsView.addHandlerLogIn();
	logInModalsView.addHandlerSignUp();
	logInModalsView.addHandlerSignOut();
	logInModalsView.addHandlerCloseLogIn();
	logInModalsView.addHandlerCloseSignUp();
	logInDetailsView.addLogInHandler(controlLogIn);
	errorMessageView.addHandlerCloseErrorMessage();
	slidingImagesView.addHandlerStarsInterval();
	slidingImagesView.addHanhlerDotClick();
	usernameView.addHandlerUsernameChange(controlUsernameChange);
	usernameView.addHandlerUsernameForm();
};

init();
