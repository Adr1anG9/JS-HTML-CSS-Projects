/* 
First steps before starting scraping :

In the Terminal run:    

        npm innit -y 

        npm install puppeteer       ( installing the puppeteer library )

        touch scrapingbook.js       ( Creating a file called scrappingbook.js)

Open the JS file in VS Code

*/

const puppeteer = require('puppeteer');   // 1. Import a library called puppeteer

// 2. Creating an async function scrapeProduct() which takes the url as an argument  
// Async allows to use the "await" keyword, because it is used to await for things before moving on
async function scrapeProduct (url) {
    const browser = await puppeteer.launch();   // to launch the browser 
    const page = await browser.newPage();       // gives a blank page
    await page.goto(url);                             // goes to the url 


    // 4. Pulling the first item of the array (0 index) into a variable called "el"  ---> also called destructuring
    const [el] = await page.$x('//*[@id="imgBlkFront"]');  //  .$x is a puppeteer selector which allows to select an item on the page by Xpath
                                                           //  Xpath is a way to navigate the page, similar to jQuery , inner syntax which works well with scrapers  
    
    const src = await el.getProperty ('src');  // 5. pulling the source attribute out of the element "el"
    const imgUrl = await src.jsonValue();      // 6. pulling the string src jason value 

    // 9.  To select the title of the book
    const [el2] = await page.$x('//*[@id="title"]');   // add the Xpath from the page here 
    const txt = await el.getProperty ('textContent');  // don't use "src" since it's not an image but text 
    const title = await txt.jsonValue(); 

    // 11. To select the price 
    const [el3] = await page.$x('//*[@id="newBuyBoxPrice"]');  // copy the Xpath from the page again
    const txt2 = await el.getProperty ('textContent'); 
    const price = await txt2.jsonValue(); 


    console.log({imgUrl, title});

    browser.close();  // 7. closing the browser 

}
// 3. The url to the product in the call of the scrapeProduct() function
scrapeProduct("https://www.amazon.co.uk/JavaScript-Definitive-Guide-David-Flanagan/dp/1491952024/ref=sr_1_1?crid=2A0URYO17VDZ&dchild=1&keywords=javascript+definitive+guide&qid=1630399882&sprefix=javascript+defi%2Caps%2C140&sr=8-1 ")

/*  8.  run in Terminal:

                        node scrapingbook.js 

    10. run in Terminal again
                        
                        node scrapingbook.js 

*/

