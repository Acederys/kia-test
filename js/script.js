$(document).ready(function(){
        $('.menu').click(function(evt){
        evt.preventDefault();
        if ($('.submenu').is(':hidden')) {
            $('.submenu').slideToggle();
        } else {
            $(".submenu").hide();
        }  
    });
});