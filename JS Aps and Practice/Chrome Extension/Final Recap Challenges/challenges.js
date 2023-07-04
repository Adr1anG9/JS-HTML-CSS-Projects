// 1. 
// // Go through all variables and decide if they should be let or const
// // Change the console logs to use template strings instead of double quotes 

// // Completed the challenge !

// // SETTING THE STAGE
// const player = "Adrian"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent} ! ${player} lost the game`)
// }

//--------------------------------------------------------------------------------------
// 2. Log out items in an array

// Completed the challenge !

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument

// function singlePar(array) {
//     for (i = 0; i < array.length ; i++) {
//     console.log(arr[i]);
//     }
// }

// console.log(myCourses);

//--------------------------------------------------------------------------------------
// 3. Save to localStorage

// Completed the challenge !

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// a) localStorage.setItem("myValue", "50")   --- then delete and do the next step 
// b)
// let myValue = localStorage.getItem("myValue")
// console.log(myValue);

//--------------------------------------------------------------------------------------

//4. addEventListener and object in array 

// Completed the challenge !

// let data = [
//     {
//         player: "Adrian",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// // Fetch the button from the DOM, store it in a variable
// const logBtn = document.getElementById("log-btn")

// // Use addEventListener() to listen for button clicks
// // Log Jane's score when the button is clicked (via data)
// logBtn.addEventListener('click', function() {
//     console.log(data[0].score);
// })


//--------------------------------------------------------------------------------------

// 5. Generate Sentence 

// Completed BUT need more practice !!!!!

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {

//     let baseStr =  `The ${arr.length} ${desc} are `
//     const lastIndex = arr.length -1

//     for(let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             baseStr += arr[i]
//         }else {
//             baseStr += arr[i] + ", "
//         }
//     }
//     return baseStr
// }
// const sent = generateSentence("The best frutis" , ["Apples", "Bananas", "Oranges", "Pineapples"])
// console.log(sent);


//--------------------------------------------------------------------------------------

// 6. Render Images


// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const container = document.getElementById("container")


function imageRender() {
    let imgsDOM = ""
    for(let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt = "Employees in the company" class = "team-img" src =" ${imgs}">`
    }
    container.innerHTML = imgsDOM
}

imageRender()