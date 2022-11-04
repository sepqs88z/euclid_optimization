// бургер меню

let burger = document.querySelector(".burger");
let closed = document.querySelector(".closed-menu");
let menu = document.querySelector(".burger-menu__menu");

burger.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  burger.classList.toggle("burger-active");
  menu.classList.toggle("burger-menu-active");
});

closed.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  menu.classList.toggle("burger-menu-active");
  burger.classList.toggle("burger-active");
});

// меню поиска

let search = document.querySelector(".header_nav__list__item__link-search");
let searchMenu = document.querySelector(".header-search__menu");
let exit = document.querySelector(".exit");

search.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  searchMenu.classList.toggle("search__menu-active");
});

exit.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  searchMenu.classList.toggle("search__menu-active");
});

// слайдеры

const swiper = new Swiper(".swiper", {
  // листание по горизонтали или вертикали
  direction: "horizontal",
  // количество картинок показаных за раз на слайде
  slidesPerView: 1,
  // зацикливание картинок по кругу
  loop: true,

  // клики на кнопки слайда для пролистывание картинок
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // свайпы вправо,лево
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// акардион

$(".accordion").accordion({
  // при нажатии закрывает
  collapsible: true,
  // что бы сразу был закрытый элемент
  active: false,
});

// let animation = document.querySelector(".questions__list__item__link__icon");

// document.querySelectorAll(".questions__line").forEach(function (lineSq) {
//   lineSq.addEventListener("click", function () {
//     animation.classList.toggle("animation--active");
//   });
// });

// табы

// мы находим все элементы (querySelectorAll) кнопок наших табов (основынх) по классу
// и для каждого из них (forEach) задаем функцию и сразу же ее называем/заносим в переменую (tabsBtn)
document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  // обращяемся к нашей перемоной и добавляем событие (addEventListener)
  // по click через функцию с добавление новой переменой (e)
  tabsBtn.addEventListener("click", function (e) {
    // Здесь мы создаём переменную path и помещаем в неё некое значение
    // e.currentTarget выделяет конкретный нажатый элемент — то есть нашу кнопку
    // dataset.path позволяет нам получить значения атрибута data-path
    const path = e.currentTarget.dataset.path;
    // тут мы ищем все элементы таба, которые существуют, и у всех удаляем класс активности
    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs--active");
    });
    e.currentTarget.classList.add("tabs--active");
    // прошлись по всем и удалили класс, а затем снова использовали
    // e.currentTarget для поиска текущего нажатого элемента и дали ему класс.
    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    // Здесь мы обращаемся к элементу с data-target и даём ему класс активности
    document
      // `[data-target="${path}"]` подставляет нашу переменную path в data-target
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});
