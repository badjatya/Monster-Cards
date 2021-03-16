import React, { Component } from 'react'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      monsters : [],
      searchField : 'Search...',
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then (response => response.json())
      .then (monster => this.setState({monsters : monster}))
  }

  handleChange = e => {
    this.setState({searchField : e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeholder={this.state.searchField} handleChange={this.handleChange} />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
