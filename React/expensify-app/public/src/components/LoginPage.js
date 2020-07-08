import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="text">Expensify</h1>
      <p>
        It's time to get your expenses{" "}
        <span className="title__span">under control.</span>
      </p>
      <button className="btn" onClick={startLogin}>
        <span>Login with Google</span>
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
