import React from "react";
import ReactDOM from "react-dom";
import posts from "./mocks";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Let's Learn</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
