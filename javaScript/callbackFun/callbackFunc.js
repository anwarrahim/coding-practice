// working on callback function
function userName(name){
    console.log(name)
}

function greeting(greet, callback){
    console.log('Hello, how are you', greet)
    callback()
}

greeting()