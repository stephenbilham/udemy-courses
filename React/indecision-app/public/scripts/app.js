"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisiblityApp = function (_React$Component) {
  _inherits(VisiblityApp, _React$Component);

  function VisiblityApp(props) {
    _classCallCheck(this, VisiblityApp);

    var _this = _possibleConstructorReturn(this, (VisiblityApp.__proto__ || Object.getPrototypeOf(VisiblityApp)).call(this, props));

    _this.toggleVisiblity = _this.toggleVisiblity.bind(_this);
    _this.state = {
      title: "Visibility Toggle",
      visiblity: false,
      details: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "here are some details"
        )
      )
    };
    return _this;
  }

  _createClass(VisiblityApp, [{
    key: "toggleVisiblity",
    value: function toggleVisiblity() {
      this.setState(function (prevState) {
        return {
          visiblity: !prevState.visiblity
        };
      });

      // this.setState({ visiblity: !this.state.visiblity }); //old way
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          title = _state.title,
          details = _state.details,
          visiblity = _state.visiblity;
      // let visiblity = false;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          title
        ),
        React.createElement(
          "button",
          { onClick: this.toggleVisiblity },
          visiblity ? "hide details" : "show details"
        ),
        visiblity && details
      );
    }
  }]);

  return VisiblityApp;
}(React.Component);

ReactDOM.render(React.createElement(VisiblityApp, null), document.getElementById("app"));

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
