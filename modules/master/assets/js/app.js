$(document).ready(function () {
  $(".sidebar-toggle").click(function () {
    if($(".app-container>aside").hasClass("hidden")) $(".app-container>aside").removeClass("hidden");
    else $(".app-container>aside").addClass("hidden");
  })
});
