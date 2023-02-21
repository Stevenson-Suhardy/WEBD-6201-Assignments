import * as userClass from "./user.js";

let errorMessage = document.createElement("div");
errorMessage.id = "ErrorMessage";

let formDiv = document.getElementsByClassName("container")[0];  
formDiv.appendChild(errorMessage);

function validateFirstName(firstName) {
    if (firstName.length < 2) {
        return "<p>First Name must at least be 2 characters.</p>";
    }
    else {
        return "<p></p>";
    }
};

function validateLast(lastName) {
    if (lastName.length < 2) {
        return "<p>Last Name must at least be 2 characters.</p>";
    }
    else {
        return "<p></p>";
    }
};

function validateEmail(email) {
    if (email.length < 8) {
        return "<p>Email must at least be 8 characters.</p>";
    }
    else {
        return "<p></p>";
    }
};

    /**
     * validatePassword- validated user password entries 1 and 2 are the same through ristration form
     * @param {string} password
     * @param {string} confirmPassword
     * @returns html element for error message
     */
function validatePassword(password, confirmPassword) {
    if (password.length < 6) {
        return "<p>Password must at least be 6 characters.</p>";
    }
    else {
        if (password == confirmPassword) {
            return "<p></p>";
        } else {
            return "<p>Your passwords do not match.</p>";
        }
    }
    
};

if($("#submit-button")) {
    $("#submit-button").click(function (e) {
        e.preventDefault();
        const newUser = new userClass.User(

            // get the first name input
            $("#firstName").val(),
            // get the last name input
            $("#lastName").val(),
            // get the username input
            $("#username").val(),
            // get the email input
            $("#emailAddress").val(),
            // get the password input
            $("#password").val()
        );
    })
}