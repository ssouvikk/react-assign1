import React, { Component } from "react";
import ServiceData from "./ServiceData/ServiceData";
import styles from "./Services.module.css";
import avatar1 from "./../../Assets/user-red.png";
import avatar3 from "./../../Assets/user-orange.png";
import avatar2 from "./../../Assets/user-blue.png";
import avatar4 from "./../../Assets/user-pink.png";

export default class Services extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "Dmm Design",
        avatar: avatar1,
        date: "20 Dec",
        btnColor: "red",
      },
      {
        id: 2,
        title: "Blur Animation",
        avatar: avatar2,
        date: "22 Dec",
        btnColor: "blue",
      },
      {
        id: 3,
        title: "Illustration",
        avatar: avatar3,
        date: "26 Dec",
        btnColor: "green",
      },
      {
        id: 4,
        title: "Refunds",
        avatar: avatar4,
        date: "28 Dec",
        btnColor: "pink",
      },
    ],
  };

  render() {
    return (
      <div className={styles.Container}>
        {this.state.data.map((item) => (
          <ServiceData key={item.id} data={item} />
        ))}
      </div>
    );
  }
}
