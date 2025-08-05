
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);


/*// Practice Questions and answer
Consider the following code:
let i = 15, x = '';
do {
  x += 'The number is ' + i;
}
while (i < 10);
Which one of these statements will be true?
x will be an empty string
x will be a string with the value 'The number is 15'  //answer
The loop will never end 

Consider the following code:
let firstname = 'Jim', i = 0;
for (const x of firstname) {
  i++;
}
What will be the value of i?
0
1
2
3 //answer

Consider the following code:
const fruits = ['Apple', 'Banana', 'Cherry'];
let txt = '';
for (const x in fruits) {
  txt += x;
}
What will be the value of txt?
012 //answer
AppleBananaCherry


*/