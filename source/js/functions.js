var site_nav = document.querySelector('.site-nav');
var header_toggle = document.querySelector('.page-header__toggle');

header_toggle.addEventListener('click', function() {
  if (site_nav.classList.contains('site-nav--closed')) {
    site_nav.classList.remove('site-nav--closed');
    site_nav.classList.add('site-nav--opened');
  } else {
    site_nav.classList.add('site-nav--closed');
    site_nav.classList.remove('site-nav--opened');
  }
});

/*
  header_toggle.addEventListener('click', function() {
    if(header__toggle.classList.contains('page-header__toggle--opened')) {
      header__toggle.classList.remove('page-header__toggle--opened');
      header__toggle.classList.add('page-header__toggle--closed');
    } else {
      header__toggle.classList.add('page-header__toggle--opened');
      site_nav.classList.remove('page-header__toggle--closed');
    }
  });
*/
