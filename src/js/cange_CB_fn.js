import Theme from './theme';
import refs from './refs';

export default function changeChekboxHandler() {
  if (refs.onCheckBox.checked) {
    refs.onBody.classList.remove(Theme.LIGHT);
    refs.onBody.classList.add(Theme.DARK);
    localStorage.setItem('currentTheme', 'dark-theme');
  } else {
    refs.onBody.classList.remove(Theme.DARK);
    refs.onBody.classList.add(Theme.LIGHT);
    localStorage.setItem('currentTheme', 'light-theme');
  }
}
