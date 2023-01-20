function timedRedirect(e) {
  let contactEmail = document.getElementById("emailInput").value;

  console.log("Email: " + contactEmail);
  e.preventDefault();
  setTimeout(function () {
    window.location.href = "index.html";
  }, 3000);
}

let submitButton = document.getElementById("submit-button");
if (submitButton) {
  submitButton.addEventListener("click", timedRedirect, false);
}
