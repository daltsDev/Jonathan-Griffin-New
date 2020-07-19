// Hamburger Menu Javscript
const navTriggerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('nav');
const ContentEl = document.querySelector('.content');
const hamburgerBarsEl = document.getElementsByTagName('span');
import timeline from './timeline/js/timeline.js';

timeline(document.querySelectorAll('#timeline-horizontal'), {
  forceVerticalMode: 800,
  mode: 'horizontal',
  visibleItems: 3,
});
timeline(document.querySelectorAll('#timeline-vertical'), {
  verticalStartPosition: 'right',
  verticalTrigger: '150px',
});

function toggleNav() {
  navTriggerEl.addEventListener('click', function () {
    navEl.classList.toggle('open');
    animateHamburgers();
  });
}
function animateHamburgers() {
  for (let item of hamburgerBarsEl) {
    item.classList.toggle('change');
  }
}
toggleNav();

// Accordian javascript
let accordionItemsEl = document.getElementsByClassName('accordion__item');

function accordion() {
  for (let item of accordionItemsEl) {
    let accHeader = item.firstElementChild;
    accHeader.addEventListener('click', function (e) {
      let accDetails = this.nextElementSibling;
      if (accDetails.style.maxHeight) {
        accDetails.style.maxHeight = null;
        e.currentTarget.childNodes[1].getElementsByClassName('accordion__icon').item(0).innerHTML = '+';
        let element = e.target;
        element.clo;
      } else {
        accDetails.style.maxHeight = accDetails.scrollHeight + 'px';
        e.currentTarget.childNodes[1].getElementsByClassName('accordion__icon').item(0).innerHTML = '-';
      }
    });
  }
}
accordion();

// Experience Page Read More Read Less

let readMoreEl = document.getElementsByClassName('experience__read_more');
let hiddenText = document.querySelector('.experience__hidden');
let experienceDots = document.querySelector('.experience__dots');

function readMore() {
  for (let items of readMoreEl) {
    let readMoreText = items;
    // console.log(readMoreText)
    readMoreText.addEventListener('click', function (e) {
      let hiddenTxt = e.target.previousElementSibling.lastElementChild;
      let dots = e.target.previousElementSibling.children[0];
      if (hiddenTxt.style.display === 'inline') {
        hiddenTxt.style.display = 'none';
        e.srcElement.innerHTML = 'Read More';
        dots.style.display = 'inline';
      } else {
        hiddenTxt.style.display = 'inline';
        e.srcElement.innerHTML = 'Read Less';
        dots.style.display = 'none';
      }
    });
  }
}

readMore();
// Experience Modal

const modalTriggerEl = document.querySelectorAll('.modal-trigger');
//Get Elements
const modalEl = document.querySelector('.modal');
const modalDateEl = document.querySelector('.modal_exper-date');
const modalTitleEl = document.querySelector('.modal_exper-title');
const modalContentEl = document.querySelector('.modal_exper-content');

modalTriggerEl.forEach((el) => {
  el.addEventListener('click', handleModalTigger);
});

function handleModalTigger(e) {
  // Get Content
  const mainDiv = e.target.offsetParent;
  const date = mainDiv.children[0].innerText;
  const title = mainDiv.children[1].innerText;
  const content = mainDiv.children[2].innerText;

  // Replace Mondal Content
  modalDateEl.innerHTML = date;
  modalTitleEl.innerHTML = title;
  modalContentEl.innerHTML = content;
  modalEl.classList.add('open');
}

function closeModal() {
  modalEl.classList.remove('open');
}
modalEl.addEventListener('click', function (e) {
  const isOutside = e.target.closest('.modal-inner');
  !isOutside ? closeModal() : null;
});
window.addEventListener('keyup', function (e) {
  e.key === 'Escape' ? closeModal() : null;
});

const Year = document.getElementById('footerYear');

(function updateFooterYear() {
  const year = new Date().getFullYear();
  Year.innerHTML = year;
})();

function debounce(func, wait = 15, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function scrollToTop() {
  const threeQuarter = Math.floor(window.document.body.scrollHeight * 0.55);
  const backToTopEl = document.getElementById('backToTop');
  if (window.scrollY > threeQuarter) {
    backToTopEl.style.display = 'block';
  }

  if (window.scrollY < threeQuarter) {
    backToTopEl.style.display = 'none';
  }
}

window.addEventListener('scroll', debounce(scrollToTop));
scrollToTop();
