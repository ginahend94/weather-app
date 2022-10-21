import background from './background/background';
import header from './header/header';
import main from './main/main';
import footer from './footer/footer';
import 'normalize-css/normalize.css';
import '../style.css';

export default () => {
  document.body.append(
    background.container,
    header.container,
    main,
    footer,
  );
};
