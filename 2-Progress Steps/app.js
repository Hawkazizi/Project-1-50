const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let CurrActive = 1;

next.addEventListener("click", () => {
  CurrActive++;

  if (CurrActive > circles.length) {
    CurrActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  CurrActive--;

  if (CurrActive < 1) {
    CurrActive = 1;
  }
  update();
});

const update = function () {
  circles.forEach((circle, idx) => {
    if (idx < CurrActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  console.log(actives);

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (CurrActive === 1) {
    prev.disabled = true;
  } else if (CurrActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
