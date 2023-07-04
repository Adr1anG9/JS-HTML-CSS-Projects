// Practice Challenges

// Objects and functions 
// Create a person object which contains three keys: name, age, and country 
// let person = {
//     name: "Adrian",
//     age: 25,
//     country: "UK"
// }

// // Create a function logData() that uses the person object to create a string in the following format:
// //"Adrian is 25 years old and lives in the UK"

// function logData() {
//     let greeting = person.name + " is " + person.age + " years old and lives in the " + person.country
//     console.log(greeting);
// }

// // Call the the logData() function to verify that it works 
// logData()


// Conditional statements, if else

// let age = 25

// // less than 6 years old -> free
// // 6 to 17               -> child discount 
// // 18 to 26              -> student discount
// // 27 tp 66              -> full price
// // over 66               -> senior citizen discount

// // Create a conditional statement that logs out the discount that logs out the discount the passenger will get based upon the value of the age variable

// if (age < 6) {
//     console.log("Free");
// } else if (age < 18) {
//     console.log("Child discount");
// } else if (age < 27) {
//     console.log("Student discount");
// } else if (age < 67) {
//     console.log("Full price");
// } else {
//     console.log("Senior citizen discount");
// }



// Loops and Arrays

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// /*Use a for loop to log the following to the console:
// Top 5 largest countries in the world : 
// -China
// -India
// -USA
// -Indonesia
// -Pakistan
// */
// console.log("The 5 largest countries in the world: ");
// for (i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }


// push, pop, unshift, shift challenge 

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// /*
// Need to fix the largeCountries array so that China and Pakistan are added back into their respective places

// use push() & pop() and their counterparts unshift() & shift()

// */

// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.pop()
// largeCountries.push("Pakistan")

// console.log(largeCountries);



// Logical operators

// let dayOfMonth = 10
// let weekday = "Friday"

// // If it is the Friday the 10th Log out the U+1F604
// // Use logical AND operator (&&)

// if(dayOfMonth === 10 && weekday === "Friday" ) {
//     console.log("\uD83D\uDE00");
// }


// Rock, paper, scissors

// let hands = ["rock", "paper", "scissors"]

// // Create a function which returns a random item from the array 

// function randomItem() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(randomItem());



// Sorting fruits

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf= document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleshelf and the oranges onto the orangeshelf
// Use a for loop, conditional statement, and the text.Content property

function fruitsArrange() {
    for (let i = 0; i < fruit.length; i++) {
        if(fruit [i] === "🍎"){
            appleShelf.textContent += "🍎" 
        } else if (fruit [i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}
fruitsArrange()
