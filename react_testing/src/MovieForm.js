import React, { Component } from "react";

export default class MovieForm extends Component {
  state = {
    text: ""
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;
    return (
      <form
        data-testid="movie-form"
        onSubmit={() =>
          submitForm({
            text
          })
        }
        action=""
      >
        <label htmlFor="text">
          Text
          <input
            type="text"
            id="text"
            name="text"
            onChange={e => this.setState({ text: e.target.value })}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
