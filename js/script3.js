$(document).ready(function() {
    $('.trigger').click(function() {
      var $this = $(this),
      notThis = $this.hasClass('open'),
      thisNav = $this.attr("rel");
      /*$('#title1').delay(350).queue(function(){
        $(this).addClass('invisible').clearQueue();
      });*/
      $('#resume').toggleClass('invisible');
      $('#title1').toggleClass('invisible');
      $('#title2').toggleClass('invisible');
      //close if you click another menu trigger
      if (!notThis) {
        
        
         $('.triggered-area, .trigger').removeClass('open');
         if ( $( '.trigger' ).hasClass( "block-scroll" ) ){
            console.log('remove');
            $('html').removeClass('disable-scroll');
            $('#overlay-mobile').removeClass('visible');
         }
      }

      //open the nav
      
      $this.toggleClass('open');
      $("#"+thisNav).toggleClass('open');
      if ( $( this ).hasClass( "block-scroll" ) ){
        
         $('html').toggleClass('disable-scroll');
         $('#overlay-mobile').toggleClass('visible');
      }
    });

    /*********************/

    $('.linkmenu').click(function() {
      console.log('ok');
      var $this = $(this),
      notThis = $this.hasClass('open'),
      thisNav = $this.attr("rel");
      /*$('#title1').delay(350).queue(function(){
        $(this).addClass('invisible').clearQueue();
      });*/

      $('#title1').toggleClass('invisible');
      $('#title2').toggleClass('invisible');
      //close if you click another menu trigger
      if (!notThis) {
        
        
         $('.triggered-area, .trigger').removeClass('open');
         if ( $( '.trigger' ).hasClass( "block-scroll" ) ){
            console.log('remove');
            $('html').removeClass('disable-scroll');
            $('#overlay-mobile').removeClass('visible');
         }
      }

      //open the nav
      
      $this.toggleClass('open');
      $("#"+thisNav).toggleClass('open');
      if ( $( this ).hasClass( "block-scroll" ) ){
        
         $('html').toggleClass('disable-scroll');
         $('#overlay-mobile').toggleClass('visible');
      }
    });


});