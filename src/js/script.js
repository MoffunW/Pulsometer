$(document).ready(function(){
        $('.carousel__inner').slick({
                adaptiveHeight: true,
                speed: 1200,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow.svg"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow.svg"></button>'
        });
});