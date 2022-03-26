const mobileMenu = () => {
  const header = document.querySelector('.header');
  const headerMobile = document.querySelector('.header__mobile');
  const headerBurger = document.querySelector('.header__burger-icon');
  const headerCross = document.querySelector('.header__cross-icon');
  const toggleMenu = () => {
    headerMobile.classList.toggle('header__mobile--active');

    if (headerMobile.classList.contains('header__mobile--active')) {
      headerBurger.style.display = 'none';
      headerCross.style.display = 'block';
      document.body.classList.add('no-scroll');
    } else {
      headerBurger.style.display = null;
      headerCross.style.display = null;
      document.body.classList.remove('no-scroll');
    }
  };

  header.addEventListener('click', ({ target }) => {
    if (target.closest('.header__burger') || (!target.matches('.header__mobile') && target.closest('.header__mobile')))
      toggleMenu();
  });
};

export default mobileMenu;
