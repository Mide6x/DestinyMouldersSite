import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => (
  <div className="progress-container">
    <div 
      className="progress-bar" 
      style={{ width: `${progress}%` }}
    >
      {progress}%
    </div>
  </div>
);

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default ProgressBar; 