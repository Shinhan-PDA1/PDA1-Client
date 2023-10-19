import React, { useState, useEffect } from 'react';
import Question from '../../components/filter/Question/Question';
import Question2 from '../../components/filter/Question2/Question2';
import Question3 from '../../components/filter/Question3/Question3';
import Question4 from '../../components/filter/Question4/Question4';
import Question5 from '../../components/filter/Question5/Question5';
import axios from 'axios';
import { redirect, redirectDocument } from 'react-router-dom';

const FilterPage = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
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
    setCurrentQuestion(currentQuestion + 1);
  };
  
  // useEffect에서 currentQuestion이 6일 때 로그를 출력
  useEffect(() => {
    if (localStorage.getItem("isSurvey")==="true") {
      console.log("localGet: ", localStorage.getItem("isSurvey"))
      alert("설문조사를 이미 마치셨습니다!");
      //window.location.href = "http://localhost:3000/main";
      window.location.replace("http://localhost:3000/main");
      //window.location.href = "/main";
      //eredirectDocument("/main");
    }

    console.log("answers: ", answers);
    console.log("answers.length: ", answers.length);
    if (Object.keys(answers).length === 5) { // 모든 질문이 완료되면
      console.log("POST FIlTERIG RESULT...");
      
      const body = {
        "age": answers.age,
        "interestTopic": answers.theme,
        "investExperience": answers.experience,
        "investPeriod": answers.term,
        "revenueTrend": answers.income
      }

      console.log("body: ", body);
      const apiUrl = 'http://jootopia-mainserver-service.team-1.svc.cluster.local/jootopia/v1/users/system/filter';
      axios.post(apiUrl, body)
      .then((response) =>{
        console.log("Filter Response: ", response);
        console.log("Filtering 결과 저장 완료!")
        localStorage.setItem("isSurvey", "true");
      })
      .catch((error) => {
        console.error('Filetering 결과 저장 실패!', error);
      });

    }
  }, [answers, currentQuestion]);

  return (
    <div>
      {currentQuestion === 0 && <Question onNextQuestion={(answer) => handleNextQuestion('experience', answer)} onAnswer={handleAnswer} />}
      {currentQuestion === 1 && <Question2 onNextQuestion={(answer) => handleNextQuestion('theme', answer)} onAnswer={handleAnswer} />}
      {currentQuestion === 2 && <Question3 onNextQuestion={(answer) => handleNextQuestion('term', answer)} onAnswer={handleAnswer} />}
      {currentQuestion === 3 && <Question4 onNextQuestion={(answer) => handleNextQuestion('income', answer)} onAnswer={handleAnswer} />}
      {currentQuestion === 4 && <Question5 onNextQuestion={(answer) => handleNextQuestion('age', answer)} onAnswer={handleAnswer} />}

    </div>
  );
};

export default FilterPage;
