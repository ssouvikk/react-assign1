import React, { Component } from "react";
import styles from "./MenuBar.module.css";
import menuBar from "./../../../Assets/hamburger-icon.png";

export default class MenuBar extends Component {
  render() {
    return <img alt="" src={menuBar} className={styles.menuBar} />;
  }
}
