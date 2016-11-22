$(document).ready(function(){


    $(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

      // Check the location of each element hidden */
      //$('.timelinediv .container .hidden').each( function(i){
      $('.hidden').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();

          /* If the object is completely visible in the window, fadeIn it */
          if( bottom_of_window > bottom_of_object ){
            console.log('super');

            $(this).animate({
              'opacity':'1',
              
            },600);
          }
      });

});

});