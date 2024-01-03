// import React from 'react';
// import 'react-circular-progressbar/dist/styles.css';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import './CircularProgressBar.css'; 

// const CircularProgressBar = ({ percentage }) => {
//   return (
//     <div className='circular-progress-bar-individual-div' style={{ width: '150px' }}>
//       <CircularProgressbar
//         value={percentage}
//         text={`${percentage}%`}
//         styles={buildStyles({
//           textSize: '18px',
//           pathColor: `#0EC6FF`,
//           trailColor:`#0049B1`,
//           textColor: '#0EC6FF',
//           pathTransition: 'stroke-dashoffset 0.5s ease-in-out',
//           pathTransitionDuration: 0.5
//         })}
//       />
//     </div>
//   );
// };

// export default CircularProgressBar;

import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './CircularProgressBar.css'; 

const CircularProgressBar = ({ percentage }) => {
  const pathColor = `#0EC6FF`;
  const trailColor = `#0049B1`;

  const animatedPathStyles = {
    transition: 'stroke-dashoffset 0.5s ease-in-out',
    strokeDashoffset: 100 - percentage,
  };

  return (
    <div className='circular-progress-bar-individual-div' style={{ width: '150px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: '18px',
          pathColor: pathColor,
          trailColor: trailColor,
          textColor: pathColor,
        })}
      >
        <path
          style={animatedPathStyles}
          strokeLinecap="round"
          className="CircularProgressbar-path"
          d="M42 3a39 39 0 0 1 74 0"
        />
      </CircularProgressbar>
    </div>
  );
};

export default CircularProgressBar;

