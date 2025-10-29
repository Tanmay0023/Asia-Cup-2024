// script.js

// Show extra info with a fade animation
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("infoBtn");
  const extraInfo = document.getElementById("extraInfo");

  btn.addEventListener("click", () => {
    if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
      extraInfo.style.display = "block";
      extraInfo.style.opacity = 0;
      fadeIn(extraInfo);
      btn.textContent = "Hide Info";
    } else {
      fadeOut(extraInfo, () => {
        extraInfo.style.display = "none";
        btn.textContent = "Click for More Info";
      });
    }
  });
});

// Simple fade-in effect
function fadeIn(element) {
  let opacity = 0;
  const fade = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(fade);
    } else {
      opacity += 0.05;
      element.style.opacity = opacity;
    }
  }, 30);
}

// Simple fade-out effect
function fadeOut(element, callback) {
  let opacity = 1;
  const fade = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(fade);
      if (callback) callback();
    } else {
      opacity -= 0.05;
      element.style.opacity = opacity;
    }
  }, 30);
}
