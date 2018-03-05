$(document).ready(function(){

    var showInfo = $("#show-info1");

    $("div.tarjeta").click(function(){
        showInfo.slideToggle(300);
        $('html, body').stop().animate({
            scrollTop: showInfo.offset().top
        }, 300);
    });
});