// Consider the following code:
const fruits = ['Apple', 'Banana', 'Cherry'];
let [x, y] = fruits;
console.log(x);


/*What will be the value of x?
['Apple', 'Banana', 'Cherry']
['Apple']
Apple //Answer */

// Insert the missing syntax to make the leftover variable contain the rest of the Array.
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a,b, ...leftover] = numbers;
console.log(leftover);

// Use destructuring to swap fName and lName. Meaning, fName should get the value 'Doe' and lName 'John'.
let fName = 'John';
let lName = 'Doe';
[fName, lName] = [lName, fName];
console.log(fName, lName);
