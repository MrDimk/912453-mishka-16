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

//End
