import background from './background/background';
import header from './header/header';
import main from './main/main';
import footer from './footer/footer';

export default () => {
  document.body.append(
    background,
    header,
    main,
    footer,
  );
  console.log('rendered');
};
