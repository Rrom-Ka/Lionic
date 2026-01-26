// бургер


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('header__nav-active');
    document.body.classList.toggle('stop-scroll');

  })

menulinks.forEach(function (el) {
  el.addEventListener('click', function () {

      burger.classList.remove('burger-active');
      menu.classList.remove('header__nav-active');
      document.body.classList.remove('stop-scroll');
    })
});

// показать еще

let button=document.querySelector('.articles__btn');
let articlesitem=document.querySelectorAll('.articles__item');

button.addEventListener('click', // по клику на кнопку
function() {
  articlesitem.forEach(function(el){
    el.classList.add('articles__item-visible') // для каждого блока добавляем класс
  });
  button.closest('.articles__center').classList.add('articles__center-hidden'); //находим родителя и добавляем ему класс
});
