import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your final score is: {score}</p>
      {/* Additional result information can be displayed */}
    </div>
  );
};

export default Result;
