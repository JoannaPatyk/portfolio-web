$('.material-symbols-outlined').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.menu').offset().top
    }, 500)
});

$('.menu a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
});