import React, { Component } from 'react';
import Main from '../Main';
import Header from '../Header'
import 'whatwg-fetch';


class App extends Component {

  render() {
    return (
      <div>
        <Header title='TV Series List' />
        <Main />
      </div>
    );
  }
}
export default App;
