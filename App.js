import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css'; // Import your CSS file for styling

function App() {
  const [score, setScore] = useState(0);

  const handleQuizSubmit = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      alert('Correct Answer!');
    } else {
      alert('Wrong Answer!');
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
        
        </nav>

        <div className="content-container">
          <Routes>
            <Route
              path="/quiz"
              element={<Quiz onSubmit={handleQuizSubmit} />}
            />
            <Route
              path="/result"
              element={<Result score={score} />}
            />
            <Route path="/" element={<Navigate to="/quiz" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
