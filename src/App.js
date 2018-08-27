import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        wkr: '',
        pls: [],
        info: []
      }
    this.getInfo = this.getInfo.bind(this)
  }
  
  getInfo() {

    
    let info = axios.get('/info').then(res => {
      console.log(res.data);
      return res.data
    }).then((re) => {
      this.setState({pls: re}) ;
    // return re;
    console.log('here@#39s re', this.state);    
    })
    // return info;
    console.log('im being clicked');
    this.setState({info})
  }
  stater() {
    this.setState({info: this.getInfo()})
  }
  // componentDidMount() {
  //   this.getInfo()
  // }
  
  render() {
    console.log(this.state.info);        
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          Welcome to simple crud
          <button onClick={() => this.getInfo()}>get some info</button>
          {/* {this.getInfo()} */}
        </p>
      </div>
    );
  }
}

export default App;
