/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 3, 2023
 */

// Creating title
let title = document.createElement("h1");
title.innerHTML = "About Me";

// Creating parent div
let div = document.createElement("div");
div.className = "container text-center";

// Creating sub divs to store images
let divImage = document.createElement("div");
div.className = "container navbar text-center";
let divImage2 = document.createElement("div");
div.className = "container navbar text-center";
let divImage3 = document.createElement("div");
div.className = "container navbar text-center";

// Creating 3 images
let image = document.createElement("img");
image.src = "./images/myself.jpg";

let image2 = document.createElement("img");
image2.src = "./images/video game.jpg";

let image3 = document.createElement("img");
image3.src = "./images/college.jpg";

// Creating the content paragraph
let content = document.createElement("p");
content.innerHTML =
  "My name is Stevenson Suhardy.<br/> I came to Canada along with my sister to study and currently, I am a student at Durham College and I am enrolled in Computer Programming and Analysis course.<br/>There are not a lot of things about me since I live a boring life like, staying at home and playing video games. Video games is one of the few hobbies that I still enjoy until now. I also watch movies when I want to catch a break from assignments or from my video games. I have a part-time job at a fast food restaurant.";

// Appending all images to their divs
divImage.appendChild(image);
divImage2.appendChild(image2);
divImage3.appendChild(image3);

// Appending sub divs and content to parent div
div.appendChild(divImage);
div.appendChild(divImage2);
div.appendChild(divImage3);
div.appendChild(content);

// Add the title and parent div to the body
document.body.appendChild(title);
document.body.appendChild(div);
