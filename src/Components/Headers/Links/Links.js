import React, { Component } from "react";
import styles from "./Links.module.css";

export default class Links extends Component {
  render() {
    return <span className={`${styles.navlink}`}>{this.props.label}</span>;
  }
}
