import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState({ options: options });
      }
    } catch (error) {
      // do nothing at all
    }
  } //lifeCycle

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  } //lifeCycle

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));

    // this.setState({ options: [] }); // old way
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const randomPick = this.state.options[randomNum];
    alert(randomPick);
  }

  handleAddOption(option) {
    if (!option) {
      return "Empty value please enter something";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  render() {
    // let { options } = this.state;
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;
