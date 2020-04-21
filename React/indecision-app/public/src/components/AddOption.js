import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (!error) {
      e.target.elements.option.value = "";
    }

    //intial state is no error (undefined) then error is set to error in event handler in Indecision app.
    this.setState(() => ({ error: error }));
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__form" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
