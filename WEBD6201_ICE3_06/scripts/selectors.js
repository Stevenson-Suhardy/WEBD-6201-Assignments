console.log("selectors.js loaded");

function highlight(element) {
  element.css("background-color", "#fcf30040");
}

function cssSelectors() {
  // using tags
  $("p").css("background-color", "#2a9d8f");

  // using class name
  $(".red-box").css("background-color", "#2a9d8f");

  // using ids
  //   $("#list").css("background-color", "red");

  $("h1, h2").css("background-color", "#3a86ff");
  $("li:even").css("background-color", "red");
}

function traversingTheDOM() {
  //   $("#list").find("li").css("background-color", "#3a86ff");

  // all parents
  $("#list").parents("body").css("background-color", "red");

  // direct parents
  $("#list").parent("div").css("font-size", "20px");

  // .siblings("div") <- sibiling divs of element

  // prev & next
  $("#list").prev().css("background-color", "#3a86ff");
  $("#list").next().css("background-color", "#3a86ff");
  $("#list").prev().next().css("background-color", "#3a86ff");
}

function filtering() {
  //   $("#list").find("li").filter(":even").css("background-color", "#3a86ff");
  //   $("#list")
  //     .filter(function (index) {
  //       return index % 3 === 0;
  //     })
  //     .css("background-color", "#219ebc");

  // highlighting
  let items = $("#list").find("li");
  highlight(items);
}

function addingReplacingRemoving() {
  $("ul ul:first").append($("<li>I'm going to be the last item</li>"));

  $("<li>Now, I'm going to be the last item</li>").appendTo("ul ul:first");

  $("ul ul:first").prepend($("<li>I'm going to be the last item</li>"));

  $("<li>Now I'm first!!</li>").prependTo("ul ul:first");

  $(".red-box").after("<div class='red-box'>Another Red Box</div>");
}

addingReplacingRemoving();
// filtering();
// traversingTheDOM();
// cssSelectors();
