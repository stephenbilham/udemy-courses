import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calanderFocus: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description: description
      };
    });
    // this.setState({ description: description });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState({ note: note }); // same as onDescriptionChange but different longer way of writing it
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: amount }));
    }
  }; //regex101.com

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt: createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calanderFocus: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // error stte equal to
      this.setState(() => ({
        error: "please provide description and amount."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            style={{ margin: "8px", background: "white", border: "1px solid" }}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            style={{ margin: "8px", background: "white", border: "1px solid" }}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calanderFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a noter for your expenses (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            style={{
              margin: "8px",
              background: "white",
              border: "1px solid black"
            }}
          />
          <button
            style={{
              border: "1px solid black",
              margin: " 8px",
              background: "white"
            }}
          >
            Add Expense
          </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
