// Challenge 7: Longest word in a string
//*Return the length of the longest word in the provided sentence. Response should be a number

function findLongestWordLength(str) {
    var words = str.split(' '); //takes string and converts it into an array of words
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) { //then checks for the longest word by comparing the current word to the previous one and storing the new longest word
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength; //at the end of the loop just return the number value of variable maxLength
}

//Call function 

// const output = findLongestWordLength('Coldplay\s new album is called Everyday life')
// console.log(output);