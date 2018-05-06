import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  // define Model for persons
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // Arrow Function
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  // Update function
  nameChangedHandler = ( event, id ) => {
    
    // find Index from id >> sended by args
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Get Person by Id from Index
    const person = {
      ...this.state.persons[personIndex]
    };

    // Set Value need to change from "event" >>> 
    person.name = event.target.value; // value from input box

    // Get List of Persons before set by Index
    const persons = [...this.state.persons];
    persons[personIndex] = person; // set updated Person into Persons list by using IndexPerson 

    // Set All state to be refresh
    this.setState( {persons: persons} );
  }

  // Delete 
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  // Render by React
  // JXS >>> HTML for React Render
  render () {
    // custom Style

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // create map into each person
            return <Person
              click={() => this.deletePersonHandler(index)}  // call delete person
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />  // call update person using Person Id 
          })}
        </div>
      );
    }

    // Return and apply on file index.js 
    // Call {Persons} to get tags from render() 
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}  
      </div>
    );
    
  }


}

export default App;
