// Code source and inspiration: Class and snippets
/*Sets the SLIDES constant to be the carousel images */
const SLIDES = $(".carousel-pic");

/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".carousel-pic:not(.hide)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($(".carousel-pic:not(.hide)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

  SLIDES.addClass("hide");
  currentSlide.removeClass("hide");
}

/*If the next button is clicked the next slide is shown*/
$(".next-button").click(function() {
    nextSlide();
  });

/*If the previous button is clicked the previous slide is shown*/
$(".prev-button").click(function() {
    prevSlide();
});

/*Evey six seconds move to the next slide*/
setInterval(function() {
    nextSlide();
}, 6000);
