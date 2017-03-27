$( document ).ready(function() {
    var v = "#video-holder";
    var showHeight = 200;
    var m = 20;
    var initWidth = $(v).width();
    var initHeight = $(v).height();
    $(window).scroll( function() {
        if ($(this).scrollTop() > showHeight) {
            $(v).addClass('sv vadj');
            $(v).css('margin-bottom', -Math.abs((initHeight/2)-m) + 'px');
        };
        if ($(this).scrollTop() < (showHeight/2)) {
            $(v).removeClass('sv vadj');
        };
    });
});
