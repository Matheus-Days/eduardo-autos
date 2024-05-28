const backdropEl = document.getElementById('backdrop');
const menuButtonEl = document.getElementById('menu-button');
const menuIconEl = document.getElementById('menu-icon');
const navigationEl = document.getElementById('navigation');
const carouselDialogEl = document.getElementById('carousel-dialog');
const carouselDialogImgEl = document.getElementById('carousel-dialog-img');
const closeDialogButton = document.getElementById('close-dialog-button');

function enableBodyScroll(enable) {
  document.querySelector('body').style.overflow = enable ? 'unset' : 'hidden';
}

function showBackdrop(show) {
  backdropEl.style.display = show ? 'block' : 'none';
}

function showNavigation(show) {
  navigationEl.style.display = show ? 'flex' : 'none';
}

function openNav() {
  showBackdrop(true);
  enableBodyScroll(false);
  showNavigation(true);

  menuIconEl.src = 'x.svg';
  menuButtonEl.onclick = closeNav;
}

function closeNav() {
  if (window.innerWidth > 1080) return;

  showBackdrop(false);
  enableBodyScroll(true);
  showNavigation(false);

  menuIconEl.src = 'menu.svg';
  menuButtonEl.onclick = openNav;
}

function showCarouselDialog(show) {
  carouselDialogEl.style.display = show ? 'flex' : 'none';
}

function openCarouselDialog(src) {
  carouselDialogImgEl.src = src;
  showCarouselDialog(true);
  enableBodyScroll(false);
}

function closeCarouselDialog() {
  console.log('close');
  carouselDialogImgEl.src = '';
  showCarouselDialog(false);
  enableBodyScroll(true);
}

// TEMPLATE FUNCTIONS SETUP

menuButtonEl.onclick = openNav;
backdropEl.onclick = closeNav;
carouselDialogEl.onclick = closeCarouselDialog;
closeDialogButton.onclick = closeCarouselDialog;
carouselDialogImgEl.onclick = (e) => e.stopPropagation();

// Add close behaviour to navigation links
const navLinks = document.getElementsByClassName('nav-link');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = closeNav;
}

// Add open behaviour to carousel pictures
const carouselPics = document.getElementsByClassName('img-container');
const carouselSources = [
  'carousel-pics/diagnostico.webp',
  'carousel-pics/ferramentas.webp',
  'carousel-pics/fachada.webp'
];

for (let i = 0; i < carouselPics.length; i++) {
  carouselPics[i].onclick = () => openCarouselDialog(carouselSources[i]);
}
