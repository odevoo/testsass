
$(document).ready(function(){

 $('.trigger').on('click', function() {
   var thisNav = $(this).attr("rel");
   $('.nav-content').toggleClass('invisible');
   $('#resume').toggleClass('invisible');
   $('#title1').toggleClass('invisible');
   $('#title2').toggleClass('invisible');
   $(this).toggleClass('open');
   $("#"+thisNav).toggleClass('open');

});

 $('.linkmenu').on('click', function(){
   var thisNav = $('.trigger').attr("rel");
   $('.nav-content').toggleClass('invisible');
   $('#resume').toggleClass('invisible');
   $('#title1').toggleClass('invisible');
   $('#title2').toggleClass('invisible');
   $('.trigger').toggleClass('open');
   $("#"+thisNav).toggleClass('open');
 }); 

});


