/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 21, 2023
 */

// Getting navbar and login form
let ul = document.getElementsByClassName("navbar-nav ml-auto")[0];
let form = document.getElementById("loginForm");

// Checking if the submit button exists
if($("#submit-button")) {
    // Creating click event
    $("#submit-button").click(function (e) {
        // Check if the form is valid
        if (form.checkValidity()) {
            // Prevent default HTML event
            e.preventDefault();
            // Check to see if username already exists in the navbar
            if (ul.children.item(6).textContent != " Login") {
                // Change the username to the current value
                ul.children.item(6).children.item(0).textContent = $("#username").val();
            }
            // If there are no username in the navbar
            else {
                // Create a new li element with the proper class
                let username = document.createElement("li");
                username.className = "nav-item";
                // Creating anchor element with proper class and value
                let usernameText = document.createElement("a");
                usernameText.className = "nav-link";
                usernameText.innerHTML = $("#username").val();
                
                // Append the text to the li
                username.appendChild(usernameText);
                // Insert it between Contact Us and Login
                ul.insertBefore(username, ul.children.item(6));
            }
        }
    })
    
}
