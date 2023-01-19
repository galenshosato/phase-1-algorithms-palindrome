function isPalindrome(word) {
  let newWord = ""

  let i = word.length - 1


  while (i >=0) {
    newWord = newWord + word[i]
    i--
    console.log(newWord)
  }

  

  if (newWord.toLowerCase() === word.toLowerCase()) {
    return true
  } else {
    return false
  }

  
}



/* 
  Add your pseudocode here
  Create an empty newWord
  Assign i to word.length-1
  while i >= 0

  i++

if newWord ===


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
