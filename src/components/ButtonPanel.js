import React from "react";
import Button from "./Button";
export default function ButtonPanel(props) {
  const light = "#b8bfc2";
  const { clickHandler } = props;
  return (
    <div id="panel">
      <div class="group">
        <Button name="AC" clickHandler={clickHandler} />
        <Button name="+/-" clickHandler={clickHandler} />
        <Button name="%" clickHandler={clickHandler} />
        <Button name="/" clickHandler={clickHandler} />
      </div>
      <div class="group">
        <Button name="7" color={light} clickHandler={clickHandler} />
        <Button name="8" color={light} clickHandler={clickHandler} />
        <Button name="9" color={light} clickHandler={clickHandler} />
        <Button name="X" clickHandler={clickHandler} />
      </div>
      <div class="group">
        <Button name="4" color={light} clickHandler={clickHandler} />
        <Button name="5" color={light} clickHandler={clickHandler} />
        <Button name="6" color={light} clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div class="group">
        <Button name="1" color={light} clickHandler={clickHandler} />
        <Button name="2" color={light} clickHandler={clickHandler} />
        <Button name="3" color={light} clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div class="group">
        <Button
          name="0"
          wide="true"
          color={light}
          clickHandler={clickHandler}
        />
        <Button name="." color={light} clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}
