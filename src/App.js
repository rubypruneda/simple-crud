import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          Welcome to simple crud
          <button onClick={() => this.getInfo}>get some info</button>
        </p>
      </div>
    );
  }
}

export default App;
