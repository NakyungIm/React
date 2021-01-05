import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";

// import NoteListContainer from "./containers/ClassContainer";
import NoteLayoutContainer from "./containers/FunctionalContainer";

class App extends Component {
  render() {
    return (
      <div>
        {/* <NoteListContainer /> */}
        <NoteLayoutContainer />
      </div>
    );
  }
}

export default App;
