import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    const names = "hello";
    return (
      <div className="App">
        <h1>React app Awesome {names}</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
