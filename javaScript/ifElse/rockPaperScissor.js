

let hand =["rock", "paper","scissor"]
let numRange = hand.length

function rockPaperScissor(){

     randomHand= Math.floor(Math.random() *numRange)
    return hand[randomHand]
}
console.log(rockPaperScissor())