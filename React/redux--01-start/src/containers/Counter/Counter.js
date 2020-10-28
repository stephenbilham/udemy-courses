import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onLargeIncrementCounter}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onLargeDecrementCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.count < 0) {
    return {
      count: 0
    };
  }

  console.log(state.count);
  return {
    ctr: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onLargeIncrementCounter: () =>
      dispatch({ type: "LARGE_INCREMENT", value: 5 }),
    onLargeDecrementCounter: () =>
      dispatch({ type: "LARGE_DECREMENT", value: 5 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
