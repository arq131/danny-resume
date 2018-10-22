/*eslint-env browser*/

$(document).ready(function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + 700;
    var tags = $("#name");
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        var curTop = $(tag).position().top;
        if (curTop < pageBottom ) { 
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
})

$(document).scroll(function () {
    var pageTop = $(document).scrollTop();
    fadeBanner("#name", pageTop);
    fadeAbout("#text-info", pageTop);
})

/**
    Handle fade-in scrolling for the about-me section
*/
function fadeAbout(tagsName, pageTop) {
    var tags = $(tagsName);
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        tagTop = $(tag).position().top;
        if (pageTop > tagTop + 400) {
            $(tag).removeClass("visible-text");
        } else if (tagTop < pageTop + 700) {
            $(tag).addClass("visible-text");
        } else {
            $(tag).removeClass("visible-text");
        }
    }
}

/**
    Handle fade-in scrolling for the banner section
*/
function fadeBanner(tagsName, pageTop) {
    var tags = $(tagsName);
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        tagTop = $(tag).position().top;
        if (pageTop > 300) {
            $(tag).removeClass("visible")
        } else if (tagTop < pageTop + 700) {
            $(tag).addClass("visible");
        }
    }
}