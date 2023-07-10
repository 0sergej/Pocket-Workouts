//HACK any
export const logInDataCheck = function (logInData: any) {
	const errMessage = `Error, username or password are incorrect. Please try again.`;
	// Check if the user has an account
	if (logInData.existingUser === true) {
		// Check if the user's username and password is correct
		const accountsJSON = localStorage.getItem('logInData[]');

		// If storage exists, check if the user exists.
		if (accountsJSON) {
			const accountsArr = JSON.parse(accountsJSON);

			return checkIfUserExists(accountsArr, logInData) === true ? true : errMessage;
		}

		return errMessage;
	}
	// If the user is new
	else if (logInData.existingUser === false) {
		// Check if password's match
		const logInResult = checkPasswords(logInData);
		// Save User's Data
		makeUser(logInData);

		return logInResult;
	}
};

//HACK any
const checkIfUserExists = function (accountsArr: any, logInData: any) {
	let accountExists: boolean = false;
	//HACK any
	accountsArr.map((account: any) => {
		if (account.username === logInData.username && account.password === logInData.password) {
			console.log(1);
			accountExists = true;
		}
	});

	if (accountExists) return accountExists;
};

//HACK any
const checkPasswords = function (accountsArr: any) {
	if (accountsArr.password !== accountsArr.passwordRepeat) return 'Passwords do not match. Please check your password and try again.';

	return true;
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
