const confirmModal = async (options) => {
  const box = (() => {
    const container = document.createElement('dialog');
    container.classList.add('custom-modal');
    container.style = `
  background-color:white;
  border:solid 1px;
  padding:10px;
  display:block;
  width:500px;
  position:absolute;
  /*top:200px;
  left:0;
  right:0;*/
  margin:auto;
  z-index:99999999;
  `;
    const title = document.createElement('h2');
    title.textContent = options?.title || 'Confirm...';
    const message = document.createElement('p');
    message.textContent = options?.message || '';
    const yes = document.createElement('button');
    yes.textContent = options?.yes || 'Yes';
    const no = document.createElement('button');
    no.textContent = options?.no || 'No';

    container.append(title, message, yes);
    if (!options?.hideNo) container.append(no);

    return { container, yes, no };
  })();

  document.body.append(box.container);
  box.container.showModal();

  const hideBox = () => {
    box.container.close();
    document.body.removeChild(box.container);
  };

  return new Promise((resolve) => {
    box.yes.addEventListener('click', () => {
      resolve(true);
      hideBox();
    });
    box.no.addEventListener('click', () => {
      resolve(false);
      hideBox();
    });
  });
};

export default confirmModal;
