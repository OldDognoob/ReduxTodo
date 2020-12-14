import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Todos = () => {};

const TodoInput = () => {};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODOS</p>
        <Todos/>
        <TodoInput/>
      </header>
    </div>
  );
}

export default App;
