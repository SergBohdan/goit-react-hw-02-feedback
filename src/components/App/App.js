import React, { Component } from 'react';
import { GlobalStyle } from '../GlobalStyles';

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
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={() => this.handleIncrement('good')}>
          good
        </button>
        <button type="button" onClick={() => this.handleIncrement('neutral')}>
          neutral
        </button>
        <button type="button" onClick={() => this.handleIncrement('bad')}>
          bad
        </button>

        <div>
          <h2>Statistics</h2>
          <p>
            Good: <span>{good}</span>
          </p>

          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>

          <p>
            Total: <span>{this.countTotalFeedback('total')}</span>
          </p>
          <p>Positive feedback: <span>{this.countPositiveFeedbackPercentage('percent')}</span></p>
        </div>

        <GlobalStyle />
      </div>
    );
  }
}
export default App;
