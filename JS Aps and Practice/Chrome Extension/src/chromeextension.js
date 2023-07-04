// Event Listener 


// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")    // Create the un-ordered list const variable and grabbed from the HTML 
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn") 

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// 39.a Check if leadsFromLocalStorage is truthy
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)    
}

tabBtn.addEventListener( 'click', function() {
// 51. Grab the url of the current tab
// 
    chrome.tabs.query({active: true, currentWindow: true}), function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    }
})


// 48. 
/*
    Refector the function so that it takes a parameter, leads, that it uses
    instead of the global myLeads variable. Remember to update all invocations 
    of the function as well.
*/

function render(leads) {
    let listItems = "" 
    for (i = 0; i < leads.length ; i++) {
        // 23. Adding the <a></a> tag
        // listItems += " <li> " + "<a href = '" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a>" + "</li> "

        // 24. Using Template strings 
        // 28. Refactoring the app to use a template string 
        listItems += `
                    <li>
                        <a target='_blank' href = '${leads[i]}'> 
                            ${leads[i]} 
                        </a> 
                    </li>
                    `
    }
    ulEl.innerHTML = listItems
}


// Delete button: Listening for double clicks 
// When clicked, clear localStorage, myLeads and 
deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// 39.b Set the myLeads variable to its value and call renderLeads()


// 33. localStorage
// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
// localStorage.setItem("myLeads", JSON.stringify(www.google.com) )



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    // 22. Clearing input field 
    inputEl.value = ""
    // 35. Saving myLeads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
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



/*

RECAP 

const ---> used to const to assign variables 

addEventListener ---> hooked the event listener with the tab, save input, and delete buttons 

innerHTML ---> used when rendering the list items in the render() function 

input.value ---> used to fetch out the value which the user would enter in the input field 

Function parameters ---> defined the "leads" parameter in the render() function, then used this parameter
                        inside the body of the function. Then I used it to pass in the argument of "myLeads" when
                        calling the render() function  

Template strings ---> used to write strings on multiple lines 

local.Storage ---> saved things in the local storage so that it can store after page refresh

JSON object ---> had to turn the "myLeads" array into JSON and also used JSON.parse to fetch from localStorage
                and turn it into a JavaScript array

Objects in Arrays ---> the tabs array where it's first and only item was an object. Had to first fetch the tabs object 
                        then fetch the .url value 



*/









