window.addEventListener('load', () => {
  const id = document.querySelector('#nav-1'),
    bag = document.querySelector('#nav-2'),
    buy = document.querySelector('#nav-3'),
    fb = document.querySelector('#nav-4'),
    basket = document.querySelector('.basket'),
    form = document.querySelector('.form'),
    order = document.querySelector('.order'),
    feedback = document.querySelector('.feedback'),
    title = document.querySelector('.main-nav__title'),
    plus = document.querySelector('.plus'),
    num = document.querySelector('.num'),
    minus = document.querySelector('.minus'),
    price = document.querySelector('.price__text'),
    price2 = document.querySelector('#price'),
    bigPrice = document.querySelector('.promo__price'),
    promoBtn = document.querySelector('.promo__btn'),
    promoText = document.querySelector('.promo__text'),
    promoCheck = document.querySelector('.promo__check'),
    promoBtn2 = document.querySelector('.promo__btn-2'),
    basketClose = document.querySelector('.basket__close'),
    newItem = document.querySelector('.new-item'),
    itemBtn = document.querySelector('.new-item__btn'),
    itemBtn2 = document.querySelector('.new-item__btn-2'),
    wrapper = document.querySelector('.wrapper'),
    itemNum = document.querySelector('.new-item-3'),
    menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger');
  var counter = 1,
    pricee = 900,
    pricee2 = 900,
    pricee3 = 900;

  bag.addEventListener('click', function (e) {
    e.preventDefault();
    basket.classList.add('active');
    form.classList.add('noactive');
    basket.classList.remove('noactive');
    order.classList.add('noactive');
    order.classList.remove('active');
    feedback.classList.add('noactive');
    feedback.classList.remove('active');
    bag.style.color = '#FFF300';
    id.style.color = '#FFFFFF';
    buy.style.color = '#FFFFFF';
    fb.style.color = '#FFFFFF';
    title.textContent = 'Корзина';
  });

  id.addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.remove('noactive');
    form.classList.add('active');
    basket.classList.add('noactive');
    basket.classList.remove('active');
    order.classList.remove('active');
    order.classList.add('noactive');
    feedback.classList.add('noactive');
    feedback.classList.remove('active');
    id.style.color = '#FFF300';
    bag.style.color = '#FFFFFF';
    buy.style.color = '#FFFFFF';
    fb.style.color = '#FFFFFF';
    title.textContent = 'Профиль';
  });

  buy.addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.add('noactive');
    form.classList.remove('active');
    basket.classList.add('noactive');
    basket.classList.remove('active');
    order.classList.add('active');
    order.classList.remove('noactive');
    feedback.classList.add('noactive');
    feedback.classList.remove('active');
    id.style.color = '#FFFFFF';
    bag.style.color = '#FFFFFF';
    buy.style.color = '#FFF300';
    fb.style.color = '#FFFFFF';
    title.textContent = 'Мои заказы';
  });

  fb.addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.add('noactive');
    form.classList.remove('active');
    basket.classList.add('noactive');
    basket.classList.remove('active');
    order.classList.remove('active');
    order.classList.add('noactive');
    feedback.classList.remove('noactive');
    feedback.classList.add('active');
    id.style.color = '#FFFFFF';
    bag.style.color = '#FFFFFF';
    buy.style.color = '#FFFFFF';
    fb.style.color = '#FFF300';
    title.textContent = 'Обратная связь';
  });

  plus.addEventListener('click', () => {
    counter++;
    num.textContent = counter;
    price.textContent = (pricee = pricee + 900) + ' ₽';
    price2.textContent = (pricee2 = pricee2 + 900) + ' ₽';
    bigPrice.textContent = (pricee3 = pricee3 + 900) + ' ₽';
  });

  minus.addEventListener('click', () => {
    if (counter > 1) {
      counter--;
      num.textContent = counter;
      price.textContent = (pricee = pricee - 900) + ' ₽';
      price2.textContent = (pricee2 = pricee2 - 900) + ' ₽';
      bigPrice.textContent = (pricee3 = pricee3 - 900) + ' ₽';
    } else {
      counter;
      pricee;
      pricee2;
    }
  });

  promoBtn.addEventListener('mousemove', () => {
    promoBtn.classList.toggle('active');
  });

  promoBtn.addEventListener('click', () => {
    promoText.classList.add('miss');
    promoCheck.classList.add('miss');
    promoBtn.classList.add('miss');
    bigPrice.classList.add('miss');
    promoBtn2.classList.add('miss');
  });

  promoBtn2.addEventListener('click', () => {
    basket.classList.add('miss');
    newItem.classList.add('active');
    itemNum.textContent = counter;
  });

  basketClose.addEventListener('click', () => {
    basket.classList.add('miss');
  });

  itemBtn.addEventListener('click', () => {
    itemBtn.classList.add('noactive');
    itemBtn2.classList.add('active');
    itemBtn2.classList.remove('noactive');
    itemBtn.classList.remove('active');
    wrapper.classList.toggle('active');
    newItem.classList.toggle('full');
  });

  itemBtn2.addEventListener('click', () => {
    itemBtn.classList.add('active');
    itemBtn.classList.remove('noactive');
    itemBtn2.classList.remove('active');
    itemBtn2.classList.add('noactive');
    wrapper.classList.toggle('active');
    newItem.classList.toggle('full');
  });

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
});
