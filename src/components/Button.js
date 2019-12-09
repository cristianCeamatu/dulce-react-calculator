import React from "react";
import PropTypes from "prop-types";
export default function Button({ name, color, wide, clickHandler }) {
  const styles = {
    backgroundColor: color,
    width: wide ? "50%" : "25%",
    height: 100,
    fontSize: "2.5em",
    border: "1px solid white"
  };
  return (
    <button style={styles} onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
}
Button.defaultProps = { color: "rgb(255, 196, 32)", wide: false };

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool
};
