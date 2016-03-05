(function ($) {
    Drupal.behaviors.yourName = {
        attach : function(context, settings) {


        }
    };
    $( document ).ready(function() {
        $('.views-field-commerce-price .field-content,.price:contains("€")').each(
            function(){
                $(this).text($(this).text().split(' ')[0]+' eur');
            }
        );

        $('.view-front-products .view-content').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
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



    });
    window.onload = function() {
        $('#block-block-2').css({'height':$('.region-header').height()});
        $('.open-close-button').click(
            function(){
                $('#block-block-5').toggleClass("visible");
            }

        );
    };
    $( window ).resize(function() {
        $('#block-block-2').css({'height':$('.region-header').height()});
    });
})(jQuery);
