function fetchCountries(name) {
  //   console.log(`Name: ${name} of ${nameLength} symbols`);

  //   if (nameLength < 3) {
  //     Notify.warning(`ADD SYMBOLS`);
  //     return;
  //   } else {
  // Notify.success(`FIND`);
  // fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //   .then(users => {
  //     console.log('users inside then callback: ', users);
  //   });

  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });

  // fetch('https://restcountries.com/v3.1/name/peru').then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   console.log(response.json());
  //   return response.json();
  // });
  //   }
}

export { fetchCountries };
