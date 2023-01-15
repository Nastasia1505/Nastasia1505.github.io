let navbar = document.querySelector(".nav-links__show");
let openBtn = document.querySelector(".openBtn");

function closeNav() {
  let closeBtn = document.querySelector(".closeBtn");
  closeBtn.addEventListener("click", () => {
    navbar.style.display = "none";
    console.log("close");
    openBtn.classList.add("active");
  });
}

function openNav() {
  openBtn.addEventListener("click", () => {
    openBtn.classList.remove("active");
    navbar.style.display = "block";
    console.log("open");
  });
}
openNav();
closeNav();

let position = 0;
const slidisToShow = 3;
const slidisToScroll = 1;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const items = document.querySelectorAll(".slider-item");
const itemsCount = document.querySelectorAll(".slider-item").length;
const btnPrev = document.querySelector("#prevPage");
const btnNext = document.querySelector("#nextPage");
const itemWidth = container.clientWidth / slidisToShow;
const movePosition = slidisToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidisToShow * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidisToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidisToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});
const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnNext.disabled = position <= -(itemsCount - slidisToShow) * itemWidth;

  btnPrev.disabled = position === 0;
};
checkBtns();

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }
