import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      skaters: []
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

  render() {

    const filteredSkaters = this.state.skaters.filter((skater) => {
      return skater.name.toLowerCase().includes(this.state.searchField);
     });

    return <div className='App'>
      <input 
      className='search-box' 
      type='search' 
      placeholder= 'search skaters' 
      onChange={(event) => {
        console.log(event.target.value);
        const searchField = event.target.value.toLowerCase();

        this.setState(() => {
          return{ searchField };
        })
      }}></input>
      {
        filteredSkaters.map((skater)=>{
          return (
            <div key={skater.id}>
              <h1>{skater.name}</h1>
            </div>
          )
        })
      }
      </div>;
  }
}

export default App;
