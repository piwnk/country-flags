import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';

import { filterCountries } from '../../actions';

const Wrapper = ({ handleOnChange }) => (
  <div className="search">
    <input
      type="text"
      placeholder="Type country's name"
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
    />
  </div>
);

Wrapper.propTypes = ({
  handleOnChange: PropTypes.func.isRequired,
});

const mapDispatchToProps = ({
  handleOnChange: filterCountries,
});

export default connect(null, mapDispatchToProps)(Wrapper);
