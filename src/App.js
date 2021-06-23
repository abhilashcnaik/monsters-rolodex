import './App.css';

import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchMonster: '',
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchMonster: e.target.value});
  }

  render() {
    const {monsters, searchMonster } = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox placeholder='Search Monster' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
