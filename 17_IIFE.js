// Immediately Invoked Function Expressions (IIFE)
//used for global variable polution overcome


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('G1');
