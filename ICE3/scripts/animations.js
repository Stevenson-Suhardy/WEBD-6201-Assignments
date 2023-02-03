function fadeInOutTo() {
  // fade out - changes display to none
  $(".red-box").fadeOut(3000);

  // fade in
  $(".red-box").fadeIn(1500);

  // fade to
  $(".green-box").fadeTo(2000, 0.3);

  // fade to half opacity
  $(".blue-box").fadeTo(1000, 0.5);
  // toggle display (went to none)
  $(".blue-box").fadeToggle();
  // toggle display (went to block, but remembered the fadeTo)
  $(".blue-box").fadeToggle();
}

function hideElement() {
  $(".red-box").hide(1000);
  $(".red-box").show(2000);
  $(".red-box").slideUp(2000);
  $(".red-box").slideDown(2000);
  $(".red-box").slideToggle(2000);
  $(".red-box").slideToggle(2000);
}

function chainAnimations() {
  //   $(".red-box").fadeTo(1000, 0.5);
  //   $(".green-box").delay(1000).fadeTo(1000, 0.5);

  //   $(".blue-box")
  //     .delay(2000)
  //     .fadeTo(1000, 0.5)
  //     .fadeTo(1000, 1.0)
  //     .delay(1000)
  //     .fadeOut();

  // Callback function
  $(".red-box").fadeTo(1000, 0, function () {
    $(".green-box").fadeTo(1000, 0, function () {
      $(".blue-box").fadeTo(1000, 0);
    });
  });
}

chainAnimations();
// hideElement();
// fadeInOutTo();
