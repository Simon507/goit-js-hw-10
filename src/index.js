import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');

const userList = document.querySelector('.user-list');

input.addEventListener('input', onInput);

onInput();
function onInput() {
  //   let name = input.value;
  let name = 'peru';
  let nameLength = input.selectionEnd;
  if (nameLength < 3) {
    Notify.warning(`ADD SYMBOLS`);
  } else {
    fetchCountries(name);
  }

  //   fetch();
}
