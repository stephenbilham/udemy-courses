import React, { Component } from "react";

import styles from "./Layout.module.css";

import Toolbar from "../Navigaton/Toolbar/Toolbar";
import SideDrawer from "../Navigaton/SideDrawer/SideDrawer";
import Aux from "../../hoc/Aux";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleSideBar={this.toggleSideBar} />
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
