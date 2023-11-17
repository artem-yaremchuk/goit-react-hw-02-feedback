import { Component } from "react";
import css from "./Section.module.css";

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h1 className={css.title}>{title}</h1>
        {children}
      </div>
    );
  }
}

export default Section;
