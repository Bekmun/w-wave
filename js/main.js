/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
//accordion
$(function () {
  $(".guests__list").accordion({
    collapsible: true,
    active: 0,
    heightStyle: 'content'
  });
}); //tabs

var howLink = document.querySelectorAll('.accordion__btn');
var tabsItem = document.querySelectorAll('.tabs__content');
howLink.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var path = e.currentTarget.dataset.path;
    howLink.forEach(function (el) {
      return el.classList.remove('accordion__btn--active');
    });
    e.currentTarget.classList.add('accordion__btn--active');
    tabsItem.forEach(function (el) {
      return el.classList.remove('tabs__content--active');
    });
    document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('tabs__content--active');
  });
}); //Прокрутка при клике

var menurLink = document.querySelectorAll('.nav__link[data-goto]');

if (menurLink.length > 0) {
  menurLink.forEach(function (menurLink) {
    menurLink.addEventListener("click", onMebuLinkClick);
  });

  function onMebuLinkClick(e) {
    var menurLink = e.target;

    if (menurLink.dataset.goto && document.querySelector(menurLink.dataset.goto)) {
      var gotoBlock = document.querySelector(menurLink.dataset.goto);
      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('burger--active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('burger--active');
        menuBody.classList.remove('menu--active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
} //Меню бургер


var iconMenu = document.querySelector('.burger');
var menuBody = document.querySelector('.nav');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('burger--active');
    menuBody.classList.toggle('menu--active');
  });
} //cearch


var cearch = document.querySelector('.header__search-btn');
var input = document.querySelector('.header__search-input');

if (cearch) {
  cearch.addEventListener("click", function (e) {
    input.classList.toggle('search-input--active');
  });
} //Select


var dropDawnBtn = document.querySelector('.dropdawn__btn');
var dropDawnList = document.querySelector('.dropdawn__list');
var dropDawnItem = dropDawnList.querySelectorAll('.dropdawn__item');
var dropDawnInput = document.querySelector('.dropdawn__input-hidden'); //Клик по кноаке. открыть/закрыть

dropDawnBtn.addEventListener('click', function () {
  dropDawnList.classList.toggle('dropdawn__list--visible');
  this.classList.toggle('dropdawn__btn--active');
}); //Выбор элемента списка. Запомнить выбранное элемента. Закрыть dropdawn

dropDawnItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
    dropDawnBtn.innerText = this.innerText;
    dropDawnBtn.focus();
    dropDawnBtn.classList.toggle('dropdawn__btn--active');
    dropDawnInput.value = this.dataset.value;
    dropDawnList.classList.remove('dropdawn__list--visible');
  });
}); //Клик снаружы dropdawn. Закрыть dropdawn

document.addEventListener('click', function (e) {
  if (e.target !== dropDawnBtn) {
    dropDawnBtn.classList.remove('dropdawn__btn--active');
    dropDawnList.classList.remove('dropdawn__list--visible');
  }
}); //При нажатие по ктопки (Esc, Tab) закрывается dropdawn

document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'Escape') {
    dropDawnBtn.classList.remove('dropdawn__btn--active');
    dropDawnList.classList.remove('dropdawn__list--visible');
  }
});
/******/ })()
;
//# sourceMappingURL=main.js.map