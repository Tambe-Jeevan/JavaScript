// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
   if(greet === " "){
      continue
    }else{
        //  console.log(`Each char is ${greet}`);
    }
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

let myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}


// Practice questions and answers
// Consider the following code:
const fruits = ['Apple', 'Banana', 'Orange'];
for (x of fruits) {
  console.log(x);
}
/*What will be the result in the console?
1
2
3

0
1
2
// answer
Apple
Banana
Orange


Create a loop that runs through each item in the fruits array. */
const fruit = ["Apple", "Banana", "Orange"];
for (x of fruit) {
  console.log(x);
} 

