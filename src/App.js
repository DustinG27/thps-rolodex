import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list'

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      skaters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => this.setState(() => {
      return {skaters: users}
    },
    () => {
      console.log(this.state);
    }));
  };

  // making a method onsearch no longer rendering autonomous functions in the render
  onSearchChange= (event) => {
    console.log(event.target.value);
  const searchField = event.target.value.toLowerCase();

  this.setState(() => {
    return{ searchField };
  })
  };



  render() {
    // optimizing for easier to read code
    const { skaters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredSkaters = skaters.filter((skater) => {
      return skater.name.toLowerCase().includes(searchField);
     });

    return <div className='App'>
      <input 
      className='search-box' 
      type='search' 
      placeholder= 'search skaters' 
      onChange={onSearchChange}></input>
      {
        /* filteredSkaters.map((skater)=>{
          return (
            <div key={skater.id}>
              <h1>{skater.name}</h1>
            </div>
          )
        }) */
      }
      <CardList />
      </div>;
  }
}

export default App;
