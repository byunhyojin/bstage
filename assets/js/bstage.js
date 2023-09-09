$(function () {
    AOS.init();

    $(window).scroll(function(){
        curr=$(this).scrollTop();
        if (curr>0) {
            $('.header .common-inner').addClass('on')
            
        } else {
            $('.header .common-inner').removeClass('on')
        }
    })
    const mainSwiper = new Swiper('.ad-slide', {
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
       })

    
     
    $('.nav-items').hover(function(){
    $(this).find('.nav-sub').stop().slideDown();},
    function(){ 
        $(this).find('.nav-sub').stop().slideUp();}
        )

    $('.nav-sol').hover(function (e) {
        e.preventDefault();
    
    $('.sub-second').toggleClass('on');
  
 
    })
    $('.language').hover(function(){
      
        $(this).find('.lang-sub').stop().slideDown();
    },function(){
        $(this).find('.lang-sub').stop().slideUp();
    })
    
    $('.owner-box').each(function(index,element){
     scrollMotion = gsap.timeline({
        scrollTrigger:{
            trigger:$(this),
            start:"0% 0%",
            end:"100% 0%",
          
            scrub:1,

        },
     })
     scrollMotion.addLabel('a')
     scrollMotion.to($(this).find('.img-left'),{
        yPercent:-30
     },'a')
     scrollMotion.to($(this).find('.img-right'),{
        yPercent:30
     },'a')

    })

});

      




