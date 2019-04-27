import React, { Component } from 'react';
import IronStore from './components/IronStore';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <IronStore products={data.data} />
    );
  }
}

export default App;
