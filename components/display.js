import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ amount }) => <p>{amount}</p>;
Display.propTypes = { amount: PropTypes.number.isRequired };
export default Display;
