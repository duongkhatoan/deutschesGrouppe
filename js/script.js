$(document).ready(function () {
  navigation = $("#myNav");
  mobileMenu = $("#buggerMenu");
  mobileMenu.click(function () {
    $("#buggerMenu #menuBtn .menu-trigger").toggleClass("active");
    navigation.toggleClass("showInMobile");
  });
});
