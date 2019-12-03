import React from "react";
import PropTypes from "prop-types";
export default function Button({ name }) {
  return <button>{name}</button>;
}
Button.propTypes = { result: PropTypes.string.isRequired };
