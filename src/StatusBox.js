import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCheckCircle, faTimesCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

const icons = {
  box: faBox,
  'check-circle': faCheckCircle,
  'times-circle': faTimesCircle,
  spinner: faSpinner
};

function StatusBox({ title, count, color, icon }) {
  return (
    <div className="status-box" style={{ backgroundColor: color }}>
      <FontAwesomeIcon icon={icons[icon]} />
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
}

export default StatusBox;
