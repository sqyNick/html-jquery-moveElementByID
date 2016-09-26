jQuery.fn.moveDivByID= function (id) {
    $("#"+id).mousedown(function(ee){
        $(this).css("cursor","move");
        var offset= $(this).offset();
        var x = ee.pageX-offset.left;
        var y = ee.pageY-offset.top;

        $(document).bind("mousemove",function(ev){
            $("#"+id).stop();
            var _x = ev.pageX-x;
            var _y = ev.pageY-y;
            $("#"+id).animate({left:_x+"px",top:_y+"px"},10);
        });
    });
    $(document).mouseup(function()
    {
        $("#"+id).css("cursor","default");
        $(this).unbind("mousemove");
    });
};
