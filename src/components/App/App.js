import React, { Component } from 'react';
import { FeedbackOptions } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from './AppStyled';
import { GlobalStyle } from 'components/GlobalStyles';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return totalFeedback ? ((good * 100) / totalFeedback).toFixed(1) : 0;
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleIncrement = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
  
    let statisticsFeedback = null;
  
    if (total > 0) {
      statisticsFeedback = (
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percent={this.countPositiveFeedbackPercentage()}
        />
      );
    } else {
      statisticsFeedback = <Notification message="There is no feedback"/>;
    }
  
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
  
        <Section title={'Statistics'}>
          {statisticsFeedback}
        </Section>
        <GlobalStyle />
      </Container>
    );
  };
};
export default App;
