// src/components/Quiz.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const questions = [
  {
    question: 'Which is the only mammal that can’t jump?',
    options: ['Dog', 'Elephant', 'Goat', 'Lion'],
    correctAnswer: 'Elephant',
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },{
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
]

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  const totalQuestions = questions.length;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setSelectedOption('');
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleQuit = () => {
    setQuizCompleted(true);
    navigate('/');
  };

  return (
    <div className="Quiz">
      <h1>Quiz Quiz</h1>
      {quizCompleted ? (
        <div>
          {/* Quiz completed content */}
        </div>
      ) : (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={!selectedOption}>
              Next
            </button>
            <button onClick={handleQuit}>Quit</button>
            {currentQuestion === totalQuestions - 1 && (
              <button onClick={() => navigate('/result', { state: { score } })}>
                Finish
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
