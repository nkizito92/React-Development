import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
