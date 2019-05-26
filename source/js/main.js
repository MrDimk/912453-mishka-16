var burger = document.querySelector('.main-nav__burger-btn');
const opened = 'main-nav__burger-btn--opened';
const closed = 'main-nav__burger-btn--closed';

burger.classList.add('main-nav__burger-btn--closed');

burger.addEventListener('click', function(e) {
  if(e.target.classList.contains(closed)) {
    e.target.classList.remove(closed);
    e.target.classList.add(opened);
  } else if (e.target.classList.contains(opened)) {
    e.target.classList.remove(opened);
    e.target.classList.add(closed);
  }
});

// /////////////////modal

// var modal = document.querySelector('.purchase-popup');
// var openModal = document.querySelector('.js-modal');
// const mOpened = 'modal--opened';
// const mClosed = 'modal--closed';
// console.log(modal);

// var closeModal = function() {
//   modal.classList.remove(mOpened);
//   modal.classList.add(mClosed);
// };

// openModal.addEventListener('click', function(e) {
//   if(modal.classList.contains(mClosed)) {
//     modal.classList.remove(mClosed);
//     modal.classList.add(mOpened);
//   }
// });

// window.addEventListener('click', function(e) {
//   if(modal.classList.contains(mOpened) && (e.target.className.indexOf('purchase-popup') === -1)) {
//     // closeModal();
//   }
//   console.log(e.target);
//   console.log(e.target.className);
//   console.log(e.target.className.indexOf('purchase-popup'));
// });

//End
