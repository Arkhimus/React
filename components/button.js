import React from "react";

const Button = ({ event, title }) => (
  <button onClick={event}>{title}</button>
);

export default Button;
