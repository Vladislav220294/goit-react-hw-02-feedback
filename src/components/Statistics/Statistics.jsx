import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      {(good || bad || neutral) !== 0 ? (
        <div>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{total()}</p>
          <p>Positive feedback:{positivePercentage()}%</p>
        </div>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}
export default Statistics;
