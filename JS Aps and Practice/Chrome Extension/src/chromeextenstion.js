// Event Listener 


// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")    // Create the un-ordered list const variable and grabbed from the HTML 


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()

})


// Log out the items in the myLeads array using a for loop 

// let listItems = ""     // variable listItems which holds all the HTML for the list items 

// for (i = 0; i < myLeads.length ; i++) {
//         // create element 
//         // set text content 
//         //append to ul
//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.append(li)
//     listItems += " <li> " + myLeads[i] + " </li> "   // adding the item to the listItems variable instead of the ulEl.HTML
// }

// ulEl.innerHTML = listItems    // Rendering the listItems inside the unordered list using ulel.innerHTML

// Creating the render function, renderLeads ()



function renderLeads() {
    let listItems = "" 
    for (i = 0; i < myLeads.length ; i++) {
        listItems += " <li> " + myLeads[i] + " </li> "  
    }
    ulEl.innerHTML = listItems
}








