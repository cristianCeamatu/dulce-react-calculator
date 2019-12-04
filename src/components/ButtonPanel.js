import React from "react";
import Button from "./Button";
export default class ButtonPanel extends React.Component {
  render() {
    const light = "#b8bfc2";
    return (
      <div id="panel">
        <div class="group">
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="/" />
        </div>
        <div class="group">
          <Button name="7" color={light} />
          <Button name="8" color={light} />
          <Button name="9" color={light} />
          <Button name="X" />
        </div>
        <div class="group">
          <Button name="4" color={light} />
          <Button name="5" color={light} />
          <Button name="6" color={light} />
          <Button name="-" />
        </div>
        <div class="group">
          <Button name="1" color={light} />
          <Button name="2" color={light} />
          <Button name="3" color={light} />
          <Button name="+" />
        </div>
        <div class="group">
          <Button name="0" wide="true" color={light} />
          <Button name="." color={light} />
          <Button name="=" />
        </div>
      </div>
    );
  }
}
