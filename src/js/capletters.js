// Challenge 5: Capitalize Letters
//*return a string with the first letter of every word capitalized. ex. capitalize letters ('i love javascript');

// function capitalizeLetters(str) {
//   const strArr = str.toLowercase().split(" "); //we add a space here because we are separating words into arrays not characters
//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUppercase() + strArr[i].substring(1);
//   }
//   return strArr.join(" "); //separating words into arrays not characters
// }

//ES6 Arrow Function

//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(" ");
// }


//Capitalize the first letter in a string

// const name = 'flavio';
// const capitalize = str => {
//     if (!str) return ''
//     return str.charAt(0).toUpperCase() +
//         str.slice(1)
// }

// capitalize('roger');
