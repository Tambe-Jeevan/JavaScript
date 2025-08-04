const name = "jeevan";
const repoCount = " 15";

// console.log(name + repoCount + " Value");  // jeevan 15 Value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('jeevan-hc-com')

// console.log(gameName[0]);  //j
// console.log(gameName.__proto__); //{}


// console.log(gameName.length); //13
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));  //e
// console.log(gameName.indexOf('v'));  //3

const newString = gameName.substring(0, 4)
// console.log(newString);  //jeev

const anotherString = gameName.slice(2, 4)
// console.log(anotherString);   //ev

const newStringOne = "   hitesh    "
// console.log(newStringOne);   //   hitesh    
// console.log(newStringOne.trim());  //hitesh

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  //https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))  //false

console.log(gameName.split('-'));  //[ 'jeevan', 'hc', 'com' ]

// Practice questions and answers
/* 
1. Which one of the following is not a legal JavaScript String?
"Hello world!"
""Hello world!"" //wrong
'Hello world!'
`Hello world!`

2. Use the length property to alert the length of txt.
let txt = "Hello World!";
let x = txt.length;
alert(x);

3. Use escape characters to alert We are "Vikings".
let txt = "We are \"Vikings\""; //imp
alert(txt);

4. Concatenate the two strings to alert "Hello World!".
let str1 = "Hello ";
let str2 = "World!";
alert(str1+str2);

5. Consider the following string: let x = 'Having fun?';
Which one of the following statements returns 'fun'?
x.slice(7, 10) // right
x.substring(7, 9)
x.substr(7, 10)

6. Convert the text into an UPPERCASE text:
let txt = "Hello World!";
txt = txt.toUpperCase();

7. Use the slice method to return the word "bananas".
let txt = "I can eat bananas all day";
let x = txt.slice(10, 17);

8. Use the correct String method to replace the word "Hello" with the word "Welcome".
let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");

9. Convert the value of txt to lower case.
let txt = "Hello World";
txt = txt.toLowerCase();

10. Consider the following code:
let x = 'Hello world!';
alert(x.indexOf('Hello'));
What will be the alerted result?
-1
0  //write answer
1
true
indexOf('Hello') returns the position (index) of the first occurrence of 'Hello' in the string.
Since 'Hello' starts at the very beginning, its index is 0.


11. Which one is NOT a legal JavaScript method?
indexOf()
instr()  //wrong
lastIndexOf()
search()


12. Find the position of the character h in the string txt.
let txt = "abcdefghijklm";
let pos = txt.indexOf('h');


13. Insert the missing parts to alert 'Hello John Doe!':
let firstname = 'John';
let lastname = 'Doe';
alert(`Hello ${firstname} ${lastname}!`);


14. True or False.
Template strings allows multi line strings.
True  //true
False */