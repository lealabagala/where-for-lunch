import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoogleMap.css';

const GoogleMap = ({ latitude, longitude }) => (
  <iframe className={styles.googleMap} src={`http://maps.google.com/maps?q=${latitude},${longitude}&output=embed`} />
);

GoogleMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default GoogleMap;
