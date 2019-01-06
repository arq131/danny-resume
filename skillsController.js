$(document).scroll(function() {
    var $knowledge = $("#skills");
    console.log("scrolltop = " + $(document).scrollTop() + " knowledge POS = " + $knowledge.position().top);
    if ($(document).scrollTop() >= $knowledge.position().top + 300) {
        console.log("scrolltop");
        $knowledge.attr("left", $(window).width());
        $knowledge.addClass("knowledge");
    }
    
})