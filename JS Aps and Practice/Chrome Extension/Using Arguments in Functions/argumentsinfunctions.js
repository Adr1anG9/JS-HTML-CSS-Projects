// // 43. Creating my first function with arguments 
// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(name) {
//     welcomeEl.textContent = `Welcome back, ${name} 👋`    
// }

// greetUser("Adrian")

//-----------------------------------------------------------------

// 44. Functions with multiple parameters 

// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting, name, question, emoji ) {
//     welcomeEl.textContent = `${greeting}, ${name}, ${question} ${emoji}`    
// }

// greetUser("Welcome back", " Adrian", "you ok ?", "👋")


// 45. Create a function add() , that adds 2 numbers together and returns the sum

//-----------------------------------------------------------------

// const welcomeEl = document.getElementById("welcome-el")

// //                   .parameters ----> parameters are created inside of a function
// function greetUser(greeting, name, question, emoji ) {
//     welcomeEl.textContent = `${greeting}, ${name}, ${question} ${emoji}`    
// }

// //                  .arguments   ----> arguments are created on the outside of a function 
// greetUser("Welcome back", " Adrian", "you ok ?", "👋")

// //          .parameters (num1, num2)
// function add(num1, num2) {
//     return num1 + num2
// }

// //              .arguments (3, 4)
// console.log(add(3, 4));
// console.log(add(40, 50));


//------------------------------------------------------------------

// 46. Arrays and parameters 

// Creating a function getFirst(arr) which returns the firstitem in the array

function getFirst(arr) {
    return arr[0]
}
// Calling it an array as an argument to verify if it works 
let firstCard = getFirst([1, 2])

console.log(firstCard);
















