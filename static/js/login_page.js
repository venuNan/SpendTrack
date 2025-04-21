console.log("page loaded");

document.getElementById("submit_button").addEventListener("click", (event)=> {
    
    event.preventDefault();
    console.log("button clicked");

    const emailOrUsername = document.getElementById("emailorusername").value;
    const password = document.getElementById("password").value;

    console.log(emailOrUsername=="example@gmail.com", password=="password@123");
    if (emailOrUsername != "example@gmail.com" || password != "password@123") {
        const error_message = document.getElementById("error_message");
        error_message.style.display = "block";
        error_message.textContent = "Email or Passowrd Mismatch";
    } else{
        window.location.href = "../subpages/main.html"; // Redirect to static dashboard
    }
    
});

var emailOrUsername = document.getElementById("emailorusername");
var password = document.getElementById("password");
var errorMessage = document.getElementById("error_message");

function checkInputs() {
    errorMessage.style.display = "none"
}

emailOrUsername.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);