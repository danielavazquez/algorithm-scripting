// Challenge 3: Reverse an Integer
//*return an integer in reverse. ex. reverseInt(521) === 125
function reverseInt(int) {
  const revString = int
    .toString() //turns into string
    .split("") //turns into array
    .reverse() //reverse integer
    .join(""); //turns it back into a string
  return parseInt(revString); //will turn it back into an integer. If want string, omit parseInt
}

//Call function

// const output = reverseInt(123456789);
// console.log(output);
