import logInModalsView from './Views/logInModalsView';
import logInDetailsView from './Views/logInDetailsView';
import * as Model from './Model';
import errorMessageView from './Views/errorMessageView';
import slidingImagesView from './Views/slidingImagesView';

const controlLogIn = function (logInData: any) {
	const logInResult = Model.logInDataCheck(logInData);
	if (logInResult === true) {
		logInModalsView.login();
		logInModalsView.logInHeader(logInData);
	}
	if (logInResult !== true && typeof logInResult !== 'boolean') {
		errorMessageView.showErrorMessageBox(logInResult);
	}
};

const init = function () {
    logInModalsView.addHandlerLogIn();
	logInModalsView.addHandlerSignUp();
	logInModalsView.addHandlerSignOut();
	logInModalsView.addHandlerCloseLogIn();
	logInModalsView.addHandlerCloseSignUp();
	logInDetailsView.addLogInHandler(controlLogIn);
    errorMessageView.addHandlerCloseErrorMessage();
    slidingImagesView.addHandlerStarsInterval()
    slidingImagesView.addHanhlerDotClick();
};

init();