import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

class App extends Component {
  render() {
    return (
      <>
        <Route path="/:category?" component={NewsPage} />
      </>
    );
  }
}

export default App;