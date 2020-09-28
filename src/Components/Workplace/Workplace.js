import React, { Component } from "react";
import styles from "./Workplace.module.css";
import Buttons from "./../Buttons/Buttons";
import DownArrow from "./../../Assets/Image 2.png";
import UpArrow from "./../../Assets/arrow-up.png";

export default class Workplace extends Component {
  render() {
    return (
      <div className={styles.WorkPlace}>
        <h1 className={styles.mainHeading}>
          Stunning Workplace <span className={styles.blueSqr}></span>{" "}
        </h1>
        <p className={styles.description}>
          With stunning remote teams can organise projects, manage shifting
          priorities, and get work done.
        </p>
        <Buttons label="New account" xtraClass={styles.xtra} />
        <img src={UpArrow} alt="" className={styles.UpArrow} />
        <img src={DownArrow} alt="" className={styles.DownArrow} />
      </div>
    );
  }
}
