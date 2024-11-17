

function clickSubmit(){
    const button = document.getElementById("button-btn")
    button.focus()
    
    button.outerHTML = "<p id='submit-form' class='sub-message-text'> Message Sent! ✅</p>"
}

