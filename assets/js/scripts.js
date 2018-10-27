
$("[href='/#about']").click(function(){
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1200);
})

$("[href='/#projects']").click(function (){
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1200);
});

$("[href='/#contact']").click(function (){
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 1200);
});

$('#goUp').click(function (){
  $('html, body').animate({
      scrollTop: 0
  }, 1200);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        $("#goUp").css("display", "block");
    } else {
        $("#goUp").css("display", "none");
    }
}

$('.navbar-light .navbar-nav .nav-link').click(function(){
  $('#navbarNav').collapse('hide');
});
