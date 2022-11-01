const swiper = new Swiper(".mySwiper", {
  initialSlide: 0,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1100: {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
      loop: true,
    }
  }
});

/* Burger menu */
const burgerMenu = document.querySelector('.header__burger'),
      nav = document.querySelector('.nav'),
      navItems = document.querySelectorAll('.nav__bar'),
      closeBtn = document.querySelector('.close'),
      popupOverlay = document.querySelector('.popup__overlay'),
      overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', () => {
  if(burgerMenu.classList.toggle('active')){
    nav.classList.add('active');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; 
  } else {
    nav.classList.remove('active');
    overlay.classList.remove('open');
  }
});

function closeBurgerMenu(el) {
  el.addEventListener('click', (event) => {
    if(burgerMenu !== event.target) {
      nav.classList.remove('active');
      burgerMenu.classList.remove('active');
      overlay.classList.remove('open');
      document.body.style.overflow = ''; 
    }
  })
};
closeBurgerMenu(closeBtn);
closeBurgerMenu(overlay);

navItems.forEach(item => {
  item.addEventListener('click', () => {
    if(burgerMenu.classList.contains('active')){
      nav.classList.remove('active');
      burgerMenu.classList.remove('active');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  })
});

/* Popup */

const login = document.querySelector('.login');
const account = document.querySelector('.account');
const popup = document.querySelector('.popup');
const containerPopup = document.querySelector('.container__popup');

function openPopup(el) {
  el.addEventListener('click', () => {
    popupOverlay.classList.add('open');
    popup.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
}
openPopup(login);
openPopup(account);

containerPopup.addEventListener("click", function(event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    popupOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* Click to Register */

const registerBtn = document.querySelector('.register');
const formSignin = document.querySelector('.form__signin');
const formSignup = document.querySelector('.form__signup');
const loginBtn = document.querySelector('.login__btn');

registerBtn.addEventListener('click', () => {
  formSignin.style.display = 'none';
  formSignup.style.display = 'flex';
});
loginBtn.addEventListener('click', () => {
  formSignin.style.display = 'flex';
  formSignup.style.display = 'none';
})

/* Submit form */

const form = document.querySelector('.form__signin');
const email = document.getElementById('name');
const password = document.getElementById('password');

function getFormValue(event) {
  event.preventDefault();
  const data = {
    email: email.value,
    password: password.value
  };

  const greetPopup = document.createElement('p');
  greetPopup.className = 'greet';
  greetPopup.innerHTML = `<span>Welcome Back, ${data.email}! Your password ${data.password}.</span>`;
  if(document.body.appendChild(greetPopup)) {
    popup.classList.add("hidden");
    popupOverlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      document.body.removeChild(greetPopup);
    }, 2000);
  }
}

form.addEventListener('submit', getFormValue);

console.log('Самооценка: \n 1. Слайдер изображений в секции destinations +50.\n 2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n Итого: 100 из 100')
