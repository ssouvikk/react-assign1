import React, { Component } from "react";
import styles from "./Headers.module.css";
import logo from "./../../Assets/stunning-logo.png";
import Links from "./Links/Links";
import Buttons from "../Buttons/Buttons";
import MenuBar from "./MenuBar/MenuBar";

export default class Headers extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <img className={styles.logo} src={logo} />
        <div className={styles.linksWrapper}>
          <Links label="Home" />
          <Links label="About" />
          <Links label="Blog" />
          <Links label="Jobs" />
        </div>
        <Buttons label="Your account" xtraClass={styles.xtra} />
        <MenuBar />
      </nav>
    );
  }
}
