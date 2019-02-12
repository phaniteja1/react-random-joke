import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Joke from "./Joke.js";

function App() {
  return (
    <div className="App">
      <Joke />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
