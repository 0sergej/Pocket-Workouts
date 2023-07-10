import logInModalsView from './Views/logInModalsView';
import logInDetailsView from './Views/logInDetailsView';
import * as Model from './Model';

const controlLogIn = function (logInData: any) {
	const logInResult = Model.logInDataCheck(logInData);
	if (logInResult === true) logInModalsView.login();
			console.log(logInMessage);
	} catch (error) {
		console.error(error);
	}
};

const init = function () {
	logInModalsView.addHandlerLogIn();
	logInModalsView.addHandlerSignUp();
	logInDetailsView.addLogInHandler(controlLogIn);
};

init();
