let line = document.getElementsByClassName("skills__item");
let navbar = document.getElementsByClassName("header__wrap");
let lineAnimate = document.getElementsByClassName(
  "skills__item-animate animation"
);

function animate() {
  for (let numbers of line) {
    setTimeout(
      () => (numbers.className = "skills__item-animate animation"),
      500
    );
    break;
  }
}

window.addEventListener("scroll", function () {
  let elem = document.getElementById("skills");
  let box = elem.getBoundingClientRect();
  let stop = lineAnimate.item(2);

  if (window.scrollY > 100) {
    navbar[0].classList.add("nav")
  } else {
    navbar[0].className = "header__wrap container"
  }

  if (box.top - box.height <= 0 && !stop) {
    animate();
  }
});

function toggle() {
  let burger = document.getElementById('burger');
  let menu = document.getElementById('menu');
  menu.classList.toggle('active')
  burger.classList.toggle('active');
}