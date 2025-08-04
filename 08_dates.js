// Dates

let myDate = new Date()
// console.log(myDate.toString());  //hu Jul 31 2025 12:05:05 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  //Thu Jul 31 2025
// console.log(myDate.toLocaleString());  //31/7/2025, 12:05:05 pm
// console.log(typeof myDate);      //object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());   //4/1/2023, 12:00:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  //1753943798426 
// console.log(myCreatedDate.getTime());  //1673634600000
// console.log(Math.floor(Date.now()/1000));  //1753943798

let newDate = new Date()
// console.log(newDate);   //2025-07-31T06:37:27.801Z
// console.log(newDate.getMonth() + 1); //7
console.log(newDate.getDay());  //4

console.log(`${newDate.getDay()} and the time `)  //4 and the time

newDate.toLocaleString('default', {
    weekday: "long"
    
})

// Practice questions and answers
/*What date is created with the following code:
const d = new Date(2024, 10, 18);.
October 18. 2024
November 18. 2024 //answer
October 19. 2024
November 19. 2024
In JavaScript, the month index starts from 0:
0 = January
1 = February
...
10 = November
11 = December


What date is created with the following code:
const d = new Date(24, 10, 18);.
October 18. 2024
November 18. 2024
October 18. 1924
November 18. 1924 //answer
When using new Date(year, month, day) in JavaScript:
If the year is between 0 and 99, JavaScript treats it as 1900 + year.
So 24 becomes 1924
Month 10 = November (because months are 0-based)
Day = 18


What date is created with the following code:
const d = new Date('2024');.
A random date in 2024
January 1. 2024  //answer
December 31. 2024
When you pass a year string like '2024' to the Date constructor, JavaScript interprets it as:
2024-01-01T00:00:00.000Z
That is: January 1st, 2024


Consider the following code:
let x = Date.parse('March 30, 2011');
What will be the result x?
The number of milliseconds between March 30, 2011 and January 1, 1900
The number of milliseconds between March 30, 2011 and January 1, 1970  //answer
The number of milliseconds between March 30, 2011 and January 1, 2000
The Date.parse() method returns the timestamp:
The number of milliseconds since the Unix Epoch:
January 1, 1970, 00:00:00 UTC


Use the correct Date method to extract the year (four digits) out of a date object.
const d = new Date();
year = d.getFullYear();


Use the correct Date method to get the month (0-11) out of a date object.
const d = new Date();
month = 
d.getMonth();


Use the correct Date method to set the year of a date object to 2020.
const d = new Date();
d.setFullYear(2020);
setFullYear(2020) updates the year of the Date object.
The other parts of the date (month, day, etc.) remain unchanged unless you specify them.


What is expected format of the setTime() method?
A number between 0 and 23
A date with the time specified
Milliseconds since January 1, 1970 //answer */



