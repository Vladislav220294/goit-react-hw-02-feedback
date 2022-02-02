import { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './components/Section/Section.jsx';
import FeedbackOption from './components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  inceaseGood = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));
  inceaseNeutral = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  inceaseBad = () => this.setState(prevState => ({ bad: prevState.bad + 1 }));
  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, item) => (total += item),
      0,
    );
  };
  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={this.state}
            goodFeedback={this.inceaseGood}
            badFeedback={this.inceaseBad}
            neutralFeedback={this.inceaseNeutral}
          />

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
