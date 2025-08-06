const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// Practice Questions and answers
/*The for in loop cannot be used on Arrays.
True
False //answer


There is an Array method you can use to loop through the item of an array, which one?
Array.for()
Array.in
Array.forEach //answer
Array.iterate() 

Consider the following code: */
const fruits = ['Apple', 'Banana', 'Orange'];
for (x in fruits) {
  console.log(x);
}
/*What will be the result in the console?
1
2
3
//answer
0
1
2

Apple
Banana
Orange*/




