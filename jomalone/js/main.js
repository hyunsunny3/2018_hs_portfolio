$(function(){

  var newSwiperImg=[
    'img/1.new/desire.jpg',
    'img/1.new/mixnmatch.jpg',
    'img/1.new/ignite.jpg',
  ]

  $('.new .swiper-slide').each(function(i, el){
    $(this).css('background-image','url('+newSwiperImg[i]+')')
  })

  var newSwiper = new Swiper('.new .swiper-container',{
    loop:true,
    navigation:{
      nextEl:'.new .swiper-button-next',
      prevEl:'.new .swiper-button-prev',
    },
    pagination:{
      el:'.new .swiper-pagination',
      clickable:true,
    },
  });

  var eventSwiper = new Swiper('.event .swiper-container',{
    loop:true,
    navigation:{
      nextEl:'.event .swiper-button-next',
      prevEl:'.event .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesPerGroup: 1,
      }
    },
  });

  var giftSwiper = new Swiper('.gift .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesPerGroup: 1,
      }
    },
  });

  $('.login').click(function(){
    $('.popup_body').css('display','block');
  });
  $('.popup_body .btn_close').click(function(){
    $('.popup_body').css('display','none');
  });
  $('.popup_body .popup_bg').click(function(){
    $('.popup_body').css('display','none');
  });
  $('.cart_icon').click(function(){
    $('.popup_cart').css('right','0px');
  });
  $('.popup_cart .btn_close').click(function(){
    $('.popup_cart').css('right','-100%');
  });
  $('.menu_icon').click(function() {
    $('nav').css('left','0');
    $('.nav_bg').show();
  });
  $('nav .btn_close, .nav_bg').click(function() {
    $('nav').css('left','-100%');
    $('.nav_bg').hide();
  });
  $('.search_icon').click(function(){
    $('.popup_search').slideToggle();
  });
  $('.mo_login').click(function(){
    $('.popup_body').css('display','block');
    $('nav').css('left','-100%');
    $('.nav_bg').hide();
  });


  $('.nav_menu > li > a').click(function(e){
    e.preventDefault();
    $('.nav_menu .depth2').stop().slideUp();
    $(this).next().stop().slideToggle();
  })



  // 퀵메뉴
  $('.project-category').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // 마우스휠
  $(function(){
    var windowH=$(window).height()-120;
    $('.quick_menu li').click(function(e){
      e.preventDefault();
      var i=$('.quick_menu li').index(this);
      var nowTop=i*windowH;//스크롤의 위치
      $('html').stop().animate({
        'scrollTop':nowTop
      },1000)
    })


    $(window).on('scroll',function(){
      //예)windowH=500 scrollTop=0
      var scrollTop=$(window).scrollTop()+120;
      var i=0;
      if(scrollTop>=0 && scrollTop<1*windowH){
        i=0;
      }else if(scrollTop>=1*windowH && scrollTop<2*windowH){
        i=1;
      }else if(scrollTop>=2*windowH && scrollTop<3*windowH){
        i=2;
      }else if(scrollTop>=3*windowH && scrollTop<4*windowH){
        i=3;
      }
      // console.log(scrollTop);
      // console.log(i);
      $('.quick_menu li').removeClass();
      $('.quick_menu li').eq(i).addClass('active');
    })
    .scroll();

    $('article').on('mousewheel',function(e, delta){
      if(delta>0){
        if($(this).prev().is('article')){
          var prev=$(this).prev().offset().top-120;
          $('html').stop().animate({
            scrollTop:prev
          },1000)
          // console.log('올림', prev);
        }
      }else if(delta<0){//마우스휠을 내린상태
        if($(this).next().is('article')){
          var next=$(this).next().offset().top-120;
          $('html').stop().animate({
            scrollTop:next
          },1000)
          // console.log('내림', next);
        }
      }
    })








  })
})
