const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()  //undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})   //we use the () for the object.
console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach();


/*Which one of the following is a correct JavaScript arrow function?
greeting => 'Hello World!';
greeting = () => 'Hello World!';  //answer
// greeting = return => 'Hello World!'; */

// Insert the missing parts to complete the arrow function:
myfunc = () =>  {
  let x = 5;
  return x;
}

/*You are not allowed to use parameters in arrow functions.
True
False //answer*/