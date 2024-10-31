let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]


const clickBtn = document.getElementById("click-btn")
const clickP = document.getElementById("click-p")
clickBtn.addEventListener("click", function(){
    
    clickP.textContent = data[0].score
    // console.log(data)
})