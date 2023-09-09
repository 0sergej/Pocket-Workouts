//HACK any
export const logInDataCheck = function (logInData: any) {
	let logInResult: string | boolean = false;
	// Check if the user has an account
	if (logInData.existingUser === true) {
		const accountsJSON = localStorage.getItem('logInData[]');
		if (accountsJSON) {
			const accountsArr = JSON.parse(accountsJSON);
			logInResult = checkIfUserExists(accountsArr, logInData);
        }
		return logInResult === false ? `Wrong username or password :K` : logInData;
	}
	// Check if username and password are of appropriate format
	logInResult = checkFormat(logInData);
	// Check if password's match
	if (logInResult === true) logInResult = checkPasswords(logInData);
	// Check if username is already taken
	if (logInResult === true) logInResult === checkIfUsernameExists(logInData);
	// Save User's Data
	if (logInResult === true) makeUser(logInData);
	return logInResult;
};

//HACK any
const checkIfUserExists = function (accountsArr: any, logInData: any) {
	let accountExists: boolean = false;
	//HACK any
	accountsArr.map((account: any) => {
		if (account.username === logInData.username && account.password === logInData.password) {
			accountExists = true;
		}
	});
	return accountExists;
};

//HACK any
const makeUser = function (logInData: any) {
	// Get an old Data
	const accountsJSON = localStorage.getItem('logInData[]');

	// Check if there is any old data
	if (accountsJSON) {
		// Get old data
		const accountsArr: Array<any> = [];
		accountsArr.push(...JSON.parse(accountsJSON));
		// Add new user data
		accountsArr.push(logInData);
		localStorage.setItem('logInData[]', JSON.stringify(accountsArr));
		return;
	}

	localStorage.setItem('logInData[]', JSON.stringify([logInData]));
};

//HACK any
const checkFormat = function (logInData: any) {
	const usernameLength: boolean = logInData.username.length > 3 && logInData.username.length < 13;
	const passwordLength: boolean = logInData.password.length > 3 && logInData.password.length < 13;
	const passwordCapital: boolean = /[A-Z]/.test(logInData.password) && /[a-z]/.test(logInData.password);
	return usernameLength && passwordLength && passwordCapital ? true : `Username and password must be at least 4 characters long, and password must contain small and capital letters <:`;
};

//HACK any
const checkPasswords = function (logInResult: any) {
	return logInResult.password === logInResult.passwordRepeat ? true : 'Passwords do not match. Please check your password and try again =>';
};

//HACK any
const checkIfUsernameExists = function (logInData: any) {
	const accountsJSON = localStorage.getItem('logInData[]');
	if (accountsJSON) {
		const accountsArr = JSON.parse(accountsJSON);
		return accountsArr.some((account) => account.username === logInData.username) ? 'Username is already taken. Please try something different :}' : true;
	}
	return true;
};
