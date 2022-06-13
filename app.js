const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveVlasses();
    slide.classList.add("active");
  });
}

function clearActiveVlasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
