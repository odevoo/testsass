
$(document).ready(function(){


    $(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

      // Check the location of each element hidden */
      $('.skillscontainer .container-skills .hidden').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();

          /* If the object is completely visible in the window, fadeIn it */
          if( bottom_of_window > bottom_of_object ){
            $('.chart').easyPieChart({
                
                scaleColor: "#000",
                lineWidth: 20,
                lineCap: 'butt',
                
                barColor: '#ee4d4d',
                trackColor: "#ecf0f1",
                size: 190,
                animate: 1500
            });

            $(this).animate({
              'opacity':'1',
              //'margin-left': '0'
            },600);
          }
      });

});

});