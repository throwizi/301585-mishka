var menuBtn = document.querySelector(".page-header__toggle"),

    site_nav = document.querySelector(".site-nav");

menuBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (site_nav.classList.contains("site-nav--closed")) {
    site_nav.classList.remove("site-nav--closed");
    site_nav.classList.add("site-nav--opened");
  } else {
    site_nav.classList.add("site-nav--closed");
    site_nav.classList.remove("site-nav--opened");
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
