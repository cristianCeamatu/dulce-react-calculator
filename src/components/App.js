import React from "react";
import Display from "./Display";
import ButtonPannel from "./ButtonPanel";
import calculate from "../logic/calculate";

export default class App extends React.Component {
  state = { total: "0", next: "0", operation: "", displayed: false };

  handleClick(buttonName) {
    this.setState(calculate(this.state, buttonName));
  }
  render() {
    return (
      <div id="main">
        <Display result={this.state.next} />
        <ButtonPannel
          clickHandler={buttonName => this.handleClick(buttonName)}
        />
      </div>
    );
  }
}
