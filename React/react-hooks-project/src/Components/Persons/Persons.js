import React, { PureComponent } from "react";
import Person from "../Person/Person";

class Persons extends PureComponent
//pure component does what a shouldComponentUpdate does if checking ALL AND ANY CHANGES to it
{
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[persons.js getDerivedfrom props]");
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[persons.js] shouldUpdate");

  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.nameChangeHandler !== this.props.nameChangeHandler ||
  //     nextProps.deletePersonHandler !== this.props.deletePersonHandler
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[persons.] getsnap");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[persons] didupdate");
    console.log(snapshot);
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          age={person.age}
          key={person.id}
          deletePersonHandler={() => this.props.deletePersonHandler(index)}
          name={person.name}
          nameChangeHandler={e => this.props.nameChangeHandler(e, person.id)}
        />
      );
    });
  }
}

export default Persons;
