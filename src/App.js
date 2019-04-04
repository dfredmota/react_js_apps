import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu  from './template/Menu'
import Routes from './main/Routes'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu/>
        <Routes></Routes>

      </div>
    );
  }
}

export default App;
