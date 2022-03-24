const selectHeader = () => {
  const selectCity = document.getElementById('select-city');

  selectCity.addEventListener('click', ({ target }) => {
    let selectHeader = target.closest('.select__header');
    const selectItem = target.closest('.select__item');
    const selectBody = selectCity.querySelector('.select__body');

    if (selectHeader) {
      selectBody.classList.toggle('select__body--active');
      selectHeader.classList.toggle('select__header--active');
      if (selectBody.classList.contains('select__body--active'))
        selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
      else
        selectBody.style.maxHeight = null;
    }

    selectBody
    
    if (selectItem) {
      selectHeader = selectCity.querySelector('.select__header');
      selectHeader.textContent = selectItem.textContent;
      selectBody.classList.remove('select__body--active');
      selectHeader.classList.remove('select__header--active');
      selectBody.style.maxHright = null;
    }
  });
}

export default selectHeader;