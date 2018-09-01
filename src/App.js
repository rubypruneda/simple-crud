import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        wkr: '',
        pls: [],
        info: [],
        test: 'can you display this?',
        obj: {name: 'ruby', age: '2000', color: 'skyblue'},
        arr: ['hello', 'world', 4 ]

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
    console.log('heres re', this.state);    
    })
    // return info;
    // console.log('im being clicked');
    this.setState({info})
  }
  stater() {
    this.setState({info: this.getInfo()})
  }
  test() {
    return 'display this!'
  }
  componentDidMount() {
    console.log(this.state);
    // this.state.obj();
  }
  // componentDidMount() {
  //   this.getInfo()
  // }
  
  render() {
    console.log('pls',this.state.pls);        
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <h1>a   {this.state.arr.map((m) =>  m + ' ')}   a</h1>
        <p className="App-intro">
          Welcome to simple crud
        </p>
          <button onClick={() => this.getInfo()}>get some info</button>
          <button onClick={() => this.state.obj}>{this.test()}</button>
          {/* {this.getInfo()} */}
      </div>
    );
  }
}

export default App;
