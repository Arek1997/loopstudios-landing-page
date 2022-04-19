const mobileMenu = document.querySelector(".header__hamburger");
const closeMobileMenu = document.querySelector(".header__close");

const showMenu = function (val) {
  val = this;
  document.querySelector(
    ".header__nav--mobile"
  ).style.transform = `translateX(${val}%)`;
};

mobileMenu.addEventListener("click", showMenu.bind(0));

closeMobileMenu.addEventListener("click", showMenu.bind(-100));
