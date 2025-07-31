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