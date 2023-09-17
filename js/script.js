$(window).on('load', function() {
  $(".preloader").fadeOut();

});
$(document).ready(function() {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
      $("#menu-id").click(function(e) {
          e.preventDefault();
          $('.menu-bars .bar').toggleClass('hide-icon');
          $('.menu-bars .times').toggleClass('hide-icon');
          $(".navgition").toggleClass("reset-left");
          $("body").toggleClass("overflow");

      });
      $(".nav-head .close-btn").click(function() {
          $(".navgition").removeClass("reset-left");
          $(".menu-bars .bars").toggleClass("open-bars");
          $(".menu-bars .bars").toggleClass("close-bars");
          $("body").removeClass("overflow");
      });




  

  };

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 112) {
          $stickyNav.addClass("fixed-nav");
      } else {
          $stickyNav.removeClass("fixed-nav");
      }
      if (scroll == 0) {
          $stickyNav.removeClass("fixed-nav");
      }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
      lastScroll = scroll;
      if (scroll == 0) {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
  });

 

  /// ////// ** category-slider-for-mobile-view** /////////
  if ($(window).width() <= 991) {
  const catSlider = new Swiper('.cat-slider .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.cat-slider .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.cat-slider .swiper-btn-next',
          prevEl: '.cat-slider .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 2,
          },
          767: {
              slidesPerView: 4,
          },
          992: {
              slidesPerView: 4,
          },
          1199: {
              slidesPerView: 8,
          },
      },
  });
};




 
  ////////////** counter  *///////////////////////////////
  var ax = 0;
  $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      // Md.Asaduzzaman Muhid
      if (ax == 0 && $(window).scrollTop() > oTop) {
          $('.counter-number').each(function() {
              var $this = $(this);
              jQuery({
                  Counter: 0
              }).animate({
                  Counter: $this.text()
              }, {
                  duration: 2000,
                  easing: 'swing',
                  step: function() {
                      $this.text(Math.ceil(this.Counter));
                  }
              });
          });
          ax = 1; // Md.Asaduzzaman Muhid
      }
  });




  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
      $('.nav-foot-header').addClass('footer-accordion');
      $('.nav-foot').addClass('footer-panel');
  }
  $('.footer-accordion').click(function() {
      const x = `${$(this).siblings().prop('scrollHeight') + 15}px`;
      $('.footer-accordion').not(this).removeClass('active');
      $(this).toggleClass('active');
      if ($(this).siblings().css('max-height') == '0px') {
          $(this).siblings().css('max-height', x);
          $(this).siblings('.nav-foot').css('padding-top', '15px');
      } else {
          $(this).siblings().css('max-height', '0');
          $(this).siblings('.nav-foot').css('padding-top', '0');
      }

      $('.footer-accordion').not(this).siblings().css('max-height', '0');
      $('.footer-accordion')
          .not(this)
          .siblings('.nav-foot')
          .css('padding-top', '0');
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          },
          1500
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  });







});