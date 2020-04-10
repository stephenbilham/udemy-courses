// stateless functional component
// <Header /> doesnt have state

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
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
        options: prevState.options.concat(option) // if breaks put brackets around arguement
      };
    });
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
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

//CONVERTED THIS TO STATELESS KEEPING IT FOR REFERERNCE ^^
// class Action extends React.Component {
//   render() {
//     let { handlePick, hasOptions } = this.props;
//     return (
//       <div>
//         <button onClick={handlePick} disabled={!hasOptions}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => (
        <Option key={option} optionText={option} />
      ))}
    </div>
  );
};

const Option = props => {
  return <div>{props.optionText}</div>;
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option); //intial state is no error (undefined) then error is set to error in event handler in Indecision app.
    this.setState(() => {
      return {
        error: error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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

// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
