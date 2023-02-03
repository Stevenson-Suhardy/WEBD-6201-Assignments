let ul = document.getElementsByClassName("navbar-nav ml-auto")[0];

let product = document.getElementsByClassName("nav-link")[1];
product.innerHTML = "<i class=\"fa-solid fa-layer-group\"></i> Interests";

let hR = document.createElement("li");
hR.className = "nav-item";

let hRLink = document.createElement("a");
hRLink.className = "nav-link";
hRLink.href = "./humanResources.html";
hRLink.innerHTML = "<i class=\"fa-solid fa-users\"></i> Human Resources";

hR.appendChild(hRLink);
ul.insertBefore(hR, ul.children.item(4));

let navFooter = document.createElement("nav");
navFooter.className = "navbar fixed-bottom navbar-light bg-light";

let divFooter = document.createElement("div");
divFooter.className = "container-fluid";

let footerText = document.createElement("p");
footerText.className = "font-weight-bold";
footerText.innerHTML = "&copy; Copyright 2023";

divFooter.appendChild(footerText);
navFooter.appendChild(divFooter);
document.body.appendChild(navFooter);