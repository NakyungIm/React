import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import axios from "axios"; // 추가

// import NoteListContainer from "./containers/ClassContainer";
import NoteLayoutContainer from "./containers/FunctionalContainer";

const App = () => {
  useEffect(() => { // 추가
    axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=Seoul&?units=metric&APPID=46ffea12534e8bf301ad51176ab9e517"
    )
    .then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {/* <NoteListContainer /> */}
      <NoteLayoutContainer />
    </div>
  );
}

export default App;
