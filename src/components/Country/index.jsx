import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Flag from '../Flag';

import './style.css';

const Wrapper = ({ country }) => (
  <div className="country">
    <Flag
      countryAlpha={country.alpha2}
    />
    <h2>{country.name}</h2>
  </div>
);

Wrapper.propTypes = ({
  country: PropTypes.shape({
    name: PropTypes.string,
    countryCode: PropTypes.string,
    alpha2: PropTypes.string,
    region: PropTypes.string,
    subRegion: PropTypes.string,
  }).isRequired,
});

const mapStateToProps = state => ({
  countries: state.defaultReducer.countries,
});

export default connect(mapStateToProps)(Wrapper);
