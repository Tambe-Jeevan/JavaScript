const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); //[Number: 100]
// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2));//100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //123.8

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  //Object [Math] {}
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2));  //5
// console.log(Math.floor(4.9));  //4
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8

// console.log(Math.random());  //0 to 1 
// console.log((Math.random()*10) + 1);   //1 to 10 in point
// console.log(Math.floor(Math.random()*10) + 1);  //proper 1 to 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // 10 to 20


//Practice Questions and answers
/* Consider the following code:
let x = 10;
let y = 20;
let z = 'The prize is ' + x + y;
What will be the result of z?
The prize is 30
The prize is 1020 //answer
The prize is 30.00


In JavaScript 4 and 1.8 has the same data type.
True  //true
False

BigInt numbers can have decimals.
True
False //false

What is the name of the property for returing the largest number possible in javaScript?
POSSIBLE_MAX
MAX_POSSIBLE
MAX_VALUE  //wright
MAX_POSITIVE


What is the name of the property for returing the largest INTEGER possible in javaScript?
MAX_INTEGER
MAX_SAFE_INTEGER  //answer
MAX_VALUE
MAX_POSITIVE_INTEGER


Consider the following code:
let a = Number.POSITIVE_INFINITY;
If you try to write the result of a, what will be the result?
Infinity //answer
undefined
NaN */

