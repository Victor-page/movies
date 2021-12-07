import PropTypes from 'prop-types';
import classes from './PageHeading.module.css';

const PageHeading = ({ text }) => <h1 className={classes.title}>{text}</h1>;

PageHeading.propTypes = { text: PropTypes.string.isRequired };

export default PageHeading;
