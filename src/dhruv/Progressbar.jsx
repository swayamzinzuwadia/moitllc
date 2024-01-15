import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './progressbar.css'; // Make sure to import your CSS file

function WithLabelExample() {
  const now = 60;

  return (
    <div className="progress-bar-container">
      <ProgressBar now={now} />
      <div className="label-container">{`${now}%`}</div>
    </div>
  );
}

export default WithLabelExample;
