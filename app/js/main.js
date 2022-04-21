const openMobileMenu = document.querySelector(".header__hamburger");
const closeMobileMenu = document.querySelector(".header__close");

const activeMenu = function (val, val2) {
  this.val = val;
  this.val2 = val2;
  document.querySelector(
    ".header__nav--mobile"
  ).style.transform = `translateX(${val}%)`;
  document.body.style.overflowY = `${val2}`;
};

openMobileMenu.addEventListener("click", activeMenu.bind(this, 0, "hidden"));
closeMobileMenu.addEventListener(
  "click",
  activeMenu.bind(this, -100, "scroll")
);
