function isPalindrome(word) {
  word = word.replace(/\s/g,'').toLowerCase();

return word === word.split('').reverse().join('');
}
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
