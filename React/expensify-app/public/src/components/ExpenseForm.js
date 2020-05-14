import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calanderFocused: false
  };

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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: amount }));
    }
  }; //regex101.com

  onDateChange = createdAt => {
    this.setState(() => ({ createdAt: createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calanderFocused: focused }));
  };

  render() {
    return (
      <div>
        <form>
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
            focused={this.state.calanderFocused}
            onFocusChange={this.onFocusChange}
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
