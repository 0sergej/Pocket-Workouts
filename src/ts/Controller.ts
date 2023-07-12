import logInModalsView from './Views/logInModalsView';
import logInDetailsView from './Views/logInDetailsView';
import * as Model from './Model';

const controlLogIn = function (logInData: any) {
    const logInResult = Model.logInDataCheck(logInData);
    if (logInResult === true)
    {
        logInModalsView.login();
        logInModalsView.logInHeader(logInData)
    }
};

const init = function () {
	logInModalsView.addHandlerLogIn();
	logInModalsView.addHandlerSignUp();
	logInModalsView.addHandlerSignOut();
	logInDetailsView.addLogInHandler(controlLogIn);
};

init();
