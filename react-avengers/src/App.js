import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: ['Iron Man', 'Thor', 'Ant-Man', 'Wasp', 'Hulk', 'Captain America', 'Hawkeye', 'Quicksilver', 'Scarlet Witch', 'Swordsman', 'Hercules', 'Black Panther', 'Vision', 'Black Knight']
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{`Avengers: by <your-name>`}</h1>
        </header>
        <div>
          <ul>
            {this.state.avengers.map( (avenger) => <li key={Math.random() * 10000000000000000}>{avenger}</li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
