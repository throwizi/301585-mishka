var modal = document.querySelector(".modal");

document.addEventListener("click", function (event) {
  if(!event.target.closest(".btn-modal")) return;

  modal.classList.add("modal--open");
});

document.addEventListener("click", function (event) {
  if(!event.target.closest(".modal__close-btn")) return;

  modal.classList.remove("modal--open");
});
