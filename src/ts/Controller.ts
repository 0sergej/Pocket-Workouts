import logInModalsView from './Views/logInModalsView';
import logInDetailsView from './Views/logInDetailsView';
import * as Model from './Model';
import errorMessageView from './Views/errorMessageView';
import slidingImagesView from './Views/slidingImagesView';
import usernameView from './Views/usernameView';
import makeTemplateView from './Views/makeTemplateView';
import returnHome from './Views/returnHome';
import chooseTemplateView from './Views/chooseTemplateView';

const controlLogIn = function (logInData: any) {
	// HACK any
	const [logInDataNew, logInResult]: any = Model.logInDataCheck(logInData);
	if (logInResult === true) {
		logInModalsView.login();
		logInModalsView.logInHeader();
		usernameView.handleWelcomeMessage(logInDataNew);
	}
	if (logInResult !== true && typeof logInResult !== 'boolean') {
		errorMessageView.showErrorMessageBox(logInResult);
	}
};

const controlUsernameChange = function (newUsername: string) {
	newUsername = Model.changeUsername(newUsername);
	usernameView.handleWelcomeMessage(newUsername);
};

const controlSignOut = function () {
	Model.clearCurrentUser();
};

const defaultLogIn = function () {
    // Get current user
	const currentUser: Object = Model.getCurrentUser();
	window.addEventListener('load', () => {
		// If current user is not logged in, log him in
		if (Object.keys(currentUser).length) controlLogIn(currentUser);
		// If no current user
		if (Object.keys(currentUser).length === 0) {
			// If not on home page, send home
			onHomePage() ? true : returnHome.sendHome();
		}
	});
};

const onHomePage = function () {
	if (document.querySelector('#logo--index')) return true;
};

const initController = function () {
	defaultLogIn();
	initView();

	if (module.hot) {
		module.hot.accept();
	}
};

const initView = function () {
	logInModalsView.addHandlerLogIn();
	logInModalsView.addHandlerSignUp();
	logInModalsView.addHandlerSignOut(controlSignOut);
	logInModalsView.addHandlerCloseLogIn();
	logInModalsView.addHandlerCloseSignUp();
	logInDetailsView.addLogInHandler(controlLogIn);
	errorMessageView.addHandlerCloseErrorMessage();
	slidingImagesView.addHandlerStarsInterval();
	slidingImagesView.addHanhlerDotClick();
	usernameView.addHandlerUsernameChange(controlUsernameChange);
	usernameView.addHandlerUsernameForm();
	makeTemplateView.addHandlerMakeTamplate();
	returnHome.addHandlerReturnHome();
	chooseTemplateView.addHandlerBtn();
	chooseTemplateView.addHandlerImageHover();
	chooseTemplateView.addHandlerImageClick();
};

initController();
