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

/*Source: Seen on Mozilla Firefox Documentation*/
const btn = document.getElementById('burger');
$(".hamburger").click(function() {
    if(btn.textContent == '=') {
        btn.textContent = 'X';
    }
    else {
        btn.textContent = '=';
    }
})

$(window).resize(function() {
    if ($(window).width() > 600) {
        $(".dropdown").addClass("hide");
        $(".content").removeClass("hide");
    }
})
