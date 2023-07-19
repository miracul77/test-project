window.addEventListener('load', () => {
  const menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger'),
    carousel = document.querySelector('.carousel'),
    arrowBtns = document.querySelectorAll('.slider-arrow'),
    firstCard = carousel.querySelector('.firm').offsetWidth;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('nav_active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('nav_active');
    });
  });

  arrowBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      carousel.scrollLeft += btn.id == 'left' ? -firstCard : firstCard;
    });
  });
});
