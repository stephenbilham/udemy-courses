import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3>Edit Expense</h3>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button
          onClick={this.onRemove}
          style={{ margin: "15px", border: "1px solid grey" }}
        >
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (expense, id) => dispatch(editExpense(expense, id)),
  removeExpense: data => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
