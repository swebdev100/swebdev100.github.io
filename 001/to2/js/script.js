
    $(function () {
        $('.slider').slick({
            nextArrow: '<button class="slick-arrow slick-next"><img src="img/next.svg" alt="next-arrow"></button>',
            prevArrow: '<button class="slick-arrow slick-prev"><img src="img/prev.svg" alt="prev-arrow"></button>',
            // fade: true,
            responsive: [{
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }]
        });

    });

    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(_href).offset().top + "px"
            });
            return false;
        });
    });

