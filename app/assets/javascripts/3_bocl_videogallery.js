$(document).ready(function() {
    $(".fod_video").fancybox({
      padding : 0,
      type : 'iframe',
      width: "600",
      height: "400",
      autoScale : true,
      fitToView : true,
      helpers : {
          overlay : {
              locked: false,
              css : {
                  'background' : 'rgba(255, 255, 255, 0.9)'
              }
          }
      },
    });
  });