$(function() {
    var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
        loop: true,
        backDelay: 1500,
        startDelay: 1000,
        typeSpeed: 80,
        showCursor: false,

 });
});

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

$(function(){
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});
 new WOW().init();

var typed = new Typed('#write', {
    stringsElement: '#write-string',
        loop: true,
        backDelay: 1500,
        startDelay: 1000,
        typeSpeed: 20,
    backSpeed : 20,
        showCursor: false,
  });

var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.pagination',
      },
    });