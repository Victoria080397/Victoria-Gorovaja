let tabs = $('.tab');
let content = $('.content');
for (let i = 0; i < tabs.length; i++) {
    $(tabs[i]).on('click', function () {
        $('.tab.active').removeClass('active');
        $(this).addClass('active');
        $('.content.active').hide();
        $('.content.active').removeClass('active');
        $(content[i]).show();
        $(content[i]).addClass('active');
    });
}
