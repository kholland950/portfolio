$(document).ready(function() {
  var slides = $('.slide');
  var sideNavMarkup = "<ul>";
  $('.slide').each(function(index) {
    sideNavMarkup += "<li class='side-nav-item";
    if (index == 0) {
      sideNavMarkup += " active' ";
    } else {
      sideNavMarkup += "'";
    }
    sideNavMarkup += "data-target='" + $(this).attr('id') + "'";
    sideNavMarkup += ">";
    sideNavMarkup += "<p class='side-nav-label'>" + $(this).data('name') + "</p>";
    sideNavMarkup += "</li>";
  });
  sideNavMarkup += "</ul>";
  $('#slide-nav').html(sideNavMarkup);
  updateSideNav();

  $('header > nav').toggleClass('highlight', $(window).scrollTop() > 0);

  $('.scrollTo, .side-nav-item, .scroller').click(function() {
    var target = $(this).data('target');
    $('html,body').animate(
      {
        scrollTop: $('#' + target).offset().top - 30,
      }, {
        duration: 750,
        ease: "easeout"
      }
    );
  });

  $(window).scroll(function() {
    updateSideNav();
    $('header > nav').toggleClass('highlight', $(window).scrollTop() > 0);
  })

  $("input").on("keypress", function(e) {
    if (e.keyCode == 13) {
      $(this).parent().find('.form-next').click();
      return false;
    }
  });

  $("#cancel").click(function() {
    $(this).parent().parent().hide();
    $("input, textarea").val('');
    $(".form-group").eq(0).show();

    var form = $(this).closest("form");
    form.find("ul.steps > li").removeClass("active");
    form.find("ul.steps > li").eq(0).addClass("active");
    return false;
  });
});

function updateSideNav() {
  var height = $('.slide')[0].offsetHeight;
  var i = Math.floor($(window).scrollTop() / height);
  $('aside li.active').removeClass('active');
  $('aside ul li').eq(i).addClass('active');
}
