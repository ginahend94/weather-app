import './dialog.css';

const confirmModal = async (options) => {
  const box = (() => {
    const container = document.createElement('dialog');
    container.classList.add('custom-modal');
    const title = document.createElement('h2');
    title.textContent = options?.title || 'Confirm...';
    const message = document.createElement('div');
    message.textContent = options?.message || '';
    const menu = document.createElement('menu');
    const yes = document.createElement('button');
    yes.textContent = options?.yes || 'Yes';
    const no = document.createElement('button');
    no.textContent = options?.no || 'No';

    menu.append(yes);
    if (!options?.hideNo) menu.append(no);
    container.append(title, message, menu);

    document.body.append(container);

    return { container, yes, no };
  })();
  box.container.showModal();

  const hideBox = () => {
    box.container.close();
    // document.body.removeChild(box.container);
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
