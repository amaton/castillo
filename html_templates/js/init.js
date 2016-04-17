(function ($) {
    $( document ).ready(function() {


        $('.new-product-carousel .carousel').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        $('.action-slider .slider').slick({
            autoplay: true,
            autoplaySpeed:2000,
            arrows:false,
            fade: true
        });
        $('.top-product-slider .slider').slick({
            autoplay: true,
            autoplaySpeed:2000,
            arrows:false,
            fade: true
        });

        $('.product-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed:2000,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-slider',
            arrows: false,
            dots: false,
            centerMode: false,
            focusOnSelect: true
        });


    });
    window.onload = function() {

    };
    $( window ).resize(function() {

    });
})(jQuery);