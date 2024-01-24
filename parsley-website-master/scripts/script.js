// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
  // Close mobile naviagtion
  if (link.classList.contains('main-nav-link'))
    headerEl.classList.toggle('nav-open');
});
