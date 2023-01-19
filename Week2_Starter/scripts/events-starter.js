function clickLink(e) {
  console.log(e.target);
  alert("I'm going to take you to " + e.target.textContent);
}

function focusButton(e) {
  e.target.style.backgroundColor = "#bde0fe";
}

function leaveFocusButton(e) {
  e.target.style.backgroundColor = "#ffc8dd";
}

function clickButton(e) {
  let button = e.target;
  console.log(button);
  button.textContent = "CLICKED!";
}

let list = document.getElementsByTagName("ul")[0];
let anchors = document.getElementsByTagName("a");

for (let i = 0; i < anchors.length; i++) {
  let anchor = anchors[i];
  console.log(anchor.innerHTML);
  anchor.addEventListener("click", clickLink, false);
}

let buttons = document.getElementsByTagName("button");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("mouseover", focusButton, false);
  button.addEventListener("mouseout", leaveFocusButton, false);
  button.addEventListener("click", clickButton, false);
}

let firstItem = document.getElementsByTagName("li")[0];
let firstItemLink = firstItem.firstChild.nextSibling;
firstItemLink.href = "https://google.com/";

let body = document.getElementsByTagName("body")[0];
let title = document.createElement("h1");
title.innerHTML = "Stevenson's Events Page";
body.insertBefore(title, list);
