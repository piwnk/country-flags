export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';

export const filterCountries = searchText => ({
  type: FILTER_COUNTRIES,
  searchText,
});
