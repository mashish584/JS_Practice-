import React, { Component } from "react";
import MovieForm from "./MovieForm";

export default class NewMovie extends Component {
  onSubmit = () => console.log("SUBMIT");
  render() {
    return (
      <div>
        <h1 data-testid="content-title">New Movie</h1>
        <MovieForm submitForm={this.onSubmit} />
      </div>
    );
  }
}
