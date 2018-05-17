import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Country from '../Country';

const Wrapper = ({ countries }) => (
  <div className="countries">
    {countries.map(country => (
      <Country
        key={country.countryCode}
        country={country}
      />
    ))}
  </div>
);

Wrapper.propTypes = ({
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    countryCode: PropTypes.string,
    alpha2: PropTypes.string,
    region: PropTypes.string,
    subRegion: PropTypes.string,
  })).isRequired,
});

const mapStateToProps = state => ({
  countries: state.defaultReducer.visibleCountries,
});

export default connect(mapStateToProps)(Wrapper);

