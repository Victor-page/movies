import PropTypes from 'prop-types';
import classes from './GoBackButton.module.css';

const GoBackButton = ({ onGoBack }) => (
  <button className={classes.button} type="button" onClick={onGoBack}>
    Back
  </button>
);

GoBackButton.propTypes = { onGoBack: PropTypes.func.isRequired };

export default GoBackButton;
