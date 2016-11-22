
$(document).ready(function(){


    $(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

      $('.hidden').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();

          if( bottom_of_window > bottom_of_object ){
            $('.chart').easyPieChart({
                
                scaleColor: "#fff",
                lineWidth: 25,
                lineCap: 'round',
                barColor: '#ee4d4d',
                trackColor: "#ecf0f1",
                size: 190,
                animate: 1500
            });

            $(this).animate({
              'opacity':'1',
              
            },600);
          }
      });

});

});