import React from "react";
import PropTypes from "prop-types";
export default function Button({ name, color, wide }) {
  const styles = {
    backgroundColor: color,
    width: wide ? "50%" : "25%",
    height: 100,
    fontSize: "2.5em"
  };
  return <button style={styles}>{name}</button>;
}
Button.defaultProps = { color: "#ffa420", wide: false };
Button.propTypes = {
  result: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool
};
