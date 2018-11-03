var menu = document.querySelector(".main-nav__list");
var menuBg = document.querySelector(".page-header__wrapper");
var menuToggle = document.querySelector(".page-header__toggle");
var cross = document.querySelector(".menu-cross");
var burger = document.querySelector(".menu-burger");
var popupSend = document.querySelector(".popup--send");
var popupRequired = document.querySelector(".popup--required");
var sendButton = document.querySelector(".popup__button--close");
var okButton = document.querySelector(".popup__button--required");
var formButton = document.querySelector(".form__button");
var lastName = document.querySelector("#last-name");
var firstName = document.querySelector("#first-name");
var email = document.querySelector("#mail");

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

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!lastName.value || !firstName.value || !email.value) {
    var fields = [lastName, firstName, email];
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        fields[i].classList.add("form__text--required");
      } else {
        fields[i].classList.remove("form__text--required");
      }
    }
    popupRequired.classList.add("popup--open");
  } else {
    popupSend.classList.add("popup--open");
  }
});

sendButton.addEventListener("click", function () {
  popupSend.classList.remove("popup--open");
});

okButton.addEventListener("click", function () {
  popupRequired.classList.remove("popup--open");
});
