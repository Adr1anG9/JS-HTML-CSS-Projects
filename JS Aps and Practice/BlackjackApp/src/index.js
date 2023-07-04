// // Add the firstCard, secondCard, and sum

// let firstCard = 10;
// let secondCard = 8;
// let sum = firstCard + secondCard + 5;

// console.log(sum);

// // if...else conditionals

// if (sum < 21) {
//     console.log("Do you want to draw a new card ?");

// } else if (sum === 21) {
//     console.log("You've got Blackjack !");
// } else {
//     console.log("You're out of the game");
// }


//My first if...else statement

// let age = 25;

// if (age < 21) {
//     console.log("You can't enter the club !");
// } else {
//     console.log("Welcome");
// }


// More if else practice

// let age = 105;

// if (age < 100 ) {
//     console.log("Not eligible!");
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!");
// } else {
//     console.log("Not eligible, you already got one");
// }

//Boolean
// console.log(4 === 3); // false
// console.log(5 > 2); // true
// console.log(12 > 12); // false
// console.log(3 < 0); // false
// console.log(3 >= 3); // true
// console.log(11 <= 11); // true
// console.log(3 <= 2); // false 



// Creating an object "player" with the keys "name" and "chips" with their values 
let player = {
    name: "Adrian",
    chips: 150
};

let cards = [] // aray -- ordered list of items 
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");



// Grabbing the player-el paragraph and store it in a variable called "player-el"
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": £" + player.chips  // Rendering the player's name and chips inside playerEl


function getRandomCard() {
    //if    1   -->    return 11
    // if    11-13    -->   return 10  
    let randomNumber = Math.floor (Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame(){

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]  // aray -- ordered list of items
    sum = firstCard + secondCard 
    isAlive = true

    renderGame()
}

function renderGame() {
    
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]   // refering to the cards array when rendering out cards
    
    cardsEl.textContent = "Cards: "

    for(i = 0 ; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

     
    sumEl.textContent = "Sum: " + sum // Render the sum on the page using the format --> "Sum: 14" 
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
          
    
    } else if (sum === 21) {
        message = "Well done ! You've got a BlackJack!";
        hasBlackJack = true
    } else {
        isAlive = false
        message = "You're out of the game";
    } 
    // Display message in the messagEL using messageEL using messageEl.textContent
    messageEl.textContent = message
}

function newCard() {
    
    if  (isAlive === true && hasBlackJack === false) {
        let hardCard = getRandomCard(); // Creating a card variable, and hard code its value to a number (2-11)
        sum += hardCard // Adding the new card to the sum variable
        cards.push(hardCard);
        renderGame() // Calling startGame()
    }
}


// RECAP (at 04:11:00 timing )

/*

-- Arrays  ( cards array, re-assigned the array in the startgame() and defined with times, pushed to the array in the new card() )

-- Objects ( created the player object containing key value peers)

-- Booleans ( true or false, creating a state for my game)

-- if else statements ( key in building apps using conditional statements)

-- comparison operators ( <=, === , etc )

-- logical operators ( &&, || )

-- for loops ( used in the renderGame() to loop through the cards array and render each of the cards; loops are important in programming
because we always have to loop through data and do things based upon the data)

-- Math object ( allowed to create the getRandomCard() by using Math.random and Math.floor )

-- return statements ( used to return values in the getRandomCard() )


*/


// Challenges 



