const slides = document.querySelectorAll(".slide");

slides.forEach((panel) => {
  const t0 = performance.now();
  panel.addEventListener("click", () => {
    slides.forEach((panell) => {
      if (panell.classList.contains("active")) {
        panell.classList.remove("active");
      }
    });
    panel.classList.add("active");
  });
  const t1 = performance.now();
});

const arrayS = ["you", "you"];

const timing = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "you") {
      console.log("congrats! you found yourself");
    }
  }

  console.log(t1 - t0);
};

timing(arrayS);
