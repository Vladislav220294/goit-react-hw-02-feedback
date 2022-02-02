import PropTypes from 'prop-types';

const FeedbackOption = ({goodFeedback, neutralFeedback, badFeedback, options}) => {
  return (
    <>
      
      <button onClick={() => goodFeedback(options.good)} type="button">Good</button>
      <button onClick={() => neutralFeedback(options.neutral)} type="button">Neutral</button>
      <button onClick={() => badFeedback(options.bad)} type="button">Bad</button>
    </>
  );
};
FeedbackOption.propTypes = {
  goodFeedback: PropTypes.func.isRequired,
  neutralFeedback: PropTypes.func.isRequired,
  badFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired
}
export default FeedbackOption;