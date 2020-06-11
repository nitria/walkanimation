var lastPosition = 0;
$(window).on("scroll", function () {
  scrollable = document.body.scrollHeight - window.innerHeight;
  scrolled = window.scrollY;
  percent = 90;
  scrollTop = $(window).scrollTop();
  if (scrollTop < lastPosition) {
    percent = Math.floor((scrolled / scrollable) * 90);
    $("#img").css({
      transform: "scaleX(-1)",
      left: percent + "%",
    });
  } else {
    percent = Math.floor((scrolled / scrollable) * 90);
    $("#img").css({
      transform: "scaleX(1)",
      left: percent + "%",
    });
  }
  lastPosition = scrollTop;

  setInterval(function () {
    var scroll = $(window).scrollTop();
    setTimeout(function () {
      if (scroll == $(window).scrollTop()) {
        $(document.body).removeClass("scrolling");
      } else {
        $(document.body).addClass("scrolling");
      }
    }, 25);
  }, 50);
});
