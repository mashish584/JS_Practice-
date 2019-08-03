import React, { Component } from "react";
import UserContext from "UserContext";

export default class UserInfo extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => {
          return (
            <>
              <h1>User Info</h1>
              <p>id : {context.id}</p>
              <p>username : {context.username}</p>
            </>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
