class VisiblityApp extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisiblity = this.toggleVisiblity.bind(this);
    this.state = {
      title: "Visibility Toggle",
      visiblity: false,
      details: (
        <div>
          <p>here are some details</p>
        </div>
      )
    };
  }

  toggleVisiblity() {
    this.setState(prevState => {
      return {
        visiblity: !prevState.visiblity
      };
    });

    // this.setState({ visiblity: !this.state.visiblity }); //old way
  }

  render() {
    let { title, details, visiblity } = this.state;
    // let visiblity = false;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.toggleVisiblity}>
          {visiblity ? "hide details" : "show details"}
        </button>
        {visiblity && details}
      </div>
    );
  }
}

ReactDOM.render(<VisiblityApp />, document.getElementById("app"));

// <h1>Visible Toggle</h1>;

// const app = {
//   title: "Visible Toggle",
//   details: "here are the details"
// };

// let visiblity = false;

// const toggleVisiblity = () => {
//   visiblity = !visiblity;
//   render();
// };

// const appRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisiblity}>
//         {visiblity ? "hide details" : "show details"}
//       </button>
//       {visiblity && (
//         <div>
//           <p>Here are some details you can now see</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
