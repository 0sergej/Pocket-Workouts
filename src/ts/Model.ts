//HACK any
export const logInDataCheck = function (logInData: any) {
	const errMessage = `Error, username or password are incorrect. Please try again.`;
	// Check if the user has an account
	if (logInData.existingUser === true) {
		// Check if the user's username and password is correct
		const storage = localStorage.getItem('logInData');

		// If storage exists, check if the user exists.
		if (storage) {
			const existingUserData = JSON.parse(storage);

			return checkIfUserExists(existingUserData, logInData, errMessage);
		}

		return errMessage;
	}
	// If the user is new
	else if (logInData.existingUser === false) {
		// Check if password's match
		const message = checkPasswords(logInData);
		// Save User's Data
		localStorage.setItem('logInData', JSON.stringify(logInData));

		return message;
	}
};

//HACK any
const checkIfUserExists = function (userData: any, logInData: any, errMessage: string) {
	if (userData.username === logInData.username && userData.password === logInData.password) return `Logged in as ${userData.username}.`;

	return errMessage;
};

//HACK any
const checkPasswords = function (userData: any) {
	if (userData.password !== userData.passwordRepeat) return new Error('Passwords do not match. Please check your password and try again.');

	return `Signed in as ${userData.username}.`;
};
