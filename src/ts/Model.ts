const account = {
	existingUser: false,
	username: ``,
	password: '',
	passwordRepeat: '',
	customeUsername: '',
	id: 0,
};

let currentUser: any = {};

//HACK any
export const logInDataCheck = function (logInData: any) {
	account.existingUser = logInData.existingUser as boolean;
	account.username = logInData.username as string;
	account.password = logInData.password as string;
	account.passwordRepeat = logInData.passwordRepeat as string;
	account.customeUsername = logInData.username as string;

	let logInResult: string | boolean = true;

	// Check if the user has an account
	if (account.existingUser) {
		// HACK any
		const userData: any = getUserData();
		if (Object.keys(userData).length === 0) logInResult = `Wrong username or password :K`;
		account.customeUsername = userData?.customeUsername;

		currentUser = account;

		return [account, logInResult];
	}

	// Check if username and password are of appropriate format
	logInResult = checkFormat();
	// Check if password's match
	if (logInResult === true) logInResult = checkPasswords();
	// Check if username is already taken
	if (logInResult === true) logInResult = checkIfUsernameExists();
	// Change Account hidden properties
	if (logInResult === true) {
		account.id = Math.random();
		account.existingUser = true;
	}
	// Save User's Data
	if (logInResult === true) makeUser();
	currentUser = account;
	return logInResult;
};

const getUserData = function () {
	let userData: object = {};
	const accountsJSON = localStorage.getItem('account[]');
	if (accountsJSON) {
		const accountsArr = JSON.parse(accountsJSON);
		userData = findUserData(accountsArr);
	}
	return userData;
};

//HACK any
const findUserData = function (accountsArr: any) {
	let accountData: object = {};

	//HACK any
	accountsArr.map((acc: any) => {
		if (acc.username === account.username && acc.password === account.password) {
			accountData = acc;
		}
	});
	return accountData;
};

export const changeUsername = function (newUsername: string) {
	const accountsJSON = localStorage.getItem('account[]');
	if (accountsJSON) {
		let j: number = -1;
		const accountsArr = JSON.parse(accountsJSON);

		const activeAccount = accountsArr.find((acc: { id: any }) => {
			j++;
			return acc.id === currentUser.id;
		});
		activeAccount.customeUsername = newUsername;
		accountsArr.splice(j, 1, activeAccount);
		localStorage.setItem('account[]', JSON.stringify(accountsArr));

		return activeAccount;
	}
};

//HACK any
const makeUser = function () {
	// Get an old Data
	const accountsJSON = localStorage.getItem('account[]');

	// Check if there is any old data
	if (accountsJSON) {
		// Get old data
		const accountsArr: Array<any> = [];
		accountsArr.push(...JSON.parse(accountsJSON));
		// Add new user data
		accountsArr.push(account);
		localStorage.setItem('account[]', JSON.stringify(accountsArr));
		return;
	}

	localStorage.setItem('account[]', JSON.stringify([account]));
};

//HACK any
const checkFormat = function () {
	const usernameLength: boolean = account.username.length > 3;
	const passwordLength: boolean = account.password.length > 3;
	const passwordCapital: boolean = /[A-Z]/.test(account.password) && /[a-z]/.test(account.password);
	return usernameLength && passwordLength && passwordCapital ? true : `Username and password must be at least 4 characters long, and password must contain small and capital letters <:`;
};

//HACK any
const checkPasswords = function () {
	return account.password === account.passwordRepeat ? true : 'Passwords do not match. Please check your password and try again =>';
};

//HACK any
const checkIfUsernameExists = function () {
	let errorMessage: string | boolean = true;
	const accountsJSON = localStorage.getItem('account[]');
	if (accountsJSON) {
		const accountsArr = JSON.parse(accountsJSON);
		errorMessage = accountsArr.some((acc) => acc.username === account.username) ? 'Username is already taken. Please try something different :}' : true;
	}
	return errorMessage;
};
