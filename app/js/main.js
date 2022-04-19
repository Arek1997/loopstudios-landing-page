const mobileMenu = document.querySelector(".header__hamburger");
const closeMobileMenu = document.querySelector(".header__close");

const showMenu = function (val) {
  val = this;
  document.querySelector(
    ".header__nav--mobile"
  ).style.transform = `translateX(${val}%)`;
  document.body.style.overflowY = `hidden`;
};
const closeMenu = function (val) {
  val = this;
  document.querySelector(
    ".header__nav--mobile"
  ).style.transform = `translateX(${val}%)`;
  document.body.style.overflowY = `scroll`;
};

mobileMenu.addEventListener("click", showMenu.bind(0));
closeMobileMenu.addEventListener("click", closeMenu.bind(-100));
