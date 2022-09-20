// $(".header-slider").vegas({
//     delay: 10000,
//     slides: [
//         { src: "@/images/header/01.jpg" },
//         { src: "@/images/header/02.jpg" },
//         { src: "@/images/header/03.jpg" },
//         { src: "@/images/header/04.jpg" }
//     ],
//     animation: ['kenburnsUp'],
//     transition: ['zoomOut']
// });

$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $(".navbar").addClass("nav-fix");
    }else{
      $(".navbar").removeClass("nav-fix");
    }
});

$('.blog-owlCarousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 3000, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    dots:false,
    nav:true,
    autoplay:true, 
    smartSpeed: 3000,
    autoplayTimeout:9000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:1
        },
        1200:{
            items:1
        }
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()>300) {
        $('#scroll').fadeIn();
    }else{
        $('#scroll').fadeOut();
    }
});
