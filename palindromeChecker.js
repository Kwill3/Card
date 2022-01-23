const palindromeChecker = (str) => {
	const palindrome = str.toLowerCase().split('').reverse().join('');
	return (palindrome === str.toLowerCase());
}

module.exports = palindromeChecker;