//.fluid-width-video-wrapper
/*
https://github.com/FBlade/fixedVideoOnScroll.js
https://github.com/FBlade/fixedVideoOnScroll.js/blob/master/LICENSE
Apache License 2.0
*/

$( document ).ready(function() {
    var v = ".fluid-width-video-wrapper";
    var showHeight = 600;
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
