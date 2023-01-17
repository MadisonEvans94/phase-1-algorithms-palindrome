function isPalindrome(word) {
	// Write your algorithm here
	let pointer1 = 0;
	let pointer2 = word.length - 1;
	while (pointer1 < pointer2) {
		if (word[pointer1].toLowerCase() !== word[pointer2].toLowerCase()) {
			return false;
		} else {
			pointer1++;
			pointer2--;
		}
	}
	return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
