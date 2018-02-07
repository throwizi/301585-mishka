var menuBtn = document.querySelector(".page-header__toggle"),

    siteNav = document.querySelector(".site-nav");

    siteNav.classList.remove("site-nav--nojs");
    menuBtn.classList.remove("page-header__toggle--nojs");

menuBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (siteNav.classList.contains("site-nav--closed")) {
    siteNav.classList.remove("site-nav--closed");
    siteNav.classList.add("site-nav--opened");
  } else {
    siteNav.classList.add("site-nav--closed");
    siteNav.classList.remove("site-nav--opened");
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
