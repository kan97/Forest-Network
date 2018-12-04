import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import {getMainScreenExample} from './helper/helper';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {getMainScreenExample()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
