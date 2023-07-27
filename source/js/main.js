import {iosVhFix} from './utils/ios-vh-fix';
import {checkReviewsSwiper, checkCoachSwiper} from './modules/slider.js';
import {showContent} from './modules/tabs';
import {showAccordion, showContentAccordion} from './modules/accordion';
import {findVideos} from './modules/video';
import {onEventCalllback} from './modules/phone-mask.js';
import {formValidate} from './modules/form';
import {resetFocus} from './utils/reset-focus';


document.querySelector('html').classList.remove('no-js');
const phoneInputs = document.querySelectorAll('[data-phone-pattern]');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();

  if (phoneInputs) {
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, onEventCalllback);
      }
    }
  }
  // Modules
  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    checkReviewsSwiper();
    checkCoachSwiper();
    showContent();
    showAccordion();
    showContentAccordion();
    findVideos();
    formValidate();
    resetFocus();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
