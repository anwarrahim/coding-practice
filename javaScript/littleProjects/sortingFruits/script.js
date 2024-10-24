

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
orange =[]
apple = []

function fruitSorting(){
    for(let i =0; i<fruit.length; i++){

        if(fruit[i] === "🍎") {
            apple.push(fruit[i])

        }
        else if(fruit[i]=== "🍊"){
            orange.push(fruit[i])
        }

        appleShelf.textContent = apple.join("")
        orangeShelf.textContent = orange.join("")
    }

}
fruitSorting()

