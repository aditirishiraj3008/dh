//homepage contents
const observeContent = () => {
  const contents = document.querySelectorAll(".content");
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, { threshold: 0.5 });

  contents.forEach(content => observer.observe(content));
};
document.addEventListener("DOMContentLoaded", observeContent);

// Navbar Toggle
const navbarToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".nav_links");
const navbarIcon = navbarToggle.querySelector("i");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");

    // Toggle icon
    if (navbarMenu.classList.contains("active")) {
        navbarIcon.classList.remove("fa-bars");
        navbarIcon.classList.add("fa-times");
    } else {
        navbarIcon.classList.remove("fa-times");
        navbarIcon.classList.add("fa-bars");
    }
});

//HP slideshow
let slideIndex = 1;
showSlides(slideIndex);function plusSlide(n) {
  showSlides(slideIndex += n);
}function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}function prevSlide() {
  plusSlide(-1);
}function nextSlide() {
  plusSlide(1);
}
