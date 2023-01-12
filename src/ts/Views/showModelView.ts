const ShowModel = class
{
    _logInButton = document.querySelector('.login--btn');
    _signUpButton = document.querySelector('.signup--btn');
    _modal = document.querySelector('.login--modal');

    constructor()
    {
        this._addHandlerShowModal();
    }

    _addHandlerShowModal = function ()
    {
        this._logInButton.addEventListener('click', this._showModal());
    };


    _showModal = function ()
    {
        this._modal.toggleAttribute('open');
    };
};

export default new ShowModel();