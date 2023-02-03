/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 3, 2023
 */

// Creating parent divp along with id and class
let div = document.createElement("div");
div.id = "indexTitle";
div.className = "container-fluid text-center";

// Change the background image
document.body.style.backgroundImage = "url('./images/background.jpg')";

// Create an image element
let welcomeImage = document.createElement("img");
// Assigning source
welcomeImage.src = "./images/welcome.png";

// Append the image to the parent div
div.appendChild(welcomeImage);

// Creating a h1 title element and appending it to the parent div
let welcomeTitle = document.createElement("h1");
welcomeTitle.textContent = "Welcome to my Home Page!";
div.appendChild(welcomeTitle);

// Creating the content and appending it to the parent div
let welcomeContent = document.createElement("p");
welcomeContent.id = "indexContent";
welcomeContent.textContent =
  "This website is created for the purposes of assignments for WEBD-6201 at Durham College.";
div.appendChild(welcomeContent);

// Changing the parent div text color to white
div.style.color = "#faead6";

// Append the parent div to body
document.body.appendChild(div);
