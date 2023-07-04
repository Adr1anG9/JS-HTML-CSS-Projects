// let randomNumber = Math.random() * 6

// console.log(randomNumber)


/* 
What does Math.random() do?
Your answer: 
generates a random number between 0 and 1 ( doens't include 1) 

* 6 will five a rannge between 0 and 6 ( 6 not included again)

*/


// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber);

/*
What does Math.floor do to positive numbers ?

Math.floor removes the decimals

*/

// let randomNumber = Math.floor(Math.random() * 6)

// console.log(randomNumber);

// /*
// values between 0 and 5  (0, 1, 2, 3, 4, 5)
// */

// let randomNumber = Math.floor(Math.random() * 6) + 1

// console.log(randomNumber);


// Creating a function called rollDice() that returns a value between 1 and 6


function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
console.log( rollDice() );