import React, { Component } from "react";

import styles from "./Layout.module.css";

import Toolbar from "../Navigaton/Toolbar/Toolbar";
import SideDrawer from "../Navigaton/SideDrawer/SideDrawer";
import Aux from "../../hoc/Aux";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          sideDrawerClosedHandler={this.sideDrawerClosedHandler}
        />
        <main className={styles.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
