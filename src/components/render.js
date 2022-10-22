import background from './background/background';
import header from './header/header';
import main from './main/main';
import footer from './footer/footer';
import { defaultWeather } from '../functions/callOpenWeather';
import 'normalize-css/normalize.css';
import '../style.css';

export default () => {
  defaultWeather();
  document.body.append(
    background.container,
    header.container,
    main,
    footer,
  );
};
