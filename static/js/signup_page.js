let isRoomNameValid = false;
let isPasswordValid = false;

function clear_messages(){
    document.getElementById("username_length").style.display = "none";
    document.getElementById("password_message").style.display = "none";

}

function usernameValidates() {
    clear_messages();
    console.log("works");
    let roomName = document.getElementById("username").value;
    
    if (roomName.length < 6) {
        document.getElementById("username_length").style.display = "block";
        isRoomNameValid = false;
    } 
    else {
        document.getElementById("username_length").style.display = "none";
        isRoomNameValid = true;
    }
    toggleSubmitButton();
}

function passwordValidates() {
    clear_messages();
    let password = document.getElementById("password").value;
    let isValid = true;

    // if (password.length < 6) {
    //     document.getElementById("password_message").style.display = "block";
    //     isValid = false;
    // } 
    // else {
    //     document.getElementById("password_message").style.display = "none";
    // }

    // const hasNumber = /\d/.test(password);
    // if (!hasNumber) {
    //     document.getElementById("password_message").style.display = "block";
    //     isValid = false;
    // } 
    // else {
    //     document.getElementById("password_message").style.display = "none";
    // }

    // const hasAlphabet = /[a-zA-Z]/.test(password);
    // if (!hasAlphabet) {
    //     document.getElementById("password_message").style.display = "block";
    //     isValid = false;
    // } 
    // else {
    //     document.getElementById("password_message").style.display = "none";
    // }

    // const hasSymbol = /[@_]/.test(password);
    // if (!hasSymbol) {
    //     document.getElementById("password_message").style.display = "block";
    //     isValid = false;
    // } 
    // else {
    //     document.getElementById("password_message").style.display = "none";
    // }

    // const invalidSymbols = /[ |!~#$%^&*()-+=]/.test(password);
    // if (invalidSymbols) {
    //     document.getElementById("password_message").style.display = "block";
    //     isValid = false;
    // } 
    // else {
    //     document.getElementById("password_message").style.display = "none";
    // }
    isPasswordValid = isValid;
    toggleSubmitButton();
}

function toggleSubmitButton() {
    const submitButton = document.getElementById("submit_button");
    if (isRoomNameValid && isPasswordValid) {
        submitButton.disabled = false;
        submitButton.style.cursor = "pointer";
    } 
    else {
        submitButton.disabled = true;
    }
}
document.getElementById("username").addEventListener("input", usernameValidates);
document.getElementById("password").addEventListener("input", passwordValidates);

document.getElementById("submit_button").addEventListener("click", (event)=> {
    event.preventDefault()
    window.location.href = "../subpages/main.html";
});

clear_messages()
