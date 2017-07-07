import React, { Component, IndexLink, hashHistory, Link } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }



    render() {

    var user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    var element = this.formatName(user);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {element}
        </p>
      </div>

    );
  }



}

export default App;
