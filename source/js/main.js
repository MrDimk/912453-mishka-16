var burger = document.querySelector('.main-nav__burger-btn');
var opened = 'main-nav__burger-btn--opened';
var closed = 'main-nav__burger-btn--closed';

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

var modal = document.querySelector('.purchase-popup');
var openModalButtons = document.querySelectorAll('.js-modal');
var mOpened = 'modal--opened';
var mClosed = 'modal--closed';

var closeModal = function(e) {
  if(e.target.className.indexOf('purchase-popup') === -1) {
    modal.classList.remove(mOpened);
    modal.classList.add(mClosed);
    document.removeEventListener('click', closeModal);
  }
};

var openModal = function(evt) {
  evt.preventDefault();
  if(modal.classList.contains(mClosed)) {
    modal.classList.remove(mClosed);
    modal.classList.add(mOpened);
    setTimeout( function() {
      document.addEventListener('click', closeModal);
    }, 100);
  }
}

var keyboardHandler = function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal(evt);
  }
}

for(var i = 0; i < openModalButtons.length; i++) {
  openModalButtons[i].addEventListener('click', openModal);
}

window.addEventListener('keydown', keyboardHandler);

//End
