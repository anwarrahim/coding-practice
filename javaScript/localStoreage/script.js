
// let myList =["hello","khan"]
let count
const clickBtn = document.getElementById("click-btn")
const countNum = document.getElementById("count-num")
const inputEl = document.getElementById("input-el")


// myList= localStorage.getItem("myList")



clickBtn.addEventListener("click", function (){
    
    count++
    
    
    // localStorage.setItem("myList", JSON.stringify(inputEl.value) )
    // myList.push(inputEl.value)
    countNum.textContent = count
    
})


