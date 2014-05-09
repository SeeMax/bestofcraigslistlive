var currentHeight = 0;
var globalResizeTimer = null;

$(window).load(function headerHeight() {
  currentHeight = $('.logo').outerHeight();
  windowHeight = $(window).height();

    $(".content").css({
        'top': currentHeight - 1 +"px",
        'min-height': windowHeight - currentHeight + "px"
    });

  $(window).resize(function() {
      if(globalResizeTimer != null) window.clearTimeout(globalResizeTimer);
      globalResizeTimer = window.setTimeout(function() {
          headerHeight ();
      }, 10);
  });
});
