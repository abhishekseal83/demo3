$(document).ready(function() {
 
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100       
    }
  );
  wow.init();

 
   if ($('.header_top').length) {
        var stickyNavPos = $('.header_top').offset().top;
        stickyNavTop = stickyNavPos + $('.header_top').outerHeight() + 0;
        var stickyNav = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                $('html').addClass('sticky');

            } else {
                $('html').removeClass('sticky');
            }

        };
        stickyNav();

        $(window).scroll(function () {
            stickyNav();
        });
    }

    var howl = $(".home-banner");
    howl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      smartSpeed: 1500,
      autoplayHoverPause: true,
      margin: 0,
      dots: false,
      nav: true,
      lazyLoad: true,
      navText: ["<i class='icon-circle-arrow-left'></i>", "<i class='icon-circle-arrow-right'></i>"],
      responsive: {
        0:   { items: 1 },
        480: { items: 1 },
        600: { items: 1 },
        768: { items: 1 },
        992: { items: 1 },
        1600: { items: 1 }
      },
    }); 


    var owl =  $(".testSlide");
    owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      autoplayTimeout: 4900,
      smartSpeed: 800,
      autoplayHoverPause: true,
      lazyLoad: true,
      margin: 0,
      dots: false,
      nav: true,
      lazyload:true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0:   { items: 1 },
        480: { items: 1 },
        540: { items: 1 },
        600: { items: 1 },
        768: { items: 1, margin:0},
        992: { items: 1, margin:0 },
        1200: { items: 1, margin:0 },
        1560: { items: 1, margin:0 }
      },
      onTranslated : owlcounter,
    });

    function owlcounter(event) {
     var element   = event.target; 
      var item      = event.item.index -1; 
      $('.testpagi li').removeClass('active');
      $('.testpagi li').eq(item -1).addClass('active');
    }

    $(document).on('click', '.testpagi li', function(){
      $('.testpagi li').removeClass('active');
      $(this).addClass('active');
      var dnum = $(this).data('value');
      $('.testSlide').trigger('to.owl.carousel', dnum)
    });


    
    $(document).on('click', '.leftNav', function(){
      $('.home_slider .owl-nav .owl-prev').trigger('click');
    });
    $(document).on('click', '.rightNav', function(){
      $('.home_slider .owl-nav .owl-next').trigger('click');
    });
    

    
    $(document).on('click', '.tleftNav', function(){
      $('.testSlide .owl-nav .owl-prev').trigger('click');
    });
    $(document).on('click', '.trightNav', function(){
      $('.testSlide .owl-nav .owl-next').trigger('click');
    });    

    
    $(document).on("click",".srch_icon",function(){ 
      $("html").addClass("showSearch");
    });

    $(document).on("click",".srchclose, .overlayall",function(){ 
      $("html").removeClass("showSearch");
    });    

    
    $(document).on("click",".resnav",function(){ 
      $("html").addClass("showMenu");
    });

    $(document).on("click",".close_menu,.res_overlay",function(){
      $("html").removeClass("showMenu");
    });

      

    var $window = $(window), $cont = $('.home_learnwrap .container'), $lbg = $('.home_learnwrapbg'), $lrnbutton = $('.lrnbtn');
    function resize() {   
        var conwidth = $cont.outerWidth();
        var winwidth = $window.width();
        var halfgap = ((winwidth - conwidth)/2);
        var lbgWidth = $lbg.outerWidth();
        $lrnbutton.css('right',(winwidth - lbgWidth - halfgap));
          
    }
    $window.resize(resize).trigger('resize');

    
});

$(window).on("load", function(){
  $(".ajax_loader").addClass('hideloader');
  //$('.allcontent').removeClass('hidecon');
  var ht = $(".nav-menu").html();
    $(".responsive_nav").prepend(ht);
});