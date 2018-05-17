import { FILTER_COUNTRIES } from '../actions';
import countriesJSON from '../data/countries.json';


const countriesAll = countriesJSON.map(country => ({
  name: country.name,
  countryCode: country['country-code'],
  alpha2: country['alpha-2'],
  region: country.region,
  subRegion: country['sub-region'],
}));


const regions = [...new Set(countriesAll.map(country => country.region))];
const subRegions = [...new Set(countriesAll.map(country => country.subRegion))];
const countryCodes = countriesAll.map(country => country.countryCode);
const countryAlphas = countriesAll.map(country => country.alpha2.toLowerCase());

const initialState = {
  visibleCountries: countriesAll,
  countryAlphas,
  countryCodes,
  regions,
  subRegions,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COUNTRIES:
      const regex = new RegExp(`${action.searchText}.*`, 'gi');
      return {
        ...state,
        visibleCountries: action.searchText
          ? state.visibleCountries.filter(country => country.name.match(regex))
          : countriesAll,
      };
    default:
      return state;
  }
};
