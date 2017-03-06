$( window ).on( "load", function() {

  $('.load-screen h2').html("READY");
  $('.load-screen').css({'-webkit-animation':'slideOutUp 1s',
                         '-moz-animation':'slideOutUp 1s',
                         '-ms-animation':'slideOutUp 1s',
                         'animation':'slideOutUp 1s'
                       });

   setTimeout(function(){
       //do what you need here
       $('.load-screen').css('display', 'none');
   }, 1000);

});
