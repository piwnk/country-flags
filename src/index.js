import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './App';
import store from './store';

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Wrapper />, document.getElementById('root'));
