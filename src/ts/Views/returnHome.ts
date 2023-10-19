class returnHome {
	returnHome = <HTMLAnchorElement>document.querySelector('#return--home');
	logoIndex = document.getElementById('#logo--index');
	logoMakeTemplate = document.querySelector('#logo--makeTemplate');
	logoSplit = document.querySelector('#logo--split');

	addHandlerReturnHome() {
		this.logoIndex?.addEventListener('click', () => this.returnHome.click());
		this.logoMakeTemplate?.addEventListener('click', () => this.returnHome.click());
		this.logoSplit?.addEventListener('click', () => this.returnHome.click());
	}

	sendHome() {
		console.log(1);
		this.returnHome.click();
	}
}
export default new returnHome();