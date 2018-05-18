import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Flag = ({ countryAlpha }) => (
  <div>
    {/* <button
      className="btn btn-primary"
      type="button"
      > */}
    <img
      className="flag"
      src={`svg/${countryAlpha}.svg`}
      alt="flag"
      data-toggle="modal"
      data-target="#exampleModal"
    />
    {/* </button> */}
  </div>
);

Flag.propTypes = {
  countryAlpha: PropTypes.string.isRequired,
};

export default Flag;
