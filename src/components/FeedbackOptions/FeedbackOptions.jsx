import { Component } from "react";
import { nanoid } from 'nanoid'
import css from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={css.buttonList}>
        {options.map(option => (
          <li key={nanoid()}>
            <button onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;
