import logInModalsView from './Views/logInModalsView';
import logInDetailsView from './Views/logInDetailsView';
import * as Model from './Model';

const controlLogIn = async function (logInData: any) {
	try {
			const logInMessage = Model.logInDataCheck(logInData);
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
