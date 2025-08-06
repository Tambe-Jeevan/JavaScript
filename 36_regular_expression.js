/*What does the i modifier represent in Regular Expressions?

Perform global matching (find all occurences)
Perform case-sensitive matching
Perform case-insensitive matching

Correct Answer:
Perform case-insensitive matching
Explanation:
In Regular Expressions (RegEx):
i modifier → case-insensitive match
(e.g., /hello/i will match "Hello", "HELLO", "hElLo", etc.)*/


let pattern = /e/;
let x = pattern.test('Ladies and gentlemen');
console.log(x); //true
/*Consider the following code:
What will be the value of x?
e
4
true  //answer
false
The .test() method checks if the pattern exists in the given string.
/e/ looks for the letter "e" (case-sensitive).
'Ladies and gentlemen' contains several "e" characters.
So, pattern.test('Ladies and gentlemen') returns true*/



