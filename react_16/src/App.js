import React, { Component } from "react";
import { Toggle, Portal, Modal } from "components";
import UserInfo from "components/UserInfo";
import UserProvider from "components/UserProvider";
import Drag from "components/Drag";
import "./App.css";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <Drag />
          <Toggle>
            {({ on, toggle }) => (
              <div>
                {on && <h2>SHOW</h2>}
                <button onClick={toggle}>Toggle</button>
                <Portal>{on && <h2>We've a portal</h2>}</Portal>
                <Modal on={on} toggle={toggle}>
                  <UserInfo />
                </Modal>
              </div>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
