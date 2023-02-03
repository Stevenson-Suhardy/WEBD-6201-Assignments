function timedRedirect(e) {
  let fullName = document.getElementById("fullName").value;
  let contactEmail = document.getElementById("emailInput").value;
  let contactNumber = document.getElementById("contactNumber").value;
  let message = document.getElementById("message").value;

  let form = document.getElementById("contactForm");

  if (form.checkValidity()) {
    e.preventDefault();

    console.log("Name: " + fullName);
    console.log("Email: " + contactEmail);
    console.log("Phone Number: " + contactNumber);
    console.log("Message: " + message);
    
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  }
}

let submitButton = document.getElementById("submit-button");
if (submitButton) {
  submitButton.addEventListener("click", timedRedirect, false);
}
