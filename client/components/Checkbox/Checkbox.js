import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ checked, value, label, onChange }) => (
  <div className={styles.root}>
    <input value={value} type="checkbox" checked={checked} onChange={onChange}></input>
    <span className="checkbox-label">{label}</span>&nbsp;&nbsp;
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};


export default Checkbox;
