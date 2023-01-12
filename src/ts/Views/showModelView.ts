const ShowModel = class
{
    _logInButton = document.querySelector('.log--in--btn');
    _signUpButton = document.querySelector('.signup--btn');
    _modal = document.querySelector('.login--modal');

    constructor(){
        this._addHandlerShowModal();
    }

    _addHandlerShowModal = function ()
    {
        this._logInButton.addEventListener('click', this._showModal());
        console.log(1);
    };


    _showModal = function ()
    {
        this._modal.toggleAttribute('open');
    };
};

export default new ShowModel();