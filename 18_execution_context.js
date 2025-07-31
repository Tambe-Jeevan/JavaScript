/*In JavaScript, an execution context is an abstract environment where JavaScript code is evaluated and executed. It is a fundamental concept that governs how variables, functions, and the this keyword behave within different scopes. */

// 1. Global Execution Context (GEC):
    // Creation Phase: or memory creation phase 
    // Execution Phase:   execute all code

// 2. Function Execution Context (FEC):
    // Creation Phase: or memory creation phase 
    // Execution Phase:   execute all code
    // Execution contexts are managed using an Execution Stack (or Call Stack), a Last-In, First-Out (LIFO)

    // It used in call stack LIFO Last In First Out

    // ex

function one(){
    console.log("One");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}
one();

/*One
two
three*/