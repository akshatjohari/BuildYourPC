// removing glow effect in mobile mode
if ($(window).width() < 767) {
  $("#removeGlow").removeClass("glow");
} else {
  $("#removeGlow").addClass("glow");
}
