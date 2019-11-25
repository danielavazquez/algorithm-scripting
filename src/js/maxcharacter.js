// Challenge 4: Max Character
//*return the character that is most common in a string. ex.maxcharacter('javascript')== 'a'

function maxcharacter(str) {
  const charMap = {}; //key value pairs of actual characters, set it as an id object literal
  str.split("").forEach(function(char) {
    if (charMap[char]) {
      //if it exists add 1 to it, if it already exists add another 1 and its a two
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  console.log(charMap);
}

//Call function
// const output = maxcharacter("javascript");
// console.log(output);

//gives us a map, it's an object withe each letter and number of times it occurs
