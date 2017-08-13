$(document).ready(function(){
    $.scrollify({
        section: ".row-scrolleable",
        scrollSpeed: 700,
        scrollbars: false,
    });

    $(".carousel-control-next").parent().on('click', function(){
        var actualTab = $("#character-tab a.active");
        var firstTab = $("#character-tab a:first");
        var lastTab = $("#character-tab a:last");
        if($(actualTab).data('pos') == $(lastTab).data('pos')){
            $(firstTab).tab('show');
        }
        else{
            $(actualTab).parent().next().children().tab('show');
        }
    });

    $(".carousel-control-prev").parent().on('click', function(){
        var actualTab = $("#character-tab a.active");
        var firstTab = $("#character-tab a:first");
        var lastTab = $("#character-tab a:last");
        if($(actualTab).data('pos') == $(firstTab).data('pos')){
            $(lastTab).tab('show');
        }
        else{
            $(actualTab).parent().prev().children().tab('show');
        }
    });
});