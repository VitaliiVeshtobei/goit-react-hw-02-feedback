import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends React.Component {
  static defaultProps = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = name => {
    console.log(name);
    this.setState(prevState => {
      return { [name]: prevState + 1 };
    });
  };
  // handleClickGood = () => {
  //   this.setState(prevState => {
  //     return { good: prevState.good + 1 };
  //   });
  // };
  // handleClickNeutral = () => {
  //   this.setState(prevState => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };
  // handleClickBad = () => {
  //   this.setState(prevState => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };
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
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
