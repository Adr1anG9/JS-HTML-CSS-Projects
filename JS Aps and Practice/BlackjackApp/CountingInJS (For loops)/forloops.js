// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

// //    START           FINISH       STEP SIZE
// for ( let count = 10;  count < 21;  count += 1 )  {
    
//     console.log(count)

// }

// Creating my loop

// for (let i = 10; i <= 100 ; i += 10) {
//     console.log(i);
// }


// For loops and Arrays

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "This is message"
// ]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i]);
// }


// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i]);

// }


// For loops, Arrays and the DOM 



let sentence = ["Hello", "my", "name", "is", "Adrian"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for(let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}
