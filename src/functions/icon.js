import 'iconify-icon';

export default (name) => {
  const icon = document.createElement('iconify-icon');
  icon.setAttribute('icon', name);
  return icon;
};
