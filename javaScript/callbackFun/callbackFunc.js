// working on callback function
function userName(name){
    console.log(name)
}

function greeting(greet, callback){
    
    callback("Anwar Rahim")
    console.log('Hello, how are you', greet)
}

greeting('today', userName)