import React, { Component } from "react";
import styles from "./ServiceData.module.css";
import grayTick from "./../../../Assets/tick-gray.png";
import blueTick from "./../../../Assets/tick-blue.png";

export default class ServiceData extends Component {
  state = {
    tick: false,
  };

  useBlueTick = () => {
    this.setState({ tick: true });
  };

  useGray = () => {
    this.setState({ tick: false });
  };

  render() {
    const { title, avatar, date, btnColor } = this.props.data;
    return (
      <div
        className={styles.dataRow}
        onMouseEnter={this.useBlueTick}
        onMouseLeave={this.useGray}
      >
        <img
          className={styles.grayTick}
          src={this.state.tick ? blueTick : grayTick}
        />
        <p className={styles.Title}>{title}</p>
        <img src={avatar} className={styles.Avatar} />
        <p className={styles.Date}>{date}</p>
        <span style={{ backgroundColor: btnColor }} className={styles.btnImg} />
      </div>
    );
  }
}
