let line = document.getElementsByClassName("skills__item");
let lineAnimate = document.getElementsByClassName(
  "skills__item-animate animation"
);

window.addEventListener("scroll", function () {
  let elem = document.getElementById("skills");
  let box = elem.getBoundingClientRect();
  let stop = lineAnimate.item(2);

  if (box.top - box.height <= 0 && !stop) {
    animate();
  }
});

function animate() {
  for (let numbers of line) {
    setTimeout(
      () => (numbers.className = "skills__item-animate animation"),
      500
    );
    break;
  }
}
