// Add some basic interactivity to our page
document.addEventListener("DOMContentLoaded", function () {
  // Animate the hero section on scroll
  const heroSection = document.querySelector(".h-screen");
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    heroSection.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  });
});
