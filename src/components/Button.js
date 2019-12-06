import React from "react";
import PropTypes from "prop-types";
export default function Button({ name, color, wide, clickHandler }) {
  const styles = {
    backgroundColor: color,
    width: wide ? "50%" : "25%",
    height: 100,
    fontSize: "2.5em"
  };
  return (
    <button style={styles} onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
}
Button.defaultProps = { color: "#ffa420", wide: false };

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool
};
