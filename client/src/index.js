import React from "react";
import ReactDOM from "react-dom";

import Step01 from "./step01/step01";
import Step03 from "./step03/step03";
import Step04 from "./step04/step04";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Exercicio 1 - Componentização</h1>
      <Step01 />
      <h1>Exercício 3 - UseState Hooks</h1>
      <Step03 />
      <h1>Exercício 4 - UseEffect Hooks</h1>
      <Step04 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
