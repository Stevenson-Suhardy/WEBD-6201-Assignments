/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 21, 2023
 */

// Imports
import * as userClass from "./user.js";

// Creating new div for error messages
let errorMessage = document.createElement("div");
errorMessage.id = "ErrorMessage";

// Getting a div and prepending the new div inside
let formDiv = document.getElementsByClassName("container")[1];  
formDiv.prepend(errorMessage);

/**
 * This function is used to validate a first name
 * @param {String} firstName 
 * @returns 
 */
function validateFirstName(firstName) {
    if (firstName.length < 2) {
        return "<p>First Name must at least be 2 characters.</p>";
    }
    else {
        return "<p></p>";
    }
};

/**
 * This function is used to validate a last name
 * @param {String} lastName 
 * @returns 
 */
function validateLastName(lastName) {
    if (lastName.length < 2) {
        return "<p>Last Name must at least be 2 characters.</p>";
    }
    else {
        return "<p></p>";
    }
};

/**
 * This function is used to validate an email address
 * @param {String} email 
 * @returns 
 */
function validateEmail(email) {
    if (email.length < 8) {
        return "<p>Email must at least be 8 characters.</p>";
    }
    else {
        return "<p></p>";
    }
};

/**
 * This function is used to check if password is valid and if the password matches the confirm password
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

/**
 * This function is used to clear the register form
 */
function clearForm() {
    // get the first name input
    $("#firstName").val("");
    // get the last name input
    $("#lastName").val("");
    // get the username input
    $("#username").val("");
    // get the email input
    $("#emailAddress").val("");
    // get the password input
    $("#password").val("");
    $("#confirmPassword").val("");
    $("#ErrorMessage").text("");
}

// Checking if the submit button exists
if($("#submit-button")) {
    // Creating click event
    $("#submit-button").click(function (e) {
        // Getting the register form
        let form = document.getElementById("registerForm");
        // Check if the form is valid
        if (form.checkValidity()) {
            // Prevent default event
            e.preventDefault();
            // Validates all input in the textbox
            $("#form-group").children("#ErrorMessage").html(validateFirstName($("#firstName").val()) + validateLastName($("#lastName").val()) + validateEmail($("#emailAddress").val()) + validatePassword($("#password").val(), $("#confirmPassword").val()));
            
            // Check to see if there are any errors
            if ($("#form-group").children("#ErrorMessage").text() == "") {
                // Create a new object and inputting the values as the attributes
                const newUser = new userClass.User(
                    $("#firstName").val(),
                    $("#lastName").val(),
                    $("#username").val(),
                    $("#emailAddress").val(),
                    $("#password").val()
                );
                // Display the user information in the console
                console.log(newUser.displayUser());
                // Reset the form
                clearForm();
            }
        }
    })
}