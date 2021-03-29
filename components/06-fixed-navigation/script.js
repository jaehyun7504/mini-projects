'use strict';

function fixedNavigation() {
  const nav = document.querySelector('.navigation-bottom');
  window.addEventListener('scroll', () => {
    if (window.scrollY > nav.getBoundingClientRect().height) {
      nav.classList.add('fixed');
      return;
    }
    nav.classList.remove('fixed');
  });
}

fixedNavigation();
