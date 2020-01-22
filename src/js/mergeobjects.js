// Challenge 10: Merge two objects in JavaScript
//*Use ES6 Spread Operator

const person = {
    name: 'Flavio'
}

const ageOfPerson = {
    age: 36
}

// ... three dots are the spread operator which creates a new object with all the properties of person objects
const finalObject = {
    ...person,
    ...ageOfPerson
}


//Call function
finalObject

//Spread operator using concat() method. This method does not change the existing arrays but returns a new array
//normal array concat() method

let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = arr.concat(arr2);
console.log(arr); //[1,2,3,4,5]

//We can achieve the same output with help of the spread operator
arr = [...arr, ...arr2];
console.log(arr); //[1,2,3,4,5]
