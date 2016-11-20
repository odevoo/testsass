$(document).ready(function() {
    $('.trigger').click(function() {
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

    /*********************/

    $('.linkmenu').click(function() {
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


/****************/



    //$('.linkmenu').click(openmenu());



    /*function openmenu(){
            var $this = $(this),
      notThis = $this.hasClass('open'),
      thisNav = $this.attr("rel");
      /*$('#title1').delay(350).queue(function(){
        $(this).addClass('invisible').clearQueue();
      });

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

     
      
      $this.toggleClass('open');
      $("#"+thisNav).toggleClass('open');
      if ( $( this ).hasClass( "block-scroll" ) ){
        
         $('html').toggleClass('disable-scroll');
         $('#overlay-mobile').toggleClass('visible');
      }
    }*/
    //close if you click on anything but this nav item or a trigger
    // $(document).on('click', function(event) {
    //   //$('#title1').removeClass('invisible');
    //   //$('#title2').removeClass('invisible');
      
    //   if (!$(event.target).closest('.triggered-area, .trigger').length) {
    //      $('.triggered-area, .trigger').removeClass('open');
    //      if ( $( '.trigger' ).hasClass( "block-scroll" ) ){
    //         $('html').removeClass('disable-scroll');
    //         $('#overlay-mobile').removeClass('visible');
    //      }
    //   }
    // });

});