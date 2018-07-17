import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Erdem', age: 25 },
      { name: 'Engin', age: 24 },
      { name: 'Erdem', age: 25 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!!')
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Engin', age: 24 },
        { name: 'Erdem', age: 45 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "some long name", age: 25 },
        { name: event.target.value, age: 24 },
        { name: 'Erdem', age: 45 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React demo</h1>
        <button style={style} onClick={() => this.switchNameHandler('random name')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'name 2')} 
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    );
  }
}

export default App;
