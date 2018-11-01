var menu = document.querySelector(".main-nav__list");
var menuBg = document.querySelector(".page-header__wrapper");
var menuToggle = document.querySelector(".page-header__toggle");
var cross = document.querySelector(".menu-cross");
var burger = document.querySelector(".menu-burger");

document.addEventListener("DOMContentLoaded", function() {
  menu.classList.add("main-nav__list--close");
  menuBg.classList.add("page-header__wrapper--bg");
  menuToggle.classList.add("page-header__toggle--js");
  cross.style.display = "none";
});

menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav__list--close");
  menuBg.classList.toggle("page-header__wrapper--bg");
  if (menu.classList.contains("main-nav__list--close")) {
    cross.style.display = "none";
    burger.style.display = "block";
  } else {
    burger.style.display = "none";
    cross.style.display = "block";
  }
});
