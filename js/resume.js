window.onload=function(){
	   var swiper = new Swiper('.swiper-container', {
            // pagination: '.swiper-pagination',
            paginationClickable: true,
            direction: 'vertical',
            onInit:function(swiper){
                swiperAnimateCache(swiper);
                swiperAnimate(swiper); 
            },
            onSlideChangeEnd:function(swiper){
                swiperAnimate(swiper);

                if(swiper.activeIndex==3){
                    $(".slide4_center").css("animation","move 2s linear 0s forwards");
                    $(".slide4_center_circle1").css("animation","show 0.1s linear 0.1s forwards");
                    $(".slide4_center_circle2").css("animation","show 0.1s linear 0.6s forwards");
                     $(".slide4_center_circle3").css("animation","show 0.1s linear 1.2s forwards");
                     $(".slide4_center_circle4").css("animation","show 0.1s linear 1.6s forwards");
               }else{
                    $(".slide4_center").css("animation","none");
                    $(".slide4_center_circle1").css("animation","none");
                    $(".slide4_center_circle2").css("animation","none");
                    $(".slide4_center_circle3").css("animation","none");
                    $(".slide4_center_circle4").css("animation","none");
               }
            }
        });
        $(function(){
            var value =false;
            $("#music_img").click(function(){
                if(value==false){
                    $("#music_img").css("animation","none");
                    $(".background_music")[0].pause();
                    value=true;
                }else{
                     $("#music_img").css("animation","music 2s linear 0s infinite");
                    $(".background_music")[0].play();
                    value=false;
                }
            })
        })
}