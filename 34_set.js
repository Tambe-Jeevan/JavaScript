const mySet = new Set();
mySet.add(10);
mySet.add('hello');
console.log(mySet); // Set(2) {10, "hello"}


// What happens if you try to add a value that already exists?
// An error will occur
// The Set will not add the new value, but keep the first occurance  //answer
// The Set will add the new value and delete the first occurance
// ex
const mySet2 = new Set();
mySet.add(5);
mySet.add(5); // duplicate, will be ignored
console.log(mySet); // Output: Set(1) {5}


// Which method can be used to check if a Set contains a specified value?
// contains()
// indexOf()
// has()  //answer
// inSet()
// ex
const mySet3 = new Set();
mySet.add("apple");
console.log(mySet.has("apple")); // true
console.log(mySet.has("banana")); // false


// Which method returns an Iterator object with all the values in a Set
// all()
// values()  //answer
// items()
// iterator()
// ex
const mySet4 = new Set(["a", "b", "c"]);
const iterator = mySet.values();

for (let value of iterator) {
  console.log(value);
}
// Output:
// a
// b
// c
