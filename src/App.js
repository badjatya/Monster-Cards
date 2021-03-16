import React, { Component } from 'react'

import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      monsters : [],
      searchField : '',
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then (response => response.json())
      .then (monster => this.setState({monsters : monster}))
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters</h1>
        <p>{
          this.state.monsters.map(monster => (
            <p>{monster.name}</p>
            ))
          }</p>
      </div>
    );
  }
}

export default App;
