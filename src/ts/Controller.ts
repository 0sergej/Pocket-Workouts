import logInModalsView from './Views/logInModalsView'
import logInDetailsView from './Views/logInDetailsView'

const controlShowModel = function () {
};

const init = function ()
{
    logInModalsView.addHandlerLogIn()
    logInModalsView.addHandlerSignUp();
    logInDetailsView.returnLogInData();
    logInDetailsView.returnSignUpData();
};

init();