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



   //slide down menu
   $(".menu-name").click(function(e) {
    e.preventDefault();
    $(this).siblings(".cats-display-2").slideToggle(400);
    $(".menu-name").not(this).siblings(".cats-display-2").slideUp(400);
    if ($(window).width() <= 991) {
        $(this).toggleClass("active");
        $(".menu-name").not(this).removeClass("active");
    }
});
$(".slide-menu-2").click(function(e) {
    e.preventDefault();
    $(this).siblings(".cats-dispaly-3").slideToggle(400);
    $(".slide-menu-2").not(this).siblings(".cats-dispaly-3").slideUp(400);
    if ($(window).width() <= 991) {
        $(this).toggleClass("active");
        $(".slide-menu-2").not(this).removeClass("active");
    }
});
  

  };



function manageDrop(){
    var btn = document.querySelector('#menu-id2'),
        view = document.querySelector('.navigation-2'),
        
        viewItems = view.querySelectorAll('.cat-li'),
        body = document.body;
    
  
    btn.addEventListener('click', function(e){ 
        e.stopPropagation();
        e.preventDefault();
        $('.bars2').toggleClass('hide-icon-2');
    $(' .times2').toggleClass('hide-icon-2');
        view.classList.toggle('reset-left-2');
    }); // open menu
      
    for(var i = 0; i < viewItems.length; i++){
      viewItems[i].addEventListener('click', function(e){
        e.stopPropagation();
        $('.bars2').toggleClass('hide-icon-2');
        $(' .times2').toggleClass('hide-icon-2');
        $(".navgition-2").remove('reset-left-2');
        (out) = this.innerHTML;
        view.classList.remove('reset-left-2');
       
      });
    } // carry item content to output, 
      // close after click
     
        body.addEventListener('click', function(){
          
          if(view.classList.contains('reset-left-2')){
            view.classList.remove('reset-left-2');
            $('.bars2').toggleClass('hide-icon-2');
        $(' .times2').toggleClass('hide-icon-2');
       
            } 
        }); // close after click outside
       
    
    
  
  
  }
  
  manageDrop();
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
              slidesPerView: 3,
          },
          767: {
              slidesPerView: 5,
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




 
  



 

///////////////////////////////////       validation of vendors form             /////////////////////////////////////////////

var name = document.getElementById("name");
name.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    if (/\d/.test(charStr)) {
        return false;
    }
};



 ///////// ** upload images ** /////////



 ImgUpload();


 function ImgUpload() {
     var imgWrap = "";
     var imgArray = [];

     $('.upload__inputfile').each(function() {
         $(this).on('change', function(e) {
             imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
             var maxLength = $(this).attr('data-max_length');

             var files = e.target.files;
             var filesArr = Array.prototype.slice.call(files);
             var iterator = 0;
             filesArr.forEach(function(f, index) {

                 if (!f.type.match('image.*')) {
                     return;
                 }

                 if (imgArray.length > maxLength) {
                     return false
                 } else {
                     var len = 0;
                     for (var i = 0; i < imgArray.length; i++) {
                         if (imgArray[i] !== undefined) {
                             len++;
                         }
                     }
                     if (len > maxLength) {
                         return false;
                     } else {
                         imgArray.push(f);

                         var reader = new FileReader();
                         reader.onload = function(e) {
                             var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                             imgWrap.append(html);
                             iterator++;
                         }
                         reader.readAsDataURL(f);
                     }
                 }
             });
         });
     });

     $('body').on('click', ".upload__img-close", function(e) {
         var file = $(this).parent().data("file");
         for (var i = 0; i < imgArray.length; i++) {
             if (imgArray[i].name === file) {
                 imgArray.splice(i, 1);
                 break;
             }
         }
         $(this).parent().parent().remove();
     });
 }



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