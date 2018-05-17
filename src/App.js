import React from 'react';

import './App.css';

// import Header from './components/Header';
import Search from './components/Search';
import CountryList from './components/CountryList';

export default () => (
  <div className="App">
    {/* <Header /> */}
    <Search />
    <CountryList />
  </div>
);
