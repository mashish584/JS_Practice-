import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0
  };

  updateCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onClick={this.updateCounter} data-testid="counter-button">
          {counter}
        </button>
      </div>
    );
  }
}
