"use strict";

document.querySelector(".header__burger").onclick = function () {
  document.querySelector(".header__burger").classList.toggle("active");
  document.querySelector(".header__menu").classList.toggle("active");
  document.querySelector(".body").classList.toggle("active");
};

document.querySelectorAll(".nav__item").forEach(function (item) {
  item.onclick = function () {
    document.querySelector(".header__menu").classList.remove("active");
    document.querySelector(".header__burger").classList.remove("active");
    document.querySelector(".body").classList.remove("active");
  };
});