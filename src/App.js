import React, { Component } from 'react';
import "tachyons";
import './App.css';
import Questionbox from "./Questionbox";
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="tc">Avengers</h1>
      <Questionbox/>
      </div>
    );
  }
}

export default App;
