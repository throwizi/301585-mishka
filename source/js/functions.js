var btn__modal = document.querySelector('.btn-modal'),

    modal = document.querySelector('.modal'),

    modal__closeBtn = document.querySelector(".modal__close-btn"),

    menuBtn = document.querySelector('.page-header__toggle'),

    site_nav = document.querySelector('.site-nav'),

    product__order



//Открытие/Закрытие меню
menuBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (site_nav.classList.contains('site-nav--closed')) {
    site_nav.classList.remove('site-nav--closed');
    site_nav.classList.add('site-nav--opened');
  } else {
    site_nav.classList.add('site-nav--closed');
    site_nav.classList.remove('site-nav--opened');
  }
});


//Открытие модального окна
btn__modal.addEventListener("click", function (evt) {
  evt.preventDefault();

  if(modal.classList.contains("modal--open")){
    modal.classList.remove("modal--open");
  } else {
    modal.classList.add("modal--open");
  }
});

//Закрытие модального окна
modal__closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  if(modal.classList.contains("modal--open")){
    modal.classList.remove("modal--open");
  }
});


  menuBtn.addEventListener("click", function() {
    if(menuBtn.classList.contains("page-header__toggle--opened")) {
      menuBtn.classList.remove("page-header__toggle--opened");
      menuBtn.classList.add("page-header__toggle--closed")
    } else {
      menuBtn.classList.remove("page-header__toggle--closed")
      menuBtn.classList.add("page-header__toggle--opened");
    }
  });
