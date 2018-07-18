import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Erdem', age: 25 },
        { id: '2', name: 'Engin', age: 24 },
        { id: '3', name: 'Erdem', age: 25 }
      ],
      showPersons: false
    }
  }
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
}
componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps);
}
componentWillUpdate(nextProps, nextState) {
    
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
}
componentDidUpdate() {
    
    console.log('[UPDATE App.js] Inside componentDidUpdate');
}
  // state = {
  //   persons: [
  //     { id: '1', name: 'Erdem', age: 25 },
  //     { id: '2', name: 'Engin', age: 24 },
  //     { id: '3', name: 'Erdem', age: 25 }
  //   ],
  //   showPersons: true
  // }

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] Inside render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );


    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
