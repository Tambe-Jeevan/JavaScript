/*What attribute and value are required on the <script> tag when importing a module?
<script type='module'>    //answer
<script module='name of module'>
<script link='module'>

Insert the missing keyword to export the name and age properties:
const name = 'Tobias';
const age = 18;
export {name, age};  

You can only have one 'default export' in a module file.
True //true
False
example:
// ✅ Allowed */
export default function greet() {
  console.log("Hello");
}
export const name = "Jeevan"; // named export

const name = 'Tobias';
const age = 18;
export {name, age}; 

