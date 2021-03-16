import React, { Component } from 'react'

import CardList from './components/card-list/card-list.component'

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
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
