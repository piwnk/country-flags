import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Flag = ({ countryAlpha }) => (
  <div>
    <img className="flag" src={`svg/${countryAlpha}.svg`} alt="flag" />
  </div>
);

Flag.propTypes = {
  countryAlpha: PropTypes.string.isRequired,
};

export default Flag;
