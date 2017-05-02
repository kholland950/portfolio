//scroller functions
$(document).ready(function() {
  $('.scrollTo, .side-nav-item, .scroller').click(function() {
    var target = $(this).data('target');
    var offset = 30;
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w < 760) {
      offset = 0;
    }
    $('html,body').animate(
      {
        scrollTop: $('#' + target).offset().top - offset,
      }, {
        duration: 750,
        ease: "easeout"
      }
    );
  });

  //menu bar scroll styling
  $('header > nav').toggleClass('highlight', $(window).scrollTop() > 0);

  $(window).scroll(function() {
    $('header > nav').toggleClass('highlight', $(window).scrollTop() > 0);
  });

  //open nav
  $(".mobile-nav-toggle").click(function(e) {
    $("header nav").addClass("open");
    e.preventDefault();
    e.stopPropagation();
  });

  //close nav
  $("header nav ul li a").click(function(e) {
    $("header nav").removeClass("open");
    e.preventDefault();
  });

  //doc close nav
  $(document).click(function(e) {
    $("header nav").removeClass("open");
  });

  //add cover on project for touch devi
  if (Modernizr.touchevents) {
    $("#projects article.project").addClass("cover");
  }
});
