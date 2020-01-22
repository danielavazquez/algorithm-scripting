// Challenge 8: Sort an array of objects
//*Sort an array of objects by property value and order alphabetically by property color
//*We have a color property and size property

const list = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
]

//ES6 Arrow Function
// list.sort((a, b) => {
//     if (a.color > b.color) {
//         return 1
//     } else {
//         return -1
//     }

// })

//DRY answer

// list.sort((a, b) => {
//     return (a.color > b.color) ? 1 : -1
// })

//DRYER answer with implicit return
// list.sort((a, b) => (a.color > b.color) ? 1 : -1)

//Call Function
// const output = list;
// console.log(output);
