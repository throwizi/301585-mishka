var body = document.querySelector("body"),
    btn__modal = document.querySelector(".btn-modal"),
    modal = document.querySelector(".modal"),
    modal__closeBtn = document.querySelector(".modal__close-btn");


body.onclick = function (event) {
  var target = event.target;

  if(target.classList.contains("btn-modal")) {
    target.addEventListener("click", function () {

      if(modal.classList.contains("modal--open")){
        modal.classList.remove("modal--open");
      } else {
        modal.classList.add("modal--open");
      }
    });
  }
};

modal__closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  if(modal.classList.contains("modal--open")) {
    modal.classList.remove("modal--open");
  }
});


/* //Открытие модального окна
btn__modalbtn__modal.addEventListener("click", function (evt) {
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

*/
