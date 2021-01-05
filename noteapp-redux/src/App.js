import React, { Component } from "react";
import './App.css';
import "antd/dist/antd.css";

import NoteLayoutContainer from "./containers/noteLayoutContainer";

class App extends Component {
  render() {
    return (
      <div>
        <NoteLayoutContainer />
      </div>
    );
  }
}

export default App;
