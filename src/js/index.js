// Challenge 1: Reverse a string
//*return a string in reverse. ex. reverse string('hello) === 'olleh'

function reverseString(str) {
  // const strArr = str.split("");  //splits string into an array
  // strArr.reverse();
  // return strArr.join("");
  //-----------------------------------
  //*cleaner code
  // return str
  //   .split("")
  //   .reverse()
  //   .join("");
  //-----------------------------------
  //*reverse a string without using the .reverse method
  //this is a decreasing array example. we set i to string length and then set greater than 0.
  // let revString = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i]; //allows us to get one letter out of array, function reverseString(str,0) and it gives you h
  // }
  // return revString;
  //-------------------------------------
  //*incremeting array example
  // 'hello'
  //  01234 characters
  //as long as i is less than or equal to .length -1, increment i by 1.
  // let revString = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;
  //-------------------------------------
  //*ES6 for of loop
  // let revString = "";
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;
  //------------------------------------
  //For each method with arrow function, takes in a function and an iterator
  // let revString = "";
  // str.split("").forEach(char => (revString = char + revString));
  // return revString;
}

//Call Function

// const output = reverseString("hello");
// console.log(output);
