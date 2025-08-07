/*You cannot change the value of this.
True //aswer
False

What does this refer to when used in an object method?
The global object [object Window]
The object that the method belongs to.  //answr

Consider the following code?
<button onclick='this.style.display="none"'>OK</button>
What object does this refer to?
The global object [object Window]
The button element //answer
The body element */

const obj = {
    name : "Jeevan",
    surname: "Tambe",

    fullname: function(){
        console.log(`Fullname is ${this.name} ${this.surname}`)
    }
}
obj.fullname();

