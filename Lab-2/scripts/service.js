/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 3, 2023
 */

// Create heading with class and text
let title = document.createElement("h1");
title.className = "h1";
title.innerHTML = "My Services";

// Creating div for content
let div = document.createElement("div");
div.className = "container-fluid";

let divImage = document.createElement("div");
divImage.className = "container navbar";
let divImage2 = document.createElement("div");
divImage2.className = "container navbar";
let divImage3 = document.createElement("div");
divImage3.className = "container navbar";

// Creating content
let skills = document.createElement("p");
skills.className = "p";
skills.innerHTML =
  "Three of the best skills that I can offer: <ul><li>Website Development</li><li>Windows Application</li><li>Windows Application</li></ul> I am the most experienced with website development since I have a side project outside of college.<br/> Here is the <a href='https://github.com/gabriellegawa/Ice-Cream-Website-App'>link</a> for the project and a couple of images where I use Angular, NodeJS, and MongoDB to create a fully functional website with authentication tokens involved.";

// Creating a link to my resume
let resume = document.createElement("a");
resume.textContent = "Link to my Resume";
resume.href =
  "https://drive.google.com/file/d/14mUibnQr4QbR4SHenZxHV82O3RAn23_S/view?usp=sharing";

// Creating the first image
let image = document.createElement("img");
image.src = "./images/projectLogin.png";
// Creating the first image description
let imageDesc = document.createElement("p");
imageDesc.innerHTML = "Screenshot 1 - This is the login page of the website.";

// Creating the second image
let image2 = document.createElement("img");
image2.src = "./images/projectAdminView.png";

// Creating the second image description
let image2Desc = document.createElement("p");
image2Desc.innerHTML =
  "Screenshot 2 - This is the view for when an Admin logs in.";

// Creating the third image
let image3 = document.createElement("img");
image3.src = "./images/projectCustomerView.png";
// Creating the third image description
let image3Desc = document.createElement("p");
image3Desc.innerHTML =
  "Screenshot 3 - This is the view for when a customer logs in.";

// Appending the images and it's description to their divs
divImage.appendChild(image);
divImage.appendChild(imageDesc);
divImage2.appendChild(image2);
divImage2.appendChild(image2Desc);
divImage3.appendChild(image3);
divImage3.appendChild(image3Desc);

// Appending to div
div.append(title);
div.append(resume);
div.append(skills);
div.append(divImage);
div.append(divImage2);
div.append(divImage3);

// Appending to the body
document.body.appendChild(div);
