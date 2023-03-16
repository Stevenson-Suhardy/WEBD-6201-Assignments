/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 3, 2023
 */

// Get the list element inside the navbar element
let ul = document.getElementsByClassName("navbar-nav ml-auto")[0];

// Gets the list items inside the list
let product = document.getElementsByClassName("nav-link")[1];
// Changing the innerHTML to an icon and interests
product.innerHTML = "<i class=\"fa-solid fa-layer-group\"></i> Interests";

// Creating a new list item with the appropriate class
let hR = document.createElement("li");
hR.className = "nav-item";

// Creating a new 'a' element along with the class, href, and innerHTML
let hRLink = document.createElement("a");
hRLink.className = "nav-link";
hRLink.href = "./humanResources.html";
hRLink.innerHTML = "<i class=\"fa-solid fa-users\"></i> Human Resources";

// Inserting the link inside the list item
hR.appendChild(hRLink);
// Insert the hR list item before the contact us list item
ul.insertBefore(hR, ul.children.item(4));

// Creating a new list item with the appropriate class
let blog = document.createElement("li");
blog.className = "nav-item";

// Creating a new 'a' element along with the class, href, and innerHTML
let blogLink = document.createElement("a");
blogLink.className = "nav-link";
blogLink.href = "./blog.html";
blogLink.innerHTML = "<i class='fa-solid fa-blog'></i> Blog";

// Inserting the link inside the list item
blog.appendChild(blogLink);
// Insert the hR list item before the contact us list item
ul.insertBefore(blog, ul.children.item(5));

let login = document.createElement("li");
login.className = "nav-item";

let loginLink = document.createElement("a");
loginLink.className = "nav-link";
loginLink.href = "./login.html";
loginLink.innerHTML = "<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login";

login.appendChild(loginLink);
ul.appendChild(login);

// Creating footer
// Creating a new navbar for footer along with the class
let navFooter = document.createElement("nav");
navFooter.className = "navbar navbar-light bg-light";

// Creating div for the footer
let divFooter = document.createElement("div");
divFooter.className = "container-fluid";

// Creating the text for the footer
let footerText = document.createElement("p");
footerText.innerHTML = "&copy; Copyright 2023";

// Appending the text to the div
divFooter.appendChild(footerText);
// Appending the div to the nav
navFooter.appendChild(divFooter);
// Appending the nav to the body
document.body.appendChild(navFooter);