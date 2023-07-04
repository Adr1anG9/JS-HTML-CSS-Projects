/*
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count

}
*/

// let firstBatch = 5 
// let secondBatch = 7 
// let count = firstBatch + secondBatch

// console.log(count)


// let count = 5 

// console.log(count)

// store the count and initialize as 0
// listen for clicks of the incr button
// increment the count variable when the button is clicked 
// change the count-el in the html to reflect the new count


// let lap1 = 50;
// let lap2 = 30;
// let lap3 = 10;

// function lapTimer() {
//     let totalLap = lap1 + lap2 + lap3
//     console.log(totalLap);

// }

// lapTimer();

// let lapsCompleted = 2;

// function incrementLaps() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted);

// }


// incrementLaps();

// incrementLaps();

// incrementLaps();


// MANIPULATING THE DOM
// let countEl = document.getElementById("count-el"); // pass an argument  
// let count = 0;

// function increment() {
//     count = count + 1
//     countEl.innerText = count 
//     console.log("count");

// }

// MANIPULATING THE DOM
// let count = 0;
// let countEl = document.getElementById("count-el")

// function increment() {
//     count = count + 1 
//     countEl.innerText = count 
// }

// CREATING A SAVE FUNCTION
// function save() {
//     console.log(count);
// }


//WORKING WITH STRINGS 

// let username = "adrian";
// let message = "You have 3 new notifications";

// console.log(message + "," + username + "!!");


// let messageToUser = message + "," + username + "!!"

// console.log(messageToUser);


// let name = "Adrian";
// let greeting = "Hi, my name is "; 
// let myGreeting = greeting + name 

// console.log(myGreeting);


// let points = 4
// let bonusPoints = "30"

// let totalPoints = points + bonusPoints

// console.log(totalPoints);


// console.log(5 + 10); // 15
// console.log("3" + "4"); // 34
// console.log("7" + 5); // 75
// console.log(500 + "100"); // 500100


// let welcomeEL = document.getElementById("welcome-el");
// let name = "Adrian"
// let greeting = "Welcome to the page "

// function welcome() {
//     welcomeEL.innerText = greeting + name 
//     welcomeEL.innerText += "Emoji" 
// }



let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1 
    countEl.textContent = count 
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0


    console.log(count);
}


/*
Topics covered in this practice lessons:

- script tag
- variables
- numbers 
- strings 
- functions (just a bit) --> how to call/ invoke them in the html tags 
- console.log()
- the DOM --> how to use JS to change the website  
- document.getElementbyId --> to use a specific html element with JS
- innerText 
- textContent is a better concept to use !!! 

*/


// PRACTICE

//Variables



