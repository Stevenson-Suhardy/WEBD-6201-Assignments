// console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function ValidateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function ValidateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
}

/**
 * Validate username
 * @param
 * @returns
 */
function ValidateUsername() {
    // Get the username input element
    let username = document.getElementById("usernameInput");
    // Get the usernameError element
    let usernameError = document.getElementById("usernameError");
    // Set the default background color to white
    let backgroundColor = "white";
    // Reset error message
    let usernameErMsg = "";

    // Check if the username contains any spaces
    if (username.value.indexOf(" ") >= 0) {
        // Creating error message
        usernameErMsg = "Username must not contain any spaces";
        // Set the background color to red
        backgroundColor = "red";
    }
    // Check to see if the username is less than 3 characters 
    else if (username.value.length <= 3) {
        // Creating error message
        usernameErMsg = "Username must have at least 3 characters";
        // Set the background color to red
        backgroundColor = "red";
    }
    
    // Set the usernameError textbox to the error message
    usernameError.innerHTML = usernameErMsg;
    // Set the input element background color
    username.style.backgroundColor = backgroundColor;
}

/**
 * Resets the form to default
 */
function ClearErrorMessages() {
    // Get all elements with the p tag
    let errors = document.getElementsByTagName("p");
    // Get all the input element
    let inputs = document.getElementsByTagName("input");
    // Looping through the arrays using errors array length (because inputs and errors have the same length)
    for (let i = 0; i < errors.length; i++) {
        // Reset the error messages
        errors[i].innerHTML = "";
        // Reset the input element color
        inputs[i].style.backgroundColor = "white";
    }
}

//TODO:
// Make all fields required - DONE
// Add a pattern attribute in the telephone element (HTML) - DONE
// Ensure the password is redacted into dots on screen when typed in - DONE
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!) - DONE
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)

// Getting the submit button
let submitButton = document.getElementById("submit-reg-form");
// Check if the submit button exists
if (submitButton) {
    // Create a click event listener
    submitButton.addEventListener("click",  function(e) {
        // Prevent form from submitting
        e.preventDefault();
        // Call the ValidateUsername function
        ValidateUsername();
    });
}

// Getting the resetButton
let resetButton = document.getElementById("reset-reg-form");
// Check if the reset button exists
if (resetButton) {
    // Create a click event listener
    resetButton.addEventListener("click", function(e) {
        // Call the ClearErrorMessages function
        ClearErrorMessages();
    });
}