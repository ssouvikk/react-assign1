import React, { Component } from "react";
import styles from "./Buttons.module.css";

export default class Buttons extends Component {
  render() {
    return (
      <button className={`${styles.btn}  ${this.props.xtraClass}`}>
        {this.props.label}
      </button>
    );
  }
}
