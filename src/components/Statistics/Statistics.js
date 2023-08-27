import PropTypes from 'prop-types';
import { FeedbackItem, FeedbackWrapper } from './StatisticsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  percent,
}) => {
  return (
    <FeedbackWrapper>
          <p>
            Good: <FeedbackItem>{good}</FeedbackItem>
          </p>

          <p>
            Neutral: <FeedbackItem>{neutral}</FeedbackItem>
          </p>
          <p>
            Bad: <FeedbackItem>{bad}</FeedbackItem>
          </p>

          <p>
            Total: <FeedbackItem>{total}</FeedbackItem>
          </p>
          <p>Positive feedback: <FeedbackItem>{percent}%</FeedbackItem></p>
        </FeedbackWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  percent: PropTypes.func.isRequired,
};