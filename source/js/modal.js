var btn__modal = document.querySelector(".btn-modal"),
    modal = document.querySelector(".modal"),
    modal__closeBtn = document.querySelector(".modal__close-btn");

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

  if(modal.classList.contains("modal--open")) {
    modal.classList.remove("modal--open");
  }
});
