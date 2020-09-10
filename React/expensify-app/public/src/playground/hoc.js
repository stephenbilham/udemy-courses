// Higher Order Component (HOC) - A component (HOC) that renders another component
//Reuse Code
// Render hijacking
//Props manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p> this info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please Don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuth ? <WrappedComponent {...props} /> : <p>Please Login</p>}
    </div>
  );
};
// requireAuthentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo info="There are the details" isAdmin={true} />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo info="There are the details" isAuth={true} />,
  document.getElementById("app")
);
