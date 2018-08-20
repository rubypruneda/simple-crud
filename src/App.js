import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  getInfo() {

    
    let info = axios.get('/info').then(res => {
      console.log(res.data);
      return res.data
    })
    // return info;
    console.log('im being clicked');
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          Welcome to simple crud
          <button onClick={() => this.getInfo()}>get some info</button>
        </p>
      </div>
    );
  }
}

export default App;
