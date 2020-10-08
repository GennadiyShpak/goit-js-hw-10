import './styles.css';
import refs from './js/refs';
import products from './menu.json';
import template from './handlebars/main.hbs';
import changeChekboxHandler from './js/cange_CB_fn';
import viewPortThemeHandler from './js/viewport_theme_handler';

refs.onMenuList.insertAdjacentHTML('beforeend', template({ products }));
viewPortThemeHandler();
refs.onCheckBox.addEventListener('change', changeChekboxHandler);
