$(function() {
    $('#plan-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false,
        centerMode: true,
        responsive : [
            {
                breakpoint : 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 0,
                    infinite: true,
                }
            }
        ]
    });
});

$(function() {
    $('.js-acordion').on('click',function(){
        $(this).next().slideToggle();
    });
});
//アコーディオンはidで命名する場合複数のidが必要になるのでidではなくclassを使う

//animation
$(function(){
    new WOW().init();
});

//ヘッダーのハンバーガーボタン
$(function(){
    $('#nav-btn').on('click',function() {
        $(this).toggleClass("-active");
        $('.nav').toggleClass("-active");
    });
});