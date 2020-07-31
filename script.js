import timeline from './timeline/js/timeline.js';
// Hamburger Menu Javscript
const navTriggerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('nav');
const ContentEl = document.querySelector('.content');
const hamburgerBarsEl = document.getElementsByTagName('span');
const accordionItemsEl = document.getElementsByClassName('accordion__item');
const readMoreEl = document.getElementsByClassName('experience__read_more');

//Get Elements
const Year = document.getElementById('footerYear');

function toggleNav() {
  navTriggerEl.addEventListener('click', function () {
    navEl.classList.toggle('open');
    animateHamburgers();
  });
}
toggleNav();
function animateHamburgers() {
  for (let item of hamburgerBarsEl) {
    item.classList.toggle('change');
  }
}

timeline(document.querySelectorAll('#timeline-vertical'), {
  mode: 'horizontal',
  visibleItems: 2,
  forceVerticalMode: 800,
});

// Accordian javascript

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
scrollToTop();

window.addEventListener('scroll', debounce(scrollToTop));

modalTriggerEl.forEach((el) => {
  el.addEventListener('click', handleModalTigger);
});

modalEl.addEventListener('click', function (e) {
  const isOutside = e.target.closest('.modal-inner');
  !isOutside ? closeModal() : null;
});

window.addEventListener('keyup', function (e) {
  e.key === 'Escape' ? closeModal() : null;
});
