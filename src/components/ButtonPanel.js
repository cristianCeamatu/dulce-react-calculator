import React from "react";
import Button from "./Button";
export default function ButtonPanel(props) {
  const light = "#b8bfc2";
  return (
    <div id="panel">
      <div className="group">
        <Button
          name="AC"
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="+/-"
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="%"
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="/"
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
      </div>
      <div className="group">
        <Button
          name="7"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="8"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="9"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="X"
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
      </div>
      <div className="group">
        <Button
          name="4"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="5"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="6"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="-"
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
      </div>
      <div className="group">
        <Button
          name="1"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="2"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="3"
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="+"
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
      </div>
      <div className="group">
        <Button
          name="0"
          wide={true}
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="."
          color={light}
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
        <Button
          name="="
          clickHandler={buttonName => props.clickHandler(buttonName)}
        />
      </div>
    </div>
  );
}
