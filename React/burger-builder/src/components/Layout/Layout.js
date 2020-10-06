import React from "react";

import styles from "./Layout.module.css";

import Toolbar from "../Navigaton/Toolbar/Toolbar";
import SideDrawer from "../Navigaton/SideDrawer/SideDrawer";
import Aux from "../../hoc/Aux";

const Layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={styles.content}>{props.children}</main>
  </Aux>
);

export default Layout;
