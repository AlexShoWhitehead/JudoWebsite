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

$(".next-button").click(function() {
    nextSlide();
  });

  $(".prev-button").click(function() {
    prevSlide();
  });

setInterval(function() {
    nextSlide();
}, 6000);
