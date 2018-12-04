import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import { showContentMenus } from './routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {showContentMenus()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
