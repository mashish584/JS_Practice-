import React, { Component } from "react";
import UserContext from "UserContext";

export default class UserProvider extends Component {
  state = {
    id: "1",
    username: "Ashish Mehra"
  };

  onLogout = () => {
    this.setState({
      id: null,
      username: null
    });
  };

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}
