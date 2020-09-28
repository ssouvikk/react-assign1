import React, { Component } from "react";
import styles from "./BigImg.module.css";
import bigImg from "./../../Assets/landing-section-image.png";

export default class BigImg extends Component {
  render() {
    return <img alt="" className={styles.BigImg} src={bigImg} />;
  }
}
