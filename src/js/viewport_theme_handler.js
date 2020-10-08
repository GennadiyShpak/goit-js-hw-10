import refs from './refs';
import Theme from './theme';
import lightThemeInstaller from './event_FN';

export default function viewPortThemeHandler() {
  if (
    localStorage.getItem('currentTheme') === null ||
    localStorage.getItem('currentTheme') === 'light-theme'
  ) {
    lightThemeInstaller;
  } else {
    refs.onBody.classList.add(Theme.DARK);
    refs.onCheckBox.checked = true;
  }
}
