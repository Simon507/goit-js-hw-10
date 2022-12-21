import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');

input.addEventListener('input', onInput);

onInput();
function onInput() {
  let name = input.value;
  let nameLength = input.selectionEnd;
  if (nameLength < 1) {
    Notify.warning(`ADD SYMBOLS`);
  } else {
    fetchCountries(name);
  }
}
function makeUpCountryList(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].capital);
    const newItem = document.createElement('li');
    const newImg = document.createElement('img');
    const newTxt = document.createElement('p');
    newTxt.classList.add('_txt');
    newImg.classList.add('_img');
    newImg.style.width = '100px';
    newImg.style.height = '50px';
    newImg.style.marginRight = '25px';
    newItem.classList.add('_item');
    newImg.src = data[i].flags.svg;
    newTxt.textContent = data[i].name.official;
    newItem.style.listStyle = 'none';
    newItem.style.display = 'flex';
    newItem.append(newImg);
    newItem.append(newTxt);
    countryList.append(newItem);
  }
}

export { makeUpCountryList };
