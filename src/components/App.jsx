import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
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
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />
        {(!this.state.good && !this.state.neutral && !this.state.bad) !==
          true && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}
