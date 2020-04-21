import React from "react";

const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);
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

export default Action;
