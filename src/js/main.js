import Swiper from 'swiper'
import mobileMenu from './mobile-menu'

const thumbsSlider = new Swiper(".previewMainSlider__slider", {
  spaceBetween: 21,
  slidesPerView: 4,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const mainSlider = new Swiper('.mainSlider', {
  navigation: {
    nextEl: ".arrows__right",
    prevEl: ".arrows__left",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  thumbs: {
    swiper: thumbsSlider,
  },
});

mobileMenu()

//Mobile CONTACTS
let openContactButton = document.querySelector('.openContactsBtn');
let contactsMenu = document.querySelector('.contactsMenu');
let closeContactsButton = document.querySelector('.closeContactsBtn');
openContactButton.addEventListener('click', () => {
  contactsMenu.classList.add('firstSection__aside_rightActive')
  openContactButton.disabled = true;
  closeContactsButton.disabled = false;
});
closeContactsButton.addEventListener('click', () => {
  contactsMenu.classList.remove('firstSection__aside_rightActive');
  openContactButton.disabled = false;
  closeContactsButton.disabled = true;
})