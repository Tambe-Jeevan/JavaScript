// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
/* Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} */

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
/* IN :- India
USA :- United States of America
Fr :- France*/


//Practice Questions and answers
// Which method can be used to add elements to a Map?
// add()
// insert()
// push()
// set()  //answer
// ex
const myMap = new Map();
myMap.set("name", "Jeevan");
myMap.set("age", 22);
console.log(myMap);
// Output: Map(2) { 'name' => 'Jeevan', 'age' => 22 }


// Which method can be used to get elements from a Map?
// key()
// value()
// get()  //answer
// select()
// ex
const myMap1 = new Map();
myMap.set("name", "Jeevan");
console.log(myMap1.get("name")); 
// Output: Jeevan

// Which property can be used to return the number of elements in a Map?
// length
// size   //answer
// count
// numberOf
// ex
const myMap2 = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
console.log(myMap2.size); 
// Output: 2


// Which method can be used to check if a Map contains a specified element?
// contains()
// indexOf()
// has() //answer
// inSet()
// ex
const myMap3 = new Map();
myMap.set("name", "Jeevan");
console.log(myMap3.has("name")); // true
console.log(myMap3.has("age"));  // false

// Which method returns an Iterator object with all the keys in a Map
// all()
// keys()  //answer
// items()
// iterator()
// ex
const myMap4 = new Map();
myMap.set("name", "Jeevan");
myMap.set("age", 22);
const keysIterator = myMap4.keys();
for (let key of keysIterator) {
  console.log(key);
}
// Output:
// "name"
// "age"





