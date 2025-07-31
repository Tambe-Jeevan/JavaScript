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