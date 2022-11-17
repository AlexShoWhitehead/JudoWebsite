// Source: (original work) Kyle Harms Snippets
// Accordion JS
$("#accordion").click(function() {
    if ($("#dropd").hasClass("hidden")) {
        $("#dropd").removeClass("hidden");
    }
    else {
        $("#dropd").addClass("hidden");
    }
})

$("#accordion").click(function() {
    if ($("#accordion").hasClass("active")) {
        $("#accordion").removeClass("active");
    }
    else {
        $("#accordion").addClass("active");
    }
})
// Accordion JS
