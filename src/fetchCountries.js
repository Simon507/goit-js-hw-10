import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { makeUpCountryList } from './index';
import { makeUpCountryCard } from './index';

function fetchCountries(name) {
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
          `Пожалуйста продолжайте вводить запрос. Слишком много совпадений`
        );
      } else if (data.length > 1) {
        makeUpCountryList(data);
      } else {
        makeUpCountryCard(data);
      }
    })
    .catch(error => {
      console.log(error);
    });
}

export { fetchCountries };
