import React from 'react';

import './App.css';

// import Header from './components/Header';
import Search from './components/Search';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

export default () => (
  <div className="App">
    {/* <Header /> */}
    <Search />
    <CountryList />
    <CountryDetails />
  </div>
);
