/**
 * Created by yanshi on 3/30/16.
 */
$(document).ready(function(){
    $(".overlay_menu").click(function(){
        $(".overlay").addClass("overlay_open");
    });

    $(".overlay_close").click(function(){
        $(".overlay").removeClass("overlay_open");
    });
});