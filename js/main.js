document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides-container");
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dot-container");

  let currentIndex = 0;
  const slideInterval = 5000;
  let autoSliderTimer;
  const menu = document.querySelectorAll("li");
  const dots = [];

  console.log(menu);

  //dynamicaly create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.push(dot);
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });

  //go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
    updateActiveDot();
  }

  function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (currentIndex === 3) {
      menu.forEach((item) => {
        item.style.color = "#666";
      });
    }
    console.log(currentIndex);
  }

  function updateActiveDot() {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function startAutoSlide(interval = slideInterval) {
    clearInterval(autoSliderTimer);
    autoSliderTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
    }, interval);
  }

  function resetAutoSlide() {
    clearInterval(autoSliderTimer);
    startAutoSlide();
  }

  startAutoSlide();
});

