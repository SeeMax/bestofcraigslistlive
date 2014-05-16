$(document).ready(function() {
    $(".fod_video").fancybox({
      padding : 0,
      type : 'iframe',
      width: "600",
      height: "365",
      margin: [10, 10, 10, 10], // top, right, bottom, left
      autoScale : false,
      fitToView : false,
      helpers : {
          overlay : {
              locked: false,
              css : {
                  'background' : 'rgba(250, 250, 250, 0.75)'
              }
          }
      },
      beforeShow: function(){
         this.width = $('.fancybox-iframe').contents().find('html').width();
         this.height = $('.fancybox-iframe').contents().find('html').height();
        }
    });
  });