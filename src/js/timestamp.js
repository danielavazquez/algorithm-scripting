// Challenge 9: How to get timestamp
//*Get current timestamp in JavaScript, numbers always expressed in milliseconds
//*At times you will need to get a timestamp to track when something happened or how long something took
//*Timestamp in JavaScript is the number of seconds that have passed since January 1st 1970 12:00:00

log = console.log;

//Class method or static method
let timestamp1 = Date.now();
log(timestamp1);

//Instance method
let today = new Date(); //instance of a date object
let timestamp2 = today.valueOf() //valueOf returns the stored time value in milliseconds since Jan 1st
log(timestamp2);
log(today)

//Math.floor method

Math.floor(Date.now() / 1000);