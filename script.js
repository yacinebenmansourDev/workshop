'strict mode';

const btn = document.querySelector('.darkmode-btn');
const icons = document.querySelectorAll('.toggle-icon');
const root = document.querySelector('html');

btn.addEventListener('click', () => {
  root.classList.toggle('dark-theme');

  icons.forEach((icon) => {
    icon.classList.toggle('hide');
  });
});
