import React, { Component } from "react";

import styles from "./Person.module.css";
import withClass from "../../hoc/withClass";
import Aux from "../../hoc/Aux";

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.deletePersonHandler}>
          I am a {this.props.name} and i am {this.props.age} old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.nameChangeHandler}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, styles.Person);
