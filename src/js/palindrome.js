// Challenge 2: Validate a Palindrome
//*return true if palindrome and false if not. ex. isPalindrome === true, isPalindrome('hello') === false

function isPalindrome(str) {
  const revString = str
    .split("")
    .reverse()
    .join("");
  return revString === str;
}

//Call function

// const output = isPalindrome("racecar");
// console.log(output);
