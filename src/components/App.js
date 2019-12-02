import React from "react";
import Display from "./Display";
import ButtonPannel from "./ButtonPanel";

export default class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Display />
        <ButtonPannel />
      </div>
    );
  }
}
