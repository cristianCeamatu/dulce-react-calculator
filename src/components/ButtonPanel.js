import React from "react";
import Button from "./Button";

const light = "#d7d7d7";

const ButtonPanel = props => {
  const { clickHandler } = props;
  return (
    <div id="button-panel">
      <div className="group">
        <Button name="AC" color={light} clickHandler={clickHandler} />
        <Button name="+/-" color={light} clickHandler={clickHandler} />
        <Button name="%" color={light} clickHandler={clickHandler} />
        <Button name="/" clickHandler={clickHandler} />
      </div>
      <div className="group">
        <Button name="7" color={light} clickHandler={clickHandler} />
        <Button name="8" color={light} clickHandler={clickHandler} />
        <Button name="9" color={light} clickHandler={clickHandler} />
        <Button name="x" clickHandler={clickHandler} />
      </div>
      <div className="group">
        <Button name="4" color={light} clickHandler={clickHandler} />
        <Button name="5" color={light} clickHandler={clickHandler} />
        <Button name="6" color={light} clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div className="group">
        <Button name="1" color={light} clickHandler={clickHandler} />
        <Button name="2" color={light} clickHandler={clickHandler} />
        <Button name="3" color={light} clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div className="group">
        <Button name="0" color={light} wide clickHandler={clickHandler} />
        <Button name="." color={light} clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default ButtonPanel;
