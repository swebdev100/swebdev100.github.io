$(function() {

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        //autoplay: 4000
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function() {
        $('.menu ul').slideToggle();
    });

});