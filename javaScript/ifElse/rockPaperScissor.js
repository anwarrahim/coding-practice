

let hand =["rock", "paper","scissor"]
let numRange = hand.length

function rockPaperScissor(){

     return Math.floor(Math.random() *numRange)
}
console.log(rockPaperScissor())