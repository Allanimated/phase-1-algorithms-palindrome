function isPalindrome(word) {
 const convertWordToArray = word.split('');
 const inverseWordArray = [];
 for (const letter of convertWordToArray) {
    inverseWordArray.unshift(letter);
 }
 const reversedWord = inverseWordArray.join('');

 if (word === reversedWord) {
    return true;
 } else {
    return false;
 }

}

/* 
  convert string to an array of letters using split
  initialize a new empty array
  use a for of loop to iterate through letters of the array made by the string at first
  add each element such that each letter is added at the beginning using unshift
  use join to convert the array to a string
  use deep equality operator to compare the string from the new array with the older string
*/

/*
 My code first converts the string to an array of letters.
 After this a new array is initialized with the letters of the string from right to left.
 when this array is joined back to a string it is an inverse of the string provided. We now compare 
 the reversed word with the word to check if it is a palindrome or not  
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

isPalindrome("racecar");
