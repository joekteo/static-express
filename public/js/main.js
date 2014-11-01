$(document).ready(function() {
  $('.fadingText').mouseover(function() {
    $(this).fadeOut(200);
    $(this).fadeIn(500);
    // console.log('hello');
  });
});
