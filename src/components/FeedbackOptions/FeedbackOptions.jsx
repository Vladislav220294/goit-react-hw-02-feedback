import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOption = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  options,
}) => {
  return (
    <>
      <button
        className={s.button}
        onClick={() => goodFeedback(options.good)}
        type="button"
      >
        Good
      </button>
      <button
        className={s.button}
        onClick={() => neutralFeedback(options.neutral)}
        type="button"
      >
        Neutral
      </button>
      <button
        className={s.button}
        onClick={() => badFeedback(options.bad)}
        type="button"
      >
        Bad
      </button>
    </>
  );
};
FeedbackOption.propTypes = {
  goodFeedback: PropTypes.func.isRequired,
  neutralFeedback: PropTypes.func.isRequired,
  badFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
export default FeedbackOption;
