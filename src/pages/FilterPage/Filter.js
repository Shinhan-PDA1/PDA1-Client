import React, { useState, useEffect } from 'react';
import Question from '../../components/filter/Question/Question';
import Question2 from '../../components/filter/Question2/Question2';
import Question3 from '../../components/filter/Question3/Question3';
import Question4 from '../../components/filter/Question4/Question4';
import Question5 from '../../components/filter/Question5/Question5';

const FilterPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = (questionId, answer) => {
    const updatedAnswers = { ...answers, [questionId]: answer }; // 수정된 답변
    setAnswers(updatedAnswers);
    
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(6);
      console.log('Collected Answers:', updatedAnswers); // 수정된 답변 로깅
    }
  };
  
  // useEffect에서 currentQuestion이 6일 때 로그를 출력
  useEffect(() => {
    if (currentQuestion === 6) { // 모든 질문이 완료되면
      console.log('Collected Answers:', answers);
    }
  }, [answers, currentQuestion]);
  return (
    <div>
      {currentQuestion === 1 && <Question onNextQuestion={(answer) => handleNextQuestion('Q1', answer)} onAnswer={handleAnswer} />}
      {currentQuestion === 2 && <Question2 onNextQuestion={(answer) => handleNextQuestion('Q2', answer)} onAnswer={handleAnswer} />}
      {currentQuestion === 3 && <Question3 onNextQuestion={(answer) => handleNextQuestion('Q3', answer)} onAnswer={handleAnswer} />}
      {currentQuestion === 4 && <Question4 onNextQuestion={(answer) => handleNextQuestion('Q4', answer)} onAnswer={handleAnswer} />}
      {currentQuestion === 5 && <Question5 onNextQuestion={(answer) => handleNextQuestion('Q5', answer)} onAnswer={handleAnswer} />}

    </div>
  );
};

export default FilterPage;
