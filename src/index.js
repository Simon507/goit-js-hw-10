import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
var debounce = require('lodash/debounce');

input.addEventListener(
  'input',
  debounce(fetch => {
    onInput();
  }, DEBOUNCE_DELAY)
);

function onInput() {
  while (countryList.firstChild) {
    countryList.firstChild.remove();
  }
  while (countryInfo.firstChild) {
    countryInfo.firstChild.remove();
  }
  let name = input.value.trim();

  fetchCountries(name);
}
function makeUpCountryList(data) {
  for (let i = 0; i < data.length; i++) {
    const newItem = document.createElement('li');
    const newImg = document.createElement('img');
    const newTxt = document.createElement('p');
    newTxt.classList.add('_txt');
    newImg.classList.add('_img');
    newImg.style.width = '50px';
    newImg.style.height = '25px';
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

function makeUpCountryCard(data) {
  const newImg = document.createElement('img');
  const newList = document.createElement('ul');
  for (let i = 1; i < 5; i++) {
    const newItem = document.createElement('li');
    newItem.setAttribute('class', `li${i}`);
    newList.append(newItem);
  }

  newImg.src = data[0].flags.svg;
  newList.style.margin = '0';
  newList.style.padding = '0';
  newList.style.listStyle = 'none';
  newImg.style.width = '150px';
  newImg.style.height = '75px';

  countryInfo.append(newImg);
  countryInfo.append(newList);
  const li_1 = document.querySelector('.li1');
  const li_2 = document.querySelector('.li2');
  const li_3 = document.querySelector('.li3');
  const li_4 = document.querySelector('.li4');
  li_1.textContent = data[0].name.official;
  li_1.style.fontSize = '36px';
  li_1.style.fontStyle = 'bold';
  li_2.textContent = `Capital: ${data[0].capital}`;
  li_3.textContent = `Language: ${Object.values(data[0].languages)}`;
  li_4.textContent = `Population: ${data[0].population}`;
}

export { makeUpCountryList };
export { makeUpCountryCard };
