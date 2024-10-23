// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

function trainTicket(age){

    if(age < 6){
        console.log("its Free")
    }
    else if(age >=6 && age <=17 ){
        console.log("child Discount")
    }
    else if(age >= 17 && age <=26){
        console.log("Student Discount")
    }
    else if(age>=27 && age <= 66){
        console.log("Full price")
    }
    else{
        console.log("Senior citizen discount")
    }

}

trainTicket(23)
