// Code source and inspiration: Class and snippets
/*Sets the SLIDES constant to be the carousel images */
const SLIDES = $(".carousel-pic");
const INDICATORS = $(".indicator");

/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".carousel-pic:not(.hide)")) + 1 + 1; /* +1 for 0-index array */
  let nextInd = INDICATORS.index($(".indicator:not(.inactive)")) + 1 + 1;
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  if (nextInd > INDICATORS.length) {
    nextInd = 1;
  }

  showSlide(nextNum);
  showInd(nextInd);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($(".carousel-pic:not(.hide)")) - 1 + 1; /* +1 for 0-index array */
  let prevInd = INDICATORS.index($(".indicator:not(.inactive)")) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  if (prevInd <= 0) {
    prevInd = INDICATORS.length;
  }
  showSlide(prevNum);
  showInd(prevInd);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

  SLIDES.addClass("hide");
  currentSlide.removeClass("hide");
}

function showInd(num) {
  let ind = num - 1;
  let currentInd = INDICATORS.eq(ind);

  INDICATORS.addClass("inactive");
  currentInd.removeClass("inactive");
}

/*If the next button is clicked the next slide is shown*/
$(".next-button").click(function() {
  nextSlide();
});

/*If the previous button is clicked the previous slide is shown*/
$(".prev-button").click(function() {
  prevSlide();
});

/* CHANGES SLIDE WITH INDICATOR */
$("#indic1").click(function() {
  showSlide(1);
  showInd(1);
});

$("#indic2").click(function() {
  showSlide(2);
  showInd(2);
});

$("#indic3").click(function() {
  showSlide(3);
  showInd(3);
});

$("#indic4").click(function() {
  showSlide(4);
  showInd(4);
});

$("#indic5").click(function() {
  showSlide(5);
  showInd(5);
});

$("#indic6").click(function() {
  showSlide(6);
  showInd(6);
});
/* CHANGES SLIDE WITH INDICATOR */

/*Evey six seconds move to the next slide*/
setInterval(function() {
    nextSlide();
}, 6000);
