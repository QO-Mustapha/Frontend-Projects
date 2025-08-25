
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.site-header__menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Optional: close menu after clicking a link
  document.querySelectorAll('.site-header__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
