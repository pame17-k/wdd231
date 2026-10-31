const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

//esta es la que pathway me da
navbutton.addEventListener('click', () => {
  const isOpen = navbutton.classList.toggle('show');
  navbutton.setAttribute('aria-expanded', isOpen);
  navlinks.classList.toggle('show');
});

//esta es con el video del instructor
//navbutton.addEventListener('click', () => {
//    navbutton.classList.toggle('show');
//    navlinks.classList.toggle('show');
    
//});