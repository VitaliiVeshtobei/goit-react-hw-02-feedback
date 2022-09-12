import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleClickNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleClickBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const positive = (this.state.good / this.countTotalFeedback()) * 100;
    return positive ? Math.round(positive) : 0;
  }

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={this.handleClickGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleClickNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleClickBad}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>
            <span>Good: {this.state.good}</span>
          </li>
          <li>
            <span>Neutral: {this.state.neutral}</span>
          </li>
          <li>
            <span>Bad: {this.state.bad}</span>
          </li>
          <li>
            <span>Total: {this.countTotalFeedback()}</span>
          </li>
          <li>
            <span>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
