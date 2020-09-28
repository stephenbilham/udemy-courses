import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Person.module.css";
import withClass from "../../hoc/withClass";
import Aux from "../../hoc/Aux";

import AuthContext from "../../Context/auth-context";

class Person extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    this.inputElement.focus();
    console.log(this.context.authenticated);
  }

  render() {
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>authenticated!</p>
        ) : (
          <p>please login</p>
        )}
        <p onClick={this.props.deletePersonHandler}>
          I am a {this.props.name} and i am {this.props.age} old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.nameChangeHandler}
          ref={inputEl => {
            this.inputElement = inputEl;
          }}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

//dont forget to return not only a jsx epression with consumer but a function that returns jsx

Person.propTypes = {
  deletePersonHandler: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  nameChangeHandler: PropTypes.func
};

export default withClass(Person, styles.Person);
