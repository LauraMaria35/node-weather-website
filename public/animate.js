$(function() {
    $("div").click(function() {
        $("div").animate({width: '250px'}, 1000);
    });
});

$(function() {
    $("div").click(function() {
        $("div").animate({
            width: '+=250px',
            height: '+=250px'
        }, 1000);
    });
});

$(function() {
    var div = $("div");
    div.animate({opacity: 1});
    div.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
    div.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);
    div.animate({opacity: 0.5});
}); 