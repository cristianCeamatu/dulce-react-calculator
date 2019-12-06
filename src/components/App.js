import React from "react";
import Display from "./Display";
import ButtonPannel from "./ButtonPanel";
import calculate from "../logic/calculate";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  handleClick(buttonName) {
    this.setState(calculate(this.state, buttonName));
  }
  render() {
    return (
      <div id="main">
        <Display result={this.state.total} />
        <ButtonPannel clickHandler={this.handleClick} />
      </div>
    );
  }
}
