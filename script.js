// Skill star ratings
document.querySelectorAll(".stars").forEach(starContainer => {
  let rating = parseInt(starContainer.getAttribute("data-rating"));
  for (let i = 1; i <= 5; i++) {
    let star = document.createElement("span");
    star.innerHTML = "★";
    star.classList.add("star");
    if (i <= rating) {
      star.classList.add("filled");
    }
    starContainer.appendChild(star);
  }
});
