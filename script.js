// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('#navbar') && !event.target.matches('#bar')) {
    nav.classList.remove('active');
    console.log('Clicked outside navbar. Closing navbar.');
  }
});
