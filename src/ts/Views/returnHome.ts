class returnHome {
	returnHome = <HTMLAnchorElement>document.getElementById('return--home');
	logoIndex = document.getElementById('logo--index');
	logoMakeTemplate = document.getElementById('logo--makeTemplate');

    addHandlerReturnHome() {
        const capture = {
            capture: true,
        };
        this.logoIndex?.addEventListener('click', () => this.returnHome.click());
        this.logoMakeTemplate?.addEventListener('click', () => this.returnHome.click());
	}
}
export default new returnHome();
