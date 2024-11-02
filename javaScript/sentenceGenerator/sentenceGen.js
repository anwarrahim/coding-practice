// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

const paraEl = document.getElementById("para-el")

let countrySen = "The 3 largest countries are"
let countryList = ["China", "India", "USA"]
let fruitSen = "The 2 best fruits are "
let fruitList = ["Apple", "Bananas"]

function generateSentence(desc, arr) {
    
     for( let i =0; i< arr.length; i++){
         // console.log(`${desc} ${arr}`)
         paraEl.textContent = `${desc} ${arr}`
     }

}

generateSentence(countrySen, countryList)