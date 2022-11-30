$(".hamburger").click(function() {
    if ($(".dropdown").hasClass("hide")) {
        $(".dropdown").removeClass("hide");
        $(".content").addClass("hide");
    }
    else {
        $(".dropdown").addClass("hide");
        $(".content").removeClass("hide");
    }
})

$("#burger").click(function() {
    $("#burger").addClass("hide");
    $("#closeburger").removeClass("hide");
})

$("#closeburger").click(function() {
    $("#burger").removeClass("hide");
    $("#closeburger").addClass("hide");
})

$(window).resize(function() {
    if ($(window).width() > 600) {
        $(".dropdown").addClass("hide");
        $(".content").removeClass("hide");
    }
})
