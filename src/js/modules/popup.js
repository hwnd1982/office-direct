const popup = () => {
  const modal = document.querySelector('.modal__overlay');
  const modalButtons = document.querySelectorAll('.button__modals');

  modal.addEventListener('click', ({ target, currentTarget }) => {
    if (target === currentTarget) {
      modal.classList.remove('modal__overlay--active');

      document.body.style.paddingRight = `${innerWidth - document.body.scrollWidth}px`
      document.body.classList.remove('no-scroll');
    } 
  });

  modalButtons.forEach(button => button.addEventListener('click', () => {
    modal.classList.add('modal__overlay--active');
    
    document.body.style.paddingRight = `${innerWidth - document.body.scrollWidth}px`
    document.body.classList.add('no-scroll');
  }));
};

export default popup;