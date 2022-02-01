$('#play').on('click', function(){
   var video = $(this).parents('.video').find('video.video-play').get(0)
   if(video.paused){
      $(this).parents('.video').find('.image-back').css('opacity','0');
      $(this).css('opacity','0');
      video.play();
   }else{
      
      $(this).css('opacity','1')
      video.pause();
   }
});

