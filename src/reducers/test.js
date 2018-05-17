const fs = require('fs');

const countriesJSON = fs.readFileSync('src/data/countries.json');

const countries = JSON.parse(countriesJSON).map(country => ({
  name: country.name,
  countryCode: country['country-code'],
  alpha2: country['alpha-2'],
  region: country.region,
  subRegion: country['sub-region'],
}));

// const regions = [...new Set(countries.map(country => country.region))];
// const subRegions = [...new Set(countries.map(country => country.subRegion))];
// const countryCodes = countries.map(country => country.countryCode);

console.log(countries);
