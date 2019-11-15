$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-showing").toggle();
    $(".initially-hidden").toggle();
  });

  $("#darkandlight").click(function() {
    $(".container").toggleClass("dark-background");
  });
});