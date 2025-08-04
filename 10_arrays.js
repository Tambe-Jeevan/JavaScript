// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);  //[0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);  //1

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));  //false
// console.log(myArr.indexOf(3));  //3

const newArr = myArr.join()

// console.log(myArr);  //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);  //0,1,2,3,4,5


// slice, splice

// console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myArr);  //[ 0, 4, 5 ]
console.log(myn2);   //[ 1, 2, 3 ]


//Practice question and answer 
/*
After executing the following code:
const fruits = ['Banana', 'Orange', 'Apple'];
fruits.pop();
What will the fruits array look like?
['', 'Banana', 'Orange', 'Apple']
['Banana', 'Orange']  //answer because pop delete last item in array
['Orange', 'Apple']


Use the correct Array method to add "Kiwi" to the fruits array.
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi"); //answer


Use the splice() method to remove "Orange" and "Apple" from fruits.
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2); //answer


Consider the following code:
const fruits = ['Apple', 'Orange', 'Mango'];
let x = fruits.indexOf('Orange');
What will the result of x?
0
1 //answer
true


Consider the following code:
const fruits = ['Apple', 'Orange', 'Mango'];
let x = fruits.includes('Orange');
What will the result of x?
0
1
true //true


Consider the following code:
const fruits = ['Apple', 'Orange', 'Mango'];
let x = fruits.indexOf('Banana');
What will the result of x?
0
-1 //answer
false


Consider the following code:
const fruits = ['Apple', 'Orange', 'Banana'];
fruits.reverse();
What will the result of the fruits array?
['Orange', 'Banana', 'Apple']
['Banana', 'Orange', 'Apple']  //answer
['Apple', 'Banana', 'Orange']
['Orange', 'Apple', 'Banana']


Use the correct Array method to sort the fruits array alphabetically.
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();

True or False.
The reverse() method returns a new array, the original array is not affected.
True
False //answer


Consider the following code:
const x = [45, 4, 9, 16, 25];
let y = x.every(myfunc);
function myfunc(val) {
  return val > 20;
}
What will the result of the y?
[45, 25]
false  //answer
[]
NaN


Consider the following code:
const x = [45, 4, 9, 16, 25];
let y = x.some(myfunc);
function myfunc(val) {
  return val > 20;
}
What will the result of the y?
[45, 25]
[]
true //true
2


Consider the following code:
const x = [45, 4, 9, 16, 25];
let y = x.map(myfunc);
function myfunc(val) {
  return val > 20;
}
What will the result of the y?
[45, 25]
false
true
[true, false, false, false, true]  //answer


Is the following redeclaring of the fruits array allowed?
const fruits = ['Apple', 'Banana', 'Cherry'];
var fruits = ['Kiwi', 'Lemon', 'Mango'];
Yes, it's allowed
No it's not allowed  //answer 
*/