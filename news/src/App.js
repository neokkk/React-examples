import React, { Component } from 'react';
import './App.css';
import './components/NewsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsList />
      </div>
    );
  }
}

export default App;