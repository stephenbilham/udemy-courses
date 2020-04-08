class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
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
    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    // let { options } = this.state;
    const title = "Indecison App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    let { title, subtitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    let { handlePick, hasOptions } = this.props;
    return (
      <div>
        <button onClick={handlePick} disabled={!hasOptions}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    let { options, handleDeleteOptions } = this.props;
    return (
      <div>
        <button onClick={handleDeleteOptions}>Remove All</button>
        {options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    let { optionText } = this.props;
    return <div>{optionText}</div>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.props.handleAddOption(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <label>
            <input type="text" name="option" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
