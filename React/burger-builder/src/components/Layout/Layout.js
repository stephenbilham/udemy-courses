import React from "react";

import styles from "./Layout.module.css";

import Aux from "../../hoc/Aux";

const Layout = props => (
  <Aux>
    <div>Toolbar, sidedrawer, backdrop</div>
    <main className={styles.content}>{props.children}</main>
  </Aux>
);

export default Layout;
