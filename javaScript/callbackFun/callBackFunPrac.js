// question 1
//callback function are which is passed as an argument to another function for waiting to complete one function

// question 2

function greeting(){
    console.log('hello, martin')
}

function takePera(callback){
    console.log('callback')
    callback()
}

takePera(greeting)

// Question 3

function hello(){
    console.log('hello, its question 3')
}
function helloCallback(callback){
    callback()
}
helloCallback(hello)

// Question 4

function addFunction(a, b, callback){
    return callback(a, b)
}

function sum(x, y){
    return x + y
}

function mult(x, y){
    return x*y
}
console.log(addFunction(2, 3, sum))
console.log(addFunction(3,6,mult))

// Question 5
function lateGreet(callback){
setTimeout(()=>{
    callback('Hello')
},2000)
}
function displayMessage(message){
    console.log(message)
}

lateGreet(displayMessage)