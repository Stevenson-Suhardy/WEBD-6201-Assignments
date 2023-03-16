/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 3, 2023
 */

/**
 * This function will console logs all the data that the user inputs when the form is valid, and redirects them to the home page after 3 seconds.
 * @param {Event} e 
 */
function timedRedirect(e) {
  // Gets all the input element
  let fullName = document.getElementById("fullName").value;
  let contactEmail = document.getElementById("emailInput").value;
  let contactNumber = document.getElementById("contactNumber").value;
  let message = document.getElementById("message").value;

  // Gets the form element
  let form = document.getElementById("contactForm");
  // Checking to see if the form is valid
  if (form.checkValidity()) {
    // Prevent form from being submitted
    e.preventDefault();
    // Console logs the data
    console.log("Name: " + fullName);
    console.log("Email: " + contactEmail);
    console.log("Phone Number: " + contactNumber);
    console.log("Message: " + message);
    
    // Redirect to index.html after 3 seconds
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  }
}

// Getting the submit button
let submitButton = document.getElementById("submit-button");
// Checking to see if the submitButton exists
if (submitButton) {
  // Adding an event listener when the button is clicked
  submitButton.addEventListener("click", timedRedirect, false);
}
