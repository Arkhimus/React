import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ event, title }) => <button type="button" onClick={event}>{title}</button>;

Button.propTypes = { event: PropTypes.func.isRequired, title: PropTypes.string.isRequired };
export default Button;
