var menuItemsContainer = document.getElementById('menu-items-container');
var hamburgerButton = document.getElementById('hamburger-button');
var path = window.location.pathname;
var links = document.querySelectorAll('a');




hamburgerButton.addEventListener('click', function() {
  menuItemsContainer.classList.toggle('open');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 1020) {
    menuItemsContainer.classList.remove('open');
  }
});