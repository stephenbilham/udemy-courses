class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }

  handleAddOne() {
    //newest setState syntax
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  // this.setState({ count: this.state.count + 1 });  //old way but the way I like

  handleMinusOne() {
    if (this.state.count > 0) {
      this.setState(prevState => {
        return {
          count: prevState.count - 1
        };
      });
    }
  }
  // this.setState({ count: this.state.count - 1 }); // old

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  // this.setState({ count: 0 }); // old

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count} </h1>
        <button onClick={this.handleAddOne}>add</button>
        <button onClick={this.handleMinusOne}>minus</button>
        <button onClick={this.handleReset}>remove all</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const addOne = () => {
//   console.log("i was clicked");
//   count++;
//   renderCountApp(); // new way -- This doesn't rerender the entire page due to react dom algorithms
//   // document.querySelector(".change-me").textContent = `Count: ${count}`; // my way
// };

// const removeOne = () => {
//   if (count > 0) {
//     count--;
//     renderCountApp();
//     // document.querySelector(".change-me").textContent = `Count: ${count}`
//   }
// };

// const resetToZero = () => {
//   count = 0;
//   renderCountApp();
//   // document.querySelector(".change-me").textContent = `Count: ${count}`
// };

// const appRoot = document.getElementById("app");

// const renderCountApp = () => {
//   const templateTwo = (
//     <div>
//       <h1 className="change-me">Count: {count}</h1>
//       <button onClick={addOne}> add</button>
//       <button onClick={removeOne}> remove</button>
//       <button onClick={resetToZero}> Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCountApp();
