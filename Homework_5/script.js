$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    //    nextArrow: '<span class="next"></span>',
    //    prevArrow: '<span class="prev"></span>'
});
$('.next').on('click', function () {
    $('.slider').slick('slickNext');

});
$('.prev').on('click', function () {
    $('.slider').slick('slickPrev');

});
