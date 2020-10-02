import React, { Component } from 'react';
import './App.css';

import Layout from './components/layout'

const styles = {
  appHeader: {
    fontWeight: '400'
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={styles.appHeader}>PayPal</h1>
        <hr />
        <Layout/>
      </div>
    );
  }
}

export default App;
