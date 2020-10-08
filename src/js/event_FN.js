import refs from './refs';
import Theme from './theme';

export default function lightThemeInstaller() {
  refs.onBody.classList.add(Theme.LIGHT);
  refs.onCheckBox.checked = false;
}
