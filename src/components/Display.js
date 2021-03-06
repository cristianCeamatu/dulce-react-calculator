import React from "react";
import PropTypes from "prop-types";

export default function Display({ result }) {
  return <div id="display">{result}</div>;
}

Display.propTypes = { result: PropTypes.string.isRequired };
Display.defaultProps = { result: "0" };
