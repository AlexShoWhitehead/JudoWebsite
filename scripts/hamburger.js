// Snippet source: Class
/* On hamburger button click, shows the dropdown and hides the page content*/
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

/* On hamburger icon click, shows the closeburger icon and hides the hamburger icon*/
$("#burger").click(function() {
    $("#burger").addClass("hide");
    $("#closeburger").removeClass("hide");
})

/* On closeburger icon click, shows the hamburger icon and hides the closeburger icon*/
$("#closeburger").click(function() {
    $("#burger").removeClass("hide");
    $("#closeburger").addClass("hide");
})

/* If the window goes back into wide screen hide the closeburger and burger icons, and reshow content*/
$(window).resize(function() {
    if ($(window).width() > 600) {
        $(".dropdown").addClass("hide");
        $(".content").removeClass("hide");
    }
    $("#burger").removeClass("hide");
    $("#closeburger").addClass("hide");
})
