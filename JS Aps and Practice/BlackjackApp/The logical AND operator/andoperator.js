// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true ) {
//     generateCertificate()
// }


// function generateCertificate() {
//     console.log("Generating certificate....")
// }


// Challenge 

// let hasSolvedChallenge = false
// let hasHintsLeft = false 

// // Creating an if statement that checks both variables are false 
// // if so, then run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft ===false ) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Here's the solution");
// }



// The or  ||   operator 

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true


let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}


