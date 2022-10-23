const hideElement = (element, selector) => {
  const hide = (e) => {
    if (!e.target.closest(selector)) {
      element.style.display = 'none';
      removeListener();
    }
  };
  const removeListener = () => {
    document.body.removeEventListener('click', hide);
  };
  document.body.addEventListener('click', hide);
};

export { hideElement };
