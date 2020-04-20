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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <label>
            <input className="submitForm" type="text" name="option" />
          </label>
          <input className="button" type="submit" value="Add Option" />
        </form>
      </div>
    );
  }
}

export default AddOption;
