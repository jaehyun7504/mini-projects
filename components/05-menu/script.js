function menu() {
  const backdrop = document.querySelector('.backdrop');
  const menuButton = document.querySelector('.menu-button');
  const menuContainer = document.querySelector('.menu-container');
  const items = document.querySelectorAll('.item');

  function showMenu() {
    backdrop.classList.remove('hidden');
    menuContainer.style.transform = 'translateX(100%)';
  }

  function hideMenu() {
    backdrop.classList.add('hidden');
    menuContainer.style.transform = 'translateX(0)';
  }

  items.forEach(item => item.addEventListener('click', hideMenu));
  backdrop.addEventListener('click', hideMenu);
  menuButton.addEventListener('click', showMenu);
}

menu();
