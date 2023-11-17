import { Component } from "react";
import css from "./Notification.module.css";

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.notification}>{message}</p>;
  }
}

export default Notification;
