/*What does JSON stand for?
JavaScript Organized Nodes
JavaScript Object Notation //answer
JavaScript Original Numbers


What is a correct JavaScript function to convert a string into a JavaScript object?
JSON.toObject()
JSON.objectify()
JSON.parse() //answer
example : */
let jsonString = '{"name":"Jeevan", "age":22}';
let obj = JSON.parse(jsonString);
console.log(obj.name); // Output: Jeevan

/* Which one is a legal JSON object?
{"firstName":"John", "lastName":"Doe"}  //answer
{"firstName"="John", "lastName"="Doe"}
{firstName="John", lastName="Doe"} */
