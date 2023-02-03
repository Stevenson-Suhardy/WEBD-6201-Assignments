
let div = document.createElement("div");
div.className = "container-fluid text-center";
let welcomeImage = document.createElement("img");

welcomeImage.src = "./images/welcome.png";
div.appendChild(welcomeImage);

let welcomeTitle = document.createElement("h1");
welcomeTitle.textContent = "Welcome to my Home Page!";
div.appendChild(welcomeTitle);

let welcomeContent = document.createElement("p");
welcomeContent.textContent = "This website is created for the purposes of assignments for WEBD-6201 at Durham College.";
div.appendChild(welcomeContent);

document.body.appendChild(div);