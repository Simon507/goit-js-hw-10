import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { makeUpCountryList } from './index';
import { makeUpCountryCard } from './index';

function fetchCountries(name) {
  if (!name) {
    return;
  }
  const searchParams = {
    name: 'name',
    capital: 'capital',
    population: 'population',
    flags: 'flags',
    languages: 'languages',
  };

  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=${Object.values(
      searchParams
    )}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notify.warning(
          `Too many matches found. Please enter a more specific name.`
        );
      } else if (data.length > 1) {
        makeUpCountryList(data);
      } else {
        makeUpCountryCard(data);
      }
    })
    .catch(error => {
      if (error.message == '404') {
        Notify.failure(`Oops, there is no country with that name`);
      }
    });
}

export { fetchCountries };
