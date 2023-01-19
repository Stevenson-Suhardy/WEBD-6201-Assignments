// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName("ul")[0];
// Get the <ul> element

// ADD NEW ITEM TO END OF LIST
// Create element
let newLastItem = document.createElement("li");
// Create text node
let newLastText = document.createTextNode("half and half cream");
// Add text node to element
newLastItem.appendChild(newLastText);
// Add element end of list
list.appendChild(newLastItem);

// ADD NEW ITEM START OF LIST
// Create element
let newFirstItem = document.createElement("li");
// Create text node
let newFirstText = document.createTextNode("rice");
// Add text node to element
newFirstItem.appendChild(newFirstText);
// Add element to list
list.insertBefore(newFirstItem, list.firstChild);

// All <li> elements
let listItems = document.getElementsByTagName("li");
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
for (let i = 0; i < listItems.length; i++) {
  listItems[i].className = "cool";
}
// Change class to cool

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
let headingElement = document.querySelector("h2");
// h2 text
let headingText = headingElement.firstChild.nodeValue;
// No. of <li> elements
let listLength = listItems.length;
// Content
let newHeading = headingText + "<span>" + listLength + "</span>";
// Update h2 using innerHTML (not textContent) because it contains markup
headingElement.innerHTML = newHeading;
